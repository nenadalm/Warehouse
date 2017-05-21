# Backend component

Allows frontend component to import electrical components from various providers (currently only ges)

## Run in dev mode

```shell
$ lein ring server-headless
```

## Run in dev mode with mocked providers and with getting scheme and port from request

```shell
$ MOCK_PROVIDERS=true ASSUME_SCHEME= ASSUME_PORT= lein ring server-headless
```

## Deploy

### Openshift

https://warehouse-backend-warehouse-backend.1d35.starter-us-east-1.openshiftapps.com

```shell
$ oc login <url>
$ oc new-project warehouse-backend
$ oc new-app nenadalm/warehouse~https://github.com/nenadalm/Warehouse.git --name warehouse-backend
```
edit build config so that build doesn't fail randomly on not enough memory
```shell
$ oc edit buildconfig
```
```yaml
spec:
    resources:
        limits:
            memory: 1Gi
```
create url so you can access the backend
```shell
$ oc create route edge --service warehouse-backend
```
import newer version of image from docker registry
```shell
$ oc import-image nenadalm/warehouse
```
edit deployment config
```shell
$ oc edit dc/warehouse-backend
```
```yaml
spec:
    strategy:
        rollingParams:
            # decrease timeout for deployment
            timeoutSeconds: 180
spec:
    template:
        spec:
            resources:
                containers[0]:
                    limits:
                        # container memory
                        memory: 512Mi
                    # test if our app is ready to serve requests
                    readinessProbe:
                        httpGet:
                            path: '/'
                            port: 3000
                    # setting some jvm options
                    env:
                        - name: 'JAVA_TOOL_OPTIONS'
                          value: '-Xms250m -Xmx250m'
```
setup github webhook to automatically trigger build on push using following url
```shell
$ oc describe bc warehouse-backend
```
