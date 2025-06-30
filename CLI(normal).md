# Walrus CLI

## Description

Walrus operation can be done through the walrus CLI developed by Mysten labs.

Using the CLI is very straightforward but it involves an initial config step. After you finished the config step, if you want to use the CLI during the hackathon please come in contact with any dev rel on site, or in the hackathon exclusive chat, so that they can fund you with WAL.

## Setting up

In order to download the CLI binary the easiest way is to run the following command in your shell:

```bash
curl -sSf https://docs.wal.app/setup/walrus-install.sh | sh -s -- -n testnet
```

If your PATH contains `/home/user/.local/bin` then you can just type `walrus` and you will get an output containing the available top level commands.

Next we need the config file set up, run this command:

```bash
curl https://docs.wal.app/setup/client_config.yaml -o ~/.config/walrus/client_config.yaml
```

Then open the created file with an editor:
```bash
nano ~/.config/walrus/client_config.yaml
```

go to the last line that says:

`default_context: mainnet `

and change it into

`default_context: testnet`.

Walrus coordination happens on Sui, and the WAL are also available there. The last step you will need to do is:

```bash
walrus generate-sui-wallet --sui-network testnet
```

This will generate a new address, please save the address and ask in the chat or a Walrus representative to send you test tokens so you can get started.


## Store 

In order to upload your data to Walrus the CLI command is

```bash
walrus store --epochs 1 ./images/walrus1.jpg
```

The response will contain the `blob id` which is the info that you will need in order to read from Walrus.

You can mark your data as deletable with:

```bash
walrus store --epochs 1 --deletable ./images/walrus1.jpg
```

## Read

You can read the data that you stored on walrus with:

```bash
walrus read "<your blob id>"
```

Keep in mind that large files might not be available immediately, thus you can check the status with:

```bash
walrus blob-status --blob-id "<your blob id>"
```


## Delete

Data that was marked as deletable during the store operation can be removed from Walrus with:

```bash
walrus delete --blob-id "<your blob id>"
```
