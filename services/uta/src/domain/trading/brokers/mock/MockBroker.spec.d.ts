/**
 * MockBroker TDD tests — written BEFORE implementation.
 *
 * MockBroker is an in-memory exchange that implements IBroker.
 * It's the precision gatekeeper: if the chain passes imprecise floats,
 * these tests will catch it.
 */
import '../../contract-ext.js';
