# Baseledger

1. docker-compose up -d
2. init postgres db with db-init.sql

3. in codegen.yml change schema to point to v1/graphql and run npm run `npm run graphql:codegen`

4. to run locally `npm run dev`

for prod it seems better to use docker

build docker example:

```
docker build \
--build-arg NEXT_PUBLIC_GRAPHQL_URL="http://localhost:8080/v1/graphql" \
--build-arg NEXT_PUBLIC_GRAPHQL_WS="ws://localhost:8080/v1/graphql" \
--build-arg NEXT_PUBLIC_URL="http://localhost:3001" \
--build-arg NEXT_PUBLIC_WS_CHAIN_URL="ws://localhost:26657/websocket" \
--build-arg NEXT_PUBLIC_CHAIN_STATUS="mainnet" \
--build-arg NODE_ENV="production" \
--build-arg PORT=3001 \
-t DOCKER_ID/big-dipper-baseledger .

```



# Big Dipper 2.0 ✨ (Cosmos Based Chains)
Big Dipper is an open-source block explorer and token management tool serving over 10 proof-of-stake blockchains. It has been forked more than 100 times on GitHub and has served audiences from 140 countries and regions.

**This repo contains the UI of big dipper 2.0 only**

## Documentation
Read our official documentation at [http://docs.bigdipper.live/](http://docs.bigdipper.live/)

## Issue Reporting
For UI related issues please report it here [https://github.com/forbole/big-dipper-2.0-cosmos/issues](https://github.com/forbole/big-dipper-2.0-cosmos/issues).

For Hasura and BdJuno issues please report it here [https://github.com/forbole/bdjuno/issues](https://github.com/forbole/bdjuno/issues)

## License
Read our license at [https://raw.githubusercontent.com/forbole/big-dipper-2.0-cosmos/master/LICENSE](https://raw.githubusercontent.com/forbole/big-dipper-2.0-cosmos/master/LICENSE)

## Ledger and Transaction Support
While Big Dipper 2.0 no longer supports ledger or any kind of transactions in favor of [Forbole X](https://github.com/forbole/forbole-x), the original [Big Dipper](https://github.com/forbole/big-dipper) will continue have this feature.
