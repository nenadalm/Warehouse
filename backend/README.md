# Backend component

Allows frontend component to import electrical components from various providers (currently only ges)

## Run in dev mode

```shell
$ lein ring server-headless
```

## Run in dev mode with mocked providers

```shell
$ MOCKED_PROVIDERS=true lein ring server-headless
```

## Deploy

### Openshift

https://warehouse-backend-warehouse-backend.1d35.starter-us-east-1.openshiftapps.com

```shell
$ oc login <url>
$ oc new-project warehouse-backend
$ oc new-app nenadalm/warehouse~https://github.com/nenadalm/Warehouse.git --name warehouse-backend
```
wait until build succeeds and then create url so you can access the backend
```shell
$ oc create route edge --service warehouse-backend
```
import newer version of image from docker registry
```shell
$ oc import-image nenadalm/warehouse
```
