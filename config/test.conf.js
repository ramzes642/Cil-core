module.exports = {

    // some of constants will be injected from prototypes in Factory!
    constants: {
        strIdent: 'Test',

        network: 0x12882304,
        protocolVersion: 0x0123,
        port: 8223,

        // How many peers we'll send in one 'addr' message
        ADDR_MAX_LENGTH: 1000,

        // maximum connected peers
        MAX_PEERS: 10,

        // minimum connected peers
        MIN_PEERS: 3,

        // milliseconds
        PEER_QUERY_TIMEOUT: 30000,
        CONNECTION_TIMEOUT: 60000,

        // 1 day
        BAN_PEER_SCORE: 100,
        BAN_PEER_TIME: 5000,// 24 * 60 * 60 * 1000,
        PEER_TICK_TIMEOUT: 1000,

        // maximum block hashes in MSG_INV
        MAX_BLOCKS_INV: 500,

        messageTypes: {
            MSG_VERSION: 'version',
            MSG_VERACK: 'verack',
            MSG_GET_ADDR: 'getaddr',
            MSG_ADDR: 'addr',
            MSG_REJECT: 'reject',
            MSG_BLOCK: 'block',
            MSG_TX: 'tx',
            MSG_INV: 'inv',
            MSG_GET_DATA: 'getdata',
            MSG_GET_BLOCKS: 'getblocks',
            MSG_PING: 'ping',
            MSG_PONG: 'pong',

            MSG_WITNESS_HANDSHAKE: 'w_handshake',
            MSG_WITNESS_NEXT_ROUND: 'w_nextround',
            MSG_WITNESS_EXPOSE: 'w_expose',
            MSG_WITNESS_BLOCK: 'w_block',
            MSG_WITNESS_BLOCK_VOTE: 'w_block_vote'
        },

        consensusStates: {
            ROUND_CHANGE: 'ROUND_CHANGE',
            BLOCK: 'BLOCK',
            VOTE_BLOCK: 'VOTE_BLOCK',
            COMMIT: 'COMMIT'
        },

        consensusTimeouts: {
            ROUND_CHANGE: 10000,
            BLOCK: 20000,
            VOTE_BLOCK: 10000,
            COMMIT: 20000
        },

        // maximum time offset for nodes we tolerate
        TOLERATED_TIME_DIFF: 60 * 60 * 1000,

        // how much we suppress creating empty blocks
        WITNESS_HOLDOFF: 15 * 60 * 1000,
        MAX_BLOCK_SIZE: 1024,
        MIN_TX_FEE: 1000,

        PEER_CONNECTION_LIFETIME: 60 * 60 * 1000,

        MEMPOOL_TX_QTY: 5,
        MEMPOOL_TX_LIFETIME: 5000,
        MEMPOOL_OUTDATED_INTERVAL: 24 * 60 * 60 * 1000,

        PEER_MAX_BYTESCOUNT: 10 * 1024 * 1024,
        PEER_BANADDRESS_TIME: 1000,
        PEER_DEAD_TIMER_NAME: 'peerDeadTimer',
        PEER_DEAD_TIMEOUT: 5 * 60 * 1000,
        PEER_DEAD_TIME: 5 * 60 * 1000,
        PEER_PING_TIMER_NAME: 'peerPingTimer',
        PEER_PING_TIMEOUT: 4 * 60 * 1000,
        PEER_RECONNECT_TIMER: 'peerReconnectTimer',
        PEER_RECONNECT_INTERVAL: 5 * 60 * 1000,

        PEERMANAGER_BACKUP_TIMER_NAME: 'peerManagerBackupTimer',
        PEERMANAGER_BACKUP_TIMEOUT: 10 * 60 * 1000,
        
        DB_PATH_PREFIX: './db',
        DB_CHAINSTATE_DIR: 'test_chainstate',
        DB_BLOCKSTATE_DIR: 'test_blockstate',
        DB_PEERSTATE_DIR: 'test_peerstate'

    }
};
