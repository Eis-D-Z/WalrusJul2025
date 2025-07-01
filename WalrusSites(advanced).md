# Deploying a web site on Walrus

## Description

One of the first and most interesting applications of Walrus is that it can host static websites. Below are the steps to get started.


## walrus-websites CLI

First we will need a CLI that makes the process of uploading a build very simple.

As described in the [docs](https://docs.wal.app/walrus-sites/tutorial-install.html#testnet-curl-request) the commands you need to run are:

```bash
SYSTEM= # set this to your system: ubuntu-x86_64, ubuntu-x86_64-generic, macos-x86_64, macos-arm64, windows-x86_64.exe
curl https://storage.googleapis.com/mysten-walrus-binaries/site-builder-testnet-latest-$SYSTEM -o site-builder
chmod +x site-builder
```

If you want to keep the binary you can move it to `~/.local/bin/`:

```bash
mv site-builder ~/.local/bin
```

If you followed the [walrus CLI](./CLI(normal).md) installation you most probable have a sui config, otherwise you will need to run this:

```bash
walrus generate-sui-wallet --sui-network testnet
```

If you don't have the walrus CLI at all, you will need to get it first.

### Config

Next we need the config file which can be downloaded with:

```bash
curl https://raw.githubusercontent.com/MystenLabs/walrus-sites/refs/heads/testnet/sites-config.yaml -o ~/.config/walrus/sites-config.yaml
```

or you can check the example [file](./WalrusSitesConfig.yml) in this repo.

If you downloaded the config file make sure to change the last line: 

`default_context: mainnet` -> `default_context: testnet`

to be sure we won't get any unexpected errors.

## Deploying a site

As long as you get the config right to publish a site you need to run:

```bash
site-builder publish {PATH_TO_APP}/dist --site-name "<your site's name>" --epochs 1
```

This assumes that you have already built your website, usually this is done by running `pnpm build` and a new folder will appear with the build. You will need to point to that folder in the above command.

If you have a custom config file in a non-default location you can just point to it with:

```bash
site-builder --config {PATH_TO_CONFIG} publish {PATH_TO_APP}/dist --site-name "decentralized website test" --epochs 2
```

## Browsing your site
On testnet the portal is not available anymore, you can one run locally if you want following this [doc](https://docs.wal.app/walrus-sites/portal.html#running-the-portal-locally).

Also you can follow this [tutorial](https://notion.sui.io/create-a-decentralized-website) to find out how to give a SuiNS name to your site.

