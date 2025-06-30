# Accessing Walrus with Tusky

## Description

Tusky is an ecosystem project that offers an S3-like data storage but everything is stored on Walrus.

You can create `Vaults` that are similar to S3 buckets and each `Vault` may contain one or more `Folders` for file organization.


## SDK

The full docs can be found [here](https://docs.tusky.io/typescript-sdk/getting-started).

The [Tusky](./Tusky) folder contains an example of vault creation and image upload using the TS SDK of Tusky.

Please note that the `.env` file is showing on purpose but in any other case except a tutorial, the `.env` should always be in the `gitignore` and is considered a security breach if it ever gets published on a remote repo.


To install Tusky TS SDK you just need:

```bash
pnpm i @tusky-io/ts-sdk
```

Of course if you use `yarn` or `npm` please correct the command accordingly.