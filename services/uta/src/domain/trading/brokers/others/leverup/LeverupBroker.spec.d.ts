/**
 * LeverupBroker unit tests.
 *
 * Strategy: mock the network surface (fetch + viem PublicClient) and run
 * the broker against deterministic responses. EIP-712 signing happens with
 * a real test private key — signatures are deterministic and we can assert
 * them, plus catch regressions in the typed-data schema.
 */
import '../../../contract-ext.js';
