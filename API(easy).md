# Walrus HTTP API

## Description
On Walrus there are 4 operations:

- Upload or Store
- Read
- Attest
- Delete

Writes should be requested from a publisher.

Reads should be requested from an aggregator.


## Getting started
The full list of publishers and aggregators for testnet can be found at <a href="https://docs.wal.app/usage/web-api.html#testnet"></a>.

Our suggestion is to use the ones provided by Mysten but if they seem unavailable use one from the list.

We will showcase the api commands using `curl` thus make sure to set an `AGGREGATOR` and `PUBLISHER` variable for you shell:

```bash
AGGREGATOR=https://aggregator.walrus-testnet.walrus.space
PUBLISHER=https://publisher.walrus-testnet.walrus.space
```


## Store operation
The store operation can be achieved with a PUT request towards a publisher.

The following command will store the image in `./images/walrus1.jpg` on Walrus.

```bash
curl -X PUT "$PUBLISHER/v1/blobs" --upload-file "./images/walrus1.jpg"
```

On Walrus you can have your bytes deletable but this must be specified:
```bash
curl -X PUT "$PUBLISHER/v1/blobs?deletable=true" --upload-file "./images/walrus.jpg"
```

Remember that WAL will buy you storage space and this space may or may not be empty for production application. Deleting any data on Walrus allows you to substitute it with something else of equal size for the duration of your lease.

### Successful response
On a successful respose the most important piece of information is the `blod id`. You will need it in order to link or access your data.

A sample response is:
```JSON
{
  "newlyCreated": {
    "blobObject": {
      "id": "0xe91eee8c5b6f35b9a250cfc29e30f0d9e5463a21fd8d1ddb0fc22d44db4eac50",
      "registeredEpoch": 34,
      "blobId": "M4hsZGQ1oCktdzegB6HnI6Mi28S2nqOPHxK-W7_4BUk",
      "size": 17,
      "encodingType": "RS2",
      "certifiedEpoch": 34,
      "storage": {
        "id": "0x4748cd83217b5ce7aa77e7f1ad6fc5f7f694e26a157381b9391ac65c47815faf",
        "startEpoch": 34,
        "endEpoch": 35,
        "storageSize": 66034000
      },
      "deletable": false
    },
    "resourceOperation": {
      "registerFromScratch": {
        "encodedLength": 66034000,
        "epochsAhead": 1
      }
    },
    "cost": 132300
  }
}
```
### Re-store the same data

If you try to store twice you will get an `Already certified` response that will also contain the `blob id`. Thus if you lost the response and missed the oportunity to save the `blob id`, try to store the same file again and the blob id will appear in the response.

### API spec 

The complete API spec can be found [here](https://publisher.walrus-testnet.walrus.space/v1/api)

## Read operation

The read operation is a `GET` request from an aggregator. 

```bash
curl "$AGGREGATOR/v1/blobs/<your blob id>"
```

Going to the above link through a browser will also result in downloading the stored data.

Walrus is data agnostic and will give a unique ID to each blob, which means that when you will try to embed it in your web app sometimes or some browsers might fail. For example if you upload an image the `<img>` tag might fail to read the bytes. In the case use the more general `<object type="..." data="aggregator url">` tag. For images you would use `type="media_type"`

The complete API spec can be found [here](https://aggregator.walrus-testnet.walrus.space/v1/api).
