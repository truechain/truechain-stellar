(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
  {
      "name": "Select a contract...",
      "address": "",
      "abi": ''
  },{
      "name": "DAO Classic Withdraw",
      "address": "0x180826b05452ce96e157f0708c43381fee64a6b8",
      "abi": '[{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"seal","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"totalAccounts","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"data","type":"uint256[]"}],"name":"fill","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"sealed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"}]'
  },{
	    "name": "BitEther",
	    "address": "0x085fb4f24031eaedbc2b611aa528f22343eb52db",
	    "abi": '[{"constant":false,"inputs":[],"name":"getEra","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_eraBlock","type":"uint256"},{"name":"_blockMined","type":"uint256"},{"name":"_blockNumber","type":"uint256"},{"name":"_rewardPrev","type":"uint256"},{"name":"_reward","type":"uint256"}],"name":"getUnclaimed","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_block","type":"uint256"}],"name":"getEraForBlock","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"claim","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_miner","type":"address"},{"indexed":false,"name":"_value","type":"uint256"},{"indexed":false,"name":"_current","type":"bool"}],"name":"Reward","type":"event"}]'
  },{
      "name": "Mist's Multisig Contract",
      "address": "0x0000000000000000000000000000000000000000",
      "abi": '[{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"removeOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_numOwners","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_lastDay","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"resetSpentToday","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_spentToday","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"addOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_required","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_h","type":"bytes32"}],"name":"confirm","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newLimit","type":"uint256"}],"name":"setDailyLimit","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[{"name":"_r","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_operation","type":"bytes32"}],"name":"revoke","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_newRequired","type":"uint256"}],"name":"changeRequirement","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_operation","type":"bytes32"},{"name":"_owner","type":"address"}],"name":"hasConfirmed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"name":"changeOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_dailyLimit","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_daylimit","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Revoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"}],"name":"OwnerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newRequirement","type":"uint256"}],"name":"RequirementChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"SingleTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"MultiTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"initiator","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"ConfirmationNeeded","type":"event"}]'
  }
]

},{}],2:[function(require,module,exports){
module.exports=[{
    "name": "Select a contract...",
    "address": "",
    "abi": ' '
}, {
    "name": "Augur / REP",
    "address": "0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5",
    "abi": '[{"name": "allowance","type": "function","constant": true,"inputs": [{ "name": "owner", "type": "address" }, { "name": "spender", "type": "address" }],"outputs": [{ "name": "out", "type": "uint256" }]},{"name": "approve","type": "function","constant": false,"inputs": [{ "name": "spender", "type": "address" }, { "name": "amount", "type": "uint256" }],"outputs": [{ "name": "out", "type": "uint256" }]},{"name": "balanceOf","type": "function","constant": true,"inputs": [{ "name": "address", "type": "address" }],"outputs": [{ "name": "out", "type": "uint256" }]},{"name": "decimals","type": "function","constant": true,"inputs": [],"outputs": [{ "name": "out", "type": "uint256" }]},{"name": "getSeeded","type": "function","constant": true,"inputs": [],"outputs": [{ "name": "out", "type": "uint256" }]},{"name": "name","type": "function","constant": true,"inputs": [],"outputs": [{ "name": "out", "type": "uint256" }]},{"name": "setSaleDistribution","type": "function","constant": false,"inputs": [{ "name": "addresses", "type": "address[]" }, { "name": "balances", "type": "uint256[]" }],"outputs": [{ "name": "out", "type": "uint256" }]},{"name": "symbol","type": "function","constant": true,"inputs": [],"outputs": [{ "name": "out", "type": "uint256" }]},{"name": "totalSupply","type": "function","constant": true,"inputs": [],"outputs": [{ "name": "out", "type": "uint256" }]},{"name": "transfer","type": "function","constant": false,"inputs": [{ "name": "receiver", "type": "address" }, { "name": "fxpValue", "type": "uint256" }],"outputs": [{ "name": "out", "type": "uint256" }]},{"name": "transferFrom","type": "function","constant": false,"inputs": [{ "name": "from", "type": "address" }, { "name": "receiver", "type": "address" }, { "name": "fxpValue", "type": "uint256" }],"outputs": [{ "name": "out", "type": "uint256" }]},{"name": "Approval(address,address,uint256)","type": "event","inputs": [{ "name": "owner", "type": "address", "indexed": true }, { "name": "spender", "type": "address", "indexed": true }, { "name": "fxpValue", "type": "uint256", "indexed": false }]},{"name": "Transfer(address,address,uint256)","type": "event","inputs": [{ "name": "from", "type": "address", "indexed": true }, { "name": "to", "type": "address", "indexed": true }, { "name": "value", "type": "uint256", "indexed": false }]}]'
}, {
    "name": "DGD Crowdsale (Claim)",
    "address": "0xf0160428a8552ac9bb7e050d90eeade4ddd52843",
    "abi": '[{"constant":false,"inputs":[{"name":"_eth","type":"uint256"}],"name":"setEthToCents","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"startDate","outputs":[{"name":"date","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"claimFounders","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"userInfo","outputs":[{"name":"centstotal","type":"uint256"},{"name":"weitotal","type":"uint256"},{"name":"share","type":"uint256"},{"name":"badges","type":"uint256"},{"name":"claimed","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"getPeriod","outputs":[{"name":"saleperiod","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"periodTwo","outputs":[{"name":"date","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_user","type":"address"}],"name":"proxyPurchase","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"BILLION","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"claim","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"ethToCents","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_wei","type":"uint256"}],"name":"weiToCents","outputs":[{"name":"centsvalue","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalWei","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"WEI_PER_ETH","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"goalReached","outputs":[{"name":"reached","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_proxy","type":"address"}],"name":"getPayout","outputs":[{"name":"payout","type":"address"},{"name":"isproxy","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"myInfo","outputs":[{"name":"centstotal","type":"uint256"},{"name":"weitotal","type":"uint256"},{"name":"share","type":"uint256"},{"name":"badges","type":"uint256"},{"name":"claimed","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_payout","type":"address"}],"name":"regProxy","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"getSaleStatus","outputs":[{"name":"fclaim","type":"bool"},{"name":"reltokens","type":"uint256"},{"name":"relbadges","type":"uint256"},{"name":"claimers","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"sendFunds","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"isEnded","outputs":[{"name":"ended","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"unlock","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_contrib","type":"uint256"},{"name":"_total","type":"uint256"}],"name":"calcShare","outputs":[{"name":"share","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_payout","type":"address"}],"name":"getProxy","outputs":[{"name":"proxy","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"periodThree","outputs":[{"name":"date","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalCents","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"endDate","outputs":[{"name":"date","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getSaleConfig","outputs":[{"name":"start","type":"uint256"},{"name":"two","type":"uint256"},{"name":"three","type":"uint256"},{"name":"end","type":"uint256"},{"name":"goal","type":"uint256"},{"name":"cap","type":"uint256"},{"name":"badgecost","type":"uint256"},{"name":"famount","type":"uint256"},{"name":"fwallet","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"getSaleInfo","outputs":[{"name":"weiamount","type":"uint256"},{"name":"cents","type":"uint256"},{"name":"realcents","type":"uint256"},{"name":"amount","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_user","type":"address"}],"name":"claimFor","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"CENTS","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_a","type":"uint256"},{"name":"_c","type":"uint256"}],"name":"ppb","outputs":[{"name":"b","type":"uint256"}],"type":"function"},{"inputs":[{"name":"_config","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_exchange","type":"uint256"},{"indexed":true,"name":"_rate","type":"uint256"},{"indexed":true,"name":"_cents","type":"uint256"}],"name":"Purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":true,"name":"_amount","type":"uint256"},{"indexed":true,"name":"_badges","type":"uint256"}],"name":"Claim","type":"event"}]'
}, {
    "name": "The DAO (Original)",
    "address": "0xbb9bc244d798123fde783fcc1c72d3bb8c189413",
    "abi": '[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"},{"name":"description","type":"string"},{"name":"votingDeadline","type":"uint256"},{"name":"open","type":"bool"},{"name":"proposalPassed","type":"bool"},{"name":"proposalHash","type":"bytes32"},{"name":"proposalDeposit","type":"uint256"},{"name":"newCurator","type":"bool"},{"name":"yea","type":"uint256"},{"name":"nay","type":"uint256"},{"name":"creator","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"minTokensToCreate","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"rewardAccount","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"daoCreator","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"divisor","outputs":[{"name":"divisor","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"extraBalance","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"uint256"},{"name":"_transactionData","type":"bytes"}],"name":"executeProposal","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"unblockMe","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalRewardToken","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"actualBalance","outputs":[{"name":"_actualBalance","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"closingTime","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"allowedRecipients","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferWithoutReward","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"refund","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_description","type":"string"},{"name":"_transactionData","type":"bytes"},{"name":"_debatingPeriod","type":"uint256"},{"name":"_newCurator","type":"bool"}],"name":"newProposal","outputs":[{"name":"_proposalID","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"DAOpaidOut","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"minQuorumDivisor","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newContract","type":"address"}],"name":"newContract","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_allowed","type":"bool"}],"name":"changeAllowedRecipients","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"halveMinQuorum","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"paidOut","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"uint256"},{"name":"_newCurator","type":"address"}],"name":"splitDAO","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"DAOrewardAccount","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"proposalDeposit","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"numberOfProposals","outputs":[{"name":"_numberOfProposals","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"lastTimeMinQuorumMet","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_toMembers","type":"bool"}],"name":"retrieveDAOReward","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"receiveEther","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"isFueled","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_tokenHolder","type":"address"}],"name":"createTokenProxy","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"uint256"}],"name":"getNewDAOAddress","outputs":[{"name":"_newDAO","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"uint256"},{"name":"_supportsProposal","type":"bool"}],"name":"vote","outputs":[{"name":"_voteID","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"getMyReward","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"rewardToken","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFromWithoutReward","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_proposalDeposit","type":"uint256"}],"name":"changeProposalDeposit","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"blocked","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"curator","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"uint256"},{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_transactionData","type":"bytes"}],"name":"checkProposalCode","outputs":[{"name":"_codeChecksOut","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"privateCreation","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[{"name":"_curator","type":"address"},{"name":"_daoCreator","type":"address"},{"name":"_proposalDeposit","type":"uint256"},{"name":"_minTokensToCreate","type":"uint256"},{"name":"_closingTime","type":"uint256"},{"name":"_privateCreation","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"value","type":"uint256"}],"name":"FuelingToDate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"CreatedToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Refund","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalID","type":"uint256"},{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"newCurator","type":"bool"},{"indexed":false,"name":"description","type":"string"}],"name":"ProposalAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalID","type":"uint256"},{"indexed":false,"name":"position","type":"bool"},{"indexed":true,"name":"voter","type":"address"}],"name":"Voted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalID","type":"uint256"},{"indexed":false,"name":"result","type":"bool"},{"indexed":false,"name":"quorum","type":"uint256"}],"name":"ProposalTallied","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_newCurator","type":"address"}],"name":"NewCurator","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_recipient","type":"address"},{"indexed":false,"name":"_allowed","type":"bool"}],"name":"AllowedRecipientChanged","type":"event"}]'
}, {
    "name": "ENS - Eth Registrar (Auction)",
    "address": "0x6090a6e47849629b7245dfa1ca21d94cd15878ef",
    "abi": '[{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"releaseDeed","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"getAllowedTime","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"unhashedName","type":"string"}],"name":"invalidateName","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"owner","type":"address"},{"name":"value","type":"uint256"},{"name":"salt","type":"bytes32"}],"name":"shaBid","outputs":[{"name":"sealedBid","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"bidder","type":"address"},{"name":"seal","type":"bytes32"}],"name":"cancelBid","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"entries","outputs":[{"name":"","type":"uint8"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ens","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"},{"name":"_value","type":"uint256"},{"name":"_salt","type":"bytes32"}],"name":"unsealBid","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"transferRegistrars","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"}],"name":"sealedBids","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"},{"name":"newOwner","type":"address"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"},{"name":"_timestamp","type":"uint256"}],"name":"isAllowed","outputs":[{"name":"allowed","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"finalizeAuction","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"registryStarted","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"launchLength","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"sealedBid","type":"bytes32"}],"name":"newBid","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"labels","type":"bytes32[]"}],"name":"eraseNode","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hashes","type":"bytes32[]"}],"name":"startAuctions","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"bytes32"},{"name":"deed","type":"address"},{"name":"registrationDate","type":"uint256"}],"name":"acceptRegistrarTransfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"startAuction","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"rootNode","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"hashes","type":"bytes32[]"},{"name":"sealedBid","type":"bytes32"}],"name":"startAuctionsAndBid","outputs":[],"payable":true,"type":"function"},{"inputs":[{"name":"_ens","type":"address"},{"name":"_rootNode","type":"bytes32"},{"name":"_startDate","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":false,"name":"registrationDate","type":"uint256"}],"name":"AuctionStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":true,"name":"bidder","type":"address"},{"indexed":false,"name":"deposit","type":"uint256"}],"name":"NewBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"status","type":"uint8"}],"name":"BidRevealed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"registrationDate","type":"uint256"}],"name":"HashRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"}],"name":"HashReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":true,"name":"name","type":"string"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"registrationDate","type":"uint256"}],"name":"HashInvalidated","type":"event"}]'
}, {
    "name": "ENS - Registry",
    "address": "0x314159265dD8dbb310642f98f50C066173C1259b",
    "abi": '[{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"label","type":"bytes32"},{"name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"name":"","type":"uint64"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":true,"name":"label","type":"bytes32"},{"indexed":false,"name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"}]'
}, {
    "name": "ENS - Reverse Registrar",
    "address": "0x9062c0a6dbd6108336bcbe4593a3d1ce05512069",
    "abi": '[{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"resolver","type":"address"}],"name":"claimWithResolver","outputs":[{"name":"node","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"claim","outputs":[{"name":"node","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ens","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"defaultResolver","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"node","outputs":[{"name":"ret","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"setName","outputs":[{"name":"node","type":"bytes32"}],"payable":false,"type":"function"},{"inputs":[{"name":"ensAddr","type":"address"},{"name":"resolverAddr","type":"address"}],"payable":false,"type":"constructor"}]'
},{
    "name": "ENS - Public Resolver",
    "address": "0x5FfC014343cd971B7eb70732021E26C35B744cc4",
    "abi": '[{"constant":true,"inputs":[{"name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"key","type":"string"},{"name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"},{"name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"name":"contentType","type":"uint256"},{"name":"data","type":"bytes"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"x","type":"bytes32"},{"name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"content","outputs":[{"name":"ret","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"addr","outputs":[{"name":"ret","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"},{"name":"key","type":"string"}],"name":"text","outputs":[{"name":"ret","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"contentType","type":"uint256"},{"name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"name","outputs":[{"name":"ret","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"hash","type":"bytes32"}],"name":"setContent","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"name":"x","type":"bytes32"},{"name":"y","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"addr","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"ensAddr","type":"address"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"hash","type":"bytes32"}],"name":"ContentChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":true,"name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"x","type":"bytes32"},{"indexed":false,"name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":true,"name":"indexedKey","type":"string"},{"indexed":false,"name":"key","type":"string"}],"name":"TextChanged","type":"event"}]'
},{
    "name": "Lunyr Crowdsale",
    "address": "0xfa05A73FfE78ef8f1a739473e462c54bae6567D9",
    "abi": '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"vaultPercentOfTotal","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"ok","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getState","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"crowdfundPercentOfTotal","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finalizeCrowdfunding","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenCreationMax","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"ok","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"lunyrPercentOfTotal","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"upgrade","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"refund","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"upgradeAgent","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"upgradeMaster","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"finalizedCrowdfunding","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hundredPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isLunyrToken","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"lunyrMultisig","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundingEndBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"ok","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenCreationMin","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalUpgraded","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundingStartBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"agent","type":"address"}],"name":"setUpgradeAgent","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"create","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"newWallet","type":"address"}],"name":"setMultiSigWallet","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"timeVault","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokensPerEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"master","type":"address"}],"name":"setUpgradeMaster","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_lunyrMultisig","type":"address"},{"name":"_upgradeMaster","type":"address"},{"name":"_fundingStartBlock","type":"uint256"},{"name":"_fundingEndBlock","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Upgrade","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Refund","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"upgradeAgent","type":"address"}],"name":"UpgradeFinalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"agent","type":"address"}],"name":"UpgradeAgentSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]'
}, {
    "name": "Milestone Tracker",
    "address": "0x3c01ddc7af41e6888cbd8d0398fe34a81c3c7f36",
    "abi": '[{"constant":true,"inputs":[],"name":"proposedMilestones","outputs":[{"name":"","type":"bytes"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"changingMilestones","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"campaignCanceled","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"collectMilestonePayment","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"unproposeMilestones","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"donor","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"milestoneCompleted","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hashProposals","type":"bytes32"}],"name":"acceptProposedMilestones","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"approveCompletedMilestone","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"recipient","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newMilestones","type":"bytes"}],"name":"proposeMilestones","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"arbitrator","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"arbitrateCancelCampaign","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newRecipient","type":"address"}],"name":"changeRecipient","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numberOfMilestones","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"rejectMilestone","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newDonor","type":"address"}],"name":"changeDonor","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"milestones","outputs":[{"name":"description","type":"string"},{"name":"url","type":"string"},{"name":"minCompletionDate","type":"uint256"},{"name":"maxCompletionDate","type":"uint256"},{"name":"reviewer","type":"address"},{"name":"reviewTime","type":"uint256"},{"name":"paymentSource","type":"address"},{"name":"payData","type":"bytes"},{"name":"status","type":"uint8"},{"name":"doneTime","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"arbitrateApproveMilestone","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"cancelMilestone","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newArbitrator","type":"address"}],"name":"changeArbitrator","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_arbitrator","type":"address"},{"name":"_donor","type":"address"},{"name":"_recipient","type":"address"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[],"name":"NewMilestoneListProposed","type":"event"},{"anonymous":false,"inputs":[],"name":"NewMilestoneListUnproposed","type":"event"},{"anonymous":false,"inputs":[],"name":"NewMilestoneListAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"idProposal","type":"uint256"},{"indexed":false,"name":"newProposal","type":"uint8"}],"name":"ProposalStatusChanged","type":"event"},{"anonymous":false,"inputs":[],"name":"CampaignCalncelled","type":"event"}]'
}, {
    "name": "Mist's Multisig Contract",
    "address": "0x0101010101010101010101010101010101010101",
    "abi": '[{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"removeOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_numOwners","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_lastDay","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"resetSpentToday","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_spentToday","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"addOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_required","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_h","type":"bytes32"}],"name":"confirm","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newLimit","type":"uint256"}],"name":"setDailyLimit","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[{"name":"_r","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_operation","type":"bytes32"}],"name":"revoke","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_newRequired","type":"uint256"}],"name":"changeRequirement","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_operation","type":"bytes32"},{"name":"_owner","type":"address"}],"name":"hasConfirmed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"name":"changeOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_dailyLimit","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_daylimit","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Revoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"}],"name":"OwnerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newRequirement","type":"uint256"}],"name":"RequirementChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"SingleTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"MultiTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"initiator","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"ConfirmationNeeded","type":"event"}]'
}, {
    "name": "Minereum Contract",
    "address": "0x1a95b271b0535d15fa49932daba31ba612b52946",
    "abi": '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"currentEthBlock","outputs":[{"name":"blockNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"initialSupplyPerAddress","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalGenesisAddresses","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"availableBalanceOf","outputs":[{"name":"Balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_caller","type":"address"}],"name":"setGenesisCallerAddress","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"maxTotalSupply","outputs":[{"name":"maxSupply","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address[]"}],"name":"setGenesisAddressArray","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"genesisAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"rewardPerBlockPerAddress","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"currentBlock","outputs":[{"name":"blockNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"initialBlockCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"genesisCallerAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
}, {
    "name": "Replay Safe Split",
    "address": "0xAA1A6e3e6EF20068f7F8d8C835d2D22fd5116444",
    "abi": '[{"constant":false,"inputs":[{"name":"targetFork","type":"address"},{"name":"targetNoFork","type":"address"}],"name":"split","outputs":[{"name":"","type":"bool"}],"type":"function"}]'
}, {
    "name": "Pass DAO Committees Contract",
    "address": "0x6A3DCd2Ad3C693aA8CBc3e5bCB075b674209A033",
    "abi": '[{ "constant": false, "inputs": [ { "name": "_committeeID", "type": "uint256" }, { "name": "_supportsProposal", "type": "bool" } ], "name": "vote", "outputs": [], "payable": false, "type": "function" },{ "constant": false, "inputs": [ { "name": "_proposalID", "type": "uint256" } ], "name": "buySharesForProposal", "outputs": [ { "name": "", "type": "bool" } ], "payable": true, "type": "function" }, { "constant": false, "inputs": [], "name": "withdrawPendingAmounts", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function"}, { "constant": false, "inputs": [ { "name": "_contractorCreator", "type": "address" }, { "name": "_recipient", "type": "address" }, { "name": "_metaProject", "type": "bool" }, { "name": "_passProject", "type": "address" }, { "name": "_projectName", "type": "string" }, { "name": "_projectDescription", "type": "string" } ], "name": "createContractor", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_amount", "type": "uint256" }, { "name": "_contractor", "type": "address" }, { "name": "_contractorProposalID", "type": "uint256" }, { "name": "_proposalDescription", "type": "string" }, { "name": "_hashOfTheContractorProposalDocument", "type": "bytes32" }, { "name": "_moderator", "typPassDe": "address" }, { "name": "_initialSharePriceMultiplier", "type": "uint256" }, { "name": "_minutesFundingPeriod", "type": "uint256" }, { "name": "_minutesDebatingPeriod", "type": "uint256" } ], "name": "contractorProposal", "outputs": [ { "name": "", "type": "uint256" } ], "payable": true, "type": "function" }, { "constant": false, "inputs": [ { "name": "_name", "type": "string" }, { "name": "_description", "type": "string" }, { "name": "_project", "type": "address" }, { "name": "_minutesDebatingPeriod", "type": "uint256" } ], "name": "resolutionProposal", "outputs": [ { "name": "", "type": "uint256" } ], "payable": true, "type": "function" },  { "constant": false, "inputs": [ { "name": "_minQuorumDivisor", "type": "uint256" }, { "name": "_minCommitteeFees", "type": "uint256" }, { "name": "_minPercentageOfLikes", "type": "uint256" }, { "name": "_minutesSetProposalPeriod", "type": "uint256" }, { "name": "_minMinutesDebatePeriod", "type": "uint256" }, { "name": "_feesRewardInflationRate", "type": "uint256" }, { "name": "_defaultMinutesFundingPeriod", "type": "uint256" }, { "name": "_tokenPriceInflationRate", "type": "uint256" } ], "name": "rulesProposal", "outputs": [ { "name": "", "type": "uint256" } ], "payable": true, "type": "function" },  { "constant": false, "inputs": [ { "name": "_newCommitteeRoom", "type": "address" }, { "name": "_newShareManager", "type": "address" }, { "name": "_newTokenManager", "type": "address" }, { "name": "_minutesDebatingPeriod", "type": "uint256" } ], "name": "upgradeProposal", "outputs": [ { "name": "", "type": "uint256" } ], "payable": true, "type": "function" }, { "constant": false, "inputs": [ { "name": "_committeeID", "type": "uint256" } ], "name": "executeDecision", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_proposalID", "type": "uint256" } ], "name": "orderToContractor", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }]'
}, {
    "name": "Pass DAO Tokens Contract",
    "address": "0x85bC00724203D53536072b000C44A2cc16CD12C5",
    "abi": '[{ "constant": false, "inputs": [ { "name": "_proposalID", "type": "uint256" }, { "name": "_buyer", "type": "address" } ], "name": "buyTokensForProposal", "outputs": [ { "name": "", "type": "bool" } ], "payable": true, "type": "function" }, { "constant": false, "inputs": [], "name": "withdrawPendingAmounts", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "buyTokens", "outputs": [ { "name": "", "type": "bool" } ], "payable": true, "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "uint256" }, { "name": "_to", "type": "uint256" } ], "name": "removeOrders", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_tokenAmount", "type": "uint256" }, { "name": "_from", "type": "uint256" }, { "name": "_to", "type": "uint256" } ], "name": "sellTokens", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "type": "function" }]'
}, {
    "name": "SingularDTVFund",
    "address": "0xe736091fc36f1ad476f5e4e03e4425940822d3ba",
    "abi": '[{"inputs": [{"type": "address", "name": "singularDTVCrowdfundingAddress"}, {"type": "address", "name": "singularDTVTokenAddress"}], "constant": false, "type": "function", "name": "setup", "outputs": [{"type": "bool", "name": ""}]}, {"inputs": [], "constant": false, "type": "function", "name": "depositRevenue", "outputs": [{"type": "bool", "name": ""}]}, {"inputs": [], "constant": false, "type": "function", "name": "withdrawRevenue", "outputs": [{"type": "uint256", "name": ""}]}, {"inputs": [{"type": "address", "name": "forAddress"}], "constant": false, "type": "function", "name": "softWithdrawRevenueFor", "outputs": [{"type": "uint256", "name": ""}]}, {"inputs": [], "constant": true, "type": "function", "name": "workshop", "outputs": [{"type": "address", "name": ""}]}, {"inputs": [{"type": "address", "name": ""}], "constant": true, "type": "function", "name": "revenueAtTimeOfWithdraw", "outputs": [{"type": "uint256", "name": ""}]}, {"inputs": [], "constant": true, "type": "function", "name": "singularDTVToken", "outputs": [{"type": "address", "name": ""}]}, {"inputs": [], "constant": true, "type": "function", "name": "owner", "outputs": [{"type": "address", "name": ""}]}, {"inputs": [], "constant": true, "type": "function", "name": "singularDTVCrowdfunding", "outputs": [{"type": "address", "name": ""}]}, {"inputs": [], "constant": true, "type": "function", "name": "totalRevenue", "outputs": [{"type": "uint256", "name": ""}]}, {"inputs": [{"type": "address", "name": ""}], "constant": true, "type": "function", "name": "owed", "outputs": [{"type": "uint256", "name": ""}]}, {"inputs": [], "type": "constructor"}]'
}
]

},{}],3:[function(require,module,exports){
module.exports=[{
    "name": "Select a contract...",
    "address": "",
    "abi": ' '
}]

},{}],4:[function(require,module,exports){
module.exports=[{
    "name": "ENS - Eth Registrar (Auction)",
    "address": "0x21397c1a1f4acd9132fe36df011610564b87e24b",
    "abi": '[{"constant":true,"inputs":[],"name":"ens","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"expiryTimes","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subnode","type":"bytes32"},{"name":"owner","type":"address"}],"name":"register","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"rootNode","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"inputs":[{"name":"ensAddr","type":"address"},{"name":"node","type":"bytes32"}],"type":"constructor"}]'
}, {
    "name": "ENS - Registry",
    "address": "0xe7410170f87102df0055eb195163a03b7f2bff4a",
    "abi": '[{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"label","type":"bytes32"},{"name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"name":"","type":"uint64"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":true,"name":"label","type":"bytes32"},{"indexed":false,"name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"}]'
}]

},{}],5:[function(require,module,exports){
module.exports=[{
    "name": "Select a contract...",
    "address": "",
    "abi": ' '
}, {
    "name": "??? ENS - Eth Registrar (Auction) ??? ",
    "address": "0x21397c1a1f4acd9132fe36df011610564b87e24b",
    "abi": '[{"constant":true,"inputs":[],"name":"ens","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"expiryTimes","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subnode","type":"bytes32"},{"name":"owner","type":"address"}],"name":"register","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"rootNode","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"inputs":[{"name":"ensAddr","type":"address"},{"name":"node","type":"bytes32"}],"type":"constructor"}]'
}, {
    "name": "??? ENS - Eth Registrar (Auction) ??? ",
    "address": "0xc19fd9004b5c9789391679de6d766b981db94610",
    "abi": '[{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"releaseDeed","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"getAllowedTime","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"unhashedName","type":"string"}],"name":"invalidateName","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"owner","type":"address"},{"name":"value","type":"uint256"},{"name":"salt","type":"bytes32"}],"name":"shaBid","outputs":[{"name":"sealedBid","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"bidder","type":"address"},{"name":"seal","type":"bytes32"}],"name":"cancelBid","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"entries","outputs":[{"name":"","type":"uint8"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ens","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"},{"name":"_value","type":"uint256"},{"name":"_salt","type":"bytes32"}],"name":"unsealBid","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"transferRegistrars","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"}],"name":"sealedBids","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"},{"name":"newOwner","type":"address"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"},{"name":"_timestamp","type":"uint256"}],"name":"isAllowed","outputs":[{"name":"allowed","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"finalizeAuction","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"registryStarted","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"launchLength","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"sealedBid","type":"bytes32"}],"name":"newBid","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"labels","type":"bytes32[]"}],"name":"eraseNode","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hashes","type":"bytes32[]"}],"name":"startAuctions","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"bytes32"},{"name":"deed","type":"address"},{"name":"registrationDate","type":"uint256"}],"name":"acceptRegistrarTransfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"startAuction","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"rootNode","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"hashes","type":"bytes32[]"},{"name":"sealedBid","type":"bytes32"}],"name":"startAuctionsAndBid","outputs":[],"payable":true,"type":"function"},{"inputs":[{"name":"_ens","type":"address"},{"name":"_rootNode","type":"bytes32"},{"name":"_startDate","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":false,"name":"registrationDate","type":"uint256"}],"name":"AuctionStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":true,"name":"bidder","type":"address"},{"indexed":false,"name":"deposit","type":"uint256"}],"name":"NewBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"status","type":"uint8"}],"name":"BidRevealed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"registrationDate","type":"uint256"}],"name":"HashRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"}],"name":"HashReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":true,"name":"name","type":"string"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"registrationDate","type":"uint256"}],"name":"HashInvalidated","type":"event"}]'
}, {
    "name": "ENS - Registry",
    "address": "0x112234455c3a32fd11230c42e7bccd4a84e02010",
    "abi": '[{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"label","type":"bytes32"},{"name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"name":"","type":"uint64"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":true,"name":"label","type":"bytes32"},{"indexed":false,"name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"}]'
}, {
    "name": "ENS - Public Resolver",
    "address": "0x4c641fb9bad9b60ef180c31f56051ce826d21a9a",
    "abi": '[{"constant":true,"inputs":[{"name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"addr","outputs":[{"name":"ret","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"},{"name":"kind","type":"bytes32"}],"name":"has","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"addr","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"content","outputs":[{"name":"ret","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"hash","type":"bytes32"}],"name":"setContent","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"ensAddr","type":"address"}],"type":"constructor"},{"payable":false,"type":"fallback"}]'
}, {
    "name": "Mist's Multisig Contract",
    "address": "0x0000000000000000000000000000000000000000",
    "abi": '[{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"removeOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_numOwners","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_lastDay","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"resetSpentToday","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_spentToday","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"addOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_required","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_h","type":"bytes32"}],"name":"confirm","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newLimit","type":"uint256"}],"name":"setDailyLimit","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[{"name":"_r","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_operation","type":"bytes32"}],"name":"revoke","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_newRequired","type":"uint256"}],"name":"changeRequirement","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_operation","type":"bytes32"},{"name":"_owner","type":"address"}],"name":"hasConfirmed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"name":"changeOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_dailyLimit","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_daylimit","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Revoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"}],"name":"OwnerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newRequirement","type":"uint256"}],"name":"RequirementChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"SingleTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"MultiTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"initiator","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"ConfirmationNeeded","type":"event"}]'
}]

},{}],6:[function(require,module,exports){
module.exports=[]

},{}],7:[function(require,module,exports){
'use strict';

var ajaxReq = function ajaxReq() {};
ajaxReq.http = null;
ajaxReq.postSerializer = null;
ajaxReq.getETHvalue = null;
ajaxReq.getRates = null;
module.exports = ajaxReq;

},{}],8:[function(require,module,exports){
'use strict';

var bity = function bity() {};
bity.SERVERURL = "https://bity.myetherapi.com";
bity.decimals = 6;
bity.ethExplorer = 'https://etherscan.io/tx/[[txHash]]';
bity.btcExplorer = 'https://blockchain.info/tx/[[txHash]]';
bity.validStatus = ["RCVE", "FILL", "CONF", "EXEC"];
bity.invalidStatus = ["CANC"];
bity.mainPairs = ['REP', 'ETH'];
bity.min = 0.01;
bity.max = 3;
bity.prototype.priceLoaded = false;
bity.prototype.refreshRates = function (callback) {
    var _this = this;
    ajaxReq.getRates(function (data) {
        _this.curRate = {};
        data.forEach(function (pair) {
            if (bity.mainPairs.indexOf(pair.pair.substring(3)) != -1) _this.curRate[pair.pair] = parseFloat(pair.rate_we_sell);else if (bity.mainPairs.indexOf(pair.pair.substring(0, 3)) != -1) _this.curRate[pair.pair] = parseFloat(pair.rate_we_buy);else _this.curRate[pair.pair] = parseFloat(pair.rate);
        });
        _this.priceLoaded = true;
        if (callback) callback();
    });
};
bity.prototype.openOrder = function (orderInfo, callback) {
    var _this = this;
    bity.post('/order', orderInfo, callback);
};
bity.prototype.getStatus = function (orderInfo, callback) {
    var _this = this;
    bity.post('/status', orderInfo, callback);
};
bity.prototype.requireLogin = function (callback) {
    if (this.token) callback();else this.login(callback);
};
bity.prototype.login = function (callback) {
    var _this = this;
    bity.post('/login', {}, function (data) {
        _this.token = data.data.token;
        if (callback) callback();
    });
};
bity.prototype.logout = function (callback) {
    var _this = this;
    bity.post('/logout', { token: _this.token }, function (data) {
        _this.token = null;
        if (callback) callback();
    });
};
bity.postConfig = {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
};
bity.get = function (path, callback) {
    ajaxReq.http.get(this.SERVERURL + path).then(function (data) {
        callback(data.data);
    }, function (data) {
        callback({ error: true, msg: "connection error", data: "" });
    });
};
bity.post = function (path, data, callback) {
    ajaxReq.http.post(this.SERVERURL + path, JSON.stringify(data), bity.postConfig).then(function (data) {
        callback(data.data);
    }, function (data) {
        callback({ error: true, msg: "connection error", data: "" });
    });
};
module.exports = bity;

},{}],9:[function(require,module,exports){
'use strict';

var addWalletCtrl = function addWalletCtrl($scope, $sce) {
	$scope.showBtnGen = $scope.showBtnUnlock = $scope.showBtnAdd = $scope.showBtnAddWallet = $scope.showAddWallet = $scope.requireFPass = $scope.requirePPass = $scope.showPassTxt = false;
	$scope.nickNames = [];
	$scope.filePassword = $scope.fileContent = "";
	$scope.wallet = null;
	$scope.addAccount = {
		address: "",
		nickName: "",
		encStr: "",
		password: ""
	};
	$scope.HDWallet = {
		numWallets: 0,
		walletsPerDialog: 5,
		wallets: [],
		id: 0,
		hdk: null,
		dPath: '',
		defaultDPath: "m/44'/60'/0'/0", // first address: m/44'/60'/0'/0/0
		alternativeDPath: "m/44'/60'/0'", // first address: m/44'/60'/0'/0
		customDPath: "m/44'/60'/1'/0"
	};
	$scope.HDWallet.dPath = $scope.HDWallet.defaultDPath;
	$scope.mnemonicModel = new Modal(document.getElementById('mnemonicModel'));
	$scope.onCustomHDDPathChange = function () {
		$scope.HDWallet.dPath = $scope.HDWallet.customDPath;
	};
	$scope.onPrivKeyChange = function () {
		$scope.addWalletStats = "";
		$scope.requirePPass = $scope.manualprivkey.length == 128 || $scope.manualprivkey.length == 132;
		$scope.showBtnUnlock = $scope.manualprivkey.length == 64;
	};
	$scope.onPrivKeyPassChange = function () {
		$scope.showBtnUnlock = $scope.privPassword.length > 6;
	};
	$scope.onMnemonicChange = function () {
		$scope.addWalletStats = "";
		$scope.showBtnUnlock = $scope.showDPaths = hd.bip39.validateMnemonic($scope.manualmnemonic);
	};
	$scope.showContent = function ($fileContent) {
		$scope.notifier.info(globalFuncs.successMsgs[4] + document.getElementById('fselector').files[0].name);
		try {
			$scope.requireFPass = Wallet.walletRequirePass($fileContent);
			$scope.showBtnUnlock = !$scope.requireFPass;
			$scope.fileContent = $fileContent;
		} catch (e) {
			$scope.notifier.danger(e);
		}
	};
	$scope.openFileDialog = function ($fileContent) {
		$scope.addWalletStats = "";
		document.getElementById('fselector').click();
	};
	$scope.onFilePassChange = function () {
		$scope.showBtnUnlock = $scope.filePassword.length >= 0;
	};
	$scope.setHDAddresses = function (start, limit) {
		$scope.HDWallet.wallets = [];
		for (var i = start; i < start + limit; i++) {
			$scope.HDWallet.wallets.push(new Wallet($scope.HDWallet.hdk.derive($scope.HDWallet.dPath + "/" + i)._privateKey));
			$scope.HDWallet.wallets[$scope.HDWallet.wallets.length - 1].setBalance(false);
		}
		$scope.HDWallet.id = 0;
		$scope.HDWallet.numWallets = start + limit;
	};
	$scope.AddRemoveHDAddresses = function (isAdd) {
		if (isAdd) $scope.setHDAddresses($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog);else $scope.setHDAddresses($scope.HDWallet.numWallets - 2 * $scope.HDWallet.walletsPerDialog, $scope.HDWallet.walletsPerDialog);
	};
	$scope.setHDWallet = function () {
		$scope.wallet = $scope.HDWallet.wallets[$scope.HDWallet.id];
		$scope.mnemonicModel.close();
		$scope.addAccount.address = $scope.wallet.getAddressString();
		$scope.notifier.info(globalFuncs.successMsgs[1]);
		$scope.showAddWallet = true;
		$scope.showPassTxt = $scope.addAccount.password == '';
		$scope.setBalance();
	};
	$scope.decryptWallet = function () {
		$scope.wallet = null;
		$scope.addWalletStats = "";
		try {
			if ($scope.walletType == "pasteprivkey" && $scope.requirePPass) {
				$scope.wallet = Wallet.fromMyEtherWalletKey($scope.manualprivkey, $scope.privPassword);
				$scope.addAccount.password = $scope.privPassword;
			} else if ($scope.walletType == "pasteprivkey" && !$scope.requirePPass) {
				$scope.wallet = new Wallet($scope.manualprivkey);
				$scope.addAccount.password = '';
			} else if ($scope.walletType == "fileupload") {
				$scope.wallet = Wallet.getWalletFromPrivKeyFile($scope.fileContent, $scope.filePassword);
				$scope.addAccount.password = $scope.filePassword;
			} else if ($scope.walletType == "pastemnemonic") {
				$scope.mnemonicModel.open();
				$scope.HDWallet.hdk = hd.HDKey.fromMasterSeed(hd.bip39.mnemonicToSeed($scope.manualmnemonic.trim()));
				$scope.HDWallet.numWallets = 0;
				$scope.setHDAddresses($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog);
			}
		} catch (e) {
			$scope.notifier.danger(globalFuncs.errorMsgs[6] + e);
		}
		if ($scope.wallet != null) {
			$scope.addAccount.address = $scope.wallet.getAddressString();
			$scope.notifier.info(globalFuncs.successMsgs[1]);
			$scope.showAddWallet = true;
			$scope.showPassTxt = $scope.addAccount.password == '';
			$scope.setBalance();
		}
	};
	$scope.setNickNames = function () {
		cxFuncs.getAllNickNames(function (nicks) {
			$scope.nickNames = nicks;
		});
	};
	$scope.setNickNames();
	$scope.newWalletChange = function (varStatus, shwbtn) {
		if ($scope.addAccount.nickName != "" && $scope.nickNames.indexOf($scope.addAccount.nickName) == -1 && $scope.addAccount.password.length > 8) $scope[shwbtn] = true;else $scope[shwbtn] = false;
		if ($scope.nickNames.indexOf($scope.addAccount.nickName) !== -1) $scope.notifier.danger(globalFuncs.errorMsgs[13]);
	};
	$scope.watchOnlyChange = function () {
		if ($scope.addAccount.address != "" && $scope.addAccount.nickName != "" && $scope.nickNames.indexOf($scope.addAccount.nickName) == -1 && ethFuncs.validateEtherAddress($scope.addAccount.address)) $scope.showBtnAdd = true;else $scope.showBtnAdd = false;
		if ($scope.addAccount.address != "" && !ethFuncs.validateEtherAddress($scope.addAccount.address)) $scope.notifier.danger(globalFuncs.errorMsgs[5]);else if ($scope.nickNames.indexOf($scope.addAccount.nickName) !== -1) $scope.notifier.danger(globalFuncs.errorMsgs[13]);
	};
	$scope.addWatchOnly = function () {
		if ($scope.nickNames.indexOf($scope.addAccount.nickName) !== -1) {
			$scope.notifier.danger(globalFuncs.errorMsgs[13]);
			return;
		} else if ($scope.nickNames.indexOf(ethUtil.toChecksumAddress($scope.addAccount.address)) !== -1) {
			$scope.notifier.danger(globalFuncs.errorMsgs[16]);
			return;
		}
		cxFuncs.addWatchOnlyAddress($scope.addAccount.address, $scope.addAccount.nickName, function () {
			if (chrome.runtime.lastError) {
				$scope.notifier.danger(chrome.runtime.lastError.message);
			} else {
				$scope.notifier.info(globalFuncs.successMsgs[3] + $scope.addAccount.address);
				$scope.setNickNames();
			}
			$scope.$apply();
		});
	};
	$scope.isStrongPass = function (pass) {
		return pass.length > 3;
	};
	$scope.$watch('walletType', function () {
		$scope.showBtnGen = $scope.showBtnUnlock = $scope.showBtnAdd = $scope.showAddWallet = false;
		$scope.addNewNick = $scope.addNewPass = "";
		$scope.addWalletStats = "";
	});
	$scope.addWalletToStorage = function () {
		if ($scope.nickNames.indexOf($scope.addAccount.nickName) !== -1) {
			$scope.notifier.danger(globalFuncs.errorMsgs[13]);
			return;
		} else if ($scope.nickNames.indexOf(ethUtil.toChecksumAddress($scope.addAccount.address)) !== -1) {
			$scope.notifier.danger(globalFuncs.errorMsgs[16]);
			return;
		}
		cxFuncs.addWalletToStorage($scope.addAccount.address, $scope.addAccount.encStr, $scope.addAccount.nickName, function () {
			if (chrome.runtime.lastError) {
				$scope.notifier.danger(chrome.runtime.lastError.message);
			} else {
				$scope.notifier.info(globalFuncs.successMsgs[3] + $scope.addAccount.address);
				$scope.setNickNames();
			}
			$scope.$apply();
		});
	};
	$scope.importWalletToStorage = function () {
		var wStr = $scope.wallet.toV3($scope.addAccount.password, {
			kdf: globalFuncs.kdf,
			n: globalFuncs.scrypt.n
		});
		$scope.addAccount.encStr = JSON.stringify(wStr);
		$scope.addWalletToStorage();
	};
	$scope.generateWallet = function () {
		var wallet = Wallet.generate(false);
		var wStr = wallet.toV3($scope.addAccount.password, {
			kdf: globalFuncs.kdf,
			n: globalFuncs.scrypt.n
		});
		$scope.addAccount.encStr = JSON.stringify(wStr);
		$scope.addAccount.address = wallet.getAddressString();
		$scope.addWalletToStorage('addWalletStats');
	};
	$scope.setBalance = function () {
		ajaxReq.getBalance($scope.wallet.getAddressString(), function (data) {
			if (data.error) {
				$scope.etherBalance = data.msg;
			} else {
				$scope.etherBalance = etherUnits.toEther(data.data.balance, 'wei');
				ajaxReq.getETHvalue(function (data) {
					$scope.usdBalance = etherUnits.toFiat($scope.etherBalance, 'ether', data.usd);
					$scope.eurBalance = etherUnits.toFiat($scope.etherBalance, 'ether', data.eur);
					$scope.btcBalance = etherUnits.toFiat($scope.etherBalance, 'ether', data.btc);
				});
			}
		});
	};
};
module.exports = addWalletCtrl;

},{}],10:[function(require,module,exports){
'use strict';

var cxDecryptWalletCtrl = function cxDecryptWalletCtrl($scope, $sce, walletService) {
	$scope.allWallets = [];
	$scope.selectedWallet = $scope.password = "";
	$scope.setAllWallets = function () {
		cxFuncs.getWalletsArr(function (wlts) {
			$scope.allWallets = wlts;
			$scope.updateBalance();
			$scope.$apply();
		});
	};
	$scope.updateBalance = function () {
		for (var i = 0; i < $scope.allWallets.length; i++) {
			$scope.setBalance($scope.allWallets[i].addr, i);
		}
	};
	$scope.setBalance = function (address, id) {
		ajaxReq.getBalance(address, function (data) {
			if (data.error) {
				$scope.allWallets[id].balance = data.msg;
			} else {
				$scope.allWallets[id].balance = etherUnits.toEther(data.data.balance, 'wei');
			}
		});
	};
	$scope.setAllWallets();
	$scope.getPrivFromAdd = function () {
		if ($scope.selectedWallet == "") throw globalFuncs.errorMsgs[5];
		for (var i = 0; i < $scope.allWallets.length; i++) {
			if ($scope.allWallets[i].addr == $scope.selectedWallet) return $scope.allWallets[i].priv;
		}
		throw globalFuncs.errorMsgs[14];
	};
	$scope.decryptWallet = function () {
		$scope.wallet = null;

		try {
			var priv = $scope.getPrivFromAdd();
			if (priv.length == 132) $scope.wallet = Wallet.fromMyEtherWalletKey(priv, $scope.password);else $scope.wallet = Wallet.getWalletFromPrivKeyFile(priv, $scope.password);
			walletService.password = $scope.password;
			walletService.wallet = $scope.wallet;
		} catch (e) {
			$scope.notifier.danger(globalFuncs.errorMsgs[6] + ":" + e);
		}
		if ($scope.wallet != null) $scope.notifier.info(globalFuncs.successMsgs[1]);
	};
};
module.exports = cxDecryptWalletCtrl;

},{}],11:[function(require,module,exports){
'use strict';

var mainPopCtrl = function mainPopCtrl($scope, $sce) {
	$scope.allWallets = [];
	$scope.allWatchOnly = [];
	$scope.setAllWallets = function () {
		cxFuncs.getWalletsArr(function (wlts) {
			$scope.allWallets = wlts;
			$scope.updateBalance('allWallets');
		});
		cxFuncs.getWatchOnlyArr(function (wlts) {
			$scope.allWatchOnly = wlts;
			$scope.updateBalance('allWatchOnly');
			$scope.$apply();
		});
	};
	$scope.updateBalance = function (varWal) {
		for (var i = 0; i < $scope[varWal].length; i++) {
			$scope.setBalance($scope[varWal][i].addr, i, varWal);
		}
	};
	$scope.setBalance = function (address, id, varWal) {
		ajaxReq.getBalance(address, function (data) {
			if (data.error) {
				$scope[varWal][id].balance = data.msg;
			} else {
				$scope[varWal][id].balance = etherUnits.toEther(data.data.balance, 'wei');
				$scope[varWal][id].balanceR = new BigNumber($scope[varWal][id].balance).toPrecision(5);
			}
		});
	};
	$scope.setAllWallets();
};
module.exports = mainPopCtrl;

},{}],12:[function(require,module,exports){
'use strict';

var myWalletsCtrl = function myWalletsCtrl($scope, $sce, walletService) {
    $scope.editModal = new Modal(document.getElementById('editWallet'));
    $scope.viewModal = new Modal(document.getElementById('viewWalletDetails'));
    $scope.removeModal = new Modal(document.getElementById('removeWallet'));
    $scope.allWallets = [];
    $scope.allWatchOnly = [];
    $scope.nickNames = [];
    $scope.fiatVal = {
        usd: 0,
        eur: 0,
        btc: 0
    };
    $scope.viewWallet = {};
    $scope.ajaxReq = ajaxReq;
    $scope.setNickNames = function () {
        cxFuncs.getAllNickNames(function (nicks) {
            $scope.nickNames = nicks;
        });
    };
    $scope.setAllWallets = function () {
        cxFuncs.getWalletsArr(function (wlts) {
            $scope.allWallets = wlts;
            $scope.updateBalance('allWallets');
            $scope.setTokens('allWallets');
        });
        cxFuncs.getWatchOnlyArr(function (wlts) {
            $scope.allWatchOnly = wlts;
            $scope.updateBalance('allWatchOnly');
            $scope.setTokens('allWatchOnly');
        });
    };
    $scope.$watch('ajaxReq.key', function () {
        if ($scope.allWallets) {
            $scope.updateBalance('allWallets');
            $scope.setTokens('allWallets');
        }
        if ($scope.allWatchOnly) {
            $scope.updateBalance('allWatchOnly');
            $scope.setTokens('allWatchOnly');
        }
    });
    $scope.setTokens = function (varWal) {
        for (var j = 0; j < $scope[varWal].length; j++) {
            $scope.tokens = Token.popTokens;
            $scope[varWal][j].tokens = [];
            for (var i = 0; i < $scope.tokens.length; i++) {
                $scope[varWal][j].tokens.push(new Token($scope.tokens[i].address, $scope[varWal][j].addr, $scope.tokens[i].symbol, $scope.tokens[i].decimal));
                $scope[varWal][j].tokens[$scope[varWal][j].tokens.length - 1].setBalance();
            }
            var storedTokens = localStorage.getItem("localTokens") != null ? JSON.parse(localStorage.getItem("localTokens")) : [];
            for (var i = 0; i < storedTokens.length; i++) {
                $scope[varWal][j].tokens.push(new Token(storedTokens[i].contractAddress, $scope[varWal][j].addr, globalFuncs.stripTags(storedTokens[i].symbol), storedTokens[i].decimal));
                $scope[varWal][j].tokens[$scope[varWal][j].tokens.length - 1].setBalance();
            }
        }
    };
    $scope.updateBalance = function (varWal) {
        for (var i = 0; i < $scope[varWal].length; i++) {
            $scope.setBalance($scope[varWal][i].addr, i, varWal);
        }
    };
    $scope.setBalance = function (address, id, varWal) {
        ajaxReq.getBalance(address, function (data) {
            if (data.error) {
                $scope[varWal][id].balance = data.msg;
            } else {
                $scope[varWal][id].balance = etherUnits.toEther(data.data.balance, 'wei');
                $scope[varWal][id].balanceR = new BigNumber($scope[varWal][id].balance).toPrecision(5);
                $scope[varWal][id].usd = etherUnits.toFiat($scope[varWal][id].balance, 'ether', $scope.fiatVal.usd);
                $scope[varWal][id].eur = etherUnits.toFiat($scope[varWal][id].balance, 'ether', $scope.fiatVal.eur);
                $scope[varWal][id].btc = etherUnits.toFiat($scope[varWal][id].balance, 'ether', $scope.fiatVal.btc);
            }
        });
    };
    $scope.setViewWalletObj = function (val, type) {
        var vtype = 'allWallets';
        if (type == 'watchOnly') vtype = 'allWatchOnly';
        $scope.viewWallet = {
            nick: $scope[vtype][val].nick,
            addr: $scope[vtype][val].addr,
            id: val,
            type: type
        };
    };
    $scope.editMWallet = function (val, type) {
        $scope.setViewWalletObj(val, type);
        $scope.editModal.open();
    };
    $scope.editSave = function () {
        if ($scope.nickNames.indexOf($scope.viewWallet.nick) !== -1) {
            $scope.notifier.danger(globalFuncs.errorMsgs[13]);
            return;
        } else {
            cxFuncs.editNickName($scope.viewWallet.addr, $scope.viewWallet.nick, function () {
                if (chrome.runtime.lastError) $scope.notifier.danger(chrome.runtime.lastError.message);else {
                    $scope.setAllWallets();
                    $scope.setNickNames();
                    $scope.editModal.close();
                }
            });
        }
    };
    $scope.viewMWallet = function (val, type) {
        $scope.setViewWalletObj(val, type);
        $scope.viewModal.open();
    };
    $scope.decryptWallet = function () {
        $scope.wallet = null;

        try {
            var priv = $scope.allWallets[$scope.viewWallet.id].priv;
            if (priv.length == 132) $scope.wallet = Wallet.fromMyEtherWalletKey(priv, $scope.password);else $scope.wallet = Wallet.getWalletFromPrivKeyFile(priv, $scope.password);
            $scope.viewModal.close();
            $scope.setWalletInfo();
            $scope.password = "";
        } catch (e) {
            $scope.notifier.danger(globalFuncs.errorMsgs[6] + ":" + e);
        }
    };
    $scope.printQRCode = function () {
        globalFuncs.printPaperWallets(JSON.stringify([{
            address: $scope.wallet.getChecksumAddressString(),
            private: $scope.wallet.getPrivateKeyString()
        }]));
    };
    $scope.resetWallet = function () {
        $scope.wallet = null;
        walletService.wallet = null;
        walletService.password = '';
        $scope.blob = $scope.blobEnc = $scope.password = "";
    };
    $scope.setWalletInfo = function () {
        walletService.wallet = $scope.wallet;
        walletService.password = $scope.password;
    };
    $scope.deleteWalletMsg = function (val, type) {
        $scope.setViewWalletObj(val, type);
        $scope.removeModal.open();
    };
    $scope.deleteWallet = function () {
        cxFuncs.deleteAccount($scope.viewWallet.addr, function () {
            $scope.setAllWallets();
            $scope.setNickNames();
            $scope.removeModal.close();
        });
    };
    ajaxReq.getETHvalue(function (data) {
        $scope.fiatVal.usd = data.usd;
        $scope.fiatVal.eur = data.eur;
        $scope.fiatVal.btc = data.btc;
        $scope.setAllWallets();
    });
    $scope.setNickNames();
};
module.exports = myWalletsCtrl;

},{}],13:[function(require,module,exports){
'use strict';

var quickSendCtrl = function quickSendCtrl($scope, $sce) {
	$scope.allWallets = [];
	$scope.selectedWallet = "";
	$scope.showConfirm = false;
	$scope.tx = {
		gasLimit: globalFuncs.defaultTxGasLimit,
		data: "",
		to: "",
		unit: "ether",
		value: "",
		nonce: null,
		gasPrice: null,
		donate: false
	};
	$scope.setAllWallets = function () {
		cxFuncs.getWalletsArr(function (wlts) {
			$scope.allWallets = wlts;
			$scope.updateBalance('allWallets');
		});
	};
	$scope.updateBalance = function (varWal) {
		for (var i = 0; i < $scope[varWal].length; i++) {
			$scope.setBalance($scope[varWal][i].addr, i, varWal);
		}
	};
	$scope.setBalance = function (address, id, varWal) {
		ajaxReq.getBalance(address, function (data) {
			if (data.error) {
				$scope[varWal][id].balance = data.msg;
			} else {
				$scope[varWal][id].balance = etherUnits.toEther(data.data.balance, 'wei');
				$scope[varWal][id].balanceR = new BigNumber($scope[varWal][id].balance).toPrecision(5);
			}
		});
	};
	$scope.validateAddress = function () {
		if (ethFuncs.validateEtherAddress($scope.tx.to)) {
			$scope.validateAddressStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[0]));
		} else {
			$scope.validateAddressStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[5]));
		}
	};
	$scope.transferAllBalance = function () {
		$scope.wallet = {};
		$scope.wallet.getAddressString = function () {
			return $scope.allWallets[$scope.selectedWallet].addr;
		};
		uiFuncs.transferAllBalance($scope.wallet.getAddressString(), $scope.tx.gasLimit, function (resp) {
			if (!resp.isError) {
				$scope.tx.unit = resp.unit;
				$scope.tx.value = resp.value;
			} else {
				$scope.validateTxStatus = $sce.trustAsHtml(resp.error);
			}
		});
	};
	$scope.prepTX = function () {
		try {
			if (!ethFuncs.validateEtherAddress($scope.tx.to)) throw globalFuncs.errorMsgs[5];else if (!globalFuncs.isNumeric($scope.tx.value) || parseFloat($scope.tx.value) < 0) throw globalFuncs.errorMsgs[0];
			$scope.showConfirm = true;
		} catch (e) {
			$scope.prepTXStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
		}
	};
	$scope.unlockAndSend = function () {
		try {
			$scope.decryptWallet();
			var txData = uiFuncs.getTxData($scope);
			uiFuncs.generateTx(txData, function (rawTx) {
				if (!rawTx.isError) {
					uiFuncs.sendTx(rawTx.signedTx, function (resp) {
						if (!resp.isError) {
							$scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[2] + "<br />" + resp.data + "<br /><a href='http://etherscan.io/tx/" + resp.data + "' target='_blank'> ETH TX via EtherScan.io </a>"));
							$scope.setBalance();
						} else {
							$scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(resp.error));
						}
					});
					$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(''));
				} else {
					$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(rawTx.error));
				}
			});
		} catch (e) {
			$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
		}
	};
	$scope.decryptWallet = function () {
		$scope.wallet = null;
		$scope.validateTxStatus = "";
		$scope.wallet = Wallet.getWalletFromPrivKeyFile($scope.allWallets[$scope.selectedWallet].priv, $scope.password);
	};
	$scope.setAllWallets();
};
module.exports = quickSendCtrl;

},{}],14:[function(require,module,exports){
'use strict';

var bulkGenCtrl = function bulkGenCtrl($scope) {
    $scope.showWallets = false;
    $scope.genWallets = function () {
        if ($scope.amount == '' || $scope.amount != parseInt($scope.amount, 10)) alert(globalFuncs.errorMsgs[0]);else {
            $scope.wallets = [];
            var csv = '';var txt = '';
            $scope.jsonWallets = [];
            for (var i = 0; i < $scope.amount; i++) {
                var tWallet = Wallet.generate(false);
                csv += tWallet.getChecksumAddressString() + ',' + tWallet.getPrivateKeyString() + '\n';
                txt += tWallet.getChecksumAddressString() + '\t' + tWallet.getPrivateKeyString() + '\n';
                $scope.jsonWallets.push({
                    address: tWallet.getChecksumAddressString(),
                    private: tWallet.getPrivateKeyString()
                });
                $scope.wallets.push(tWallet);
            }
            $scope.showWallets = true;
            $scope.bJSON = globalFuncs.getBlob("text/json;charset=UTF-8", JSON.stringify($scope.jsonWallets));
            $scope.bTXT = globalFuncs.getBlob("text/plain;charset=UTF-8", txt);
            $scope.bCSV = globalFuncs.getBlob("text/csv;charset=UTF-8", csv);
        }
    };
    $scope.printQRCode = function () {
        globalFuncs.printPaperWallets(JSON.stringify($scope.jsonWallets));
    };
};
module.exports = bulkGenCtrl;

},{}],15:[function(require,module,exports){
'use strict';

var contractsCtrl = function contractsCtrl($scope, $sce, walletService) {
    $scope.ajaxReq = ajaxReq;
    walletService.wallet = null;
    $scope.visibility = "interactView";
    $scope.sendContractModal = new Modal(document.getElementById('sendContract'));
    $scope.showReadWrite = false;
    $scope.sendTxModal = new Modal(document.getElementById('deployContract'));
    $scope.Validator = Validator;
    $scope.tx = {
        gasLimit: '',
        data: '',
        to: '',
        unit: "ether",
        value: 0,
        nonce: null,
        gasPrice: null
    };
    $scope.contract = {
        address: globalFuncs.urlGet('address') != null && $scope.Validator.isValidAddress(globalFuncs.urlGet('address')) ? globalFuncs.urlGet('address') : '',
        abi: '',
        functions: [],
        selectedFunc: null
    };
    $scope.selectedAbi = ajaxReq.abiList[0];
    $scope.showRaw = false;
    $scope.$watch(function () {
        if (walletService.wallet == null) return null;
        return walletService.wallet.getAddressString();
    }, function () {
        if (walletService.wallet == null) return;
        $scope.wallet = walletService.wallet;
        $scope.wd = true;
        $scope.tx.nonce = 0;
    });
    $scope.$watch('visibility', function (newValue, oldValue) {
        $scope.tx = {
            gasLimit: '',
            data: '',
            to: '',
            unit: "ether",
            value: 0,
            nonce: null,
            gasPrice: null
        };
    });
    $scope.$watch('tx', function (newValue, oldValue) {
        $scope.showRaw = false;
        if (newValue.gasLimit == oldValue.gasLimit && $scope.Validator.isValidHex($scope.tx.data) && $scope.tx.data != '' && $scope.Validator.isPositiveNumber($scope.tx.value)) {
            if ($scope.estimateTimer) clearTimeout($scope.estimateTimer);
            $scope.estimateTimer = setTimeout(function () {
                $scope.estimateGasLimit();
            }, 500);
        }
    }, true);
    $scope.$watch('contract.address', function (newValue, oldValue) {
        if ($scope.Validator.isValidAddress($scope.contract.address)) {
            for (var i in ajaxReq.abiList) {
                if (ajaxReq.abiList[i].address.toLowerCase() == $scope.contract.address.toLowerCase()) {
                    $scope.contract.abi = ajaxReq.abiList[i].abi;
                    break;
                }
            }
        }
    });
    $scope.selectExistingAbi = function (index) {
        $scope.selectedAbi = ajaxReq.abiList[index];
        $scope.contract.address = $scope.selectedAbi.address;
        $scope.dropdownExistingContracts = false;
    };
    $scope.estimateGasLimit = function () {
        var estObj = {
            from: $scope.wallet != null ? $scope.wallet.getAddressString() : globalFuncs.donateAddress,
            value: ethFuncs.sanitizeHex(ethFuncs.decimalToHex(etherUnits.toWei($scope.tx.value, $scope.tx.unit))),
            data: ethFuncs.sanitizeHex($scope.tx.data)
        };
        if ($scope.tx.to != '') estObj.to = $scope.tx.to;
        ethFuncs.estimateGas(estObj, function (data) {
            if (!data.error) $scope.tx.gasLimit = data.data;
        });
    };
    $scope.generateTx = function () {
        try {
            if ($scope.wallet == null) throw globalFuncs.errorMsgs[3];else if (!ethFuncs.validateHexString($scope.tx.data)) throw globalFuncs.errorMsgs[9];else if (!globalFuncs.isNumeric($scope.tx.gasLimit) || parseFloat($scope.tx.gasLimit) <= 0) throw globalFuncs.errorMsgs[8];
            $scope.tx.data = ethFuncs.sanitizeHex($scope.tx.data);
            ajaxReq.getTransactionData($scope.wallet.getAddressString(), function (data) {
                if (data.error) $scope.notifier.danger(data.msg);
                data = data.data;
                $scope.tx.to = $scope.tx.to == '' ? '0xCONTRACT' : $scope.tx.to;
                $scope.tx.contractAddr = $scope.tx.to == '0xCONTRACT' ? ethFuncs.getDeteministicContractAddress($scope.wallet.getAddressString(), data.nonce) : '';
                var txData = uiFuncs.getTxData($scope);
                uiFuncs.generateTx(txData, function (rawTx) {
                    if (!rawTx.isError) {
                        $scope.rawTx = rawTx.rawTx;
                        $scope.signedTx = rawTx.signedTx;

                        $scope.showRaw = true;
                    } else {
                        $scope.showRaw = false;
                        $scope.notifier.danger(rawTx.error);
                    }
                    if (!$scope.$$phase) $scope.$apply();
                });
            });
        } catch (e) {
            $scope.notifier.danger(e);
        }
    };
    $scope.sendTx = function () {
        $scope.sendTxModal.close();
        $scope.sendContractModal.close();
        uiFuncs.sendTx($scope.signedTx, function (resp) {
            if (!resp.isError) {
                var bExStr = $scope.ajaxReq.type != nodes.nodeTypes.Custom ? "<a href='" + $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data) + "' target='_blank'> View your transaction </a>" : '';
                var contractAddr = $scope.tx.contractAddr != '' ? " & Contract Address <a href='" + ajaxReq.blockExplorerAddr.replace('[[address]]', $scope.tx.contractAddr) + "' target='_blank'>" + $scope.tx.contractAddr + "</a>" : '';
                $scope.notifier.success(globalFuncs.successMsgs[2] + "<br />" + resp.data + "<br />" + bExStr + contractAddr);
            } else {
                $scope.notifier.danger(resp.error);
            }
        });
    };
    $scope.setVisibility = function (str) {
        $scope.visibility = str;
    };
    $scope.selectFunc = function (index) {
        $scope.contract.selectedFunc = { name: $scope.contract.functions[index].name, index: index };
        if (!$scope.contract.functions[index].inputs.length) {
            $scope.readFromContract();
            $scope.showRead = false;
        } else $scope.showRead = true;
        $scope.dropdownContracts = !$scope.dropdownContracts;
    };
    $scope.getTxData = function () {
        var curFunc = $scope.contract.functions[$scope.contract.selectedFunc.index];
        var fullFuncName = ethUtil.solidityUtils.transformToFullName(curFunc);
        var funcSig = ethFuncs.getFunctionSignature(fullFuncName);
        var typeName = ethUtil.solidityUtils.extractTypeName(fullFuncName);
        var types = typeName.split(',');
        types = types[0] == "" ? [] : types;
        var values = [];
        for (var i in curFunc.inputs) {
            if (curFunc.inputs[i].value) {
                if (curFunc.inputs[i].type.indexOf('[') !== -1 && curFunc.inputs[i].type.indexOf(']') !== -1) values.push(curFunc.inputs[i].value.split(','));else values.push(curFunc.inputs[i].value);
            } else values.push('');
        }
        return '0x' + funcSig + ethUtil.solidityCoder.encodeParams(types, values);
    };
    $scope.readFromContract = function () {
        ajaxReq.getEthCall({ to: $scope.contract.address, data: $scope.getTxData() }, function (data) {
            if (!data.error) {
                var curFunc = $scope.contract.functions[$scope.contract.selectedFunc.index];
                var outTypes = curFunc.outputs.map(function (i) {
                    return i.type;
                });
                var decoded = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''));
                for (var i in decoded) {
                    if (decoded[i] instanceof BigNumber) curFunc.outputs[i].value = decoded[i].toFixed(0);else curFunc.outputs[i].value = decoded[i];
                }
            } else throw data.msg;
        });
    };
    $scope.initContract = function () {
        try {
            if (!$scope.Validator.isValidAddress($scope.contract.address)) throw globalFuncs.errorMsgs[5];else if (!$scope.Validator.isJSON($scope.contract.abi)) throw globalFuncs.errorMsgs[26];
            $scope.contract.functions = [];
            var tAbi = JSON.parse($scope.contract.abi);
            for (var i in tAbi) {
                if (tAbi[i].type == "function") {
                    tAbi[i].inputs.map(function (i) {
                        i.value = '';
                    });
                    $scope.contract.functions.push(tAbi[i]);
                }
            }$scope.showReadWrite = true;
        } catch (e) {
            $scope.notifier.danger(e);
        }
    };
    $scope.generateContractTx = function () {
        if (!$scope.wd) {
            $scope.notifier.danger(globalFuncs.errorMsgs[3]);
            return;
        }
        $scope.tx.data = $scope.getTxData();
        $scope.tx.to = $scope.contract.address;
        $scope.sendContractModal.open();
    };
};
module.exports = contractsCtrl;

},{}],16:[function(require,module,exports){
(function (Buffer){
'use strict';

var decryptWalletCtrl = function decryptWalletCtrl($scope, $sce, walletService) {
    var hval = window.location.hash;
    $scope.walletType = "";
    $scope.requireFPass = $scope.requirePPass = $scope.showFDecrypt = $scope.showPDecrypt = $scope.showAOnly = $scope.showParityDecrypt = false;
    $scope.filePassword = "";
    $scope.fileContent = "";
    $scope.Validator = Validator;
    $scope.isSSL = window.location.protocol == 'https:';
    $scope.isChrome = true;
    $scope.ajaxReq = ajaxReq;
    $scope.nodeType = $scope.ajaxReq.type;
    $scope.HDWallet = {
        numWallets: 0,
        walletsPerDialog: 5,
        wallets: [],
        id: 0,
        hdk: null,
        dPath: '',
        defaultDPath: "m/44'/60'/0'/0", // first address: m/44'/60'/0'/0/0
        alternativeDPath: "m/44'/60'/0'", // first address: m/44'/60'/0/0
        customDPath: "m/44'/60'/1'/0", // first address: m/44'/60'/1'/0/0
        ledgerPath: "m/44'/60'/0'", // first address: m/44'/60'/0/0
        ledgerClassicPath: "m/44'/60'/160720'/0'", // first address: m/44'/60'/160720'/0/0
        trezorTestnetPath: "m/44'/1'/0'/0", // first address: m/44'/1'/0'/0/0
        trezorClassicPath: "m/44'/61'/0'/0", // first address: m/44'/61'/0'/0/0
        trezorPath: "m/44'/60'/0'/0" };
    $scope.HDWallet.dPath = $scope.HDWallet.defaultDPath;
    $scope.mnemonicModel = new Modal(document.getElementById('mnemonicModel'));
    $scope.$watch('ajaxReq.type', function () {
        $scope.nodeType = $scope.ajaxReq.type;
    });
    $scope.$watch('walletType', function () {
        if ($scope.walletType == "ledger") {
            switch ($scope.nodeType) {
                case nodes.nodeTypes.ETH:
                    $scope.HDWallet.dPath = $scope.HDWallet.ledgerPath;
                    break;
                case nodes.nodeTypes.ETC:
                    $scope.HDWallet.dPath = $scope.HDWallet.ledgerClassicPath;
                    break;
                default:
                    $scope.HDWallet.dPath = $scope.HDWallet.ledgerPath;
            }
        } else if ($scope.walletType == "trezor") {
            switch ($scope.nodeType) {
                case nodes.nodeTypes.ETH:
                    $scope.HDWallet.dPath = $scope.HDWallet.trezorPath;
                    break;
                case nodes.nodeTypes.ETC:
                    $scope.HDWallet.dPath = $scope.HDWallet.trezorClassicPath;
                    break;
                case nodes.nodeTypes.Ropsten:
                    $scope.HDWallet.dPath = $scope.HDWallet.trezorTestnetPath;
                    break;
                default:
                    $scope.HDWallet.dPath = $scope.HDWallet.trezorPath;
            }
        } else {
            $scope.HDWallet.dPath = $scope.HDWallet.defaultDPath;
        }
    });
    $scope.onHDDPathChange = function () {
        var password = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $scope.mnemonicPassword;

        $scope.HDWallet.numWallets = 0;
        if ($scope.walletType == 'pastemnemonic') {
            $scope.HDWallet.hdk = hd.HDKey.fromMasterSeed(hd.bip39.mnemonicToSeed($scope.manualmnemonic.trim(), password));
            $scope.setHDAddresses($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog);
        } else if ($scope.walletType == 'ledger') {
            $scope.scanLedger();
        } else if ($scope.walletType == 'trezor') {
            $scope.scanTrezor();
        }
    };
    $scope.onCustomHDDPathChange = function () {
        $scope.HDWallet.dPath = $scope.HDWallet.customDPath;
        $scope.onHDDPathChange();
    };
    $scope.showContent = function ($fileContent) {
        $scope.notifier.info(globalFuncs.successMsgs[4] + document.getElementById('fselector').files[0].name);
        try {
            $scope.requireFPass = Wallet.walletRequirePass($fileContent);
            $scope.showFDecrypt = !$scope.requireFPass;
            $scope.fileContent = $fileContent;
        } catch (e) {
            $scope.notifier.danger(e);
        }
    };
    $scope.openFileDialog = function ($fileContent) {
        document.getElementById('fselector').click();
    };
    $scope.onFilePassChange = function () {
        $scope.showFDecrypt = $scope.filePassword.length >= 0;
    };
    $scope.onPrivKeyChange = function () {
        var manualprivkey = fixPkey($scope.manualprivkey);

        $scope.requirePPass = manualprivkey.length == 128 || manualprivkey.length == 132;
        $scope.showPDecrypt = manualprivkey.length == 64;
    };
    $scope.onPrivKeyPassChange = function () {
        $scope.showPDecrypt = $scope.privPassword.length > 0;
    };
    $scope.onMnemonicChange = function () {
        $scope.showMDecrypt = hd.bip39.validateMnemonic($scope.manualmnemonic);
    };
    $scope.onParityPhraseChange = function () {
        if ($scope.parityPhrase) $scope.showParityDecrypt = true;else $scope.showParityDecrypt = false;
    };
    $scope.onAddressChange = function () {
        $scope.showAOnly = $scope.Validator.isValidAddress($scope.addressOnly);
    };
    $scope.setHDAddresses = function (start, limit) {
        $scope.HDWallet.wallets = [];
        for (var i = start; i < start + limit; i++) {
            $scope.HDWallet.wallets.push(new Wallet($scope.HDWallet.hdk.derive($scope.HDWallet.dPath + "/" + i)._privateKey));
            $scope.HDWallet.wallets[$scope.HDWallet.wallets.length - 1].setBalance(false);
        }
        $scope.HDWallet.id = 0;
        $scope.HDWallet.numWallets = start + limit;
    };
    $scope.setHDAddressesHWWallet = function (start, limit, ledger) {
        $scope.HDWallet.wallets = [];
        for (var i = start; i < start + limit; i++) {
            var derivedKey = $scope.HDWallet.hdk.derive("m/" + i);
            if (ledger) {
                $scope.HDWallet.wallets.push(new Wallet(undefined, derivedKey.publicKey, $scope.HDWallet.dPath + "/" + i, "ledger", $scope.ledger));
            } else {
                $scope.HDWallet.wallets.push(new Wallet(undefined, derivedKey.publicKey, $scope.HDWallet.dPath + "/" + i, "trezor"));
            }
            $scope.HDWallet.wallets[$scope.HDWallet.wallets.length - 1].type = "addressOnly";
            $scope.HDWallet.wallets[$scope.HDWallet.wallets.length - 1].setBalance(false);
        }
        $scope.HDWallet.id = 0;
        $scope.HDWallet.numWallets = start + limit;
    };
    $scope.AddRemoveHDAddresses = function (isAdd) {
        if ($scope.walletType == "ledger" || $scope.walletType == "trezor") {
            var ledger = $scope.walletType == "ledger";
            if (isAdd) $scope.setHDAddressesHWWallet($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog, ledger);else $scope.setHDAddressesHWWallet($scope.HDWallet.numWallets - 2 * $scope.HDWallet.walletsPerDialog, $scope.HDWallet.walletsPerDialog, ledger);
        } else {
            if (isAdd) $scope.setHDAddresses($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog);else $scope.setHDAddresses($scope.HDWallet.numWallets - 2 * $scope.HDWallet.walletsPerDialog, $scope.HDWallet.walletsPerDialog);
        }
    };
    $scope.setHDWallet = function () {
        walletService.wallet = $scope.wallet = $scope.HDWallet.wallets[$scope.HDWallet.id];
        $scope.mnemonicModel.close();
        $scope.notifier.info(globalFuncs.successMsgs[1]);
    };
    $scope.decryptWallet = function () {
        $scope.wallet = null;
        try {
            if ($scope.showPDecrypt && $scope.requirePPass) {
                $scope.wallet = Wallet.fromMyEtherWalletKey($scope.manualprivkey, $scope.privPassword);
                walletService.password = $scope.privPassword;
            } else if ($scope.showPDecrypt && !$scope.requirePPass) {
                $scope.wallet = new Wallet(fixPkey($scope.manualprivkey));
                walletService.password = '';
            } else if ($scope.showFDecrypt) {
                $scope.wallet = Wallet.getWalletFromPrivKeyFile($scope.fileContent, $scope.filePassword);
                walletService.password = $scope.filePassword;
            } else if ($scope.showMDecrypt) {
                $scope.mnemonicModel = new Modal(document.getElementById('mnemonicModel'));
                $scope.mnemonicModel.open();
                $scope.onHDDPathChange($scope.mnemonicPassword);
            } else if ($scope.showParityDecrypt) {
                $scope.wallet = Wallet.fromParityPhrase($scope.parityPhrase);
            }
            walletService.wallet = $scope.wallet;
        } catch (e) {
            $scope.notifier.danger(globalFuncs.errorMsgs[6] + e);
        }
        if ($scope.wallet != null) $scope.notifier.info(globalFuncs.successMsgs[1]);
    };
    //  $scope.$watch('init', function () {
    //      if(globalFuncs.getUrlParameter(hval)) {
    //          $scope.walletType = "addressOnly";
    //          $scope.addressOnly = globalFuncs.getUrlParameter(hval);
    //          $scope.decryptAddressOnly();
    //      }
    //  });
    $scope.decryptAddressOnly = function () {
        if ($scope.Validator.isValidAddress($scope.addressOnly)) {
            var tempWallet = new Wallet();
            $scope.wallet = {
                type: "addressOnly",
                address: $scope.addressOnly,
                getAddressString: function getAddressString() {
                    return this.address;
                },
                getChecksumAddressString: function getChecksumAddressString() {
                    return ethUtil.toChecksumAddress(this.getAddressString());
                },
                setBalance: tempWallet.setBalance,
                setTokens: tempWallet.setTokens
            };
            $scope.notifier.info(globalFuncs.successMsgs[1]);
            walletService.wallet = $scope.wallet;
            //globalFuncs.setUrlParameter($scope.addressOnly);
        }
    };
    $scope.HWWalletCreate = function (publicKey, chainCode, ledger, path) {
        $scope.mnemonicModel = new Modal(document.getElementById('mnemonicModel'));
        $scope.mnemonicModel.open();
        $scope.HDWallet.hdk = new hd.HDKey();
        $scope.HDWallet.hdk.publicKey = new Buffer(publicKey, 'hex');
        $scope.HDWallet.hdk.chainCode = new Buffer(chainCode, 'hex');
        $scope.HDWallet.numWallets = 0;
        $scope.HDWallet.dPath = path;
        $scope.setHDAddressesHWWallet($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog, ledger);
        walletService.wallet = null;
    };
    $scope.ledgerCallback = function (result, error) {
        if (typeof result != "undefined") {
            $scope.HWWalletCreate(result['publicKey'], result['chainCode'], true, $scope.getLedgerPath());
        }
    };
    $scope.trezorCallback = function (response) {
        if (response.success) {
            $scope.HWWalletCreate(response.publicKey, response.chainCode, false, $scope.getTrezorPath());
        } else {
            $scope.trezorError = true;
            $scope.trezorErrorString = response.error;
            $scope.$apply();
        }
    };
    $scope.scanLedger = function () {
        $scope.ledger = new Ledger3("w0w");
        var app = new ledgerEth($scope.ledger);
        var path = $scope.getLedgerPath();
        app.getAddress(path, $scope.ledgerCallback, false, true);
    };
    $scope.scanTrezor = function () {
        // trezor is using the path without change level id
        var path = $scope.getTrezorPath();
        TrezorConnect.getXPubKey(path, $scope.trezorCallback, '1.4.0');
    };
    $scope.getLedgerPath = function () {
        return $scope.HDWallet.dPath;
    };
    $scope.getTrezorPath = function () {
        return $scope.HDWallet.dPath;
    };

    // helper function that removes 0x prefix from strings
    function fixPkey(key) {
        if (key.indexOf('0x') === 0) {
            return key.slice(2);
        }
        return key;
    }
};
module.exports = decryptWalletCtrl;

}).call(this,require("buffer").Buffer)
},{"buffer":174}],17:[function(require,module,exports){
'use strict';

var ensCtrl = function ensCtrl($scope, $sce, walletService) {
    $scope.ajaxReq = ajaxReq;
    $scope.hideEnsInfoPanel = false;
    walletService.wallet = null;
    $scope.ensConfirmModalModal = new Modal(document.getElementById('ensConfirmModal'));
    $scope.ensFinalizeModal = new Modal(document.getElementById('ensFinalizeConfirm'));
    $scope.Validator = Validator;
    $scope.wd = false;
    var ENS = new ens();
    $scope.ensModes = ens.modes;
    $scope.minNameLength = 7;
    $scope.objENS = {
        bidValue: 0.01,
        dValue: 0.01,
        name: '',
        namehash: '',
        nameSHA3: '',
        nameReadOnly: false,
        resolvedAddress: null,
        revealObject: null,
        secret: hd.bip39.generateMnemonic().split(" ").splice(0, 3).join(" "),
        status: -1,
        timer: null,
        timeRemaining: null,
        timeRemainingReveal: null,
        txSent: false
    };
    $scope.gasLimitDefaults = {
        startAuction: '200000',
        newBid: '500000',
        reveal: '200000',
        finalize: '200000'
    };
    $scope.tx = {
        gasLimit: '500000',
        data: '',
        to: '',
        unit: "ether",
        value: 0,
        gasPrice: null
    };
    $scope.showENS = function () {
        return nodes.ensNodeTypes.indexOf(ajaxReq.type) > -1;
    };
    $scope.$watch(function () {
        if (walletService.wallet == null) return null;
        return walletService.wallet.getAddressString();
    }, function () {
        if (walletService.wallet == null) return;
        $scope.wallet = walletService.wallet;
        $scope.wd = true;
        $scope.objENS.nameReadOnly = true;
        $scope.wallet.setBalance();
        $scope.wallet.setTokens();
    });
    $scope.getCurrentTime = function () {
        return new Date().toString();
    };
    var updateScope = function updateScope() {
        if (!$scope.$$phase) $scope.$apply();
    };
    var timeRem = function timeRem(timeUntil) {
        var rem = timeUntil - new Date();
        if (rem < 0) {
            clearInterval($scope.objENS.timer);
            $scope.objENS.timeRemaining = "EXPIRED";
            return;
        }
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var days = Math.floor(rem / _day);
        var hours = Math.floor(rem % _day / _hour);
        var minutes = Math.floor(rem % _hour / _minute);
        var seconds = Math.floor(rem % _minute / _second);
        days = days < 10 ? '0' + days : days;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        $scope.objENS.timeRemaining = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ';
        $scope.objENS.timeRemainingReveal = days - 2 + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ';
        updateScope();
    };
    $scope.nameOnChange = function () {
        $scope.objENS.status = -1;
        $scope.objENS.timeRemaining = null;
        clearInterval($scope.objENS.timer);
    };
    $scope.checkName = function () {
        if ($scope.Validator.isValidENSName($scope.objENS.name) && $scope.objENS.name.indexOf('.') == -1) {
            $scope.objENS.name = ens.normalise($scope.objENS.name);
            $scope.objENS.namehash = ens.getNameHash($scope.objENS.name + '.eth');
            $scope.objENS.nameSHA3 = ENS.getSHA3($scope.objENS.name);
            $scope.hideEnsInfoPanel = true;
            ENS.getAuctionEntries($scope.objENS.name, function (data) {
                if (data.error) $scope.notifier.danger(data.msg);else {
                    var entries = data.data;
                    for (var key in entries) {
                        $scope.objENS[key] = entries[key];
                    }switch ($scope.objENS.status) {
                        case $scope.ensModes.owned:
                            ENS.getOwner($scope.objENS.name + '.eth', function (data) {
                                $scope.objENS.owner = data.data;
                            });
                            ENS.getDeedOwner($scope.objENS.deed, function (data) {
                                $scope.objENS.deedOwner = data.data;
                            });
                            ENS.getAddress($scope.objENS.name + '.eth', function (data) {
                                $scope.objENS.resolvedAddress = data.data;
                            });
                            break;
                        case $scope.ensModes.notAvailable:
                            ENS.getAllowedTime($scope.objENS.name, function (data) {
                                $scope.objENS.allowedTime = data.data;
                                clearInterval($scope.objENS.timer);
                                $scope.objENS.timer = setInterval(function () {
                                    return timeRem($scope.objENS.allowedTime);
                                }, 1000);
                            });
                            break;
                        case $scope.ensModes.auction:
                            clearInterval($scope.objENS.timer);
                            $scope.objENS.timer = setInterval(function () {
                                return timeRem($scope.objENS.registrationDate);
                            }, 1000);
                            break;
                        case $scope.ensModes.reveal:
                            $scope.objENS.bidValue = 0;
                            $scope.objENS.secret = '';
                            $scope.objENS.highestBid = etherUnits.toEther($scope.objENS.highestBid.toString(), 'wei');
                            clearInterval($scope.objENS.timer);
                            $scope.objENS.timer = setInterval(function () {
                                return timeRem($scope.objENS.registrationDate);
                            }, 1000);
                            break;
                    }
                    updateScope();
                }
            });
        } else $scope.notifier.danger(globalFuncs.errorMsgs[30]);
    };

    $scope.onLongStringChanged = function () {
        try {
            $scope.objENS.revealObject = null;
            var tObj = JSON.parse($scope.longJsonString.replace(/\\/g, ''));
            $scope.objENS.revealObject = tObj;
            if (tObj.value) $scope.objENS.bidValue = Number(etherUnits.toEther(tObj.value, "wei"));
            if (tObj.secret) $scope.objENS.secret = tObj.secret;
            if (tObj.name && ens.normalise(tObj.name) != $scope.objENS.name) {
                // check if correct name
                $scope.notifier.danger(globalFuncs.errorMsgs[34]);
            } else if (tObj.owner && tObj.owner != $scope.wallet.getAddressString()) {
                // check owner = bidder
                $scope.notifier.danger(globalFuncs.errorMsgs[33]);
            } else {//estimate gas to see if it would not work
                //$scope.estimateGasLimit();
            }
            updateScope();
        } catch (e) {
            $scope.notifier.danger(e.message);
        }
    };

    $scope.openAndBidAuction = function () {
        $scope.tx.gasLimit = $scope.gasLimitDefaults.startAuction;
        var _objENS = $scope.objENS;
        _objENS.registrationDate = new Date();
        _objENS.registrationDate.setDate(_objENS.registrationDate.getDate() + 5);
        ajaxReq.getTransactionData($scope.wallet.getAddressString(), function (data) {
            if (data.error) $scope.notifier.danger(data.msg);
            data = data.data;
            $scope.tx.to = ENS.getAuctionAddress();
            $scope.tx.data = ENS.getStartAuctionData(_objENS.name);
            $scope.tx.value = 0;
            var txData = uiFuncs.getTxData($scope);
            txData.gasPrice = data.gasprice;
            txData.nonce = data.nonce;
            uiFuncs.generateTx(txData, function (rawTx) {
                if (!rawTx.isError) {
                    $scope.generatedTxs.push(rawTx.signedTx);
                    $scope.bidAuction('0x' + new BigNumber(txData.nonce).plus(1).toString(16), txData.gasPrice);
                } else {
                    $scope.notifier.danger(rawTx.error);
                }
                updateScope();
            });
        });
    };
    $scope.revealBid = function () {
        $scope.tx.gasLimit = $scope.gasLimitDefaults.reveal;
        var _objENS = $scope.objENS;
        ajaxReq.getTransactionData($scope.wallet.getAddressString(), function (data) {
            if (data.error) $scope.notifier.danger(data.msg);
            data = data.data;
            $scope.tx.to = ENS.getAuctionAddress();
            $scope.tx.data = ENS.getRevealBidData(_objENS.name, etherUnits.toWei(_objENS.bidValue, 'ether'), _objENS.secret);
            $scope.tx.value = 0;
            var txData = uiFuncs.getTxData($scope);
            txData.gasPrice = data.gasprice;
            txData.nonce = data.nonce;
            uiFuncs.generateTx(txData, function (rawTx) {
                if (!rawTx.isError) {
                    $scope.generatedTxs.push(rawTx.signedTx);
                    $scope.ensConfirmModalModal.open();
                } else {
                    $scope.notifier.danger(rawTx.error);
                }
            });
        });
    };
    $scope.finalizeDomain = function () {
        $scope.tx.gasLimit = $scope.gasLimitDefaults.finalize;
        if ($scope.wallet.getAddressString() != $scope.objENS.deedOwner) {
            $scope.notifier.danger(globalFuncs.errorMsgs[33]);
            return;
        }
        var _objENS = $scope.objENS;
        ajaxReq.getTransactionData($scope.wallet.getAddressString(), function (data) {
            if (data.error) $scope.notifier.danger(data.msg);
            data = data.data;
            $scope.tx.to = ENS.getAuctionAddress();
            $scope.tx.data = ENS.getFinalizeAuctionData(_objENS.name);
            $scope.tx.value = 0;
            var txData = uiFuncs.getTxData($scope);
            txData.gasPrice = data.gasprice;
            txData.nonce = data.nonce;
            uiFuncs.generateTx(txData, function (rawTx) {
                if (!rawTx.isError) {
                    $scope.generatedTxs = [];
                    $scope.generatedTxs.push(rawTx.signedTx);
                    $scope.ensFinalizeModal.open();
                } else {
                    $scope.notifier.danger(rawTx.error);
                }
            });
        });
    };
    $scope.getRevealTime = function () {
        if ($scope.objENS && $scope.objENS.registrationDate) return new Date($scope.objENS.registrationDate - 48 * 60 * 60 * 1000);
        return new Date().toString();
    };
    $scope.bidAuction = function (nonce, gasPrice) {
        $scope.tx.gasLimit = $scope.gasLimitDefaults.newBid;
        var _objENS = $scope.objENS;
        $scope.bidObject = {
            name: _objENS.name,
            nameSHA3: ENS.getSHA3(_objENS.name),
            owner: $scope.wallet.getAddressString(),
            value: etherUnits.toWei(_objENS.bidValue, 'ether'),
            secret: _objENS.secret.trim(),
            secretSHA3: ENS.getSHA3(_objENS.secret.trim())
        };
        ENS.shaBid($scope.bidObject.nameSHA3, $scope.bidObject.owner, $scope.bidObject.value, $scope.bidObject.secretSHA3, function (data) {
            if (data.error) $scope.notifier.danger(data.msg);else {
                var bidHash = data.data;
                $scope.tx.data = ENS.getNewBidData(bidHash);
                $scope.tx.to = ENS.getAuctionAddress();
                $scope.tx.value = _objENS.dValue;
                var txData = uiFuncs.getTxData($scope);
                if (nonce && gasPrice) {
                    txData.nonce = nonce;
                    txData.gasPrice = gasPrice;
                } else txData.nonce = txData.gasPrice = null;
                uiFuncs.generateTx(txData, function (rawTx) {
                    if (!rawTx.isError) {
                        $scope.generatedTxs.push(rawTx.signedTx);
                        $scope.bidObject = JSON.stringify($scope.bidObject);
                        $scope.ensConfirmModalModal.open();
                    } else {
                        $scope.notifier.danger(rawTx.error);
                    }
                    if (!$scope.$$phase) $scope.$apply();
                });
            }
        });
    };
    $scope.sendTxStatus = "";
    $scope.sendTx = function () {
        $scope.ensConfirmModalModal.close();
        $scope.ensFinalizeModal.close();
        var signedTx = $scope.generatedTxs.shift();
        uiFuncs.sendTx(signedTx, function (resp) {
            if (!resp.isError) {
                var emailLink = '<a class="strong" href="mailto:support@myetherwallet.com?Subject=Issue%20regarding%20my%20ENS%20&Body=Hi%20Taylor%2C%20%0A%0AI%20have%20a%20question%20concerning%20my%20ENS%20transaction.%20%0A%0AI%20was%20attempting%20to%3A%0A-%20Start%20an%20ENS%20auction%0A-%20Bid%20on%20an%20ENS%20name%0A-%20Reveal%20my%20ENS%20bid%0A-%20Finalize%20my%20ENS%20name%0A%0AUnfortunately%20it%3A%0A-%20Never%20showed%20on%20the%20blockchain%0A-%20Failed%20due%20to%20out%20of%20gas%0A-%20Failed%20for%20another%20reason%0A-%20Never%20showed%20up%20in%20the%20account%20I%20was%20sending%20to%0A%0APlease%20see%20the%20below%20details%20for%20additional%20information.%0A%0AThank%20you.%20%0A%0A_%0A%0A%20name%3A%20' + $scope.objENS.name + '%0A%20timeRemaining%3A%20' + $scope.getRevealTime().toString() + '%0A%20revealDate%3A%20' + $scope.objENS.registrationDate.toString() + "%0A%20timer%3A%20" + $scope.objENS.timer + "%0A%20txSent%3A%20" + $scope.objENS.txSent + "%0A%20to%3A%20" + $scope.tx.to + "%0A%20from%20address%3A%20" + $scope.wallet.getAddressString() + "%0A%20data%3A%20" + $scope.tx.data + "%0A%20value%3A%20" + $scope.tx.value + '" target="_blank">Confused? Email Us.</a>';
                var bExStr = $scope.ajaxReq.type != nodes.nodeTypes.Custom ? "<a class='strong' href='" + $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data) + "' target='_blank'> View your transaction </a>" : '';
                $scope.sendTxStatus += globalFuncs.successMsgs[2] + "<p>" + resp.data + "</p><p>" + bExStr + "</p><p>" + emailLink + "</p>";
                $scope.notifier.success($scope.sendTxStatus);
                if ($scope.generatedTxs.length) $scope.sendTx();else $scope.sendTxStatus = '';
            } else {
                $scope.notifier.danger(resp.error);
            }
        });
        $scope.objENS.txSent = true;
        $scope.objENS.hideEnsInfoPanel = false;
    };
    $scope.generateTx = function () {
        try {
            var _objENS = $scope.objENS;
            $scope.sentTxs = [];
            $scope.generatedTxs = [];
            if (!$scope.Validator.isValidENSName(_objENS.name)) throw globalFuncs.errorMsgs[30];else if (!$scope.Validator.isPositiveNumber(_objENS.bidValue) || _objENS.bidValue < 0.01) throw globalFuncs.errorMsgs[0];else if (_objENS.status != $scope.ensModes.reveal && (!$scope.Validator.isPositiveNumber(_objENS.dValue) || _objENS.dValue < _objENS.bidValue || $scope.wallet.balance <= _objENS.dValue)) throw globalFuncs.errorMsgs[0];else if (!$scope.Validator.isPasswordLenValid(_objENS.secret, 0)) throw globalFuncs.errorMsgs[31];else if (_objENS.revealObject && _objENS.revealObject.name && ens.normalise(_objENS.revealObject.name) != _objENS.name) throw globalFuncs.errorMsgs[34];else {
                if ($scope.objENS.status == $scope.ensModes.open) $scope.openAndBidAuction();else if ($scope.objENS.status == $scope.ensModes.auction) $scope.bidAuction();else if ($scope.objENS.status == $scope.ensModes.reveal) $scope.revealBid();
            }
        } catch (e) {
            $scope.notifier.danger(e);
        }
    };
};
module.exports = ensCtrl;

},{}],18:[function(require,module,exports){
'use strict';

var footerCtrl = function footerCtrl($scope, globalService) {
    var gasPriceKey = "gasPrice";
    $scope.footerModal = new Modal(document.getElementById('disclaimerModal'));
    $scope.ethBlockNumber = "loading";
    $scope.etcBlockNumber = "loading";
    $scope.showBlocks = window.location.protocol == "https:";
    $scope.setBlockNumbers = function () {
        if (!$scope.showBlocks) return;
        ajaxReq.getCurrentBlock(function (data) {
            $scope.currentBlockNumber = data.data;
        });
    };
    $scope.setBlockNumbers();
    $scope.globalService = globalService;

    $scope.curLang = globalFuncs.curLang;
    $scope.gasChanged = function () {
        if ($scope.gas.value == 50) return;
        localStorage.setItem(gasPriceKey, $scope.gas.value);
        ethFuncs.gasAdjustment = $scope.gas.value;
    };
    var setGasValues = function setGasValues() {
        $scope.gas = {
            curVal: 20,
            value: localStorage.getItem(gasPriceKey) ? parseInt(localStorage.getItem(gasPriceKey)) : 24,
            max: 40,
            min: 1
        };
        if ($scope.showBlocks) {
            ajaxReq.getTransactionData(globalFuncs.donateAddress, function (data) {
                if (!data.error) {
                    data = data.data;
                    var curVal = new BigNumber(data.gasprice).div(etherUnits.getValueOfUnit('gwei')).toNumber();
                    $scope.gas = {
                        curVal: curVal,
                        value: localStorage.getItem(gasPriceKey) ? parseInt(localStorage.getItem(gasPriceKey)) : 24,
                        max: curVal + 20,
                        min: 1
                    };
                    ethFuncs.gasAdjustment = $scope.gas.value;
                }
            });
        }
    };
    setGasValues();
};
module.exports = footerCtrl;

},{}],19:[function(require,module,exports){
'use strict';

var helpersCtrl = function helpersCtrl($scope) {
  var ENS = new ens();

  var unitNames = ['wei', 'kwei', 'mwei', 'gwei', 'szabo', 'finney', 'ether', 'kether', 'mether', 'gether', 'tether'];

  $scope.units = {
    ether: 1
  };

  $scope.decimalNumber = 10;
  $scope.inputText = 'hello';

  $scope.convertUnit = function (currentUnit) {
    unitNames.forEach(function (unit) {
      if (currentUnit !== unit) {
        $scope.units[unit] = $scope.units[currentUnit] ? etherUnits.unitToUnit($scope.units[currentUnit], currentUnit, unit) : '';
      }
    });
  };

  $scope.decimalToHex = function () {
    $scope.hexNumber = $scope.decimalNumber ? ethFuncs.decimalToHex($scope.decimalNumber) : '';
    $scope.hexToPaddedHex();
  };

  $scope.hexToDecimal = function () {
    $scope.decimalNumber = $scope.hexNumber ? ethFuncs.hexToDecimal($scope.hexNumber) : '';
    $scope.hexToPaddedHex();
  };

  $scope.hexToPaddedHex = function () {
    $scope.hexPaddedLeft = $scope.hexNumber ? ethFuncs.padLeft($scope.hexNumber, 64, '0') : '';
  };

  $scope.toSHA3 = function () {
    $scope.outputText = $scope.inputText ? ethUtil.sha3($scope.inputText).toString('hex') : '';
  };

  /* ENS STUFF */
  $scope.toEnsLabelHash = function () {
    $scope.ensLabelHash = $scope.ensLabel ? ENS.getSHA3($scope.ensLabel) : '';
    $scope.allTheThings();
  };

  $scope.toEnsSecretHash = function () {
    $scope.ensSecretHash = $scope.ensSecret ? ENS.getSHA3($scope.ensSecret.trim()) : '';
    $scope.allTheThings();
  };

  $scope.toBidWei = function () {
    $scope.bidWei = $scope.bidEth ? Number(etherUnits.toWei($scope.bidEth, 'ether')) : '';
    $scope.toBidHex();
  };

  $scope.toBidEth = function () {
    $scope.bidEth = $scope.bidWei ? Number(etherUnits.toEther($scope.bidWei, 'wei')) : '';
    $scope.toBidHex();
  };

  $scope.toBidHex = function () {
    $scope.bidHex = $scope.bidWei ? ethFuncs.padLeft(ethFuncs.decimalToHex($scope.bidWei), 64, '0') : '';
    $scope.allTheThings();
  };

  $scope.allTheThings = function () {
    $scope.getStartAuctionData();
    $scope.getShaBid();
    $scope.getRevealBidData();
    $scope.getFinalizeAuctionData();
  };

  $scope.getStartAuctionData = function () {
    $scope.startAuctionData = $scope.ensLabel ? ENS.getStartAuctionData($scope.ensLabel) : '';
  };

  $scope.getShaBid = function () {
    if ($scope.ensLabelHash && $scope.ensAddress && $scope.bidWei && $scope.ensSecretHash) {
      ENS.shaBid($scope.ensLabelHash, $scope.ensAddress, $scope.bidWei, $scope.ensSecretHash, function (data) {
        $scope.shaBid = ENS.getNewBidData(data.data);
      });
    } else {
      $scope.shaBid = '';
    }
  };

  $scope.getRevealBidData = function () {
    if ($scope.ensLabel && $scope.bidWei && $scope.ensSecret) {
      $scope.revealBidData = ENS.getRevealBidData($scope.ensLabel, $scope.bidWei, $scope.ensSecret);
    } else {
      $scope.revealBidData = '';
    }
  };

  $scope.getFinalizeAuctionData = function () {
    $scope.finalizeAuctionData = $scope.ensLabel ? ENS.getFinalizeAuctionData($scope.ensLabel) : '';
  };

  $scope.convertUnit('ether');
  $scope.decimalToHex();
  $scope.toSHA3();
};

module.exports = helpersCtrl;

/*

0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8
mewtopia
0.01
exact depend exhibit

START AUCTION
0xede8acdb07aa9c7e03a795d250a2ac48bd73b9c7f8adab69a549cebd97fc157a093a5a4a

NEW BID
0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65

UNSEAL
0x47872b4207aa9c7e03a795d250a2ac48bd73b9c7f8adab69a549cebd97fc157a093a5a4a000000000000000000000000000000000000000000000000002386f26fc1000000d70f3b7e512382c3b5e27dd15df51c68c0a18528a604792ff20890eec20a31

FINALIZE
0x983b94fb07aa9c7e03a795d250a2ac48bd73b9c7f8adab69a549cebd97fc157a093a5a4a

*/

},{}],20:[function(require,module,exports){
'use strict';

var offlineTxCtrl = function offlineTxCtrl($scope, $sce, walletService) {
    $scope.ajaxReq = ajaxReq;
    walletService.wallet = null;
    walletService.password = '';
    $scope.unitReadable = ajaxReq.type;
    $scope.valueReadable = "";
    $scope.showAdvance = false;
    $scope.dropdownEnabled = true;
    $scope.showRaw = false;
    $scope.showWalletInfo = false;
    $scope.gasPriceDec = 0;
    $scope.nonceDec = 0;
    $scope.tokens = Token.popTokens;
    $scope.Validator = Validator;
    $scope.tx = {
        gasLimit: globalFuncs.defaultTxGasLimit,
        from: "",
        data: "",
        to: "",
        unit: "ether",
        value: '',
        nonce: null,
        gasPrice: null,
        donate: false
    };
    $scope.tokenTx = {
        to: '',
        value: 0,
        id: 'ether',
        gasLimit: 150000
    };
    $scope.localToken = {
        contractAdd: "",
        symbol: "",
        decimals: "",
        type: "custom"
    };
    $scope.$watch(function () {
        if (walletService.wallet == null) return null;
        return walletService.wallet.getAddressString();
    }, function () {
        if (walletService.wallet == null) return;
        $scope.wallet = walletService.wallet;
    });
    $scope.setTokens = function () {
        $scope.tokenObjs = [];
        for (var i = 0; i < $scope.tokens.length; i++) {
            $scope.tokenObjs.push(new Token($scope.tokens[i].address, '', $scope.tokens[i].symbol, $scope.tokens[i].decimal, $scope.tokens[i].type));
        }
        var storedTokens = localStorage.getItem("localTokens") != null ? JSON.parse(localStorage.getItem("localTokens")) : [];
        for (var i = 0; i < storedTokens.length; i++) {
            $scope.tokenObjs.push(new Token(storedTokens[i].contractAddress, '', globalFuncs.stripTags(storedTokens[i].symbol), storedTokens[i].decimal, storedTokens[i].type));
        }
    };
    $scope.setTokens();
    $scope.getWalletInfo = function () {
        if (ethFuncs.validateEtherAddress($scope.tx.from)) {
            ajaxReq.getTransactionData($scope.tx.from, function (data) {
                if (data.error) throw data.msg;
                data = data.data;
                $scope.gasPriceDec = ethFuncs.hexToDecimal(ethFuncs.sanitizeHex(ethFuncs.addTinyMoreToGas(data.gasprice)));
                $scope.nonceDec = ethFuncs.hexToDecimal(data.nonce);
                $scope.showWalletInfo = true;
            });
        }
    };
    $scope.$watch('tx', function () {
        $scope.showRaw = false;
    }, true);
    $scope.$watch('tokenTx.id', function () {
        if ($scope.tokenTx.id != 'ether') {
            $scope.tx.gasLimit = 150000;
        } else {
            $scope.tx.gasLimit = globalFuncs.defaultTxGasLimit;
        }
    });
    $scope.$watch('[tx.to]', function () {
        // if golem crowdfund address
        if ($scope.tx.to == "0xa74476443119A942dE498590Fe1f2454d7D4aC0d") {
            $scope.setSendMode('ether');
            $scope.dropdownEnabled = false;
            $scope.tx.data = '0xefc81a8c';
            $scope.tx.gasLimit = 70000;
        } else {
            $scope.dropdownEnabled = true;
        }
    }, true);
    $scope.setSendMode = function (index) {
        var tokenSymbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        $scope.tokenTx.id = index;
        if (index == 'ether') {
            $scope.unitReadable = ajaxReq.type;
        } else {
            $scope.unitReadable = tokenSymbol;
        }
        $scope.dropdownAmount = false;
    };
    $scope.validateAddress = function (address, status) {
        if (ethFuncs.validateEtherAddress(address)) {
            $scope.notifier.info(globalFuncs.successMsgs[0]);
        } else {
            $scope.notifier.danger(globalFuncs.errorMsgs[5]);
        }
    };
    $scope.generateTx = function () {
        if (!ethFuncs.validateEtherAddress($scope.tx.to)) {
            $scope.notifier.danger(globalFuncs.errorMsgs[5]);
            return;
        }
        var txData = uiFuncs.getTxData($scope);
        txData.isOffline = true;
        txData.nonce = ethFuncs.sanitizeHex(ethFuncs.decimalToHex($scope.nonceDec));
        txData.gasPrice = ethFuncs.sanitizeHex(ethFuncs.decimalToHex($scope.gasPriceDec));
        if ($scope.tokenTx.id != 'ether') {
            txData.data = $scope.tokenObjs[$scope.tokenTx.id].getData($scope.tx.to, $scope.tx.value).data;
            txData.to = $scope.tokenObjs[$scope.tokenTx.id].getContractAddress();
            txData.value = '0x00';
        }
        uiFuncs.generateTx(txData, function (rawTx) {
            if (!rawTx.isError) {
                $scope.rawTx = rawTx.rawTx;
                $scope.signedTx = rawTx.signedTx;
                $scope.showRaw = true;
            } else {
                $scope.showRaw = false;
                $scope.notifier.danger(rawTx.error);
            }
            if (!$scope.$$phase) $scope.$apply();
        });
    };
    $scope.confirmSendTx = function () {
        try {
            if ($scope.signedTx == "" || !ethFuncs.validateHexString($scope.signedTx)) throw globalFuncs.errorMsgs[12];
            var eTx = new ethUtil.Tx($scope.signedTx);
            if (eTx.data.length && Token.transferHex == ethFuncs.sanitizeHex(eTx.data.toString('hex').substr(0, 8))) {
                var token = Token.getTokenByAddress(ethFuncs.sanitizeHex(eTx.to.toString('hex')));
                var decoded = ethUtil.solidityCoder.decodeParams(["address", "uint256"], ethFuncs.sanitizeHex(eTx.data.toString('hex').substr(10)));
                $scope.tx.sendMode = 'token';
                $scope.tokenTx.value = decoded[1].div(new BigNumber(10).pow(token.decimal)).toString();
                $scope.tokenTx.to = decoded[0];
                $scope.unitReadable = token.symbol;
                $scope.tokenTx.from = ethFuncs.sanitizeHex(eTx.getSenderAddress().toString('hex'));
            } else {
                $scope.tx.sendMode = 'ether';
                $scope.tx.value = eTx.value.length ? etherUnits.toEther(ethFuncs.sanitizeHex(eTx.value.toString('hex')), 'wei') : 0;
                $scope.unitReadable = ajaxReq.type;
                $scope.tx.from = ethFuncs.sanitizeHex(eTx.getSenderAddress().toString('hex'));
                $scope.tx.to = ethFuncs.sanitizeHex(eTx.to.toString('hex'));
            }
            new Modal(document.getElementById('sendTransactionOffline')).open();
        } catch (e) {
            $scope.notifier.danger(e);
        }
    };
    $scope.sendTx = function () {
        new Modal(document.getElementById('sendTransactionOffline')).close();
        ajaxReq.sendRawTx($scope.signedTx, function (data) {
            if (data.error) {
                $scope.notifier.danger(data.msg);
            } else {
                $scope.notifier.success(globalFuncs.successMsgs[2] + "<a href='http://etherscan.io/tx/" + data.data + "' target='_blank'>" + data.data + "</a>");
            }
        });
    };
};
module.exports = offlineTxCtrl;

},{}],21:[function(require,module,exports){
'use strict';

var sendTxCtrl = function sendTxCtrl($scope, $sce, walletService) {
    $scope.ajaxReq = ajaxReq;
    $scope.unitReadable = ajaxReq.type;
    $scope.sendTxModal = new Modal(document.getElementById('sendTransaction'));
    walletService.wallet = null;
    walletService.password = '';
    $scope.showAdvance = $scope.showRaw = false;
    $scope.dropdownEnabled = true;
    $scope.Validator = Validator;
    $scope.gasLimitChanged = false;
    // Tokens
    $scope.tokenVisibility = "hidden";
    $scope.tokenTx = {
        to: '',
        value: 0,
        id: -1
    };
    $scope.customGasMsg = '';

    // For token sale holders:
    // 1. Add the address users are sending to
    // 2. Add the gas limit users should use to send successfully (this avoids OOG errors)
    // 3. Add any data if applicable
    // 4. Add a message if you want.

    // Token Calendar: 
    // http://www.tokensalecalendar.com/
    // If you aren't on the above, you should get on it.

    $scope.customGas = [{ // donation address example
        to: '0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8',
        gasLimit: 21000,
        data: '',
        msg: 'Thank you for donating to MyEtherWallet. TO THE MOON!'
    }, { // BAT
        to: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
        gasLimit: 200000,
        data: '0xb4427263',
        msg: 'BAT. THE SALE IS OVER. STOP CLOGGING THE BLOCKCHAIN PLEASE'
    }, { // BANCOR
        to: '0x00000',
        gasLimit: 200000,
        data: '',
        msg: 'Bancor. Starts June XX, 2017.'
    }, { // Moeda
        to: '0x4870E705a3def9DDa6da7A953D1cd3CCEDD08573',
        gasLimit: 200000,
        data: '',
        msg: 'Moeda. Ends at block 4,111,557.'
    }];
    $scope.tx = {
        // if there is no gasLimit or gas key in the URI, use the default value. Otherwise use value of gas or gasLimit. gasLimit wins over gas if both present
        gasLimit: globalFuncs.urlGet('gaslimit') != null || globalFuncs.urlGet('gas') != null ? globalFuncs.urlGet('gaslimit') != null ? globalFuncs.urlGet('gaslimit') : globalFuncs.urlGet('gas') : globalFuncs.defaultTxGasLimit,
        data: globalFuncs.urlGet('data') == null ? "" : globalFuncs.urlGet('data'),
        to: globalFuncs.urlGet('to') == null ? "" : globalFuncs.urlGet('to'),
        unit: "ether",
        value: globalFuncs.urlGet('value') == null ? "" : globalFuncs.urlGet('value'),
        nonce: null,
        gasPrice: null,
        donate: false,
        tokenSymbol: globalFuncs.urlGet('tokenSymbol') == null ? false : globalFuncs.urlGet('tokenSymbol'),
        readOnly: globalFuncs.urlGet('readOnly') == null ? false : true
    };
    $scope.setSendMode = function (sendMode) {
        var tokenId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var tokenSymbol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        $scope.tx.sendMode = sendMode;
        $scope.unitReadable = '';
        if (sendMode == 'ether') {
            $scope.unitReadable = ajaxReq.type;
        } else {
            $scope.unitReadable = tokenSymbol;
            $scope.tokenTx.id = tokenId;
        }
        $scope.dropdownAmount = false;
    };
    $scope.setTokenSendMode = function () {
        if ($scope.tx.sendMode == 'token' && !$scope.tx.tokenSymbol) {
            $scope.tx.tokenSymbol = $scope.wallet.tokenObjs[0].symbol;
            $scope.wallet.tokenObjs[0].type = "custom";
            $scope.setSendMode($scope.tx.sendMode, 0, $scope.tx.tokenSymbol);
        } else if ($scope.tx.tokenSymbol) {
            for (var i = 0; i < $scope.wallet.tokenObjs.length; i++) {
                if ($scope.wallet.tokenObjs[i].symbol.toLowerCase().indexOf($scope.tx.tokenSymbol.toLowerCase()) !== -1) {
                    $scope.wallet.tokenObjs[i].type = "custom";
                    $scope.setSendMode('token', i, $scope.wallet.tokenObjs[i].symbol);
                    break;
                } else $scope.tokenTx.id = -1;
            }
        }
        if ($scope.tx.sendMode != 'token') $scope.tokenTx.id = -1;
    };
    var applyScope = function applyScope() {
        if (!$scope.$$phase) $scope.$apply();
    };
    var defaultInit = function defaultInit() {
        globalFuncs.urlGet('sendMode') == null ? $scope.setSendMode('ether') : $scope.setSendMode(globalFuncs.urlGet('sendMode'));
        $scope.showAdvance = globalFuncs.urlGet('gaslimit') != null || globalFuncs.urlGet('gas') != null || globalFuncs.urlGet('data') != null;
        if (globalFuncs.urlGet('data') || globalFuncs.urlGet('value') || globalFuncs.urlGet('to') || globalFuncs.urlGet('gaslimit') || globalFuncs.urlGet('sendMode') || globalFuncs.urlGet('gas') || globalFuncs.urlGet('tokenSymbol')) $scope.hasQueryString = true; // if there is a query string, show an warning at top of page
    };
    $scope.$watch(function () {
        if (walletService.wallet == null) return null;
        return walletService.wallet.getAddressString();
    }, function () {
        if (walletService.wallet == null) return;
        $scope.wallet = walletService.wallet;
        $scope.wd = true;
        $scope.wallet.setBalance(applyScope);
        $scope.wallet.setTokens();
        if ($scope.parentTxConfig) {
            var setTxObj = function setTxObj() {
                $scope.tx.to = $scope.parentTxConfig.to;
                $scope.tx.value = $scope.parentTxConfig.value;
                $scope.tx.sendMode = $scope.parentTxConfig.sendMode ? $scope.parentTxConfig.sendMode : 'ether';
                $scope.tx.tokenSymbol = $scope.parentTxConfig.tokenSymbol ? $scope.parentTxConfig.tokenSymbol : '';
                $scope.tx.readOnly = $scope.parentTxConfig.readOnly ? $scope.parentTxConfig.readOnly : false;
            };
            $scope.$watch('parentTxConfig', function () {
                setTxObj();
            }, true);
        }
        $scope.setTokenSendMode();
        defaultInit();
    });
    $scope.$watch('ajaxReq.key', function () {
        if ($scope.wallet) {
            $scope.setSendMode('ether');
            $scope.wallet.setBalance(applyScope);
            $scope.wallet.setTokens();
        }
    });
    $scope.$watch('tokenTx', function () {
        if ($scope.wallet && $scope.wallet.tokenObjs !== undefined && $scope.wallet.tokenObjs[$scope.tokenTx.id] !== undefined && $scope.Validator.isValidAddress($scope.tokenTx.to) && $scope.Validator.isPositiveNumber($scope.tokenTx.value)) {
            if ($scope.estimateTimer) clearTimeout($scope.estimateTimer);
            $scope.estimateTimer = setTimeout(function () {
                $scope.estimateGasLimit();
            }, 500);
        }
    }, true);
    $scope.$watch('tx', function (newValue, oldValue) {
        $scope.showRaw = false;
        if (oldValue.sendMode != newValue.sendMode && newValue.sendMode == 'ether') {
            $scope.tx.data = "";
            $scope.tx.gasLimit = globalFuncs.defaultTxGasLimit;
        }
        if (newValue.gasLimit == oldValue.gasLimit && $scope.wallet && $scope.Validator.isValidAddress($scope.tx.to) && $scope.Validator.isPositiveNumber($scope.tx.value) && $scope.Validator.isValidHex($scope.tx.data) && $scope.tx.sendMode != 'token') {
            if ($scope.estimateTimer) clearTimeout($scope.estimateTimer);
            $scope.estimateTimer = setTimeout(function () {
                $scope.estimateGasLimit();
            }, 500);
        }
        if ($scope.tx.sendMode == 'token') {
            $scope.tokenTx.to = $scope.tx.to;
            $scope.tokenTx.value = $scope.tx.value;
        }
    }, true);
    $scope.estimateGasLimit = function () {
        $scope.customGasMsg = '';
        if ($scope.gasLimitChanged) return;
        for (var i in $scope.customGas) {
            if ($scope.tx.to.toLowerCase() == $scope.customGas[i].to.toLowerCase()) {
                $scope.showAdvance = $scope.customGas[i].data != '' ? true : false;
                $scope.tx.gasLimit = $scope.customGas[i].gasLimit;
                $scope.tx.data = $scope.customGas[i].data;
                $scope.customGasMsg = $scope.customGas[i].msg != '' ? $scope.customGas[i].msg : '';
                return;
            }
        }
        if (globalFuncs.lightMode) {
            $scope.tx.gasLimit = globalFuncs.defaultTokenGasLimit;
            return;
        }
        var estObj = {
            to: $scope.tx.to,
            from: $scope.wallet.getAddressString(),
            value: ethFuncs.sanitizeHex(ethFuncs.decimalToHex(etherUnits.toWei($scope.tx.value, $scope.tx.unit)))
        };
        if ($scope.tx.data != "") estObj.data = ethFuncs.sanitizeHex($scope.tx.data);
        if ($scope.tx.sendMode == 'token') {
            estObj.to = $scope.wallet.tokenObjs[$scope.tokenTx.id].getContractAddress();
            estObj.data = $scope.wallet.tokenObjs[$scope.tokenTx.id].getData($scope.tokenTx.to, $scope.tokenTx.value).data;
            estObj.value = '0x00';
        }
        ethFuncs.estimateGas(estObj, function (data) {

            if (!data.error) {
                if (data.data == '-1') $scope.notifier.danger(globalFuncs.errorMsgs[21]);
                $scope.tx.gasLimit = data.data;
            } else $scope.notifier.danger(data.msg);
        });
    };
    var isEnough = function isEnough(valA, valB) {
        return new BigNumber(valA).lte(new BigNumber(valB));
    };
    $scope.hasEnoughBalance = function () {
        if ($scope.wallet.balance == 'loading') return false;
        return isEnough($scope.tx.value, $scope.wallet.balance);
    };
    $scope.onDonateClick = function () {
        $scope.addressDrtv.ensAddressField = globalFuncs.donateAddress;
        $scope.tx.value = "1";
        $scope.tx.donate = true;
    };
    $scope.generateTx = function () {
        if (!$scope.Validator.isValidAddress($scope.tx.to)) {
            $scope.notifier.danger(globalFuncs.errorMsgs[5]);
            return;
        }
        var txData = uiFuncs.getTxData($scope);
        if ($scope.tx.sendMode == 'token') {
            // if the amount of tokens you are trying to send > tokens you have, throw error
            if (!isEnough($scope.tx.value, $scope.wallet.tokenObjs[$scope.tokenTx.id].balance)) {
                $scope.notifier.danger(globalFuncs.errorMsgs[0]);
                return;
            }
            txData.to = $scope.wallet.tokenObjs[$scope.tokenTx.id].getContractAddress();
            txData.data = $scope.wallet.tokenObjs[$scope.tokenTx.id].getData($scope.tokenTx.to, $scope.tokenTx.value).data;
            txData.value = '0x00';
        }
        uiFuncs.generateTx(txData, function (rawTx) {
            if (!rawTx.isError) {
                $scope.rawTx = rawTx.rawTx;
                $scope.signedTx = rawTx.signedTx;
                $scope.showRaw = true;
            } else {
                $scope.showRaw = false;
                $scope.notifier.danger(rawTx.error);
            }
            if (!$scope.$$phase) $scope.$apply();
        });
    };
    $scope.sendTx = function () {
        $scope.sendTxModal.close();
        uiFuncs.sendTx($scope.signedTx, function (resp) {
            if (!resp.isError) {
                var bExStr = $scope.ajaxReq.type != nodes.nodeTypes.Custom ? "<a class='strong' href='" + $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data) + "' class='strong' target='_blank'>View TX</a><br />" : '';
                var emailLink = '<a class="strong" href="mailto:support@myetherwallet.com?Subject=Issue%20regarding%20my%20TX%20&Body=Hi%20Taylor%2C%20%0A%0AI%20have%20a%20question%20concerning%20my%20transaction.%20%0A%0AI%20was%20attempting%20to%3A%0A-%20Send%20ETH%0A-%20Send%20Tokens%0A-%20Send%20via%20my%20Ledger%0A-%20Send%20via%20my%20TREZOR%0A-%20Send%20via%20the%20offline%20tab%0A%0AFrom%20address%3A%20%0A%0ATo%20address%3A%20%0A%0AUnfortunately%20it%3A%0A-%20Never%20showed%20on%20the%20blockchain%0A-%20Failed%20due%20to%20out%20of%20gas%0A-%20Failed%20for%20another%20reason%0A-%20Never%20showed%20up%20in%20the%20account%20I%20was%20sending%20to%0A%0A%5B%20INSERT%20MORE%20INFORMATION%20HERE%20%5D%0A%0AThank%20you%0A%0A' + "%0A%20TO%20" + $scope.tx.to + "%0A%20FROM%20" + $scope.wallet.getAddressString() + "%0A%20AMT%20" + $scope.tx.value + "%0A%20CUR%20" + $scope.unitReadable + "%0A%20NODE%20TYPE%20" + $scope.ajaxReq.type + "%0A%20TOKEN%20" + $scope.tx.tokenSymbol + "%0A%20TOKEN%20TO%20" + $scope.tokenTx.to + "%0A%20TOKEN%20AMT%20" + $scope.tokenTx.value + "%0A%20TOKEN%20CUR%20" + $scope.unitReadable + "%0A%20TX%20" + resp.data + '" target="_blank">Confused? Email Us.</a>';
                $scope.notifier.success(globalFuncs.successMsgs[2] + resp.data + "<p>" + bExStr + "</p><p>" + emailLink + "</p>");
                $scope.wallet.setBalance(applyScope);
                if ($scope.tx.sendMode == 'token') $scope.wallet.tokenObjs[$scope.tokenTx.id].setBalance();
            } else {
                $scope.notifier.danger(resp.error);
            }
        });
    };
    $scope.transferAllBalance = function () {
        if ($scope.tx.sendMode != 'token') {
            uiFuncs.transferAllBalance($scope.wallet.getAddressString(), $scope.tx.gasLimit, function (resp) {
                if (!resp.isError) {
                    $scope.tx.unit = resp.unit;
                    $scope.tx.value = resp.value;
                } else {
                    $scope.showRaw = false;
                    $scope.notifier.danger(resp.error);
                }
            });
        } else {
            $scope.tx.value = $scope.wallet.tokenObjs[$scope.tokenTx.id].getBalance();
        }
    };
};
module.exports = sendTxCtrl;

},{}],22:[function(require,module,exports){
(function (Buffer){
'use strict';

var signMsgCtrl = function signMsgCtrl($scope, $sce, walletService) {
	walletService.wallet = null;
	$scope.visibility = "signView";
	$scope.$watch(function () {
		if (walletService.wallet == null) return null;
		return walletService.wallet.getAddressString();
	}, function () {
		if (walletService.wallet == null) return;
		$scope.wallet = walletService.wallet;
	});
	$scope.signMsg = {
		message: '',
		dateTime: '',
		status: '',
		signedMsg: ''
	};
	$scope.verifyMsg = {
		signedMsg: '',
		status: ''
	};
	$scope.generateSignedMsg = function () {
		try {
			var thisMsg = $scope.signMsg.message;
			var thisDate = $scope.signMsg.dateTime;
			var thisSpacer = thisMsg.length > 0 && thisDate.length > 0 ? ' ' : '';
			var thisMessage = thisMsg + thisSpacer + thisDate;
			var hash = ethUtil.sha3(thisMessage);
			var signed = ethUtil.ecsign(hash, $scope.wallet.getPrivateKey());
			var combined = Buffer.concat([Buffer.from(signed.r), Buffer.from(signed.s), Buffer.from([signed.v])]);
			var combinedHex = combined.toString('hex');
			$scope.signMsg.signedMsg = JSON.stringify({
				address: $scope.wallet.getChecksumAddressString(),
				msg: thisMessage,
				sig: '0x' + combinedHex
			});
		} catch (e) {
			$scope.notifier.danger(e);
		}
	};
	$scope.verifySignedMessage = function () {
		try {
			var json = JSON.parse($scope.verifyMsg.signedMsg);
			var sig = new Buffer(ethFuncs.getNakedAddress(json.sig), 'hex');
			if (sig.length != 65) throw globalFuncs.errorMsgs[12];
			sig[64] = sig[64] == 0 || sig[64] == 1 ? sig[64] + 27 : sig[64];
			var hash = ethUtil.sha3(json.msg);
			var pubKey = ethUtil.ecrecover(hash, sig[64], sig.slice(0, 32), sig.slice(32, 64));
			if (ethFuncs.getNakedAddress(json.address) != ethUtil.pubToAddress(pubKey).toString('hex')) throw globalFuncs.errorMsgs[12];else $scope.notifier.success(globalFuncs.successMsgs[6]);
		} catch (e) {
			$scope.notifier.danger(e);
		}
	};
	$scope.setVisibility = function (str) {
		$scope.visibility = str;
	};
};
module.exports = signMsgCtrl;

}).call(this,require("buffer").Buffer)
},{"buffer":174}],23:[function(require,module,exports){
'use strict';

var swapCtrl = function swapCtrl($scope, $sce, walletService) {
    var lStorageKey = "swapOrder";
    $scope.ajaxReq = ajaxReq;
    $scope.Validator = Validator;
    $scope.bity = new bity();
    $scope.bity.refreshRates(function () {
        $scope.setOrderCoin(true, "ETH");
    });
    setInterval(function () {
        $scope.bity.refreshRates();
    }, 30000);
    $scope.priceTicker = { ETHBTC: 1, ETHREP: 1, BTCREP: 1, BTCETH: 1, REPBTC: 1, REPETH: 1 };
    $scope.availableCoins = ["ETH", "BTC", "REP"];
    var initValues = function initValues() {
        $scope.showStage1 = true;
        $scope.showStage2 = $scope.showStage3Eth = $scope.showStage3Btc = false;
        $scope.orderResult = null;
        $scope.swapOrder = {
            fromCoin: "ETH",
            toCoin: "BTC",
            isFrom: true,
            fromVal: '',
            toVal: '',
            toAddress: '',
            swapRate: '',
            swapPair: ''
        };
    };
    $scope.verifyMinMaxValues = function () {

        if ($scope.swapOrder.toVal == '' || $scope.swapOrder.fromVal == '') return false;
        var errors = {
            priceNotLoaded: 0,
            lessThanMin: 1,
            greaterThanMax: 2,
            noErrors: 3
        };
        var verify = function verify() {
            if (!$scope.bity.priceLoaded) return errors.priceNotLoaded;else if ($scope.swapOrder.toVal < bity.min || $scope.swapOrder.fromVal < bity.min) return errors.lessThanMin;else if ($scope.swapOrder.toCoin == "BTC" && $scope.swapOrder.toVal > bity.max || $scope.swapOrder.fromCoin == "BTC" && $scope.swapOrder.fromVal > bity.max) return errors.greaterThanMax;else if ($scope.swapOrder.toCoin == "ETH" && $scope.swapOrder.toVal * $scope.bity.curRate['ETHBTC'] > bity.max || $scope.swapOrder.fromCoin == "ETH" && $scope.swapOrder.fromVal * $scope.bity.curRate['ETHBTC'] > bity.max) return errors.greaterThanMax;else if ($scope.swapOrder.toCoin == "REP" && $scope.swapOrder.toVal * $scope.bity.curRate['REPBTC'] > bity.max || $scope.swapOrder.fromCoin == "REP" && $scope.swapOrder.fromVal * $scope.bity.curRate['REPBTC'] > bity.max) return errors.greaterThanMax;
            return errors.noErrors;
        };
        var vResult = verify();
        if (vResult == errors.noErrors) return true;else if (vResult == errors.priceNotLoaded) return false;else if (vResult == errors.lessThanMin || vResult == errors.greaterThanMax) {
            if (!isStorageOrderExists()) uiFuncs.notifier.danger(globalFuncs.errorMsgs[27] + bity.max + " BTC, " + (bity.max / $scope.bity.curRate['ETHBTC']).toFixed(3) + " ETH, or " + (bity.max / $scope.bity.curRate['REPBTC']).toFixed(3) + " REP");
            return false;
        }
    };
    $scope.setOrderCoin = function (isFrom, coin) {
        if (isFrom) $scope.swapOrder.fromCoin = coin;else $scope.swapOrder.toCoin = coin;
        if ($scope.swapOrder.fromCoin == $scope.swapOrder.toCoin) for (var i in $scope.availableCoins) {
            if ($scope.availableCoins[i] != $scope.swapOrder.fromCoin) {
                $scope.swapOrder.toCoin = $scope.availableCoins[i];
                break;
            }
        }$scope.swapOrder.swapRate = $scope.bity.curRate[$scope.swapOrder.fromCoin + $scope.swapOrder.toCoin];
        $scope.swapOrder.swapPair = $scope.swapOrder.fromCoin + "/" + $scope.swapOrder.toCoin;
        $scope.updateEstimate(isFrom);
        $scope.dropdownFrom = $scope.dropdownTo = false;
    };
    $scope.updateEstimate = function (isFrom) {
        if (isFrom) $scope.swapOrder.toVal = parseFloat(($scope.bity.curRate[$scope.swapOrder.fromCoin + $scope.swapOrder.toCoin] * $scope.swapOrder.fromVal).toFixed(bity.decimals));else $scope.swapOrder.fromVal = parseFloat(($scope.swapOrder.toVal / $scope.bity.curRate[$scope.swapOrder.fromCoin + $scope.swapOrder.toCoin]).toFixed(bity.decimals));
        $scope.swapOrder.isFrom = isFrom;
    };
    $scope.setFinalPrices = function () {
        try {

            if (!$scope.Validator.isPositiveNumber($scope.swapOrder.fromVal) || !$scope.Validator.isPositiveNumber($scope.swapOrder.toVal)) throw globalFuncs.errorMsgs[0];else if (!$scope.verifyMinMaxValues()) throw globalFuncs.errorMsgs[27];
            $scope.updateEstimate($scope.swapOrder.isFrom);
            $scope.showStage1 = false;
            $scope.showStage2 = true;
        } catch (e) {
            $scope.notifier.danger(e);
        }
    };
    var getProgressBarArr = function getProgressBarArr(index, len) {
        var tempArr = [];
        for (var i = 0; i < len; i++) {
            if (i < index) tempArr.push('progress-true');else if (i == index) tempArr.push('progress-active');else tempArr.push('');
        }
        return tempArr;
    };
    var isStorageOrderExists = function isStorageOrderExists() {
        var order = localStorage.getItem(lStorageKey);
        return order && $scope.Validator.isJSON(order);
    };
    var setOrderFromStorage = function setOrderFromStorage() {
        var order = JSON.parse(localStorage.getItem(lStorageKey));
        $scope.orderResult = order;
        $scope.swapOrder = order.swapOrder;
        processOrder();
    };
    var saveOrderToStorage = function saveOrderToStorage(order) {
        localStorage.setItem(lStorageKey, JSON.stringify(order));
    };
    var processOrder = function processOrder() {
        var orderResult = $scope.orderResult;
        orderResult.progress = {
            status: "OPEN",
            bar: getProgressBarArr(1, 5),
            showTimeRem: true,
            timeRemaining: '10:00',
            secsRemaining: orderResult.validFor - parseInt((new Date().getTime() - new Date(orderResult.timestamp_created).getTime()) / 1000),
            pendingStatusReq: false,
            checkDelay: 1000
        };
        var timeRem = setInterval(function () {
            if (!orderResult) clearInterval(timeRem);
            if (orderResult.progress.secsRemaining > 0) {
                if (orderResult.progress.status == "OPEN") orderResult.progress.secsRemaining--;else orderResult.progress.secsRemaining++;
                var minutes = Math.floor(orderResult.progress.secsRemaining / 60);
                var seconds = orderResult.progress.secsRemaining - minutes * 60;
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                orderResult.progress.timeRemaining = minutes + ':' + seconds;
                if (!$scope.$$phase) $scope.$apply();
            } else {
                orderResult.progress.timeRemaining = "00:00";
                clearInterval(timeRem);
            }
        }, 1000);
        var progressCheck = setInterval(function () {
            if (!orderResult) clearInterval(progressCheck);
            if (!orderResult.progress.pendingStatusReq) {
                orderResult.progress.pendingStatusReq = true;
                $scope.bity.getStatus({ orderid: orderResult.id }, function (data) {
                    if (data.error) $scope.notifier.danger(data.msg);else {
                        data = data.data;
                        if (bity.validStatus.indexOf(data.status) != -1) orderResult.progress.status = "RCVE";
                        if (orderResult.progress.status == "OPEN" && bity.validStatus.indexOf(data.input.status) != -1) {
                            orderResult.progress.secsRemaining = 1;
                            orderResult.progress.showTimeRem = false;
                            orderResult.progress.status = "RCVE";
                            orderResult.progress.bar = getProgressBarArr(3, 5);
                        } else if (orderResult.progress.status == "RCVE" && bity.validStatus.indexOf(data.output.status) != -1) {

                            orderResult.progress.status = "FILL";
                            orderResult.progress.bar = getProgressBarArr(5, 5);
                            orderResult.progress.showTimeRem = false;
                            var url = orderResult.output.currency == 'BTC' ? bity.btcExplorer.replace("[[txHash]]", data.output.reference) : bity.ethExplorer.replace("[[txHash]]", data.output.reference);
                            var bExStr = "<a href='" + url + "' target='_blank'> View your transaction </a>";
                            $scope.notifier.success(globalFuncs.successMsgs[2] + data.output.reference + "<br />" + bExStr);
                            clearInterval(progressCheck);
                            clearInterval(timeRem);
                        } else if (bity.invalidStatus.indexOf(data.status) != -1) {
                            orderResult.progress.status = "CANC";
                            orderResult.progress.bar = getProgressBarArr(-1, 5);
                            $scope.notifier.danger("Order cancelled");
                            orderResult.progress.secsRemaining = 0;
                            clearInterval(progressCheck);
                        }
                        if (!$scope.$$phase) $scope.$apply();
                    }
                    orderResult.progress.pendingStatusReq = false;
                });
            }
        }, orderResult.progress.checkDelay);
        $scope.showStage2 = false;
        if ($scope.orderResult.input.currency == 'BTC') $scope.showStage3Btc = true;else {
            $scope.parentTxConfig = {
                to: $scope.orderResult.payment_address,
                value: $scope.orderResult.input.amount,
                sendMode: $scope.orderResult.input.currency == 'ETH' ? 'ether' : 'token',
                tokenSymbol: $scope.orderResult.input.currency == 'ETH' ? '' : $scope.orderResult.input.currency,
                readOnly: true
            };
            new Modal(document.getElementById('sendTransaction'));
            $scope.showStage3Eth = true;
        }
    };
    $scope.openOrder = function () {

        if ($scope.swapOrder.toCoin != 'BTC' && $scope.Validator.isValidAddress($scope.swapOrder.toAddress) || $scope.swapOrder.toCoin == 'BTC' && $scope.Validator.isValidBTCAddress($scope.swapOrder.toAddress)) {
            var order = {
                amount: $scope.swapOrder.isFrom ? $scope.swapOrder.fromVal : $scope.swapOrder.toVal,
                mode: $scope.swapOrder.isFrom ? 0 : 1,
                pair: $scope.swapOrder.fromCoin + $scope.swapOrder.toCoin,
                destAddress: $scope.swapOrder.toAddress
            };
            $scope.bity.openOrder(order, function (data) {
                if (!data.error) {
                    $scope.orderResult = data.data;
                    $scope.orderResult.swapOrder = $scope.swapOrder;
                    var orderResult = $scope.orderResult;
                    saveOrderToStorage(orderResult);
                    processOrder();
                } else $scope.notifier.danger(data.msg);
                if (!$scope.$$phase) $scope.$apply();
            });
        } else {
            $scope.notifier.danger(globalFuncs.errorMsgs[5]);
        }
    };
    $scope.newSwap = function () {
        localStorage.setItem(lStorageKey, '');
        initValues();
    };
    initValues();
    if (isStorageOrderExists()) {
        $scope.showStage1 = false;
        setOrderFromStorage();
    }
};
module.exports = swapCtrl;

},{}],24:[function(require,module,exports){
'use strict';

var tabsCtrl = function tabsCtrl($scope, globalService, $translate, $sce) {
    $scope.gService = globalService;
    $scope.tabNames = $scope.gService.tabs;
    $scope.curLang = 'English';
    $scope.customNodeModal = document.getElementById('customNodeModal') ? new Modal(document.getElementById('customNodeModal')) : null;
    $scope.Validator = Validator;
    $scope.nodeList = nodes.nodeList;
    $scope.defaultNodeKey = 'eth_mew';
    $scope.customNode = { options: 'eth', name: '', url: '', port: '', httpBasicAuth: null, eip155: false, chainId: '' };
    $scope.customNodeCount = 0;
    $scope.nodeIsConnected = true;
    $scope.browserProtocol = window.location.protocol;
    var hval = window.location.hash;
    $scope.notifier = uiFuncs.notifier;
    $scope.notifier.sce = $sce;
    $scope.notifier.scope = $scope;
    $scope.ajaxReq = ajaxReq;
    $scope.nodeType = $scope.ajaxReq.type;
    $scope.nodeService = $scope.ajaxReq.service;
    $scope.$watch('ajaxReq.type', function () {
        $scope.nodeType = $scope.ajaxReq.type;
    });
    $scope.$watch('ajaxReq.service', function () {
        $scope.nodeService = $scope.ajaxReq.service;
    });
    $scope.setArrowVisibility = function () {
        setTimeout(function () {
            if (document.querySelectorAll('.nav-inner')[0] && document.querySelectorAll('.nav-scroll')[0]) {
                $scope.showLeftArrow = false;
                $scope.showRightArrow = !(document.querySelectorAll('.nav-inner')[0].clientWidth <= document.querySelectorAll('.nav-scroll')[0].clientWidth);
                $scope.$apply();
            }
        }, 200);
    };
    $scope.setArrowVisibility();

    $scope.changeNode = function (key) {
        if ($scope.nodeList[key]) {
            $scope.curNode = $scope.nodeList[key];
        } else {
            $scope.curNode = $scope.nodeList[$scope.defaultNodeKey];
        }
        $scope.dropdownNode = false;
        Token.popTokens = $scope.curNode.tokenList;
        ajaxReq['key'] = key;
        for (var attrname in $scope.curNode.lib) {
            ajaxReq[attrname] = $scope.curNode.lib[attrname];
        }for (var attrname in $scope.curNode) {
            if (attrname != 'name' && attrname != 'tokenList' && attrname != 'lib') ajaxReq[attrname] = $scope.curNode[attrname];
        }localStorage.setItem('curNode', JSON.stringify({
            key: key
        }));
        if (nodes.ensNodeTypes.indexOf($scope.curNode.type) == -1) $scope.tabNames.ens.cx = $scope.tabNames.ens.mew = false;else $scope.tabNames.ens.cx = $scope.tabNames.ens.mew = true;
        ajaxReq.getCurrentBlock(function (data) {
            if (data.error) {
                $scope.nodeIsConnected = false;
                $scope.notifier.danger(globalFuncs.errorMsgs[32]);
            } else {
                $scope.nodeIsConnected = true;
                $scope.notifier.info(globalFuncs.successMsgs[5] + 'to the <strong>' + $scope.nodeType + ' node</strong>, provided by ' + $scope.nodeService + '.');
            }
        });
    };
    $scope.checkNodeUrl = function (nodeUrl) {
        return $scope.Validator.isValidURL(nodeUrl);
    };
    $scope.setCurNodeFromStorage = function () {
        var node = localStorage.getItem('curNode');
        if (node == null) {
            $scope.changeNode($scope.defaultNodeKey);
        } else {
            node = JSON.parse(node);
            var key = globalFuncs.stripTags(node.key);
            $scope.changeNode(key);
        }
    };
    $scope.addCustomNodeToList = function (nodeInfo) {
        var tempObj = null;
        if (nodeInfo.options == 'eth') tempObj = JSON.parse(JSON.stringify(nodes.nodeList.eth_ethscan));else if (nodeInfo.options == 'etc') tempObj = JSON.parse(JSON.stringify(nodes.nodeList.etc_epool));else if (nodeInfo.options == 'rop') tempObj = JSON.parse(JSON.stringify(nodes.nodeList.rop_mew));else if (nodeInfo.options == 'kov') tempObj = JSON.parse(JSON.stringify(nodes.nodeList.kov_ethscan));else if (nodeInfo.options == 'rin') tempObj = JSON.parse(JSON.stringify(nodes.nodeList.rin_ethscan));else if (nodeInfo.options == 'cus') {
            tempObj = JSON.parse(JSON.stringify(nodes.customNodeObj));
            tempObj.eip155 = nodeInfo.eip155;
            tempObj.chainId = parseInt(nodeInfo.chainId);
        }
        if (tempObj) {
            tempObj.name = nodeInfo.name + ':' + nodeInfo.options;
            tempObj.service = 'Custom';
            tempObj.lib = new nodes.customNode(nodeInfo.url, nodeInfo.port, nodeInfo.httpBasicAuth);
            $scope.nodeList['cus_' + nodeInfo.options + '_' + $scope.customNodeCount] = tempObj;
            $scope.customNodeCount++;
        }
    };
    $scope.getCustomNodesFromStorage = function () {
        for (var key in $scope.nodeList) {
            if (key.indexOf("cus_") != -1) delete $scope.nodeList[key];
        }
        var localNodes = localStorage.getItem('localNodes');
        if (localNodes) {
            localNodes = JSON.parse(localNodes);
            for (var i = 0; i < localNodes.length; i++) {
                $scope.addCustomNodeToList(localNodes[i]);
            }
        }
    };
    $scope.getCustomNodesFromStorage();
    $scope.setCurNodeFromStorage();

    $scope.saveCustomNode = function () {
        try {
            if (!$scope.Validator.isAlphaNumericSpace($scope.customNode.name)) throw globalFuncs.errorMsgs[22];else if (!$scope.checkNodeUrl($scope.customNode.url)) throw globalFuncs.errorMsgs[23];else if (!$scope.Validator.isPositiveNumber($scope.customNode.port) && $scope.customNode.port != '') throw globalFuncs.errorMsgs[24];else if ($scope.customNode.eip155 && !$scope.Validator.isPositiveNumber($scope.customNode.chainId)) throw globalFuncs.errorMsgs[25];else if ($scope.customNode.httpBasicAuth && ($scope.customNode.httpBasicAuth.user == '' || $scope.customNode.httpBasicAuth.password == '')) throw globalFuncs.errorMsgs[29];
        } catch (e) {
            $scope.notifier.danger(e);
            return;
        }
        var customNode = $scope.customNode;
        var localNodes = localStorage.getItem('localNodes');
        localNodes = !localNodes ? [] : JSON.parse(localNodes);
        localNodes.push(customNode);
        $scope.addCustomNodeToList(customNode);
        $scope.changeNode('cus_' + customNode.options + '_' + ($scope.customNodeCount - 1));
        localStorage.setItem("localNodes", JSON.stringify(localNodes));
        $scope.customNodeModal.close();
        $scope.customNode = { options: 'eth', name: '', url: '', port: '', httpBasicAuth: null, eip155: false, chainId: '' };
    };

    $scope.removeNodeFromLocal = function (localNodeName) {
        var localNodes = localStorage.getItem('localNodes');
        localNodes = !localNodes ? [] : JSON.parse(localNodes);
        for (var i = 0; i < localNodes.length; i++) {
            if (localNodes[i].name + ':' + localNodes[i].options == localNodeName) localNodes.splice(i, 1);
        }
        localStorage.setItem('localNodes', JSON.stringify(localNodes));
        $scope.getCustomNodesFromStorage();
        $scope.setCurNodeFromStorage();
    };

    $scope.setTab = function (hval) {
        if (hval != '') {
            hval = hval.replace('#', '');
            //          //Check if URL contains Parameters
            //          if(hval.indexOf('=') != -1) {
            //              //Remove URL parameter from hval
            //              hval = hval.substring(0,hval.indexOf('='));
            //          }
            for (var key in $scope.tabNames) {
                if ($scope.tabNames[key].url == hval) {
                    $scope.activeTab = globalService.currentTab = $scope.tabNames[key].id;
                    break;
                }
                $scope.activeTab = globalService.currentTab;
            }
        } else {
            $scope.activeTab = globalService.currentTab;
        }
    };
    $scope.setTab(hval);

    $scope.tabClick = function (id) {
        uiFuncs.notifier.close();
        $scope.activeTab = globalService.currentTab = id;
        for (var key in $scope.tabNames) {
            if ($scope.tabNames[key].id == id) location.hash = $scope.tabNames[key].url;
        }
    };

    $scope.setLanguageVal = function (id, varName, pos) {
        $translate(id).then(function (paragraph) {
            globalFuncs[varName][pos] = paragraph;
        }, function (translationId) {
            globalFuncs[varName][pos] = translationId;
        });
    };

    $scope.setErrorMsgLanguage = function () {
        for (var i = 0; i < globalFuncs.errorMsgs.length; i++) {
            $scope.setLanguageVal('ERROR_' + i, 'errorMsgs', i);
        }for (var i = 0; i < globalFuncs.successMsgs.length; i++) {
            $scope.setLanguageVal('SUCCESS_' + (i + 1), 'successMsgs', i);
        }
    };

    $scope.setGethErrMsgLanguage = function () {
        globalFuncs.gethErrorMsgs = {};
        for (var s in globalFuncs.gethErrors) {
            var key = globalFuncs.gethErrors[s];
            if (key.indexOf('GETH_') === 0) {
                $scope.setLanguageVal(key, 'gethErrorMsgs', key);
            }
        }
    };

    $scope.setParityErrMsgLanguage = function () {
        globalFuncs.parityErrorMsgs = {};
        for (var s in globalFuncs.parityErrors) {
            var key = globalFuncs.parityErrors[s];
            if (key.indexOf('PARITY_') === 0 || key.indexOf('ERROR_17') === 0) {
                $scope.setLanguageVal(key, 'parityErrorMsgs', key);
            }
        }
    };

    $scope.changeLanguage = function (key, value) {
        $translate.use(key);
        $scope.setErrorMsgLanguage();
        if (globalFuncs.getEthNodeName() == 'geth') $scope.setGethErrMsgLanguage();else $scope.setParityErrMsgLanguage();
        $scope.curLang = value;
        $scope.setArrowVisibility();
        $scope.dropdown = false;
        localStorage.setItem('language', JSON.stringify({
            key: key,
            value: value
        }));
        globalFuncs.curLang = key;
    };
    $scope.setLanguageFromStorage = function () {
        var lang = localStorage.getItem('language');
        if (lang == null) lang = "{\"key\":\"en\",\"value\":\"English\"}";
        lang = JSON.parse(lang);
        var key = globalFuncs.stripTags(lang.key);
        var value = globalFuncs.stripTags(lang.value);
        $scope.changeLanguage(key, value);
    };
    $scope.setLanguageFromStorage();

    $scope.setHash = function (hash) {
        location.hash = hash;
        $scope.setTab(hash);
        $scope.$apply();
    };

    $scope.scrollHoverIn = function (isLeft, val) {
        clearInterval($scope.sHoverTimer);
        $scope.sHoverTimer = setInterval(function () {
            if (isLeft) $scope.scrollLeft(val);else $scope.scrollRight(val);
        }, 20);
    };

    $scope.scrollHoverOut = function () {
        clearInterval($scope.sHoverTimer);
    };

    $scope.setOnScrollArrows = function () {
        var ele = document.querySelectorAll('.nav-scroll')[0];
        $scope.showLeftArrow = ele.scrollLeft > 0;
        $scope.showRightArrow = document.querySelectorAll('.nav-inner')[0].clientWidth > ele.clientWidth + ele.scrollLeft;
        $scope.$apply();
    };

    $scope.scrollLeft = function (val) {
        var ele = document.querySelectorAll('.nav-scroll')[0];
        ele.scrollLeft -= val;
    };

    $scope.scrollRight = function (val) {
        var ele = document.querySelectorAll('.nav-scroll')[0];
        ele.scrollLeft += val;
    };

    angular.element(document.querySelectorAll('.nav-scroll')[0]).bind('scroll', $scope.setOnScrollArrows);
    globalFuncs.changeHash = $scope.setHash;
};
module.exports = tabsCtrl;

},{}],25:[function(require,module,exports){
'use strict';

var viewCtrl = function viewCtrl($scope, globalService, $sce) {
    $scope.globalService = globalService;
    $scope.notifier = uiFuncs.notifier;
    $scope.notifier.sce = $sce;
    $scope.notifier.scope = $scope;
};
module.exports = viewCtrl;

},{}],26:[function(require,module,exports){
'use strict';

var viewWalletCtrl = function viewWalletCtrl($scope, walletService) {
    $scope.usdBalance = "loading";
    $scope.gbpBalance = "loading";
    $scope.eurBalance = "loading";
    $scope.btcBalance = "loading";
    $scope.etherBalance = "loading";
    $scope.tokenVisibility = "hidden";
    $scope.pkeyVisible = false;

    walletService.wallet = null;
    walletService.password = '';
    $scope.ajaxReq = ajaxReq;
    $scope.$watch(function () {
        if (walletService.wallet == null) return null;
        return walletService.wallet.getAddressString();
    }, function () {
        if (walletService.wallet == null) return;
        $scope.wallet = walletService.wallet;
        $scope.wd = true;
        $scope.showEnc = walletService.password != '';
        if (walletService.wallet.type == "default") $scope.blob = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toJSON());
        if (walletService.password != '') {
            $scope.blobEnc = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toV3(walletService.password, {
                kdf: globalFuncs.kdf,
                n: globalFuncs.scrypt.n
            }));
            $scope.encFileName = $scope.wallet.getV3Filename();
        }
        $scope.wallet.setBalance();
        $scope.wallet.setTokens();
    });
    $scope.$watch('ajaxReq.key', function () {
        if ($scope.wallet) {
            $scope.wallet.setBalance();
            $scope.wallet.setTokens();
        }
    });

    $scope.printQRCode = function () {
        globalFuncs.printPaperWallets(JSON.stringify([{
            address: $scope.wallet.getAddressString(),
            private: $scope.wallet.getPrivateKeyString()
        }]));
    };

    $scope.showHidePkey = function () {
        $scope.pkeyVisible = !$scope.pkeyVisible;
    };
    $scope.resetWallet = function () {
        $scope.wallet = null;
        walletService.wallet = null;
        walletService.password = '';
        $scope.blob = $scope.blobEnc = $scope.password = "";
    };
};
module.exports = viewWalletCtrl;

},{}],27:[function(require,module,exports){
'use strict';

var walletBalanceCtrl = function walletBalanceCtrl($scope, $sce) {
    $scope.ajaxReq = ajaxReq;
    $scope.localToken = {
        contractAdd: "",
        symbol: "",
        decimals: "",
        type: "custom"
    };
    $scope.customTokenField = false;
    $scope.saveTokenToLocal = function () {
        globalFuncs.saveTokenToLocal($scope.localToken, function (data) {
            if (!data.error) {
                $scope.localToken = {
                    contractAdd: "",
                    symbol: "",
                    decimals: "",
                    type: "custom"
                };
                $scope.wallet.setTokens();
                $scope.validateLocalToken = $sce.trustAsHtml('');
                $scope.customTokenField = false;
            } else {
                $scope.notifier.danger(data.msg);
            }
        });
    };
    /*
    $scope.$watch('wallet', function() {
        if ($scope.wallet) $scope.reverseLookup();
    });
    $scope.reverseLookup = function() {
        var _ens = new ens();
        _ens.getName($scope.wallet.getAddressString().substring(2) + '.addr.reverse', function(data) {
            if (data.error) uiFuncs.notifier.danger(data.msg);
            else if (data.data == '0x') {
                $scope.showens = false;
            } else {
                $scope.ensAddress = data.data;
                $scope.showens = true;
            }
        });
    }
    */
    $scope.removeTokenFromLocal = function (tokenSymbol) {
        globalFuncs.removeTokenFromLocal(tokenSymbol, $scope.wallet.tokenObjs);
    };
};
module.exports = walletBalanceCtrl;

},{}],28:[function(require,module,exports){
'use strict';

var walletGenCtrl = function walletGenCtrl($scope) {
    $scope.password = "";
    $scope.wallet = null;
    $scope.showWallet = false;
    $scope.blob = $scope.blobEnc = "";
    $scope.isDone = true;
    $scope.showPass = true;
    $scope.fileDownloaded = false;
    $scope.showPaperWallet = false;
    $scope.showGetAddress = false;
    $scope.genNewWallet = function () {
        if (!$scope.isStrongPass()) {
            $scope.notifier.danger(globalFuncs.errorMsgs[1]);
        } else if ($scope.isDone) {
            $scope.wallet = $scope.blob = $scope.blobEnc = null;
            if (!$scope.$$phase) $scope.$apply();
            $scope.isDone = false;
            $scope.wallet = Wallet.generate(false);
            $scope.showWallet = true;
            $scope.blob = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toJSON());
            $scope.blobEnc = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toV3($scope.password, {
                kdf: globalFuncs.kdf,
                n: globalFuncs.scrypt.n
            }));
            $scope.encFileName = $scope.wallet.getV3Filename();
            if (parent != null) parent.postMessage(JSON.stringify({ address: $scope.wallet.getAddressString(), checksumAddress: $scope.wallet.getChecksumAddressString() }), "*");
            $scope.isDone = true;
            if (!$scope.$$phase) $scope.$apply();
        }
    };
    $scope.printQRCode = function () {
        globalFuncs.printPaperWallets(JSON.stringify([{
            address: $scope.wallet.getAddressString(),
            private: $scope.wallet.getPrivateKeyString()
        }]));
    };
    $scope.isStrongPass = function () {
        return globalFuncs.isStrongPass($scope.password);
    };
    $scope.downloaded = function () {
        $scope.fileDownloaded = true;
    };
    $scope.continueToPaper = function () {
        $scope.showPaperWallet = true;
    };
    $scope.getAddress = function () {
        $scope.showPaperWallet = false;
        $scope.wallet = null;
        $scope.showGetAddress = true;
    };
};
module.exports = walletGenCtrl;

},{}],29:[function(require,module,exports){
'use strict';

var cxFuncs = function cxFuncs() {};
cxFuncs.storage = chrome.storage.sync;
cxFuncs.getAllNickNames = function (callback) {
	var nickNames = [];
	this.storage.get(null, function (items) {
		for (var key in items) {
			if (items.hasOwnProperty(key)) {
				var tobj = JSON.parse(items[key]);
				if (tobj.type == 'wallet' || tobj.type == 'watchOnly') {
					nickNames.push(tobj.nick);
					nickNames.push(key);
				}
			}
		}
		callback(nickNames);
	});
};
cxFuncs.addWalletToStorage = function (address, encStr, nickname, callback) {
	nickname = nickname.replace(/(<([^>]+)>)/ig, "");
	var value = {
		nick: nickname,
		priv: encStr,
		type: 'wallet'
	};
	var keyname = ethUtil.toChecksumAddress(address);
	var obj = {};
	obj[keyname] = JSON.stringify(value);
	this.storage.set(obj, callback);
};
cxFuncs.addWatchOnlyAddress = function (address, nickname, callback) {
	nickname = nickname.replace(/(<([^>]+)>)/ig, "");
	var value = {
		nick: nickname,
		type: 'watchOnly'
	};
	var keyname = ethUtil.toChecksumAddress(address);;
	var obj = {};
	obj[keyname] = JSON.stringify(value);
	this.storage.set(obj, callback);
};
cxFuncs.getStorageArr = function (filter, callback) {
	var wallets = [];
	this.storage.get(null, function (items) {
		for (var key in items) {
			if (items.hasOwnProperty(key)) {
				var tobj = JSON.parse(items[key]);
				if (tobj.type == filter) {
					tobj['addr'] = key;
					wallets.push(tobj);
				}
			}
		}
		wallets.sort(function (a, b) {
			if (a.nick < b.nick) return -1;
			if (a.nick > b.nick) return 1;
			return 0;
		});
		callback(wallets);
	});
};
cxFuncs.getWalletsArr = function (callback) {
	this.getStorageArr('wallet', callback);
};
cxFuncs.getWatchOnlyArr = function (callback) {
	this.getStorageArr('watchOnly', callback);
};
cxFuncs.deleteAccount = function (address, callback) {
	this.storage.remove(address, function () {
		callback(address);
	});
};
cxFuncs.editNickName = function (address, newNick, callback) {
	newNick = newNick.replace(/(<([^>]+)>)/ig, "");
	this.storage.get(address, function (account) {
		var accountInfo = account[address];
		accountInfo = JSON.parse(accountInfo);
		accountInfo['nick'] = newNick;
		account[address] = JSON.stringify(accountInfo);
		cxFuncs.storage.set(account, function () {
			callback(newNick);
		});
	});
};
module.exports = cxFuncs;

},{}],30:[function(require,module,exports){
'use strict';

var QRCodeDrtv = function QRCodeDrtv() {
	return function (scope, element, attrs) {
		var watchVar = attrs.watchVar;
		scope.$watch(watchVar, function () {
			var value = attrs.qrCode;
			element.empty();
			var delay = 0;
			if (element[0].clientWidth == 0) delay = 200;
			setTimeout(function () {
				new QRCode(element[0], {
					text: value,
					width: element[0].clientWidth,
					height: element[0].clientWidth,
					colorDark: "#000000",
					colorLight: "#ffffff",
					correctLevel: QRCode.CorrectLevel.M
				});
			}, delay);
		});
	};
};
module.exports = QRCodeDrtv;

},{}],31:[function(require,module,exports){
'use strict';

var addressFieldDrtv = function addressFieldDrtv($compile) {
    return {
        restrict: "E",
        link: function link(scope, element, attrs) {
            var varName = attrs.varName;
            var varArr = varName.split('.');
            var readOnly = attrs.readOnly ? attrs.readOnly : false;
            var placeholder = attrs.placeholder;
            var setValue = function setValue(value) {
                var temp = scope;
                for (var i in varArr) {
                    if (i == varArr.length - 1) temp[varArr[i]] = value;else {
                        temp = temp[varArr[i]];
                    }
                }
            };
            scope.addressDrtv = {
                showDerivedAddress: false,
                ensAddressField: '',
                derivedAddress: ''
            };
            element.html('<div class=\"col-xs-11\">\n \
                    <label translate=\"SEND_addr\"> To Address: </label>\n \
                    <input class=\"form-control\" type=\"text\" placeholder=\"' + placeholder + '\" ng-model=\"addressDrtv.ensAddressField\" ng-disabled=\"' + readOnly + '\" ng-class=\"Validator.isValidENSorEtherAddress(' + varName + ') ? \'is-valid\' : \'is-invalid\'\"/>\n \
                    <p class="ens-response" ng-show="addressDrtv.showDerivedAddress"> ↳ <span class="mono ng-binding"> {{addressDrtv.derivedAddress}} </span> </p>\n \
                </div>\n \
                <div class=\"col-xs-1 address-identicon-container\">\n \
                   <div class=\"addressIdenticon\" title=\"Address Indenticon\" blockie-address=\"{{' + varName + '}}\" watch-var=\"' + varName + '\"></div>\n \
                </div>');
            scope.$watch('addressDrtv.ensAddressField', function () {
                var _ens = new ens();
                if (Validator.isValidAddress(scope.addressDrtv.ensAddressField)) {
                    setValue(scope.addressDrtv.ensAddressField);
                    if (!Validator.isChecksumAddress(scope.addressDrtv.ensAddressField)) {
                        scope.notifier.info(globalFuncs.errorMsgs[35]);
                    }
                } else if (Validator.isValidENSAddress(scope.addressDrtv.ensAddressField)) {
                    _ens.getAddress(scope.addressDrtv.ensAddressField, function (data) {
                        if (data.error) uiFuncs.notifier.danger(data.msg);else if (data.data == '0x0000000000000000000000000000000000000000' || data.data == '0x') {
                            setValue('0x0000000000000000000000000000000000000000');
                            scope.addressDrtv.derivedAddress = '0x0000000000000000000000000000000000000000';
                            scope.addressDrtv.showDerivedAddress = true;
                        } else {
                            setValue(data.data);
                            scope.addressDrtv.derivedAddress = ethUtil.toChecksumAddress(data.data);
                            scope.addressDrtv.showDerivedAddress = true;
                        }
                    });
                } else {
                    setValue('');
                    scope.addressDrtv.showDerivedAddress = false;
                }
            });
            $compile(element.contents())(scope);
        }
    };
};
module.exports = addressFieldDrtv;

},{}],32:[function(require,module,exports){
module.exports = "<aside ng-controller='walletBalanceCtrl'>\n\n  <div class=\"block\">\n    <h5 translate=\"sidebar_AccountAddr\">Account Address:</h5>\n    <ul class=\"account-info\">\n      <div class=\"addressIdenticon med float\" title=\"Address Indenticon\" blockie-address=\"{{wallet.getAddressString()}}\" watch-var=\"wallet\"></div>\n      <span class=\"mono wrap\">{{wallet.getChecksumAddressString()}}</span>\n    </ul>\n  </div>\n\n  <div class=\"block\">\n  <h5 translate=\"sidebar_AccountBal\">Account Balance:</h5>\n  <ul class=\"account-info point\" ng-dblclick=\"showLongBal=!showLongBal\" title=\"{{wallet.balance}} (Double-Click)\"><li>\n    <span class=\"mono wrap\" ng-show=\"!showLongBal\">{{wallet.balance | number}}</span>\n    <span class=\"mono wrap\" ng-show=\"showLongBal\">{{wallet.balance}}</span>\n    {{ajaxReq.type}}\n  </li></ul>\n  </div>\n\n  <div class=\"block\">\n    <section class=\"token-balances\">\n      <h5 translate=\"sidebar_TokenBal\">Token Balances:</h5>\n      <table class=\"account-info\">\n        <tr ng-repeat=\"token in wallet.tokenObjs track by $index\" ng-show=\"token.balance!=0 && token.balance!='loading' || token.type!=='default' || tokenVisibility=='shown'\">\n          <td class=\"mono wrap point\" title=\"{{token.getBalance()}} (Double-Click)\" ng-dblclick=\"showLongToken=!showLongToken\">\n            <img src=\"images/icon-remove.svg\" class=\"token-remove\" title=\"Remove Token\" ng-click=\"removeTokenFromLocal(token.symbol)\" ng-show=\"token.type!=='default'\" />\n            <span ng-show=\"!showLongToken\">{{token.getBalance() | number}}</span>\n            <span ng-show=\"showLongToken\">{{token.getBalance() }}</span>\n          </td>\n          <td>{{token.getSymbol()}} </td>\n        </tr>\n      </table>\n      <a class=\"btn btn-default btn-xs\" ng-click=\"tokenVisibility='shown'\" ng-show=\"tokenVisibility=='hidden'\">Show All Tokens</a>\n      <a class=\"btn btn-default btn-xs\" ng-click=\"tokenVisibility='hidden'\" ng-show=\"tokenVisibility=='shown'\">Hide Tokens</a>\n      <a class=\"btn btn-default btn-xs\" ng-click=\"customTokenField=!customTokenField\"><span translate=\"SEND_custom\"translate=\"SEND_custom\">Add Custom Token</span></a>\n      <div class=\"custom-token-fields\" ng-show=\"customTokenField\">\n        <label translate=\"TOKEN_Addr\">Address:</label>\n        <input class=\"form-control input-sm\" type=\"text\" ng-model=\"localToken.contractAdd\" ng-class=\"Validator.isValidAddress(localToken.contractAdd) ? 'is-valid' : 'is-invalid'\" />\n        <label translate=\"TOKEN_Symbol\">Token Symbol:</label>\n        <input class=\"form-control input-sm\" type=\"text\" ng-model=\"localToken.symbol\" ng-class=\"localToken.symbol!='' ? 'is-valid' : 'is-invalid'\" />\n        <label translate=\"TOKEN_Dec\"> Decimals:</label>\n        <input class=\"form-control input-sm\" type=\"text\" ng-model=\"localToken.decimals\" ng-class=\"Validator.isPositiveNumber(localToken.decimals) ? 'is-valid' : 'is-invalid'\" />\n        <div class=\"btn btn-primary btn-xs\" ng-click=\"saveTokenToLocal()\" translate=\"x_Save\">Save</div>\n        <div ng-bind-html=\"validateLocalToken\"></div>\n      </div>\n    </section>\n  </div>\n\n  <div class=\"block\">\n    <h5 translate=\"sidebar_TransHistory\"> Transaction History: </h5>\n    <ul class=\"account-info\">\n      <li ng-show=\"ajaxReq.type != 'CUS'\">\n        <a href=\"{{ajaxReq.blockExplorerAddr.replace('[[address]]', wallet.getAddressString())}}\" target=\"_blank\">\n          {{ajaxReq.type}} ({{ajaxReq.blockExplorerTX.replace('/tx/[[txHash]]', '')}})\n        </a>\n      </li>\n      <li>\n        <a href=\"https://ethplorer.io/address/{{wallet.getAddressString()}}\" target=\"_blank\"> Tokens (Ethplorer.io) </a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"block\" ng-show=\"ajaxReq.type=='ETH'\">\n    <h5 translate=\"sidebar_Equiv\">Equivalent Values:</h5>\n    <ul class=\"account-info\">\n      <li><span class=\"mono wrap\">{{wallet.btcBalance | number}}</span> BTC</li>\n      <li><span class=\"mono wrap\">{{wallet.repBalance | number}}</span> REP</li>\n      <li><span class=\"mono wrap\">{{wallet.eurBalance | currency:\"€\"}}</span> EUR</li>\n      <li><span class=\"mono wrap\">{{wallet.usdBalance | currency:\"$\"}}</span> USD</li>\n      <li><span class=\"mono wrap\">{{wallet.gbpBalance | currency:\"£\"}}</span> GBP</li>\n      <li><span class=\"mono wrap\">{{wallet.chfBalance | currency:\" \"}}</span> CHF</li>\n    </ul>\n    <a target=\"_blank\" ng-click=\"globalService.currentTab=globalService.tabs.swap.id\" class=\"btn btn-primary btn-xs\">Swap via Bity</a>\n  </div>\n\n</aside>\n";
},{}],33:[function(require,module,exports){
'use strict';

var balanceDrtv = function balanceDrtv() {
       return {
              restrict: "E",
              template: require('./balanceDrtv.html')
       };
};
module.exports = balanceDrtv;

//<label class=\"ens-response\" ng-show=\"showens\"> ↳ <span class=\"mono ng-binding\"> {{ensAddress}} </span> </label>\n \

},{"./balanceDrtv.html":32}],34:[function(require,module,exports){
'use strict';

var blockiesDrtv = function blockiesDrtv() {
    return function (scope, element, attrs) {
        var watchVar = attrs.watchVar;
        scope.$watch(watchVar, function () {
            var address = attrs.blockieAddress;
            var content = Validator.isValidAddress(address) ? globalFuncs.getBlockie(address) : '';
            element.css({
                'background-image': 'url(' + content + ')'
            });
        });
    };
};
module.exports = blockiesDrtv;

},{}],35:[function(require,module,exports){
'use strict';

var cxWalletDecryptDrtv = function cxWalletDecryptDrtv() {
  return {
    restrict: "E",
    template: '<div class="row" ng-controller=\'cxDecryptWalletCtrl\'>\n \
      <div class="col-md-4 col-sm-6">\n \
        <h4 translate="decrypt_Select"> Select a Wallet: </h4>\n \
        <div class="radio" ng-repeat="twallet in allWallets  track by $index">\n \
          <label><input type="radio" name="selectedWallet" ng-model="$parent.selectedWallet" value="{{twallet.addr}}"> {{twallet.nick}} <small>({{twallet.balance}} Ether)</small> </label>\n \
        </div>\n \
      </div>\n \
      <div class="col-md-4 col-sm-6" ng-show="selectedWallet!=\'\'">\n \
        <h4 translate="ADD_Label_3"> Your wallet is encrypted. Please enter the password: </h4>\n \
        <input class="form-control" type="password" placeholder="{{ \'x_Password\' | translate }}" ng-model="password" ng-keyup="$event.keyCode == 13 && decryptWallet()" >\n \
      </div>\n \
      <div class="col-md-4 col-sm-6" id="walletuploadbutton" ng-show="password.length>0">\n \
        <h4 id="uploadbtntxt-wallet" translate="ADD_Label_6"> Unlock Your Wallet:</h4>\n \
        <div class="form-group"><a ng-click="decryptWallet()" class="btn btn-primary btn-block" translate="ADD_Label_6_short">UNLOCK</a></div>\n \
      </div>\n \
    </div>'
  };
};
module.exports = cxWalletDecryptDrtv;

},{}],36:[function(require,module,exports){
'use strict';

var fileReaderDrtv = function fileReaderDrtv($parse) {
	return {
		restrict: 'A',
		scope: false,
		link: function link(scope, element, attrs) {
			var fn = $parse(attrs.onReadFile);
			element.on('change', function (onChangeEvent) {
				var reader = new FileReader();
				reader.onload = function (onLoadEvent) {
					scope.$apply(function () {
						fn(scope, {
							$fileContent: onLoadEvent.target.result
						});
					});
				};
				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
			});
		}
	};
};
module.exports = fileReaderDrtv;

},{}],37:[function(require,module,exports){
module.exports = "<article class=\"block decrypt-drtv clearfix\" ng-controller='decryptWalletCtrl as $crtl'>\n\n  <!-- Column 1 - Select Type of Key -->\n  <section class=\"col-md-4 col-sm-6\">\n    <h4 translate=\"decrypt_Access\"> Select the format of your private key: </h4>\n    <label class=\"radio\">\n      <input aria-flowto=\"aria1\" aria-label=\"Keystore JSON file\" type=\"radio\" ng-model=\"walletType\" value=\"fileupload\" />\n      <span translate=\"x_Keystore2\">Keystore / JSON File</span>\n    </label>\n    <label class=\"radio\">\n      <input aria-flowto=\"aria2\" aria-label=\"private key\" type=\"radio\" ng-model=\"walletType\" value=\"pasteprivkey\" />\n      <span translate=\"x_PrivKey2\">Private Key</span>\n    </label>\n    <label class=\"radio\">\n      <input aria-flowto=\"aria3\" aria-label=\"mnemonic phrase\" type=\"radio\" ng-model=\"walletType\" value=\"pastemnemonic\" />\n      <span translate=\"x_Mnemonic\">Mnemonic Phrase</span>\n    </label>\n    <label class=\"radio\" style=\"display: none;\">\n      <input aria-flowto=\"aria4\" aria-label=\"parity phrase\" type=\"radio\" ng-model=\"walletType\" value=\"parityBWallet\" />\n      <span translate=\"x_ParityPhrase\">Parity Phrase</span>\n    </label>\n    <label class=\"radio\">\n      &nbsp;<span translate=\"x_ParityPhrase\">Parity Phrase</span>: <a href=\"https://myetherwallet.groovehq.com/knowledge_base/topics/parity-phrases-no-longer-supported\" target=\"_blank\">No longer supported</a>\n    </label>\n    <label class=\"radio\" ng-hide=\"globalService.currentTab==globalService.tabs.signMsg.id\">\n      <input aria-flowto=\"aria5\" type=\"radio\" aria-label=\"Ledger Nano S hardware wallet\" ng-model=\"walletType\" value=\"ledger\" />\n      Ledger Nano S\n    </label>\n    <label class=\"radio\" ng-hide=\"globalService.currentTab==globalService.tabs.signMsg.id\">\n      <input aria-flowto=\"aria6\" type=\"radio\" aria-label=\"Trezor hardware wallet\" ng-model=\"walletType\" value=\"trezor\" />\n      TREZOR\n    </label>\n    <label class=\"radio\" ng-hide=\"globalService.currentTab!==globalService.tabs.viewWalletInfo.id\">\n      <input aria-label=\"address\" type=\"radio\" ng-model=\"walletType\" value=\"addressOnly\" />\n      View with Address Only\n    </label>\n  </section>\n  <!-- Column 1 - Select Type of Key -->\n\n  <!-- Column 2 - Unlock That Key -->\n  <section class=\"col-md-4 col-sm-6\">\n\n    <!-- if selected upload -->\n    <div id=\"selectedUploadKey\" ng-if=\"walletType=='fileupload'\">\n      <h4 translate=\"ADD_Radio_2_alt\">Select your wallet file:</h4>\n      <div class=\"form-group\">\n        <input style=\"display:none;\" type=\"file\" on-read-file=\"showContent($fileContent)\" id=\"fselector\" />\n        <a class=\"btn-file marg-v-sm\" ng-click=\"openFileDialog()\" translate=\"ADD_Radio_2_short\" id=\"aria1\" tabindex=\"0\" role=\"button\">SELECT WALLET FILE... </a>\n      </div>\n      <div class=\"form-group\" ng-if=\"requireFPass\">\n        <p translate=\"ADD_Label_3\"> Your file is encrypted. Please enter the password: </p>\n        <input class=\"form-control\"\n               ng-change=\"onFilePassChange()\"\n               ng-class=\"Validator.isPasswordLenValid($parent.$parent.filePassword,0) ? 'is-valid' : 'is-invalid'\"\n               ng-model=\"$parent.$parent.filePassword\"\n               placeholder=\"{{ 'x_Password' | translate }}\"\n               type=\"password\"\n        />\n      </div>\n    </div>\n    <!-- /if selected upload -->\n\n    <!-- if selected type key-->\n    <div id=\"selectedTypeKey\" ng-if=\"walletType=='pasteprivkey'\">\n      <h4 translate=\"ADD_Radio_3\"> Paste / type your private key: </h4>\n      <div class=\"form-group\">\n        <textarea id=\"aria2\"\n                  class=\"form-control\"\n                  ng-change=\"onPrivKeyChange()\"\n                  ng-class=\"Validator.isValidPrivKey($parent.$parent.manualprivkey.length) ? 'is-valid' : 'is-invalid'\"\n                  ng-keyup=\"$event.keyCode == 13 && decryptWallet()\"\n                  ng-model=\"$parent.$parent.manualprivkey\"\n                  placeholder=\"{{ 'x_PrivKey2' | translate }}\"\n                  rows=\"4\"\n        ></textarea>\n      </div>\n      <div class=\"form-group\" ng-if=\"requirePPass\">\n        <p translate=\"ADD_Label_3\"> Your file is encrypted. Please enter the password: </p>\n        <input class=\"form-control\"\n               ng-change=\"onPrivKeyPassChange()\"\n               ng-class=\"Validator.isPasswordLenValid($parent.$parent.privPassword,0) ? 'is-valid' : 'is-invalid'\"\n               ng-keyup=\"$event.keyCode == 13 && decryptWallet()\"\n               ng-model=\"$parent.$parent.privPassword\"\n               placeholder=\"{{ 'x_Password' | translate }}\"\n               type=\"password\"\n        />\n      </div>\n    </div>\n    <!-- /if selected type key-->\n\n    <!-- if selected type mnemonic-->\n    <div id=\"selectedTypeMnemonic\" ng-if=\"walletType=='pastemnemonic'\">\n      <h4 translate=\"ADD_Radio_5\"> Paste / type your mnemonic: </h4>\n      <div class=\"form-group\">\n        <textarea id=\"aria3\"\n                  class=\"form-control\"\n                  ng-change=\"onMnemonicChange()\"\n                  ng-class=\"Validator.isValidMnemonic($parent.$parent.manualmnemonic) ? 'is-valid' : 'is-invalid'\"\n                  ng-keyup=\"$event.keyCode == 13 && decryptWallet()\"\n                  ng-model=\"$parent.$parent.manualmnemonic\"\n                  placeholder=\"{{ 'x_Mnemonic' | translate}}\"\n                  rows=\"4\"\n        ></textarea>\n      </div>\n      <div class=\"form-group\">\n        <p translate=\"ADD_Label_8\">Password (optional): </p>\n        <div>\n          <input class=\"form-control\"\n                 ng-keyup=\"$event.keyCode == 13 && decryptWallet()\"\n                 ng-model=\"$parent.$parent.mnemonicPassword\"\n                 placeholder=\"{{ 'x_Password' | translate }}\"\n                 type=\"password\"\n          / >\n        </div>\n      </div>\n    </div>\n    <!-- /if selected type mnemonic-->\n\n    <!-- if selected parity phrase-->\n    <div id=\"selectedTypeMnemonic\" ng-if=\"walletType=='parityBWallet'\">\n      <h4 translate=\"ADD_Radio_5\"> Paste / type your mnemonic: </h4>\n      <div class=\"form-group\">\n        <textarea rows=\"4\"\n                  class=\"form-control\"\n                  ng-change=\"onParityPhraseChange()\"\n                  ng-class=\"$parent.$parent.parityPhrase != '' ? 'is-valid' : 'is-invalid'\"\n                  ng-keyup=\"$event.keyCode == 13 && decryptWallet()\"\n                  ng-model=\"$parent.$parent.parityPhrase\"\n                  placeholder=\"{{ 'x_ParityPhrase' | translate}}\"\n        ></textarea>\n      </div>\n    </div>\n    <!-- /if selected parity phrase-->\n\n    <!-- if selected type ledger-->\n    <div id=\"selectedTypeLedger\" ng-if=\"walletType=='ledger'\">\n      <ol>\n        <li id=\"aria7\" tabinex=\"0\" translate=\"ADD_Ledger_0a\" class=\"text-danger\" ng-hide=\"isSSL\">\n          Re-open MyEtherWallet on a secure (SSL) connection\n        </li>\n        <li tabinex=\"0\" translate=\"ADD_Ledger_0b\" class=\"text-danger\" ng-hide=\"isChrome\">\n          Re-open MyEtherWallet using Google Chrome or Opera\n        </li>\n        <li tabinex=\"0\">\n          <span translate=\"ADD_Ledger_1\">Connect your Ledger Nano S</span> &amp;\n          <span translate=\"ADD_Ledger_2\">Open the Ethereum application (or a contract application)</span>\n        </li>\n        <li tabinex=\"0\" translate=\"ADD_Ledger_3\">\n          Verify that Browser Support is enabled in Settings\n        </li>\n        <li tabinex=\"0\" translate=\"ADD_Ledger_4\">\n          If no Browser Support is found in settings, verify that you have Firmware >1.2\n        </li>\n      </ol>\n      <div class=\"text-center\">\n        <p>Guides:<br />\n          <a href=\"http://support.ledgerwallet.com/knowledge_base/topics/how-to-use-myetherwallet-with-ledger\" target=\"_blank\">\n            How to use MyEtherWallet with your Nano S\n          </a><br />\n          <a href=\"https://ledger.groovehq.com/knowledge_base/topics/how-to-secure-your-eth-tokens-augur-rep-dot-dot-dot-with-your-nano-s\" target=\"_blank\">\n            How to secure your tokens with your Nano S\n          </a><br /><br />\n          <a tabindex=\"0\" role=\"button\" class=\"btn btn-default btn-xs\" href=\"https://www.ledgerwallet.com/r/fa4b?path=/products/\" target=\"_blank\">\n            Don't have a Ledger? Buy one today.\n          </a>\n        </p>\n      </div>\n    </div>\n    <!-- /if selected type ledger-->\n\n    <!-- if selected type trezor-->\n    <br />\n    <div id=\"selectedTypeTrezor\" ng-if=\"walletType=='trezor'\">\n      <div class=\"form-group\">\n        <a id=\"aria6\"\n           class=\"btn btn-primary btn-block\"\n           ng-click=\"scanTrezor()\"\n           ng-show=\"walletType=='trezor'\"\n           tabindex=\"0\" role=\"button\"\n           translate=\"ADD_Trezor_scan\"\n        > SCAN </a>\n      </div>\n      <p role=\"alert\" ng-show=\"trezorError\" class=\"text-center text-danger\"><strong>\n        {{trezorErrorString}}\n      </strong></p>\n      <br /><br />\n      <div class=\"text-center\">\n        <p>Guide:<br />\n          <a href=\"https://blog.trezor.io/trezor-integration-with-myetherwallet-3e217a652e08#.n5fddxmdg\" target=\"_blank\">\n            How to use TREZOR with MyEtherWallet\n          </a><br />\n          <a tabindex=\"0\" role=\"button\" class=\"btn btn-xs btn-default\" href=\"https://trezor.io/?a=myetherwallet.com\" target=\"_blank\">\n            Don't have a TREZOR? Order one now.\n          </a>\n        </p>\n      </div>\n    </div>\n    <!-- /if selected type ledger-->\n\n    <!-- if selected addressOnly-->\n    <div id=\"selectedTypeKey\" ng-if=\"walletType=='addressOnly'\">\n      <h4 translate=\"x_Address\"> Your Address </h4>\n      <div class=\"form-group\">\n        <textarea rows=\"4\"\n                  class=\"form-control\"\n                  ng-change=\"onAddressChange()\"\n                  ng-class=\"Validator.isValidAddress($parent.$parent.addressOnly) ? 'is-valid' : 'is-invalid'\"\n                  ng-model=\"$parent.$parent.addressOnly\"\n                  placeholder=\"{{ 'x_Address' | translate }}\"\n        ></textarea>\n      </div>\n    </div>\n    <!-- /if selected addressOnly-->\n\n  </section>\n  <!-- / Column 2 - Unlock That Key -->\n\n  <!-- Column 3 - The Unlock Button -->\n  <section class=\"col-md-4 col-sm-6\" ng-show=\"showFDecrypt||showPDecrypt||showMDecrypt||walletType=='ledger'||walletType=='trezor'||showAOnly||showParityDecrypt\">\n    <h4 id=\"uploadbtntxt-wallet\" ng-show=\"showFDecrypt||showPDecrypt||showMDecrypt\" translate=\"ADD_Label_6\">\n      Access Your Wallet:\n    </h4>\n    <div class=\"form-group\">\n      <a\n      tabindex=\"0\"\n      role=\"button\"\n      class=\"btn btn-primary btn-block\"\n      ng-show=\"showFDecrypt||showPDecrypt||showMDecrypt||showParityDecrypt\"\n      ng-click=\"decryptWallet()\"\n      translate=\"ADD_Label_6_short\">UNLOCK</a>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-primary btn-block\"\n         ng-click=\"decryptAddressOnly()\"\n         ng-show=\"showAOnly\"\n         role=\"button\"\n         tabindex=\"0\"\n         translate=\"ADD_Label_6_short\"\n      > UNLOCK </a>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-primary btn-block\"\n         ng-click=\"scanLedger()\"\n         ng-show=\"walletType=='ledger'\"\n         role=\"button\"\n         tabindex=\"0\"\n         translate=\"ADD_Ledger_scan\"\n      > SCAN </a>\n    </div>\n  </section>\n\n  <!-- / Column 3 -The Unlock Button -->\n\n  <!-- MODAL -->\n  <article class=\"modal fade\" id=\"mnemonicModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Mnemonic Phrase Modal\">\n    <section class=\"modal-dialog\">\n      <section class=\"modal-content\">\n        <div class=\"modal-body\" role=\"document\">\n          <button aria-label=\"Close\" type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n          <!-- Select HD Path -->\n          <h3 id=\"modalTitle\" class=\"modal-title\" translate=\"ADD_Radio_5_Path\">\n            Select HD derivation path:\n          </h3>\n\n          <table class=\"small table table-striped table-mnemonic\">\n\n            <tr>\n              <th> Path </th>\n              <th> Used By </th>\n            </tr>\n\n            <tr>\n              <td>\n                <label class=\"radio\">\n                  <input aria-describedby=\"Path: Jaxx, Metamask, Exodus, imToken - {{HDWallet.defaultDPath}}\"\n                         ng-change=\"onHDDPathChange()\"\n                         ng-model=\"HDWallet.dPath\"\n                         type=\"radio\"\n                         value=\"{{HDWallet.defaultDPath}}\"/>\n                  <span ng-bind=\"HDWallet.defaultDPath\"></span>\n                </label>\n              </td>\n              <td> Jaxx, Metamask, Exodus, imToken &amp; TREZOR (ETH)</td>\n            </tr>\n\n            <tr>\n              <td>\n                <label class=\"radio\">\n                  <input aria-describedby=\"Path: Ledger (ETH) {{HDWallet.ledgerPath}}\"\n                         ng-change=\"onHDDPathChange()\"\n                         ng-model=\"HDWallet.dPath\"\n                         type=\"radio\"\n                         value=\"{{HDWallet.ledgerPath}}\"/>\n                  <span ng-bind=\"HDWallet.ledgerPath\"></span>\n                </label>\n              </td>\n              <td> Ledger (ETH)</td>\n            </tr>\n\n            <tr>\n              <td>\n                <label class=\"radio\">\n                  <input aria-describedby=\"Path: Ledger (ETC) {{HDWallet.ledgerClassicPath}}\"\n                         ng-change=\"onHDDPathChange()\"\n                         ng-model=\"HDWallet.dPath\"\n                         type=\"radio\"\n                         value=\"{{HDWallet.ledgerClassicPath}}\"/>\n                  <span ng-bind=\"HDWallet.ledgerClassicPath\"></span>\n                </label>\n              </td>\n              <td> Ledger (ETC) </td>\n            </tr>\n\n            <tr>\n              <td>\n                <label class=\"radio\">\n                  <input aria-describedby=\"Path: TREZOR (ETC) {{HDWallet.trezorClassicPath}}\"\n                         ng-change=\"onHDDPathChange()\"\n                         ng-model=\"HDWallet.dPath\"\n                         type=\"radio\"\n                         value=\"{{HDWallet.trezorClassicPath}}\"/>\n                  <span ng-bind=\"HDWallet.trezorClassicPath\"></span>\n                </label>\n              </td>\n              <td> TREZOR (ETC) </td>\n            </tr>\n\n            <tr>\n              <td>\n                <label class=\"radio\">\n                  <input aria-describedby=\"Path: TREZOR - TESTNET - {{HDWallet.trezorTestnetPath}}\"\n                         ng-change=\"onHDDPathChange()\"\n                         ng-model=\"HDWallet.dPath\"\n                         type=\"radio\"\n                         value=\"{{HDWallet.trezorTestnetPath}}\"/>\n                  <span ng-bind=\"HDWallet.trezorTestnetPath\"></span>\n                </label>\n              </td>\n              <td> TREZOR (TESTNET) </td>\n            </tr>\n\n            <tr class=\"mnemonic-custom-row\">\n              <td>\n                <label class=\"radio\">\n                  <input aria-describedby=\"Path: Enter your own - {{HDWallet.customDPath}}\"\n                         ng-change=\"onHDDPathChange()\"\n                         ng-model=\"HDWallet.dPath\"\n                         type=\"radio\"\n                         value=\"{{HDWallet.customDPath}}\" />\n                  <input aria-describedby=\"Path: Enter your own - {{HDWallet.customDPath}}\"\n                         type=\"text\" class=\"form-control\"\n                         ng-model=\"HDWallet.customDPath\"\n                         ng-change=\"onCustomHDDPathChange()\" />\n                </label>\n              </td>\n              <td> Your Custom Path </td>\n            </tr>\n\n          </table>\n          <!-- END Select HD Path -->\n\n          <!-- Select Address -->\n          <hr />\n          <h3 id=\"modalTitle2\" class=\"modal-title\" translate=\"MNEM_1\">\n            Please select the address you would like to interact with.\n          </h3>\n          <p class=\"small\" translate=\"MNEM_2\">\n            Your single HD mnemonic phrase can access a number of wallets / addresses.\n          </p>\n          <table class=\"small table table-striped table-mnemonic\">\n            <tr>\n              <th translate=\"x_Address\">Address</th>\n              <th translate=\"MYWAL_Bal\">Balance</th>\n              <th translate=\"sidebar_TokenBal\" class=\"text-center\" >Token<br>Balances</th>\n            </tr>\n            <tr ng-repeat=\"wallet in HDWallet.wallets track by $index\">\n              <td>\n                <label>\n                  <input aria-describedby=\"modalTitle2\"\n                         aria-label=\"Unlock wallet with {{wallet.getBalance()}} {{nodeType}}. Address: {{wallet.getChecksumAddressString()}}\"\n                         name=\"addressSelect\"\n                         ng-model=\"HDWallet.id\"\n                         type=\"radio\"\n                         value=\"{{$index}}\"\n                  />{{wallet.getChecksumAddressString()}}\n                </label>\n              </td>\n              <td> {{wallet.getBalance()}} {{nodeType}} </td>\n              <td class=\"text-center\">\n                <a href=\"https://ethplorer.io/address/{{wallet.getAddressString()}}\" target=\"_blank\" title=\"https://ethplorer.io/address/{{wallet.getAddressString()}}\">\n                  <img src=\"images/icon-external-link.svg\" title=\"https://ethplorer.io/address/{{wallet.getAddressString()}}\" ng-click=\"removeTokenFromLocal(token.symbol)\" ng-show=\"token.type!=='default'\" />\n              </td>\n            </tr>\n            <tr class=\"m-addresses\">\n              <td>\n                <a ng-click=\"AddRemoveHDAddresses(false)\"\n                   ng-show=\"HDWallet.numWallets > 5\"\n                   role=\"link\"\n                   tabindex=\"0\"\n                   translate=\"MNEM_prev\"\n                > Previous Addresses </a>\n              </td>\n              <td></td>\n              <td>\n                <a ng-click=\"AddRemoveHDAddresses(true)\"\n                   role=\"link\"\n                   tabindex=\"0\"\n                   translate=\"MNEM_more\"\n                > More Addresses </a>\n              </td>\n            </tr>\n          </table>\n\n          <!-- END Select Address -->\n        </div>\n        <div class=\"modal-footer\">\n          <button aria-label=\"Cancel - Will close dialog\"\n                  class=\"btn btn-default\"\n                  data-dismiss=\"modal\"\n                  role=\"button\"\n                  tabindex=\"0\"\n                  translate=\"x_Cancel\"\n          > Cancel </button>\n          <button aria-label=\"Unlock this Wallet\"\n                  class=\"btn btn-primary\"\n                  ng-click=\"setHDWallet()\"\n                  role=\"button\"\n                  tabindex=\"0\"\n                  translate=\"ADD_Label_6\"\n          > Access Wallet </button>\n        </div>\n      </section>\n    </section>\n  </article>\n\n  <!-- / MODAL -->\n</article>\n";
},{}],38:[function(require,module,exports){
'use strict';

var walletDecryptDrtv = function walletDecryptDrtv() {
       return {
              restrict: "E",
              template: require('./walletDecryptDrtv.html')
       };
};
module.exports = walletDecryptDrtv;

},{"./walletDecryptDrtv.html":37}],39:[function(require,module,exports){
(function (Buffer){
'use strict';

var uts46 = require('idna-uts46');
var registryInterface = require('./ensConfigs/registryABI.json');
var resolverInterface = require('./ensConfigs/resolverABI.json');
var auctionInterface = require('./ensConfigs/auctionABI.json');
var deedInterface = require('./ensConfigs/deedABI.json');
var ens = function ens() {
    var _this = this;
    this.registryABI = {};
    for (var i in registryInterface) {
        this.registryABI[registryInterface[i].name] = registryInterface[i];
    }this.resolverABI = {};
    for (var i in resolverInterface) {
        this.resolverABI[resolverInterface[i].name] = resolverInterface[i];
    }this.auctionABI = {};
    for (var i in auctionInterface) {
        this.auctionABI[auctionInterface[i].name] = auctionInterface[i];
    }this.deedABI = {};
    for (var i in deedInterface) {
        this.deedABI[deedInterface[i].name] = deedInterface[i];
    }switch (ajaxReq.type) {
        case nodes.nodeTypes.ETH:
            _this.setCurrentRegistry(ens.registry.ETH);
            break;
        case nodes.nodeTypes.Rinkeby:
            _this.setCurrentRegistry(ens.registry.Rinkeby);
            break;
        case nodes.nodeTypes.Ropsten:
            _this.setCurrentRegistry(ens.registry.ROPSTEN);
            break;
        default:
            _this.setCurrentRegistry(ens.registry.NULL);
    }
};
ens.registry = {
    ETH: require('./ensConfigs/ETHConfig.json'),
    Rinkeby: require('./ensConfigs/RinkebyConfig.json'),
    ROPSTEN: require('./ensConfigs/ROPConfig.json'),
    NULL: {}
};
ens.normalise = function (name) {
    try {
        return uts46.toUnicode(name, { useStd3ASCII: true, transitional: false });
    } catch (e) {
        throw e;
    }
};
ens.modes = {
    open: 0,
    auction: 1,
    owned: 2,
    forbidden: 3,
    reveal: 4,
    notAvailable: 5
};
ens.prototype.setCurrentRegistry = function (_registry) {
    this.curRegistry = _registry;
};
ens.prototype.getRegistryAddress = function () {
    return this.curRegistry.registry;
};

function namehash(name) {
    name = ens.normalise(name);
    var node = Buffer.alloc(32);
    if (name && name != '') {
        var labels = name.split(".");
        for (var i = labels.length - 1; i >= 0; i--) {
            node = ethUtil.sha3(Buffer.concat([node, ethUtil.sha3(labels[i])]));
        }
    }
    return '0x' + node.toString('hex');
}

function subnodehash(name) {
    name = ens.normalise(name);
    return '0x' + ethUtil.sha3(name).toString('hex');
}
ens.getNameHash = function (name) {
    return namehash(name);
};
ens.getSubNodeHash = function (name) {
    return subnodehash(name);
};
ens.prototype.getOwnerResolverAddress = function (funcABI, to, name, callback) {
    var _this = this;
    ajaxReq.getEthCall({ to: to, data: _this.getDataString(funcABI, [namehash(name)]) }, function (data) {
        if (data.error) callback(data);else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type;
            });
            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0];
            callback(data);
        }
    });
};
ens.prototype.getDeedOwner = function (to, callback) {
    this.getOwnerResolverAddress(this.deedABI.owner, to, '', callback);
};
ens.prototype.getOwner = function (name, callback) {
    this.getOwnerResolverAddress(this.registryABI.owner, this.getRegistryAddress(), name, callback);
};
ens.prototype.getResolver = function (name, callback) {
    this.getOwnerResolverAddress(this.registryABI.resolver, this.getRegistryAddress(), name, callback);
};
ens.prototype.getAddress = function (name, callback) {
    var _this = this;
    _this.getResolver(name, function (data) {
        if (data.error) callback(data);else {
            _this.getOwnerResolverAddress(_this.resolverABI.addr, data.data, name, callback);
        }
    });
};
ens.prototype.getName = function (name, callback) {
    var _this = this;
    name = ens.normalise(name);
    _this.getResolver(name, function (data) {
        if (data.error || data.data == '0x') callback(data);else {
            ajaxReq.getEthCall({ to: data.data, data: _this.getDataString(_this.resolverABI.name, [namehash(name)]) }, function (data) {
                if (data.error || data.data == '0x') callback(data);else {
                    var outTypes = _this.resolverABI.name.outputs.map(function (i) {
                        return i.type;
                    });
                    data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0];
                    callback(data);
                }
            });
        }
    });
};
ens.prototype.resolveAddressByName = function (name, callback) {
    var _this = this;
    name = ens.normalise(name);
    _this.getOwner(name, function (data) {
        if (data.error || data.data == '0x') callback(data);else {
            var owner = data.data;
            _this.getName(name, function (data) {
                if (data.error || data.data == '0x') {
                    callback({ data: owner, error: false });
                } else {
                    callback({ data: data.data, error: false });
                }
            });
        }
    });
};
ens.prototype.getAuctionAddress = function () {
    return this.curRegistry.public.ethAuction;
};
ens.prototype.getStartAuctionData = function (name) {
    var _this = this;
    name = _this.getSHA3(ens.normalise(name));
    var funcABI = _this.auctionABI.startAuction;
    return _this.getDataString(funcABI, [name]);
};
ens.prototype.getFinalizeAuctionData = function (name) {
    var _this = this;
    name = _this.getSHA3(ens.normalise(name));
    var funcABI = _this.auctionABI.finalizeAuction;
    return _this.getDataString(funcABI, [name]);
};
var isSecretHashed = function isSecretHashed(secret) {
    return secret.substring(0, 2) == '0x' && secret.length == 66 && Validator.isValidHex(secret);
};
ens.prototype.getRevealBidData = function (name, value, secret) {
    var _this = this;
    name = _this.getSHA3(ens.normalise(name));
    secret = isSecretHashed(secret) ? secret : _this.getSHA3(secret);
    var funcABI = _this.auctionABI.unsealBid;
    return _this.getDataString(funcABI, [name, value, secret]);
};
ens.prototype.getSHA3 = function (str) {
    return '0x' + ethUtil.sha3(str).toString('hex');
};
ens.prototype.getNewBidData = function (sealedHash) {
    var _this = this;
    var funcABI = _this.auctionABI.newBid;
    return _this.getDataString(funcABI, [sealedHash]);
};
ens.prototype.getAuctionEntries = function (name, callback) {
    var _this = this;
    name = _this.getSHA3(ens.normalise(name));
    var funcABI = _this.auctionABI.entries;
    ajaxReq.getEthCall({ to: _this.curRegistry.public.ethAuction, data: _this.getDataString(funcABI, [name]) }, function (data) {
        if (data.error) callback(data);else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type;
            });
            var res = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''));
            data.data = {
                status: res[0].toNumber(),
                deed: res[1],
                registrationDate: new Date(res[2].toNumber() * 1000),
                value: res[3],
                highestBid: res[4]
            };
            callback(data);
        }
    });
};
ens.prototype.shaBid = function (hash, owner, value, saltHash, callback) {
    var _this = this;
    var funcABI = _this.auctionABI.shaBid;
    ajaxReq.getEthCall({ to: _this.curRegistry.public.ethAuction, data: _this.getDataString(funcABI, [hash, owner, value, saltHash]) }, function (data) {
        if (data.error) callback(data);else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type;
            });
            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0];
            callback(data);
        }
    });
};
ens.prototype.getAllowedTime = function (name, callback) {
    var _this = this;
    var funcABI = _this.auctionABI.getAllowedTime;
    name = _this.getSHA3(ens.normalise(name));
    ajaxReq.getEthCall({ to: _this.curRegistry.public.ethAuction, data: _this.getDataString(funcABI, [name]) }, function (data) {
        if (data.error) callback(data);else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type;
            });
            data.data = new Date(ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0] * 1000);
            callback(data);
        }
    });
};
ens.prototype.getDataString = function (func, inputs) {
    var fullFuncName = ethUtil.solidityUtils.transformToFullName(func);
    var funcSig = ethFuncs.getFunctionSignature(fullFuncName);
    var typeName = ethUtil.solidityUtils.extractTypeName(fullFuncName);
    var types = typeName.split(',');
    types = types[0] == "" ? [] : types;
    return '0x' + funcSig + ethUtil.solidityCoder.encodeParams(types, inputs);
};
module.exports = ens;

}).call(this,require("buffer").Buffer)
},{"./ensConfigs/ETHConfig.json":40,"./ensConfigs/ROPConfig.json":41,"./ensConfigs/RinkebyConfig.json":42,"./ensConfigs/auctionABI.json":43,"./ensConfigs/deedABI.json":44,"./ensConfigs/registryABI.json":45,"./ensConfigs/resolverABI.json":46,"buffer":174,"idna-uts46":229}],40:[function(require,module,exports){
module.exports={
    "public": {
        "resolver": "0x5FfC014343cd971B7eb70732021E26C35B744cc4",
        "reverse": "0x9062c0a6dbd6108336bcbe4593a3d1ce05512069",
        "ethAuction": "0x6090a6e47849629b7245dfa1ca21d94cd15878ef",
    },
    "registry": "0x314159265dD8dbb310642f98f50C066173C1259b"
}

},{}],41:[function(require,module,exports){
module.exports={
    "public": {
        "resolver": "0x4c641fb9bad9b60ef180c31f56051ce826d21a9a",
        "reverse": "0xdb6cead81ce14a63c284728eed17738a81327ff0",
        "ethAuction": "0xc19fd9004b5c9789391679de6d766b981db94610"
    },
    "registry": "0x112234455c3a32fd11230c42e7bccd4a84e02010"
}

},{}],42:[function(require,module,exports){
module.exports={
    "public": {
        "resolver": "0xb14fdee4391732ea9d2267054ead2084684c0ad8",
        "reverse": "0x0000000000000000000000000000000000000000",
        "ethAuction": "0x0000000000000000000000000000000000000000"
    },
    "registry": "0xe7410170f87102df0055eb195163a03b7f2bff4a"
}

},{}],43:[function(require,module,exports){
module.exports=[{
    "constant": false,
    "inputs": [{
        "name": "_hash",
        "type": "bytes32"
    }],
    "name": "releaseDeed",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_hash",
        "type": "bytes32"
    }],
    "name": "getAllowedTime",
    "outputs": [{
        "name": "timestamp",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "unhashedName",
        "type": "string"
    }],
    "name": "invalidateName",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "hash",
        "type": "bytes32"
    }, {
        "name": "owner",
        "type": "address"
    }, {
        "name": "value",
        "type": "uint256"
    }, {
        "name": "salt",
        "type": "bytes32"
    }],
    "name": "shaBid",
    "outputs": [{
        "name": "sealedBid",
        "type": "bytes32"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "bidder",
        "type": "address"
    }, {
        "name": "seal",
        "type": "bytes32"
    }],
    "name": "cancelBid",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_hash",
        "type": "bytes32"
    }],
    "name": "entries",
    "outputs": [{
        "name": "",
        "type": "uint8"
    }, {
        "name": "",
        "type": "address"
    }, {
        "name": "",
        "type": "uint256"
    }, {
        "name": "",
        "type": "uint256"
    }, {
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "ens",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_hash",
        "type": "bytes32"
    }, {
        "name": "_value",
        "type": "uint256"
    }, {
        "name": "_salt",
        "type": "bytes32"
    }],
    "name": "unsealBid",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_hash",
        "type": "bytes32"
    }],
    "name": "transferRegistrars",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }, {
        "name": "",
        "type": "bytes32"
    }],
    "name": "sealedBids",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_hash",
        "type": "bytes32"
    }],
    "name": "state",
    "outputs": [{
        "name": "",
        "type": "uint8"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_hash",
        "type": "bytes32"
    }, {
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transfer",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_hash",
        "type": "bytes32"
    }, {
        "name": "_timestamp",
        "type": "uint256"
    }],
    "name": "isAllowed",
    "outputs": [{
        "name": "allowed",
        "type": "bool"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_hash",
        "type": "bytes32"
    }],
    "name": "finalizeAuction",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "registryStarted",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "launchLength",
    "outputs": [{
        "name": "",
        "type": "uint32"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "sealedBid",
        "type": "bytes32"
    }],
    "name": "newBid",
    "outputs": [],
    "payable": true,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "labels",
        "type": "bytes32[]"
    }],
    "name": "eraseNode",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_hashes",
        "type": "bytes32[]"
    }],
    "name": "startAuctions",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "hash",
        "type": "bytes32"
    }, {
        "name": "deed",
        "type": "address"
    }, {
        "name": "registrationDate",
        "type": "uint256"
    }],
    "name": "acceptRegistrarTransfer",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_hash",
        "type": "bytes32"
    }],
    "name": "startAuction",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "rootNode",
    "outputs": [{
        "name": "",
        "type": "bytes32"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "hashes",
        "type": "bytes32[]"
    }, {
        "name": "sealedBid",
        "type": "bytes32"
    }],
    "name": "startAuctionsAndBid",
    "outputs": [],
    "payable": true,
    "type": "function"
}, {
    "inputs": [{
        "name": "_ens",
        "type": "address"
    }, {
        "name": "_rootNode",
        "type": "bytes32"
    }, {
        "name": "_startDate",
        "type": "uint256"
    }],
    "payable": false,
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "hash",
        "type": "bytes32"
    }, {
        "indexed": false,
        "name": "registrationDate",
        "type": "uint256"
    }],
    "name": "AuctionStarted",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "hash",
        "type": "bytes32"
    }, {
        "indexed": true,
        "name": "bidder",
        "type": "address"
    }, {
        "indexed": false,
        "name": "deposit",
        "type": "uint256"
    }],
    "name": "NewBid",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "hash",
        "type": "bytes32"
    }, {
        "indexed": true,
        "name": "owner",
        "type": "address"
    }, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "status",
        "type": "uint8"
    }],
    "name": "BidRevealed",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "hash",
        "type": "bytes32"
    }, {
        "indexed": true,
        "name": "owner",
        "type": "address"
    }, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "registrationDate",
        "type": "uint256"
    }],
    "name": "HashRegistered",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "hash",
        "type": "bytes32"
    }, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }],
    "name": "HashReleased",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "hash",
        "type": "bytes32"
    }, {
        "indexed": true,
        "name": "name",
        "type": "string"
    }, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "registrationDate",
        "type": "uint256"
    }],
    "name": "HashInvalidated",
    "type": "event"
}]
},{}],44:[function(require,module,exports){
module.exports=[{
    "constant": true,
    "inputs": [],
    "name": "creationDate",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "destroyDeed",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "newOwner",
        "type": "address"
    }],
    "name": "setOwner",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "registrar",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "refundRatio",
        "type": "uint256"
    }],
    "name": "closeDeed",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "newRegistrar",
        "type": "address"
    }],
    "name": "setRegistrar",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "newValue",
        "type": "uint256"
    }],
    "name": "setBalance",
    "outputs": [],
    "payable": true,
    "type": "function"
}, {
    "inputs": [],
    "type": "constructor"
}, {
    "payable": true,
    "type": "fallback"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnerChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [],
    "name": "DeedClosed",
    "type": "event"
}]
},{}],45:[function(require,module,exports){
module.exports=[{
    "constant": true,
    "inputs": [{
        "name": "node",
        "type": "bytes32"
    }],
    "name": "resolver",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "node",
        "type": "bytes32"
    }],
    "name": "owner",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "node",
        "type": "bytes32"
    }, {
        "name": "label",
        "type": "bytes32"
    }, {
        "name": "owner",
        "type": "address"
    }],
    "name": "setSubnodeOwner",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "node",
        "type": "bytes32"
    }, {
        "name": "ttl",
        "type": "uint64"
    }],
    "name": "setTTL",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "node",
        "type": "bytes32"
    }],
    "name": "ttl",
    "outputs": [{
        "name": "",
        "type": "uint64"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "node",
        "type": "bytes32"
    }, {
        "name": "resolver",
        "type": "address"
    }],
    "name": "setResolver",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "node",
        "type": "bytes32"
    }, {
        "name": "owner",
        "type": "address"
    }],
    "name": "setOwner",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "node",
        "type": "bytes32"
    }, {
        "indexed": false,
        "name": "owner",
        "type": "address"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "node",
        "type": "bytes32"
    }, {
        "indexed": true,
        "name": "label",
        "type": "bytes32"
    }, {
        "indexed": false,
        "name": "owner",
        "type": "address"
    }],
    "name": "NewOwner",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "node",
        "type": "bytes32"
    }, {
        "indexed": false,
        "name": "resolver",
        "type": "address"
    }],
    "name": "NewResolver",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "node",
        "type": "bytes32"
    }, {
        "indexed": false,
        "name": "ttl",
        "type": "uint64"
    }],
    "name": "NewTTL",
    "type": "event"
}]

},{}],46:[function(require,module,exports){
module.exports=[{
    "constant": true,
    "inputs": [{
        "name": "interfaceID",
        "type": "bytes4"
    }],
    "name": "supportsInterface",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "node",
        "type": "bytes32"
    }],
    "name": "addr",
    "outputs": [{
        "name": "ret",
        "type": "address"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "node",
        "type": "bytes32"
    }, {
        "name": "kind",
        "type": "bytes32"
    }],
    "name": "has",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "node",
        "type": "bytes32"
    }, {
        "name": "addr",
        "type": "address"
    }],
    "name": "setAddr",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "node",
        "type": "bytes32"
    }],
    "name": "content",
    "outputs": [{
        "name": "ret",
        "type": "bytes32"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "node",
        "type": "bytes32"
    }, {
        "name": "hash",
        "type": "bytes32"
    }],
    "name": "setContent",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "inputs": [{
        "name": "ensAddr",
        "type": "address"
    }],
    "type": "constructor"
}, {
    "payable": false,
    "type": "fallback"
}]

},{}],47:[function(require,module,exports){
'use strict';

var ethFuncs = function ethFuncs() {};
ethFuncs.gasAdjustment = 21;
ethFuncs.validateEtherAddress = function (address) {
    if (address.substring(0, 2) != "0x") return false;else if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) return false;else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) return true;else return this.isChecksumAddress(address);
};
ethFuncs.isChecksumAddress = function (address) {
    return address == ethUtil.toChecksumAddress(address);
};
ethFuncs.validateHexString = function (str) {
    if (str == "") return true;
    str = str.substring(0, 2) == '0x' ? str.substring(2).toUpperCase() : str.toUpperCase();
    var re = /^[0-9A-F]+$/g;
    return re.test(str);
};
ethFuncs.sanitizeHex = function (hex) {
    hex = hex.substring(0, 2) == '0x' ? hex.substring(2) : hex;
    if (hex == "") return "";
    return '0x' + this.padLeftEven(hex);
};
ethFuncs.trimHexZero = function (hex) {
    if (hex == "0x00" || hex == "0x0") return "0x0";
    hex = this.sanitizeHex(hex);
    hex = hex.substring(2).replace(/^0+/, '');
    return '0x' + hex;
};
ethFuncs.padLeftEven = function (hex) {
    hex = hex.length % 2 != 0 ? '0' + hex : hex;
    return hex;
};
ethFuncs.addTinyMoreToGas = function (hex) {
    hex = this.sanitizeHex(hex);
    return new BigNumber(ethFuncs.gasAdjustment * etherUnits.getValueOfUnit('gwei')).toString(16);
};
ethFuncs.decimalToHex = function (dec) {
    return new BigNumber(dec).toString(16);
};
ethFuncs.hexToDecimal = function (hex) {
    return new BigNumber(this.sanitizeHex(hex)).toString();
};
ethFuncs.contractOutToArray = function (hex) {
    hex = hex.replace('0x', '').match(/.{64}/g);
    for (var i = 0; i < hex.length; i++) {
        hex[i] = hex[i].replace(/^0+/, '');
        hex[i] = hex[i] == "" ? "0" : hex[i];
    }
    return hex;
};
ethFuncs.getNakedAddress = function (address) {
    return address.toLowerCase().replace('0x', '');
};
ethFuncs.getDeteministicContractAddress = function (address, nonce) {
    address = address.substring(0, 2) == '0x' ? address : '0x' + address;
    return '0x' + ethUtil.sha3(ethUtil.rlp.encode([address, nonce])).slice(12).toString('hex');
};
ethFuncs.padLeft = function (n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};
ethFuncs.getDataObj = function (to, func, arrVals) {
    var val = "";
    for (var i = 0; i < arrVals.length; i++) {
        val += this.padLeft(arrVals[i], 64);
    }return {
        to: to,
        data: func + val
    };
};
ethFuncs.getFunctionSignature = function (name) {
    return ethUtil.sha3(name).toString('hex').slice(0, 8);
};
ethFuncs.estimateGas = function (dataObj, callback) {
    var adjustGas = function adjustGas(gasLimit) {
        if (gasLimit == "0x5209") return "21000";
        if (new BigNumber(gasLimit).gt(3500000)) return "-1";
        return new BigNumber(gasLimit).toString();
    };
    ajaxReq.getEstimatedGas(dataObj, function (data) {
        if (data.error) {
            callback(data);
            return;
        } else {
            callback({
                "error": false,
                "msg": "",
                "data": adjustGas(data.data)
            });
        }
    });
};
module.exports = ethFuncs;

},{}],48:[function(require,module,exports){
'use strict';

var etherUnits = function etherUnits() {};
etherUnits.unitMap = {
	'wei': '1',
	'kwei': '1000',
	'ada': '1000',
	'femtoether': '1000',
	'mwei': '1000000',
	'babbage': '1000000',
	'picoether': '1000000',
	'gwei': '1000000000',
	'shannon': '1000000000',
	'nanoether': '1000000000',
	'nano': '1000000000',
	'szabo': '1000000000000',
	'microether': '1000000000000',
	'micro': '1000000000000',
	'finney': '1000000000000000',
	'milliether': '1000000000000000',
	'milli': '1000000000000000',
	'ether': '1000000000000000000',
	'kether': '1000000000000000000000',
	'grand': '1000000000000000000000',
	'einstein': '1000000000000000000000',
	'mether': '1000000000000000000000000',
	'gether': '1000000000000000000000000000',
	'tether': '1000000000000000000000000000000'
};
etherUnits.getValueOfUnit = function (unit) {
	unit = unit ? unit.toLowerCase() : 'ether';
	var unitValue = this.unitMap[unit];
	if (unitValue === undefined) {
		throw new Error(globalFuncs.errorMsgs[4] + JSON.stringify(this.unitMap, null, 2));
	}
	return new BigNumber(unitValue, 10);
};
etherUnits.fiatToWei = function (number, pricePerEther) {
	var returnValue = new BigNumber(String(number)).div(pricePerEther).times(this.getValueOfUnit('ether')).round(0);
	return returnValue.toString(10);
};

etherUnits.toFiat = function (number, unit, multi) {
	var returnValue = new BigNumber(this.toEther(number, unit)).times(multi).round(5);
	return returnValue.toString(10);
};

etherUnits.toEther = function (number, unit) {
	var returnValue = new BigNumber(this.toWei(number, unit)).div(this.getValueOfUnit('ether'));
	return returnValue.toString(10);
};

etherUnits.toWei = function (number, unit) {
	var returnValue = new BigNumber(String(number)).times(this.getValueOfUnit(unit));
	return returnValue.toString(10);
};

etherUnits.unitToUnit = function (number, from, to) {
	var returnValue = new BigNumber(String(number)).times(this.getValueOfUnit(from)).div(this.getValueOfUnit(to));
	return returnValue.toString(10);
};

module.exports = etherUnits;

},{}],49:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var globalFuncs = function globalFuncs() {};
globalFuncs.lightMode = false;
globalFuncs.getBlockie = function (address) {
    return blockies.create({
        seed: address.toLowerCase(),
        size: 8,
        scale: 16
    }).toDataURL();
};
globalFuncs.printPaperWallets = function (strJson) {
    var win = window.open("about:blank", "_blank");
    var data = "<html><head><link rel=\"stylesheet\" href=\"css\/etherwallet-master.min.css\"\/><script type=\"text\/javascript\" src=\"js\/jquery-1.12.3.min.js\"><\/script><script type=\"text\/javascript\" src=\"js\/etherwallet-static.min.js\"><\/script><script type=\"text\/javascript\">function generateWallets(){ var json = JSON.parse($(\"#printwalletjson\").html()); for(var i=0;i<json.length;i++){ var walletTemplate = $(\'<div\/>\').append($(\"#print-container\").clone()); new QRCode($(walletTemplate).find(\"#paperwalletaddqr\")[0], {\t\t  text: json[i][\'address\'],\t\t  colorDark: \"#000000\",\t\t  colorLight: \"#ffffff\",\t\tcorrectLevel: QRCode.CorrectLevel.H\t   });       new QRCode($(walletTemplate).find(\"#paperwalletprivqr\")[0], {\t\t  text: json[i][\'private\'],\t\t  colorDark: \"#000000\",\t\t  colorLight: \"#ffffff\",\t\tcorrectLevel: QRCode.CorrectLevel.H\t }); $(walletTemplate).find(\"#paperwalletadd\").html(json[i][\'address\']);$(walletTemplate).find(\"#paperwalletpriv\").html(json[i][\'private\']); walletTemplate = $(walletTemplate).find(\"#print-container\").show();$(\"body\").append(walletTemplate); } setTimeout(function(){window.print();},2000);}<\/script><\/head><body><span id=\"printwalletjson\" style=\"display: none;\">{{WALLETJSON}}<\/span><div class=\"print-container\" style=\"display: none; margin-bottom: 50px;\" id=\"print-container\"><img src=\"images\/logo-ethereum-1.png\" class=\"ether-logo-1\" height=\"100%\" width=\"auto\"\/><img src=\"images\/logo-ethereum-2.png\" class=\"ether-logo-2\"\/> <img src=\"images\/print-sidebar.png\" height=\"100%\" width=\"auto\" class=\"print-title\"\/><div class=\"print-qr-code-1\"> <div id=\"paperwalletaddqr\"><\/div> <p class=\"print-text\" style=\"padding-top: 25px;\">YOUR ADDRESS<\/p><\/div><div class=\"print-notes\"><img src=\"images\/notes-bg.png\" width=\"90%;\" height=\"auto\" class=\"pull-left\" \/><p class=\"print-text\">AMOUNT \/ NOTES<\/p><\/div><div class=\"print-qr-code-2\"> <div id=\"paperwalletprivqr\"><\/div> <p class=\"print-text\" style=\"padding-top: 30px;\">YOUR PRIVATE KEY<\/p><\/div><div class=\"print-address-container\"><p><strong>Your Address:<\/strong><br \/><span id=\"paperwalletadd\"><\/span><\/p><p><strong>Your Private Key:<\/strong><br \/><span id=\"paperwalletpriv\"><\/span><\/p><\/div><\/div><\/body><\/html>";
    data = data.replace("{{WALLETJSON}}", strJson);
    win.document.write(data);
    win.document.write("<script>generateWallets();</script>");
};
globalFuncs.getBlob = function (mime, str) {
    var str = (typeof str === "undefined" ? "undefined" : _typeof(str)) === 'object' ? JSON.stringify(str) : str;
    if (str == null) return '';
    var blob = new Blob([str], {
        type: mime
    });
    return window.URL.createObjectURL(blob);
};
globalFuncs.getSuccessText = function (str) {
    return '<p class="text-center text-success"><strong> ' + str + '</strong></p>';
};
globalFuncs.getDangerText = function (str) {
    return '<p class="text-center text-danger"><strong> ' + str + '</strong></p>';
};

// These are translated in the translation files
globalFuncs.errorMsgs = ['Please enter a valid amount.', // 0
'Your password must be at least 9 characters. Please ensure it is a strong password. ', // 1
'Sorry! We don\'t recognize this type of wallet file. ', // 2
'This is not a valid wallet file. ', // 3
'This unit doesn\'t exists, please use the one of the following units ', // 4
'Please enter a valid address. ', // 5
'Please enter a valid password. ', // 6
'Please enter valid decimals (Must be integer, 0-18). ', // 7
'Please enter a valid gas limit (Must be integer. Try 21000-4000000). ', // 8
'Please enter a valid data value (Must be hex). ', // 9
'Please enter a valid gas price. ', // 10 - NOT USED
'Please enter a valid nonce (Must be integer).', // 11
'Invalid signed transaction. ', // 12
'A wallet with this nickname already exists. ', // 13
'Wallet not found. ', // 14
'Whoops. It doesn\'t look like a proposal with this ID exists yet or there is an error reading this proposal. ', // 15 - NOT USED
'A wallet with this address already exists in storage. Please check your wallets page. ', // 16
'Insufficient funds. Account you try to send transaction from does not have enough funds. Required {} wei and got: {} wei. If sending tokens, you must have 0.01 ETH in your account to cover the cost of gas. ', // 17
'All gas would be used on this transaction. This means you have already voted on this proposal or the debate period has ended.', // 18
'Please enter a valid symbol', // 19
'Not a valid ERC-20 token', // 20
'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.', // 21
'Please enter valid node name', // 22
'Enter valid URL. If you are on https, your URL must be https', // 23
'Please enter a valid port. ', // 24
'Please enter a valid chain ID. ', // 25
'Please enter a valid ABI. ', // 26
'Minimum amount: 0.01. Max amount: ', // 27
'You need your Wallet File & Password to access this wallet in the future. ', // 28
'Please enter a valid user and password. ', // 29
'Please enter a valid name (7+ characters, limited punctuation) ', // 30
'Please enter a valid secret phrase. ', // 31
'Could not connect to the node. Try refreshing, using different node in upper right corner, and checking firewall settings. If custom node, check your configs.', // 32
'The wallet you have unlocked does not match the owner\'s address. ', // 33
'The name you are attempting to reveal does not match the name you have entered. ', // 34
'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank"> More info</a>' // 35
];

// These are translated in the translation files
globalFuncs.successMsgs = ['Valid address', 'Wallet successfully decrypted', 'Transaction submitted. TX ID: ', 'Your wallet was successfully added: ', 'File Selected: ', 'You are connected to the node ', 'Message Signature Verified'];

// These are translated in the translation files
globalFuncs.gethErrors = {
    'Invalid sender': 'GETH_InvalidSender',
    'Nonce too low': 'GETH_Nonce',
    'Gas price too low for acceptance': 'GETH_Cheap',
    'Insufficient balance': 'GETH_Balance',
    'Account does not exist or account balance too low': 'GETH_NonExistentAccount',
    'Insufficient funds for gas * price + value': 'GETH_InsufficientFunds',
    'Intrinsic gas too low': 'GETH_IntrinsicGas',
    'Exceeds block gas limit': 'GETH_GasLimit',
    'Negative value': 'GETH_NegativeValue'
};

globalFuncs.gethErrorMsgs = {};
globalFuncs.getGethMsg = function (str) {
    if (str in this.gethErrors) {
        var key = this.gethErrors[str];
        if (key in this.gethErrorMsgs) {
            return this.gethErrorMsgs[key];
        }
    }
    return str;
};

// These are translated in the translation files
globalFuncs.parityErrors = {
    "Transaction with the same hash was already imported\\.": "PARITY_AlreadyImported",
    "Transaction nonce is too low\\. Try incrementing the nonce\\.": "PARITY_Old",
    "Transaction fee is too low\\. There is another transaction with same nonce in the queue\\. Try increasing the fee or incrementing the nonce\\.": "PARITY_TooCheapToReplace",
    "There are too many transactions in the queue\\. Your transaction was dropped due to limit\\. Try increasing the fee\\.": "PARITY_LimitReached",
    "Transaction fee is too low\\. It does not satisfy your node's minimal fee \\(minimal: (\\d+), got: (\\d+)\\)\\. Try increasing the fee\\.": "PARITY_InsufficientGasPrice",
    "Insufficient funds\\. The account you tried to send transaction from does not have enough funds\\. Required (\\d+) and got: (\\d+)\\.": "ERROR_17",
    "Transaction cost exceeds current gas limit\\. Limit: (\\d+), got: (\\d+)\\. Try decreasing supplied gas\\.": "PARITY_GasLimitExceeded",
    "Supplied gas is beyond limit\\.": "PARITY_InvalidGasLimit"
};
globalFuncs.parityErrorMsgs = {};
globalFuncs.getParityMsg = function (str) {
    for (var reg in this.parityErrors) {
        var args = str.match("^" + reg + "$");
        if (args) {
            var key = this.parityErrors[reg];
            if (key in this.parityErrorMsgs) {
                args[0] = this.parityErrorMsgs[key];
                return format.apply(this, args);
            }
        }
    }
    return str;
};
globalFuncs.getEthNodeName = function () {
    //  return "geth";
    return "parity";
};
globalFuncs.getEthNodeMsg = function (str) {
    var ethNode = this.getEthNodeName();
    if (ethNode == "geth") return this.getGethMsg(str);else return this.getParityMsg(str);
};
globalFuncs.scrypt = {
    n: 1024
};
globalFuncs.postDelay = 300;
globalFuncs.kdf = "scrypt";
globalFuncs.defaultTxGasLimit = 21000;
globalFuncs.defaultTokenGasLimit = 200000;
globalFuncs.donateAddress = "0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8";
globalFuncs.isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
globalFuncs.urlGet = function (name) {
    name = name.toLowerCase();
    if (name = new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)').exec(location.search.toLowerCase())) return this.stripTags(decodeURIComponent(name[1]));
};
globalFuncs.stripTags = function (str) {
    var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    while (SCRIPT_REGEX.test(str)) {
        str = str.replace(SCRIPT_REGEX, "");
    }
    return str;
};
globalFuncs.checkAndRedirectHTTPS = function () {
    var host = "myetherwallet.com";
    var hostw = "https://www.myetherwallet.com";
    var path = window.location.pathname;
    if (host == window.location.host) window.location = hostw + path;
};
globalFuncs.isStrongPass = function (password) {
    return password.length > 8;
};
globalFuncs.hexToAscii = function (hex) {
    return hex.match(/.{1,2}/g).map(function (v) {
        return String.fromCharCode(parseInt(v, 16));
    }).join('');
};
globalFuncs.isAlphaNumeric = function (value) {
    return !/[^a-zA-Z0-9]/.test(value);
};
globalFuncs.getRandomBytes = function (num) {
    return ethUtil.crypto.randomBytes(num);
};
globalFuncs.saveTokenToLocal = function (localToken, callback) {
    try {
        if (!ethFuncs.validateEtherAddress(localToken.contractAdd)) throw globalFuncs.errorMsgs[5];else if (!globalFuncs.isNumeric(localToken.decimals) || parseFloat(localToken.decimals) < 0) throw globalFuncs.errorMsgs[7];else if (!globalFuncs.isAlphaNumeric(localToken.symbol) || localToken.symbol == "") throw globalFuncs.errorMsgs[19];
        var storedTokens = localStorage.getItem("localTokens") != null ? JSON.parse(localStorage.getItem("localTokens")) : [];
        storedTokens.push({
            contractAddress: localToken.contractAdd,
            symbol: localToken.symbol,
            decimal: parseInt(localToken.decimals),
            type: "custom"
        });
        localStorage.setItem("localTokens", JSON.stringify(storedTokens));
        callback({
            error: false
        });
    } catch (e) {
        callback({
            error: false,
            msg: e
        });
    }
};
globalFuncs.removeTokenFromLocal = function (symbol, tokenObj) {
    var storedTokens = localStorage.getItem("localTokens") != null ? JSON.parse(localStorage.getItem("localTokens")) : [];
    // remove from localstorage so it doesn't show up on refresh
    for (var i = 0; i < storedTokens.length; i++) {
        if (storedTokens[i].symbol === symbol) {
            storedTokens.splice(i, 1);
            break;
        }
    }localStorage.setItem("localTokens", JSON.stringify(storedTokens));
    if (!tokenObj) return;
    // remove from tokenObj so it removes from display
    for (var i = 0; i < tokenObj.length; i++) {
        if (tokenObj[i].symbol === symbol) {
            tokenObj.splice(i, 1);
            break;
        }
    }
};
// globalFuncs.getUrlParameter = function getUrlParameter(url) {
//   // get query string from url (optional) or window
//   var queryString = url ? url.split('=')[1] : window.location.search.slice(1);
//   return queryString;
// }
// globalFuncs.setUrlParameter = function setUrlParameter(value) {
//   //In case url contains already a parameter remove parameter
//   if(window.location.href.indexOf('=') != -1) {
//       location.href = location.href.substr(0,window.location.href.indexOf('='));
//   }
//   location.href = location.href + "=" + value
// }
module.exports = globalFuncs;

},{}],50:[function(require,module,exports){
'use strict';

var IS_CX = false;
if (typeof chrome != 'undefined') IS_CX = chrome.windows === undefined ? false : true;
var angular = require('angular');
var angularTranslate = require('angular-translate');
var angularTranslateErrorLog = require('angular-translate-handler-log');
var angularSanitize = require('angular-sanitize');
var angularAnimate = require('angular-animate');
var bip39 = require('bip39');
var HDKey = require('hdkey');
window.hd = { bip39: bip39, HDKey: HDKey };
var BigNumber = require('bignumber.js');
window.BigNumber = BigNumber;
var marked = require('./staticJS/customMarked');
window.marked = marked;
var ethUtil = require('ethereumjs-util');
ethUtil.crypto = require('crypto');
ethUtil.Tx = require('ethereumjs-tx');
ethUtil.scrypt = require('scryptsy');
ethUtil.uuid = require('uuid');
ethUtil.solidityCoder = require('./solidity/coder');
ethUtil.solidityUtils = require('./solidity/utils');
ethUtil.WAValidator = require('wallet-address-validator');
window.ethUtil = ethUtil;
var format = require('string-format');
window.format = format;
var browser = require('detect-browser');
window.browser = browser;
var Wallet = require('./myetherwallet');
window.Wallet = Wallet;
var Token = require('./tokenlib');
window.Token = Token;
var globalFuncs = require('./globalFuncs');
window.globalFuncs = globalFuncs;
var uiFuncs = require('./uiFuncs');
window.uiFuncs = uiFuncs;
var etherUnits = require('./etherUnits');
window.etherUnits = etherUnits;
var ajaxReq = require('./ajaxReq');
window.ajaxReq = ajaxReq;
var nodes = require('./nodes');
window.nodes = nodes;
var ethFuncs = require('./ethFuncs');
window.ethFuncs = ethFuncs;
var Validator = require('./validator');
window.Validator = Validator;
var bity = require('./bity');
window.bity = bity;
var ens = require('./ens');
window.ens = ens;
var translate = require('./translations/translate.js');
if (IS_CX) {
  var cxFuncs = require('./cxFuncs');
  window.cxFuncs = cxFuncs;
} else {
  var u2f = require('./staticJS/u2f-api');
  var ledger3 = require('./staticJS/ledger3');
  var ledgerEth = require('./staticJS/ledger-eth');
  var trezorConnect = require('./staticJS/trezorConnect');
  window.u2f = u2f;
  window.Ledger3 = ledger3;
  window.ledgerEth = ledgerEth;
  window.TrezorConnect = trezorConnect.TrezorConnect;
}
var tabsCtrl = require('./controllers/tabsCtrl');
var viewCtrl = require('./controllers/viewCtrl');
var walletGenCtrl = require('./controllers/walletGenCtrl');
var bulkGenCtrl = require('./controllers/bulkGenCtrl');
var decryptWalletCtrl = require('./controllers/decryptWalletCtrl');
var viewWalletCtrl = require('./controllers/viewWalletCtrl');
var sendTxCtrl = require('./controllers/sendTxCtrl');
var swapCtrl = require('./controllers/swapCtrl');
var signMsgCtrl = require('./controllers/signMsgCtrl');
var contractsCtrl = require('./controllers/contractsCtrl');
var ensCtrl = require('./controllers/ensCtrl');
var footerCtrl = require('./controllers/footerCtrl');
var offlineTxCtrl = require('./controllers/offlineTxCtrl');
var walletBalanceCtrl = require('./controllers/walletBalanceCtrl');
var helpersCtrl = require('./controllers/helpersCtrl');
var globalService = require('./services/globalService');
var walletService = require('./services/walletService');
var blockiesDrtv = require('./directives/blockiesDrtv');
var addressFieldDrtv = require('./directives/addressFieldDrtv');
var QRCodeDrtv = require('./directives/QRCodeDrtv');
var walletDecryptDrtv = require('./directives/walletDecryptDrtv');
var cxWalletDecryptDrtv = require('./directives/cxWalletDecryptDrtv');
var fileReaderDrtv = require('./directives/fileReaderDrtv');
var balanceDrtv = require('./directives/balanceDrtv');
if (IS_CX) {
  var addWalletCtrl = require('./controllers/CX/addWalletCtrl');
  var cxDecryptWalletCtrl = require('./controllers/CX/cxDecryptWalletCtrl');
  var myWalletsCtrl = require('./controllers/CX/myWalletsCtrl');
  var mainPopCtrl = require('./controllers/CX/mainPopCtrl');
  var quickSendCtrl = require('./controllers/CX/quickSendCtrl');
}
var app = angular.module('mewApp', ['pascalprecht.translate', 'ngSanitize', 'ngAnimate']);
app.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|https|mailto):/);
}]);
app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.useMissingTranslationHandlerLog();
  new translate($translateProvider);
}]);
app.config(['$animateProvider', function ($animateProvider) {
  $animateProvider.classNameFilter(/^no-animate$/);
}]);
app.factory('globalService', ['$http', '$httpParamSerializerJQLike', globalService]);
app.factory('walletService', walletService);
app.directive('blockieAddress', blockiesDrtv);
app.directive('addressField', ['$compile', addressFieldDrtv]);
app.directive('qrCode', QRCodeDrtv);
app.directive('onReadFile', fileReaderDrtv);
app.directive('walletBalanceDrtv', balanceDrtv);
app.directive('walletDecryptDrtv', walletDecryptDrtv);
app.directive('cxWalletDecryptDrtv', cxWalletDecryptDrtv);
app.controller('tabsCtrl', ['$scope', 'globalService', '$translate', '$sce', tabsCtrl]);
app.controller('viewCtrl', ['$scope', 'globalService', '$sce', viewCtrl]);
app.controller('walletGenCtrl', ['$scope', walletGenCtrl]);
app.controller('bulkGenCtrl', ['$scope', bulkGenCtrl]);
app.controller('decryptWalletCtrl', ['$scope', '$sce', 'walletService', decryptWalletCtrl]);
app.controller('viewWalletCtrl', ['$scope', 'walletService', viewWalletCtrl]);
app.controller('sendTxCtrl', ['$scope', '$sce', 'walletService', sendTxCtrl]);
app.controller('swapCtrl', ['$scope', '$sce', 'walletService', swapCtrl]);
app.controller('signMsgCtrl', ['$scope', '$sce', 'walletService', signMsgCtrl]);
app.controller('contractsCtrl', ['$scope', '$sce', 'walletService', contractsCtrl]);
app.controller('ensCtrl', ['$scope', '$sce', 'walletService', ensCtrl]);
app.controller('footerCtrl', ['$scope', 'globalService', footerCtrl]);
app.controller('offlineTxCtrl', ['$scope', '$sce', 'walletService', offlineTxCtrl]);
app.controller('walletBalanceCtrl', ['$scope', '$sce', walletBalanceCtrl]);
app.controller('helpersCtrl', ['$scope', helpersCtrl]);
if (IS_CX) {
  app.controller('addWalletCtrl', ['$scope', '$sce', addWalletCtrl]);
  app.controller('myWalletsCtrl', ['$scope', '$sce', 'walletService', myWalletsCtrl]);
  app.controller('mainPopCtrl', ['$scope', '$sce', mainPopCtrl]);
  app.controller('quickSendCtrl', ['$scope', '$sce', quickSendCtrl]);
  app.controller('cxDecryptWalletCtrl', ['$scope', '$sce', 'walletService', cxDecryptWalletCtrl]);
}

},{"./ajaxReq":7,"./bity":8,"./controllers/CX/addWalletCtrl":9,"./controllers/CX/cxDecryptWalletCtrl":10,"./controllers/CX/mainPopCtrl":11,"./controllers/CX/myWalletsCtrl":12,"./controllers/CX/quickSendCtrl":13,"./controllers/bulkGenCtrl":14,"./controllers/contractsCtrl":15,"./controllers/decryptWalletCtrl":16,"./controllers/ensCtrl":17,"./controllers/footerCtrl":18,"./controllers/helpersCtrl":19,"./controllers/offlineTxCtrl":20,"./controllers/sendTxCtrl":21,"./controllers/signMsgCtrl":22,"./controllers/swapCtrl":23,"./controllers/tabsCtrl":24,"./controllers/viewCtrl":25,"./controllers/viewWalletCtrl":26,"./controllers/walletBalanceCtrl":27,"./controllers/walletGenCtrl":28,"./cxFuncs":29,"./directives/QRCodeDrtv":30,"./directives/addressFieldDrtv":31,"./directives/balanceDrtv":33,"./directives/blockiesDrtv":34,"./directives/cxWalletDecryptDrtv":35,"./directives/fileReaderDrtv":36,"./directives/walletDecryptDrtv":38,"./ens":39,"./ethFuncs":47,"./etherUnits":48,"./globalFuncs":49,"./myetherwallet":51,"./nodes":57,"./services/globalService":58,"./services/walletService":59,"./solidity/coder":63,"./solidity/utils":74,"./staticJS/customMarked":75,"./staticJS/ledger-eth":76,"./staticJS/ledger3":77,"./staticJS/trezorConnect":78,"./staticJS/u2f-api":79,"./tokenlib":80,"./translations/translate.js":104,"./uiFuncs":108,"./validator":109,"angular":117,"angular-animate":111,"angular-sanitize":113,"angular-translate":115,"angular-translate-handler-log":114,"bignumber.js":134,"bip39":135,"crypto":184,"detect-browser":191,"ethereumjs-tx":214,"ethereumjs-util":215,"hdkey":226,"scryptsy":282,"string-format":298,"uuid":307,"wallet-address-validator":316}],51:[function(require,module,exports){
(function (Buffer){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Wallet = function Wallet(priv, pub, path, hwType, hwTransport) {
    if (typeof priv != "undefined") {
        this.privKey = priv.length == 32 ? priv : Buffer(priv, 'hex');
    }
    this.pubKey = pub;
    this.path = path;
    this.hwType = hwType;
    this.hwTransport = hwTransport;
    this.type = "default";
};
Wallet.generate = function (icapDirect) {
    if (icapDirect) {
        while (true) {
            var privKey = ethUtil.crypto.randomBytes(32);
            if (ethUtil.privateToAddress(privKey)[0] === 0) {
                return new Wallet(privKey);
            }
        }
    } else {
        return new Wallet(ethUtil.crypto.randomBytes(32));
    }
};
Wallet.prototype.setTokens = function () {
    this.tokenObjs = [];
    var tokens = Token.popTokens;
    for (var i = 0; i < tokens.length; i++) {
        this.tokenObjs.push(new Token(tokens[i].address, this.getAddressString(), tokens[i].symbol, tokens[i].decimal, tokens[i].type));
        this.tokenObjs[this.tokenObjs.length - 1].setBalance();
    }
    var storedTokens = localStorage.getItem("localTokens") != null ? JSON.parse(localStorage.getItem("localTokens")) : [];
    for (var i = 0; i < storedTokens.length; i++) {
        this.tokenObjs.push(new Token(storedTokens[i].contractAddress, this.getAddressString(), globalFuncs.stripTags(storedTokens[i].symbol), storedTokens[i].decimal, storedTokens[i].type));
        this.tokenObjs[this.tokenObjs.length - 1].setBalance();
    }
};
Wallet.prototype.setBalance = function (callback) {
    var parentObj = this;
    this.balance = this.usdBalance = this.eurBalance = this.btcBalance = this.chfBalance = this.repBalance = this.gbpBalance = 'loading';
    ajaxReq.getBalance(parentObj.getAddressString(), function (data) {
        if (data.error) parentObj.balance = data.msg;else {
            parentObj.balance = etherUnits.toEther(data.data.balance, 'wei');
            ajaxReq.getETHvalue(function (data) {
                parentObj.usdBalance = etherUnits.toFiat(parentObj.balance, 'ether', data.usd);
                parentObj.gbpBalance = etherUnits.toFiat(parentObj.balance, 'ether', data.gbp);
                parentObj.eurBalance = etherUnits.toFiat(parentObj.balance, 'ether', data.eur);
                parentObj.btcBalance = etherUnits.toFiat(parentObj.balance, 'ether', data.btc);
                parentObj.chfBalance = etherUnits.toFiat(parentObj.balance, 'ether', data.chf);
                parentObj.repBalance = etherUnits.toFiat(parentObj.balance, 'ether', data.rep);
                if (callback) callback();
            });
        }
    });
};
Wallet.prototype.getBalance = function () {
    return this.balance;
};
Wallet.prototype.getPath = function () {
    return this.path;
};
Wallet.prototype.getHWType = function () {
    return this.hwType;
};
Wallet.prototype.getHWTransport = function () {
    return this.hwTransport;
};
Wallet.prototype.getPrivateKey = function () {
    return this.privKey;
};
Wallet.prototype.getPrivateKeyString = function () {
    if (typeof this.privKey != "undefined") {
        return this.getPrivateKey().toString('hex');
    } else {
        return "";
    }
};
Wallet.prototype.getPublicKey = function () {
    if (typeof this.pubKey == "undefined") {
        return ethUtil.privateToPublic(this.privKey);
    } else {
        return this.pubKey;
    }
};
Wallet.prototype.getPublicKeyString = function () {
    if (typeof this.pubKey == "undefined") {
        return '0x' + this.getPublicKey().toString('hex');
    } else {
        return "0x" + this.pubKey.toString('hex');
    }
};
Wallet.prototype.getAddress = function () {
    if (typeof this.pubKey == "undefined") {
        return ethUtil.privateToAddress(this.privKey);
    } else {
        return ethUtil.publicToAddress(this.pubKey, true);
    }
};
Wallet.prototype.getAddressString = function () {
    return '0x' + this.getAddress().toString('hex');
};
Wallet.prototype.getChecksumAddressString = function () {
    return ethUtil.toChecksumAddress(this.getAddressString());
};
Wallet.fromPrivateKey = function (priv) {
    return new Wallet(priv);
};
Wallet.fromParityPhrase = function (phrase) {
    var hash = ethUtil.sha3(new Buffer(phrase));
    for (var i = 0; i < 16384; i++) {
        hash = ethUtil.sha3(hash);
    }while (ethUtil.privateToAddress(hash)[0] != 0) {
        hash = ethUtil.sha3(hash);
    }return new Wallet(hash);
};
Wallet.prototype.toV3 = function (password, opts) {
    opts = opts || {};
    var salt = opts.salt || ethUtil.crypto.randomBytes(32);
    var iv = opts.iv || ethUtil.crypto.randomBytes(16);
    var derivedKey;
    var kdf = opts.kdf || 'scrypt';
    var kdfparams = {
        dklen: opts.dklen || 32,
        salt: salt.toString('hex')
    };
    if (kdf === 'pbkdf2') {
        kdfparams.c = opts.c || 262144;
        kdfparams.prf = 'hmac-sha256';
        derivedKey = ethUtil.crypto.pbkdf2Sync(new Buffer(password), salt, kdfparams.c, kdfparams.dklen, 'sha256');
    } else if (kdf === 'scrypt') {
        // FIXME: support progress reporting callback
        kdfparams.n = opts.n || 262144;
        kdfparams.r = opts.r || 8;
        kdfparams.p = opts.p || 1;
        derivedKey = ethUtil.scrypt(new Buffer(password), salt, kdfparams.n, kdfparams.r, kdfparams.p, kdfparams.dklen);
    } else {
        throw new Error('Unsupported kdf');
    }
    var cipher = ethUtil.crypto.createCipheriv(opts.cipher || 'aes-128-ctr', derivedKey.slice(0, 16), iv);
    if (!cipher) {
        throw new Error('Unsupported cipher');
    }
    var ciphertext = Buffer.concat([cipher.update(this.privKey), cipher.final()]);
    var mac = ethUtil.sha3(Buffer.concat([derivedKey.slice(16, 32), new Buffer(ciphertext, 'hex')]));
    return {
        version: 3,
        id: ethUtil.uuid.v4({
            random: opts.uuid || ethUtil.crypto.randomBytes(16)
        }),
        address: this.getAddress().toString('hex'),
        Crypto: {
            ciphertext: ciphertext.toString('hex'),
            cipherparams: {
                iv: iv.toString('hex')
            },
            cipher: opts.cipher || 'aes-128-ctr',
            kdf: kdf,
            kdfparams: kdfparams,
            mac: mac.toString('hex')
        }
    };
};
Wallet.prototype.toJSON = function () {
    return {
        address: this.getAddressString(),
        checksumAddress: this.getChecksumAddressString(),
        privKey: this.getPrivateKeyString(),
        pubKey: this.getPublicKeyString(),
        publisher: "MyEtherWallet",
        encrypted: false,
        version: 2
    };
};
Wallet.fromMyEtherWallet = function (input, password) {
    var json = (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' ? input : JSON.parse(input);
    var privKey;
    if (!json.locked) {
        if (json.private.length !== 64) {
            throw new Error('Invalid private key length');
        }
        privKey = new Buffer(json.private, 'hex');
    } else {
        if (typeof password !== 'string') {
            throw new Error('Password required');
        }
        if (password.length < 7) {
            throw new Error('Password must be at least 7 characters');
        }
        var cipher = json.encrypted ? json.private.slice(0, 128) : json.private;
        cipher = Wallet.decodeCryptojsSalt(cipher);
        var evp = Wallet.evp_kdf(new Buffer(password), cipher.salt, {
            keysize: 32,
            ivsize: 16
        });
        var decipher = ethUtil.crypto.createDecipheriv('aes-256-cbc', evp.key, evp.iv);
        privKey = Wallet.decipherBuffer(decipher, new Buffer(cipher.ciphertext));
        privKey = new Buffer(privKey.toString(), 'hex');
    }
    var wallet = new Wallet(privKey);
    if (wallet.getAddressString() !== json.address) {
        throw new Error('Invalid private key or address');
    }
    return wallet;
};
Wallet.fromMyEtherWalletV2 = function (input) {
    var json = (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' ? input : JSON.parse(input);
    if (json.privKey.length !== 64) {
        throw new Error('Invalid private key length');
    };
    var privKey = new Buffer(json.privKey, 'hex');
    return new Wallet(privKey);
};
Wallet.fromEthSale = function (input, password) {
    var json = (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' ? input : JSON.parse(input);
    var encseed = new Buffer(json.encseed, 'hex');
    var derivedKey = ethUtil.crypto.pbkdf2Sync(Buffer(password), Buffer(password), 2000, 32, 'sha256').slice(0, 16);
    var decipher = ethUtil.crypto.createDecipheriv('aes-128-cbc', derivedKey, encseed.slice(0, 16));
    var seed = Wallet.decipherBuffer(decipher, encseed.slice(16));
    var wallet = new Wallet(ethUtil.sha3(seed));
    if (wallet.getAddress().toString('hex') !== json.ethaddr) {
        throw new Error('Decoded key mismatch - possibly wrong passphrase');
    }
    return wallet;
};
Wallet.fromMyEtherWalletKey = function (input, password) {
    var cipher = input.slice(0, 128);
    cipher = Wallet.decodeCryptojsSalt(cipher);
    var evp = Wallet.evp_kdf(new Buffer(password), cipher.salt, {
        keysize: 32,
        ivsize: 16
    });
    var decipher = ethUtil.crypto.createDecipheriv('aes-256-cbc', evp.key, evp.iv);
    var privKey = Wallet.decipherBuffer(decipher, new Buffer(cipher.ciphertext));
    privKey = new Buffer(privKey.toString(), 'hex');
    return new Wallet(privKey);
};
Wallet.fromV3 = function (input, password, nonStrict) {
    var json = (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' ? input : JSON.parse(nonStrict ? input.toLowerCase() : input);
    if (json.version !== 3) {
        throw new Error('Not a V3 wallet');
    }
    var derivedKey;
    var kdfparams;
    if (json.crypto.kdf === 'scrypt') {
        kdfparams = json.crypto.kdfparams;
        derivedKey = ethUtil.scrypt(new Buffer(password), new Buffer(kdfparams.salt, 'hex'), kdfparams.n, kdfparams.r, kdfparams.p, kdfparams.dklen);
    } else if (json.crypto.kdf === 'pbkdf2') {
        kdfparams = json.crypto.kdfparams;
        if (kdfparams.prf !== 'hmac-sha256') {
            throw new Error('Unsupported parameters to PBKDF2');
        }
        derivedKey = ethUtil.crypto.pbkdf2Sync(new Buffer(password), new Buffer(kdfparams.salt, 'hex'), kdfparams.c, kdfparams.dklen, 'sha256');
    } else {
        throw new Error('Unsupported key derivation scheme');
    }
    var ciphertext = new Buffer(json.crypto.ciphertext, 'hex');
    var mac = ethUtil.sha3(Buffer.concat([derivedKey.slice(16, 32), ciphertext]));
    if (mac.toString('hex') !== json.crypto.mac) {
        throw new Error('Key derivation failed - possibly wrong passphrase');
    }
    var decipher = ethUtil.crypto.createDecipheriv(json.crypto.cipher, derivedKey.slice(0, 16), new Buffer(json.crypto.cipherparams.iv, 'hex'));
    var seed = Wallet.decipherBuffer(decipher, ciphertext, 'hex');
    while (seed.length < 32) {
        var nullBuff = new Buffer([0x00]);
        seed = Buffer.concat([nullBuff, seed]);
    }
    return new Wallet(seed);
};
Wallet.prototype.toV3String = function (password, opts) {
    return JSON.stringify(this.toV3(password, opts));
};
Wallet.prototype.getV3Filename = function (timestamp) {
    var ts = timestamp ? new Date(timestamp) : new Date();
    return ['UTC--', ts.toJSON().replace(/:/g, '-'), '--', this.getAddress().toString('hex')].join('');
};
Wallet.decipherBuffer = function (decipher, data) {
    return Buffer.concat([decipher.update(data), decipher.final()]);
};
Wallet.decodeCryptojsSalt = function (input) {
    var ciphertext = new Buffer(input, 'base64');
    if (ciphertext.slice(0, 8).toString() === 'Salted__') {
        return {
            salt: ciphertext.slice(8, 16),
            ciphertext: ciphertext.slice(16)
        };
    } else {
        return {
            ciphertext: ciphertext
        };
    }
};
Wallet.evp_kdf = function (data, salt, opts) {
    // A single EVP iteration, returns `D_i`, where block equlas to `D_(i-1)`

    function iter(block) {
        var hash = ethUtil.crypto.createHash(opts.digest || 'md5');
        hash.update(block);
        hash.update(data);
        hash.update(salt);
        block = hash.digest();
        for (var i = 1; i < (opts.count || 1); i++) {
            hash = ethUtil.crypto.createHash(opts.digest || 'md5');
            hash.update(block);
            block = hash.digest();
        }
        return block;
    }
    var keysize = opts.keysize || 16;
    var ivsize = opts.ivsize || 16;
    var ret = [];
    var i = 0;
    while (Buffer.concat(ret).length < keysize + ivsize) {
        ret[i] = iter(i === 0 ? new Buffer(0) : ret[i - 1]);
        i++;
    }
    var tmp = Buffer.concat(ret);
    return {
        key: tmp.slice(0, keysize),
        iv: tmp.slice(keysize, keysize + ivsize)
    };
};
Wallet.walletRequirePass = function (ethjson) {
    var jsonArr;
    try {
        jsonArr = JSON.parse(ethjson);
    } catch (err) {
        throw globalFuncs.errorMsgs[3];
    }
    if (jsonArr.encseed != null) return true;else if (jsonArr.Crypto != null || jsonArr.crypto != null) return true;else if (jsonArr.hash != null && jsonArr.locked) return true;else if (jsonArr.hash != null && !jsonArr.locked) return false;else if (jsonArr.publisher == "MyEtherWallet" && !jsonArr.encrypted) return false;else throw globalFuncs.errorMsgs[2];
};
Wallet.getWalletFromPrivKeyFile = function (strjson, password) {
    var jsonArr = JSON.parse(strjson);
    if (jsonArr.encseed != null) return Wallet.fromEthSale(strjson, password);else if (jsonArr.Crypto != null || jsonArr.crypto != null) return Wallet.fromV3(strjson, password, true);else if (jsonArr.hash != null) return Wallet.fromMyEtherWallet(strjson, password);else if (jsonArr.publisher == "MyEtherWallet") return Wallet.fromMyEtherWalletV2(strjson);else throw globalFuncs.errorMsgs[2];
};
module.exports = Wallet;

}).call(this,require("buffer").Buffer)
},{"buffer":174}],52:[function(require,module,exports){
'use strict';

var customNode = function customNode(srvrUrl, port, httpBasicAuthentication) {
    this.SERVERURL = port ? srvrUrl + ':' + port : srvrUrl;
    if (httpBasicAuthentication) {
        var authorization = 'Basic ' + btoa(httpBasicAuthentication.user + ":" + httpBasicAuthentication.password);
        this.config.headers['Authorization'] = authorization;
    }
};
customNode.prototype.config = {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
};

customNode.prototype.getCurrentBlock = function (callback) {
    this.post({
        method: 'eth_blockNumber'
    }, function (data) {
        if (data.error) callback({ error: true, msg: data.error.message, data: '' });else callback({ error: false, msg: '', data: new BigNumber(data.result).toString() });
    });
};
customNode.prototype.getChainId = function (callback) {
    this.post({
        method: 'net_version'
    }, function (data) {
        if (data.error) callback({ error: true, msg: data.error.message, data: '' });else callback({ error: false, msg: '', data: parseInt(data.result) });
    });
};
customNode.prototype.getBalance = function (addr, callback) {
    this.post({
        method: 'eth_getBalance',
        params: [addr, 'pending']
    }, function (data) {
        if (data.error) callback({ error: true, msg: data.error.message, data: '' });else callback({ error: false, msg: '', data: { address: addr, balance: new BigNumber(data.result).toString() } });
    });
};
customNode.prototype.getTransactionData = function (addr, callback) {
    var response = { error: false, msg: '', data: { address: addr, balance: '', gasprice: '', nonce: '' } };
    var parentObj = this;
    var reqObj = [{ "id": globalFuncs.getRandomBytes(16).toString('hex'), "jsonrpc": "2.0", "method": "eth_getBalance", "params": [addr, 'pending'] }, { "id": globalFuncs.getRandomBytes(16).toString('hex'), "jsonrpc": "2.0", "method": "eth_gasPrice", "params": [] }, { "id": globalFuncs.getRandomBytes(16).toString('hex'), "jsonrpc": "2.0", "method": "eth_getTransactionCount", "params": [addr, 'pending'] }];
    this.rawPost(reqObj, function (data) {
        for (var i in data) {
            if (data[i].error) {
                callback({ error: true, msg: data[i].error.message, data: '' });
                return;
            }
        }
        response.data.balance = new BigNumber(data[0].result).toString();
        response.data.gasprice = data[1].result;
        response.data.nonce = data[2].result;
        callback(response);
    });
};
customNode.prototype.sendRawTx = function (rawTx, callback) {
    this.post({
        method: 'eth_sendRawTransaction',
        params: [rawTx]
    }, function (data) {
        if (data.error) callback({ error: true, msg: data.error.message, data: '' });else callback({ error: false, msg: '', data: data.result });
    });
};
customNode.prototype.getEstimatedGas = function (txobj, callback) {
    txobj.value = ethFuncs.trimHexZero(txobj.value);
    this.post({
        method: 'eth_estimateGas',
        params: [{ from: txobj.from, to: txobj.to, value: txobj.value, data: txobj.data }]
    }, function (data) {
        if (data.error) callback({ error: true, msg: data.error.message, data: '' });else callback({ error: false, msg: '', data: data.result });
    });
};
var ethCallArr = {
    calls: [],
    callbacks: [],
    timer: null
};
customNode.prototype.getEthCall = function (txobj, callback) {
    var parentObj = this;
    if (!ethCallArr.calls.length) {
        ethCallArr.timer = setTimeout(function () {
            parentObj.rawPost(ethCallArr.calls, function (data) {
                ethCallArr.calls = [];
                var _callbacks = ethCallArr.callbacks.slice();
                ethCallArr.callbacks = [];
                for (var i in data) {
                    if (data[i].error) _callbacks[i]({ error: true, msg: data[i].error.message, data: '' });else _callbacks[i]({ error: false, msg: '', data: data[i].result });
                }
            });
        }, 500);
    }
    ethCallArr.calls.push({ "id": globalFuncs.getRandomBytes(16).toString('hex'), "jsonrpc": "2.0", "method": "eth_call", "params": [{ to: txobj.to, data: txobj.data }, 'pending'] });
    ethCallArr.callbacks.push(callback);
    /* this.post({
         method: 'eth_call',
         params: [{ to: txobj.to, data: txobj.data }, 'pending']
     }, function(data) {
         if (data.error) callback({ error: true, msg: data.error.message, data: '' });
         else callback({ error: false, msg: '', data: data.result });
     }); */
};
customNode.prototype.getTraceCall = function (txobj, callback) {
    this.post({
        method: 'trace_call',
        params: [txobj, ["stateDiff", "trace", "vmTrace"]]
    }, function (data) {
        if (data.error) callback({ error: true, msg: data.error.message, data: '' });else callback({ error: false, msg: '', data: data.result });
    });
};
customNode.prototype.rawPost = function (data, callback) {
    ajaxReq.http.post(this.SERVERURL, JSON.stringify(data), this.config).then(function (data) {
        callback(data.data);
    }, function (data) {
        callback({ error: true, msg: "connection error", data: "" });
    });
};
customNode.prototype.post = function (data, callback) {
    data.id = globalFuncs.getRandomBytes(16).toString('hex');
    data.jsonrpc = "2.0";
    this.rawPost(data, callback);
};
module.exports = customNode;

},{}],53:[function(require,module,exports){
'use strict';

var http;
var ethPrice = function ethPrice() {};
var getValue = function getValue(arr, pair) {
    for (var i in arr) {
        if (arr[i].pair == pair) return arr[i].rate;
    }
};
var BITYRATEAPI = "https://bity.com/api/v1/rate2/";
var CCRATEAPI = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR,GBP,BTC,CHF,REP";
ethPrice.getETHvalue = function (callback) {
    ajaxReq.http.get(CCRATEAPI).then(function (data) {
        data = data['data'];
        var priceObj = {
            usd: parseFloat(data['USD']).toFixed(6),
            eur: parseFloat(data['EUR']).toFixed(6),
            btc: parseFloat(data['BTC']).toFixed(6),
            chf: parseFloat(data['CHF']).toFixed(6),
            rep: parseFloat(data['REP']).toFixed(6),
            gbp: parseFloat(data['GBP']).toFixed(6)
        };
        callback(priceObj);
    });
};
ethPrice.getRates = function (callback) {
    ajaxReq.http.get(BITYRATEAPI).then(function (data) {
        callback(data['data']['objects']);
    });
};
module.exports = ethPrice;

},{}],54:[function(require,module,exports){
'use strict';

var etherscan = function etherscan() {};
etherscan.SERVERURL = "https://api.etherscan.io/api";
etherscan.pendingPosts = [];
etherscan.config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
};

etherscan.getCurrentBlock = function (callback) {
    this.post({
        module: 'proxy',
        action: 'eth_blockNumber'
    }, function (data) {
        if (data.error) callback({ error: true, msg: data.error.message, data: '' });else callback({ error: false, msg: '', data: new BigNumber(data.result).toString() });
    });
};
etherscan.getBalance = function (addr, callback) {
    this.post({
        module: 'account',
        action: 'balance',
        address: addr,
        tag: 'latest'
    }, function (data) {
        if (data.message != 'OK') callback({ error: true, msg: data.message, data: '' });else callback({ error: false, msg: '', data: { address: addr, balance: data.result } });
    });
};
etherscan.getTransactionData = function (addr, callback) {
    var response = { error: false, msg: '', data: { address: addr, balance: '', gasprice: '', nonce: '' } };
    var parentObj = this;
    parentObj.getBalance(addr, function (data) {
        if (data.error) {
            callback({ error: true, msg: data.msg, data: '' });
            return;
        }
        response.data.balance = data.data.balance;
        parentObj.post({
            module: 'proxy',
            action: 'eth_gasPrice'
        }, function (data) {
            if (data.error) {
                callback({ error: true, msg: data.error.message, data: '' });
                return;
            }
            response.data.gasprice = data.result;
            parentObj.post({
                module: 'proxy',
                address: addr,
                action: 'eth_getTransactionCount',
                tag: 'latest'
            }, function (data) {
                if (data.error) {
                    callback({ error: true, msg: data.error.message, data: '' });
                    return;
                }
                response.data.nonce = data.result;
                callback(response);
            });
        });
    });
};
etherscan.sendRawTx = function (rawTx, callback) {
    this.post({
        module: 'proxy',
        action: 'eth_sendRawTransaction',
        hex: rawTx
    }, function (data) {
        if (data.error) callback({ error: true, msg: data.error.message, data: '' });else callback({ error: false, msg: '', data: data.result });
    });
};
etherscan.getEstimatedGas = function (txobj, callback) {
    this.post({
        module: 'proxy',
        action: 'eth_estimateGas',
        to: txobj.to,
        value: txobj.value,
        data: txobj.data,
        from: txobj.from
    }, function (data) {
        if (data.error) callback({ error: true, msg: data.error.message, data: '' });else callback({ error: false, msg: '', data: data.result });
    });
};
etherscan.getEthCall = function (txobj, callback) {
    this.post({
        module: 'proxy',
        action: 'eth_call',
        to: txobj.to,
        data: txobj.data
    }, function (data) {
        if (data.error) callback({ error: true, msg: data.error.message, data: '' });else callback({ error: false, msg: '', data: data.result });
    });
};
etherscan.queuePost = function () {
    var data = this.pendingPosts[0].data;
    var callback = this.pendingPosts[0].callback;
    var parentObj = this;
    data.apikey = 'DSH5B24BQYKD1AD8KUCDY3SAQSS6ZAU175';
    ajaxReq.http.post(this.SERVERURL, ajaxReq.postSerializer(data), this.config).then(function (data) {
        callback(data.data);
        parentObj.pendingPosts.splice(0, 1);
        if (parentObj.pendingPosts.length > 0) parentObj.queuePost();
    }, function (data) {
        callback({ error: true, msg: "connection error", data: "" });
    });
};
etherscan.post = function (data, _callback) {
    this.pendingPosts.push({
        data: data,
        callback: function callback(_data) {
            _callback(_data);
        }
    });
    if (this.pendingPosts.length == 1) this.queuePost();
};
module.exports = etherscan;

},{}],55:[function(require,module,exports){
'use strict';

var _ethscan = require('./etherscan');
var kovan = {};
for (var attr in _ethscan) {
    kovan[attr] = _ethscan[attr];
}
kovan.SERVERURL = 'https://kovan.etherscan.io/api';
module.exports = kovan;

},{"./etherscan":54}],56:[function(require,module,exports){
'use strict';

var _ethscan = require('./etherscan');
var rinkeby = {};
for (var attr in _ethscan) {
    rinkeby[attr] = _ethscan[attr];
}
rinkeby.SERVERURL = 'https://rinkeby.etherscan.io/api';
module.exports = rinkeby;

},{"./etherscan":54}],57:[function(require,module,exports){
'use strict';

var nodes = function nodes() {};
nodes.customNode = require('./nodeHelpers/customNode');
nodes.nodeTypes = {
    ETH: "ETH",
    ETC: "ETC",
    Ropsten: "ROPSTEN ETH",
    Kovan: "KOVAN ETH",
    Rinkeby: "RINKEBY ETH",
    RSK: "RSK",
    Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'eth_mew': {
        'name': 'ETH',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'MyEtherWallet',
        'lib': new nodes.customNode('https://api.myetherapi.com/eth', '')
    },
    'eth_ethscan': {
        'name': 'ETH',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'Etherscan.io',
        'lib': require('./nodeHelpers/etherscan')
    },
    'etc_epool': {
        'name': 'ETC',
        'blockExplorerTX': 'https://gastracker.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://gastracker.io/addr/[[address]]',
        'type': nodes.nodeTypes.ETC,
        'eip155': true,
        'chainId': 61,
        'tokenList': require('./tokens/etcTokens.json'),
        'abiList': require('./abiDefinitions/etcAbi.json'),
        'service': 'Epool.io',
        'lib': new nodes.customNode('https://mewapi.epool.io', '')
    },
    'rop_mew': {
        'name': 'Ropsten',
        'type': nodes.nodeTypes.Ropsten,
        'blockExplorerTX': 'https://ropsten.etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://ropsten.etherscan.io/address/[[address]]',
        'eip155': true,
        'chainId': 3,
        'tokenList': require('./tokens/ropstenTokens.json'),
        'abiList': require('./abiDefinitions/ropstenAbi.json'),
        'service': 'MyEtherWallet',
        'lib': new nodes.customNode('https://api.myetherapi.com/rop', '')
    },
    'kov_ethscan': {
        'name': 'Kovan',
        'type': nodes.nodeTypes.Kovan,
        'blockExplorerTX': 'https://kovan.etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://kovan.etherscan.io/address/[[address]]',
        'eip155': true,
        'chainId': 42,
        'tokenList': require('./tokens/kovanTokens.json'),
        'abiList': require('./abiDefinitions/kovanAbi.json'),
        'service': 'Etherscan.io',
        'lib': require('./nodeHelpers/etherscanKov')
    },
    'rin_ethscan': {
        'name': 'Rinkeby',
        'type': nodes.nodeTypes.Rinkeby,
        'blockExplorerTX': 'https://rinkeby.etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://rinkeby.etherscan.io/address/[[address]]',
        'eip155': true,
        'chainId': 4,
        'tokenList': require('./tokens/rinkebyTokens.json'),
        'abiList': require('./abiDefinitions/rinkebyAbi.json'),
        'service': 'Etherscan.io',
        'lib': require('./nodeHelpers/etherscanRin')
    },
    'rsk': {
        'name': 'RSK',
        'blockExplorerTX': 'https://explorer.rsk.co/tx/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.rsk.co/addr/[[address]]',
        'type': nodes.nodeTypes.RSK,
        'eip155': true,
        'chainId': 31,
        'tokenList': require('./tokens/rskTokens.json'),
        'abiList': require('./abiDefinitions/rskAbi.json'),
        'estimateGas': true,
        'service': 'GK2.sk',
        'lib': new nodes.customNode('https://rsk-test.gk2.sk/', '')
    }
};
nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;

},{"./abiDefinitions/etcAbi.json":1,"./abiDefinitions/ethAbi.json":2,"./abiDefinitions/kovanAbi.json":3,"./abiDefinitions/rinkebyAbi.json":4,"./abiDefinitions/ropstenAbi.json":5,"./abiDefinitions/rskAbi.json":6,"./nodeHelpers/customNode":52,"./nodeHelpers/ethPrice":53,"./nodeHelpers/etherscan":54,"./nodeHelpers/etherscanKov":55,"./nodeHelpers/etherscanRin":56,"./tokens/etcTokens.json":81,"./tokens/ethTokens.json":82,"./tokens/kovanTokens.json":83,"./tokens/rinkebyTokens.json":84,"./tokens/ropstenTokens.json":85,"./tokens/rskTokens.json":86}],58:[function(require,module,exports){
'use strict';

var globalService = function globalService($http, $httpParamSerializerJQLike) {
  globalFuncs.checkAndRedirectHTTPS();
  ajaxReq.http = $http;
  ajaxReq.postSerializer = $httpParamSerializerJQLike;
  ajaxReq.getETHvalue = nodes.ethPrice.getETHvalue;
  ajaxReq.getRates = nodes.ethPrice.getRates;
  var tabs = {
    generateWallet: {
      id: 0,
      name: "NAV_GenerateWallet",
      url: "generate-wallet",
      mew: true,
      cx: false
    },
    myWallet: {
      id: 1,
      name: "NAV_MyWallets",
      url: "my-wallet",
      mew: false,
      cx: true
    },
    addWallet: {
      id: 2,
      name: "NAV_AddWallet",
      url: "add-wallet",
      mew: false,
      cx: true
    },
    sendTransaction: {
      id: 3,
      name: "NAV_SendEther",
      url: "send-transaction",
      mew: true,
      cx: true
    },
    swap: {
      id: 4,
      name: "NAV_Swap",
      url: "swap",
      mew: true,
      cx: true
    },
    offlineTransaction: {
      id: 5,
      name: "NAV_Offline",
      url: "offline-transaction",
      mew: true,
      cx: false
    },
    contracts: {
      id: 6,
      name: "NAV_Contracts",
      url: "contracts",
      mew: true,
      cx: true
    },
    ens: {
      id: 7,
      name: "NAV_ENS",
      url: "ens",
      mew: true,
      cx: true
    },
    viewWalletInfo: {
      id: 8,
      name: "NAV_ViewWallet",
      url: "view-wallet-info",
      mew: true,
      cx: false
    },
    help: {
      id: 9,
      name: "NAV_Help",
      url: "help",
      mew: true,
      cx: true
    },
    signMsg: {
      id: 10,
      name: "NAV_SignMsg",
      url: "sign-message",
      mew: false,
      cx: false
    },
    bulkGenerate: {
      id: 11,
      name: "NAV_BulkGenerate",
      url: "bulk-generate",
      mew: false,
      cx: false
    }
  };
  var currentTab = 0;
  if (typeof chrome != 'undefined') currentTab = chrome.windows === undefined ? 0 : 3;
  return {
    tabs: tabs,
    currentTab: currentTab
  };
};
module.exports = globalService;

},{}],59:[function(require,module,exports){
'use strict';

var walletService = function walletService() {
       return {
              wallet: null,
              password: ''
       };
};
module.exports = walletService;

},{}],60:[function(require,module,exports){
'use strict';

var f = require('./formatters');
var SolidityType = require('./type');

/**
 * SolidityTypeAddress is a prootype that represents address type
 * It matches:
 * address
 * address[]
 * address[4]
 * address[][]
 * address[3][]
 * address[][6][], ...
 */
var SolidityTypeAddress = function SolidityTypeAddress() {
    this._inputFormatter = f.formatInputInt;
    this._outputFormatter = f.formatOutputAddress;
};

SolidityTypeAddress.prototype = new SolidityType({});
SolidityTypeAddress.prototype.constructor = SolidityTypeAddress;

SolidityTypeAddress.prototype.isType = function (name) {
    return !!name.match(/address(\[([0-9]*)\])?/);
};

module.exports = SolidityTypeAddress;

},{"./formatters":66,"./type":71}],61:[function(require,module,exports){
'use strict';

var f = require('./formatters');
var SolidityType = require('./type');

/**
 * SolidityTypeBool is a prootype that represents bool type
 * It matches:
 * bool
 * bool[]
 * bool[4]
 * bool[][]
 * bool[3][]
 * bool[][6][], ...
 */
var SolidityTypeBool = function SolidityTypeBool() {
    this._inputFormatter = f.formatInputBool;
    this._outputFormatter = f.formatOutputBool;
};

SolidityTypeBool.prototype = new SolidityType({});
SolidityTypeBool.prototype.constructor = SolidityTypeBool;

SolidityTypeBool.prototype.isType = function (name) {
    return !!name.match(/^bool(\[([0-9]*)\])*$/);
};

module.exports = SolidityTypeBool;

},{"./formatters":66,"./type":71}],62:[function(require,module,exports){
'use strict';

var f = require('./formatters');
var SolidityType = require('./type');

/**
 * SolidityTypeBytes is a prototype that represents the bytes type.
 * It matches:
 * bytes
 * bytes[]
 * bytes[4]
 * bytes[][]
 * bytes[3][]
 * bytes[][6][], ...
 * bytes32
 * bytes8[4]
 * bytes[3][]
 */
var SolidityTypeBytes = function SolidityTypeBytes() {
    this._inputFormatter = f.formatInputBytes;
    this._outputFormatter = f.formatOutputBytes;
};

SolidityTypeBytes.prototype = new SolidityType({});
SolidityTypeBytes.prototype.constructor = SolidityTypeBytes;

SolidityTypeBytes.prototype.isType = function (name) {
    return !!name.match(/^bytes([0-9]{1,})(\[([0-9]*)\])*$/);
};

module.exports = SolidityTypeBytes;

},{"./formatters":66,"./type":71}],63:[function(require,module,exports){
'use strict';

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file coder.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var f = require('./formatters');

var SolidityTypeAddress = require('./address');
var SolidityTypeBool = require('./bool');
var SolidityTypeInt = require('./int');
var SolidityTypeUInt = require('./uint');
var SolidityTypeDynamicBytes = require('./dynamicbytes');
var SolidityTypeString = require('./string');
var SolidityTypeReal = require('./real');
var SolidityTypeUReal = require('./ureal');
var SolidityTypeBytes = require('./bytes');
var utils = require('./utils');

var isDynamic = function isDynamic(solidityType, type) {
    return solidityType.isDynamicType(type) || solidityType.isDynamicArray(type);
};

/**
 * SolidityCoder prototype should be used to encode/decode solidity params of any type
 */
var SolidityCoder = function SolidityCoder(types) {
    this._types = types;
};

/**
 * This method should be used to transform type to SolidityType
 *
 * @method _requireType
 * @param {String} type
 * @returns {SolidityType}
 * @throws {Error} throws if no matching type is found
 */
SolidityCoder.prototype._requireType = function (type) {
    var solidityType = this._types.filter(function (t) {
        return t.isType(type);
    })[0];

    if (!solidityType) {
        throw Error('invalid solidity type!: ' + type);
    }

    return solidityType;
};

/**
 * Should be used to encode plain param
 *
 * @method encodeParam
 * @param {String} type
 * @param {Object} plain param
 * @return {String} encoded plain param
 */
SolidityCoder.prototype.encodeParam = function (type, param) {
    return this.encodeParams([type], [param]);
};

/**
 * Should be used to encode list of params
 *
 * @method encodeParams
 * @param {Array} types
 * @param {Array} params
 * @return {String} encoded list of params
 */
SolidityCoder.prototype.encodeParams = function (types, params) {
    var solidityTypes = this.getSolidityTypes(types);

    var encodeds = solidityTypes.map(function (solidityType, index) {
        return solidityType.encode(params[index], types[index]);
    });

    var dynamicOffset = solidityTypes.reduce(function (acc, solidityType, index) {
        var staticPartLength = solidityType.staticPartLength(types[index]);
        var roundedStaticPartLength = Math.floor((staticPartLength + 31) / 32) * 32;

        return acc + (isDynamic(solidityTypes[index], types[index]) ? 32 : roundedStaticPartLength);
    }, 0);

    var result = this.encodeMultiWithOffset(types, solidityTypes, encodeds, dynamicOffset);

    return result;
};

SolidityCoder.prototype.encodeMultiWithOffset = function (types, solidityTypes, encodeds, dynamicOffset) {
    var result = "";
    var self = this;

    types.forEach(function (type, i) {
        if (isDynamic(solidityTypes[i], types[i])) {
            result += f.formatInputInt(dynamicOffset).encode();
            var e = self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
            dynamicOffset += e.length / 2;
        } else {
            // don't add length to dynamicOffset. it's already counted
            result += self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
        }

        // TODO: figure out nested arrays
    });

    types.forEach(function (type, i) {
        if (isDynamic(solidityTypes[i], types[i])) {
            var e = self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
            dynamicOffset += e.length / 2;
            result += e;
        }
    });
    return result;
};

// TODO: refactor whole encoding!
SolidityCoder.prototype.encodeWithOffset = function (type, solidityType, encoded, offset) {
    var self = this;
    if (solidityType.isDynamicArray(type)) {
        return function () {
            // offset was already set
            var nestedName = solidityType.nestedName(type);
            var nestedStaticPartLength = solidityType.staticPartLength(nestedName);
            var result = encoded[0];

            (function () {
                var previousLength = 2; // in int
                if (solidityType.isDynamicArray(nestedName)) {
                    for (var i = 1; i < encoded.length; i++) {
                        previousLength += +encoded[i - 1][0] || 0;
                        result += f.formatInputInt(offset + i * nestedStaticPartLength + previousLength * 32).encode();
                    }
                }
            })();

            // first element is length, skip it
            (function () {
                for (var i = 0; i < encoded.length - 1; i++) {
                    var additionalOffset = result / 2;
                    result += self.encodeWithOffset(nestedName, solidityType, encoded[i + 1], offset + additionalOffset);
                }
            })();

            return result;
        }();
    } else if (solidityType.isStaticArray(type)) {
        return function () {
            var nestedName = solidityType.nestedName(type);
            var nestedStaticPartLength = solidityType.staticPartLength(nestedName);
            var result = "";

            if (solidityType.isDynamicArray(nestedName)) {
                (function () {
                    var previousLength = 0; // in int
                    for (var i = 0; i < encoded.length; i++) {
                        // calculate length of previous item
                        previousLength += +(encoded[i - 1] || [])[0] || 0;
                        result += f.formatInputInt(offset + i * nestedStaticPartLength + previousLength * 32).encode();
                    }
                })();
            }

            (function () {
                for (var i = 0; i < encoded.length; i++) {
                    var additionalOffset = result / 2;
                    result += self.encodeWithOffset(nestedName, solidityType, encoded[i], offset + additionalOffset);
                }
            })();

            return result;
        }();
    }

    return encoded;
};

/**
 * Should be used to decode bytes to plain param
 *
 * @method decodeParam
 * @param {String} type
 * @param {String} bytes
 * @return {Object} plain param
 */
SolidityCoder.prototype.decodeParam = function (type, bytes) {
    return this.decodeParams([type], bytes)[0];
};

/**
 * Should be used to decode list of params
 *
 * @method decodeParam
 * @param {Array} types
 * @param {String} bytes
 * @return {Array} array of plain params
 */
SolidityCoder.prototype.decodeParams = function (types, bytes) {
    var solidityTypes = this.getSolidityTypes(types);
    var offsets = this.getOffsets(types, solidityTypes);

    return solidityTypes.map(function (solidityType, index) {
        return solidityType.decode(bytes, offsets[index], types[index], index);
    });
};

SolidityCoder.prototype.getOffsets = function (types, solidityTypes) {
    var lengths = solidityTypes.map(function (solidityType, index) {
        return solidityType.staticPartLength(types[index]);
    });

    for (var i = 1; i < lengths.length; i++) {
        // sum with length of previous element
        lengths[i] += lengths[i - 1];
    }

    return lengths.map(function (length, index) {
        // remove the current length, so the length is sum of previous elements
        var staticPartLength = solidityTypes[index].staticPartLength(types[index]);
        return length - staticPartLength;
    });
};

SolidityCoder.prototype.getSolidityTypes = function (types) {
    var self = this;
    return types.map(function (type) {
        return self._requireType(type);
    });
};

var coder = new SolidityCoder([new SolidityTypeAddress(), new SolidityTypeBool(), new SolidityTypeInt(), new SolidityTypeUInt(), new SolidityTypeDynamicBytes(), new SolidityTypeBytes(), new SolidityTypeString(), new SolidityTypeReal(), new SolidityTypeUReal()]);

module.exports = coder;

},{"./address":60,"./bool":61,"./bytes":62,"./dynamicbytes":65,"./formatters":66,"./int":67,"./real":69,"./string":70,"./uint":72,"./ureal":73,"./utils":74}],64:[function(require,module,exports){
'use strict';

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file config.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

/**
 * Utils
 * 
 * @module utils
 */

/**
 * Utility functions
 * 
 * @class [utils] config
 * @constructor
 */

/// required to define ETH_BIGNUMBER_ROUNDING_MODE
var BigNumber = require('bignumber.js');

var ETH_UNITS = ['wei', 'kwei', 'Mwei', 'Gwei', 'szabo', 'finney', 'femtoether', 'picoether', 'nanoether', 'microether', 'milliether', 'nano', 'micro', 'milli', 'ether', 'grand', 'Mether', 'Gether', 'Tether', 'Pether', 'Eether', 'Zether', 'Yether', 'Nether', 'Dether', 'Vether', 'Uether'];

module.exports = {
    ETH_PADDING: 32,
    ETH_SIGNATURE_LENGTH: 4,
    ETH_UNITS: ETH_UNITS,
    ETH_BIGNUMBER_ROUNDING_MODE: { ROUNDING_MODE: BigNumber.ROUND_DOWN },
    ETH_POLLING_TIMEOUT: 1000 / 2,
    defaultBlock: 'latest',
    defaultAccount: undefined
};

},{"bignumber.js":134}],65:[function(require,module,exports){
'use strict';

var f = require('./formatters');
var SolidityType = require('./type');

var SolidityTypeDynamicBytes = function SolidityTypeDynamicBytes() {
    this._inputFormatter = f.formatInputDynamicBytes;
    this._outputFormatter = f.formatOutputDynamicBytes;
};

SolidityTypeDynamicBytes.prototype = new SolidityType({});
SolidityTypeDynamicBytes.prototype.constructor = SolidityTypeDynamicBytes;

SolidityTypeDynamicBytes.prototype.isType = function (name) {
    return !!name.match(/^bytes(\[([0-9]*)\])*$/);
};

SolidityTypeDynamicBytes.prototype.isDynamicType = function () {
    return true;
};

module.exports = SolidityTypeDynamicBytes;

},{"./formatters":66,"./type":71}],66:[function(require,module,exports){
'use strict';

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file formatters.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var BigNumber = require('bignumber.js');
var utils = require('./utils');
var c = require('./config');
var SolidityParam = require('./param');

/**
 * Formats input value to byte representation of int
 * If value is negative, return it's two's complement
 * If the value is floating point, round it down
 *
 * @method formatInputInt
 * @param {String|Number|BigNumber} value that needs to be formatted
 * @returns {SolidityParam}
 */
var formatInputInt = function formatInputInt(value) {
    BigNumber.config(c.ETH_BIGNUMBER_ROUNDING_MODE);
    var result = utils.padLeft(utils.toTwosComplement(value).toString(16), 64);
    return new SolidityParam(result);
};

/**
 * Formats input bytes
 *
 * @method formatInputBytes
 * @param {String}
 * @returns {SolidityParam}
 */
var formatInputBytes = function formatInputBytes(value) {
    var result = utils.toHex(value).substr(2);
    var l = Math.floor((result.length + 63) / 64);
    result = utils.padRight(result, l * 64);
    return new SolidityParam(result);
};

/**
 * Formats input bytes
 *
 * @method formatDynamicInputBytes
 * @param {String}
 * @returns {SolidityParam}
 */
var formatInputDynamicBytes = function formatInputDynamicBytes(value) {
    var result = utils.toHex(value).substr(2);
    var length = result.length / 2;
    var l = Math.floor((result.length + 63) / 64);
    result = utils.padRight(result, l * 64);
    return new SolidityParam(formatInputInt(length).value + result);
};

/**
 * Formats input value to byte representation of string
 *
 * @method formatInputString
 * @param {String}
 * @returns {SolidityParam}
 */
var formatInputString = function formatInputString(value) {
    var result = utils.fromUtf8(value).substr(2);
    var length = result.length / 2;
    var l = Math.floor((result.length + 63) / 64);
    result = utils.padRight(result, l * 64);
    return new SolidityParam(formatInputInt(length).value + result);
};

/**
 * Formats input value to byte representation of bool
 *
 * @method formatInputBool
 * @param {Boolean}
 * @returns {SolidityParam}
 */
var formatInputBool = function formatInputBool(value) {
    var result = '000000000000000000000000000000000000000000000000000000000000000' + (value ? '1' : '0');
    return new SolidityParam(result);
};

/**
 * Formats input value to byte representation of real
 * Values are multiplied by 2^m and encoded as integers
 *
 * @method formatInputReal
 * @param {String|Number|BigNumber}
 * @returns {SolidityParam}
 */
var formatInputReal = function formatInputReal(value) {
    return formatInputInt(new BigNumber(value).times(new BigNumber(2).pow(128)));
};

/**
 * Check if input value is negative
 *
 * @method signedIsNegative
 * @param {String} value is hex format
 * @returns {Boolean} true if it is negative, otherwise false
 */
var signedIsNegative = function signedIsNegative(value) {
    return new BigNumber(value.substr(0, 1), 16).toString(2).substr(0, 1) === '1';
};

/**
 * Formats right-aligned output bytes to int
 *
 * @method formatOutputInt
 * @param {SolidityParam} param
 * @returns {BigNumber} right-aligned output bytes formatted to big number
 */
var formatOutputInt = function formatOutputInt(param) {
    var value = param.staticPart() || "0";

    // check if it's negative number
    // it it is, return two's complement
    if (signedIsNegative(value)) {
        return new BigNumber(value, 16).minus(new BigNumber('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16)).minus(1);
    }
    return new BigNumber(value, 16);
};

/**
 * Formats right-aligned output bytes to uint
 *
 * @method formatOutputUInt
 * @param {SolidityParam}
 * @returns {BigNumeber} right-aligned output bytes formatted to uint
 */
var formatOutputUInt = function formatOutputUInt(param) {
    var value = param.staticPart() || "0";
    return new BigNumber(value, 16);
};

/**
 * Formats right-aligned output bytes to real
 *
 * @method formatOutputReal
 * @param {SolidityParam}
 * @returns {BigNumber} input bytes formatted to real
 */
var formatOutputReal = function formatOutputReal(param) {
    return formatOutputInt(param).dividedBy(new BigNumber(2).pow(128));
};

/**
 * Formats right-aligned output bytes to ureal
 *
 * @method formatOutputUReal
 * @param {SolidityParam}
 * @returns {BigNumber} input bytes formatted to ureal
 */
var formatOutputUReal = function formatOutputUReal(param) {
    return formatOutputUInt(param).dividedBy(new BigNumber(2).pow(128));
};

/**
 * Should be used to format output bool
 *
 * @method formatOutputBool
 * @param {SolidityParam}
 * @returns {Boolean} right-aligned input bytes formatted to bool
 */
var formatOutputBool = function formatOutputBool(param) {
    return param.staticPart() === '0000000000000000000000000000000000000000000000000000000000000001' ? true : false;
};

/**
 * Should be used to format output bytes
 *
 * @method formatOutputBytes
 * @param {SolidityParam} left-aligned hex representation of string
 * @param {String} name type name
 * @returns {String} hex string
 */
var formatOutputBytes = function formatOutputBytes(param, name) {
    var matches = name.match(/^bytes([0-9]*)/);
    var size = parseInt(matches[1]);
    return '0x' + param.staticPart().slice(0, 2 * size);
};

/**
 * Should be used to format output bytes
 *
 * @method formatOutputDynamicBytes
 * @param {SolidityParam} left-aligned hex representation of string
 * @returns {String} hex string
 */
var formatOutputDynamicBytes = function formatOutputDynamicBytes(param) {
    var length = new BigNumber(param.dynamicPart().slice(0, 64), 16).toNumber() * 2;
    return '0x' + param.dynamicPart().substr(64, length);
};

/**
 * Should be used to format output string
 *
 * @method formatOutputString
 * @param {SolidityParam} left-aligned hex representation of string
 * @returns {String} ascii string
 */
var formatOutputString = function formatOutputString(param) {
    var length = new BigNumber(param.dynamicPart().slice(0, 64), 16).toNumber() * 2;
    return utils.toUtf8(param.dynamicPart().substr(64, length));
};

/**
 * Should be used to format output address
 *
 * @method formatOutputAddress
 * @param {SolidityParam} right-aligned input bytes
 * @returns {String} address
 */
var formatOutputAddress = function formatOutputAddress(param) {
    var value = param.staticPart();
    return "0x" + value.slice(value.length - 40, value.length);
};

module.exports = {
    formatInputInt: formatInputInt,
    formatInputBytes: formatInputBytes,
    formatInputDynamicBytes: formatInputDynamicBytes,
    formatInputString: formatInputString,
    formatInputBool: formatInputBool,
    formatInputReal: formatInputReal,
    formatOutputInt: formatOutputInt,
    formatOutputUInt: formatOutputUInt,
    formatOutputReal: formatOutputReal,
    formatOutputUReal: formatOutputUReal,
    formatOutputBool: formatOutputBool,
    formatOutputBytes: formatOutputBytes,
    formatOutputDynamicBytes: formatOutputDynamicBytes,
    formatOutputString: formatOutputString,
    formatOutputAddress: formatOutputAddress
};

},{"./config":64,"./param":68,"./utils":74,"bignumber.js":134}],67:[function(require,module,exports){
'use strict';

var f = require('./formatters');
var SolidityType = require('./type');

/**
 * SolidityTypeInt is a prootype that represents int type
 * It matches:
 * int
 * int[]
 * int[4]
 * int[][]
 * int[3][]
 * int[][6][], ...
 * int32
 * int64[]
 * int8[4]
 * int256[][]
 * int[3][]
 * int64[][6][], ...
 */
var SolidityTypeInt = function SolidityTypeInt() {
    this._inputFormatter = f.formatInputInt;
    this._outputFormatter = f.formatOutputInt;
};

SolidityTypeInt.prototype = new SolidityType({});
SolidityTypeInt.prototype.constructor = SolidityTypeInt;

SolidityTypeInt.prototype.isType = function (name) {
    return !!name.match(/^int([0-9]*)?(\[([0-9]*)\])*$/);
};

module.exports = SolidityTypeInt;

},{"./formatters":66,"./type":71}],68:[function(require,module,exports){
'use strict';

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** 
 * @file param.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var utils = require('./utils');

/**
 * SolidityParam object prototype.
 * Should be used when encoding, decoding solidity bytes
 */
var SolidityParam = function SolidityParam(value, offset) {
    this.value = value || '';
    this.offset = offset; // offset in bytes
};

/**
 * This method should be used to get length of params's dynamic part
 * 
 * @method dynamicPartLength
 * @returns {Number} length of dynamic part (in bytes)
 */
SolidityParam.prototype.dynamicPartLength = function () {
    return this.dynamicPart().length / 2;
};

/**
 * This method should be used to create copy of solidity param with different offset
 *
 * @method withOffset
 * @param {Number} offset length in bytes
 * @returns {SolidityParam} new solidity param with applied offset
 */
SolidityParam.prototype.withOffset = function (offset) {
    return new SolidityParam(this.value, offset);
};

/**
 * This method should be used to combine solidity params together
 * eg. when appending an array
 *
 * @method combine
 * @param {SolidityParam} param with which we should combine
 * @param {SolidityParam} result of combination
 */
SolidityParam.prototype.combine = function (param) {
    return new SolidityParam(this.value + param.value);
};

/**
 * This method should be called to check if param has dynamic size.
 * If it has, it returns true, otherwise false
 *
 * @method isDynamic
 * @returns {Boolean}
 */
SolidityParam.prototype.isDynamic = function () {
    return this.offset !== undefined;
};

/**
 * This method should be called to transform offset to bytes
 *
 * @method offsetAsBytes
 * @returns {String} bytes representation of offset
 */
SolidityParam.prototype.offsetAsBytes = function () {
    return !this.isDynamic() ? '' : utils.padLeft(utils.toTwosComplement(this.offset).toString(16), 64);
};

/**
 * This method should be called to get static part of param
 *
 * @method staticPart
 * @returns {String} offset if it is a dynamic param, otherwise value
 */
SolidityParam.prototype.staticPart = function () {
    if (!this.isDynamic()) {
        return this.value;
    }
    return this.offsetAsBytes();
};

/**
 * This method should be called to get dynamic part of param
 *
 * @method dynamicPart
 * @returns {String} returns a value if it is a dynamic param, otherwise empty string
 */
SolidityParam.prototype.dynamicPart = function () {
    return this.isDynamic() ? this.value : '';
};

/**
 * This method should be called to encode param
 *
 * @method encode
 * @returns {String}
 */
SolidityParam.prototype.encode = function () {
    return this.staticPart() + this.dynamicPart();
};

/**
 * This method should be called to encode array of params
 *
 * @method encodeList
 * @param {Array[SolidityParam]} params
 * @returns {String}
 */
SolidityParam.encodeList = function (params) {

    // updating offsets
    var totalOffset = params.length * 32;
    var offsetParams = params.map(function (param) {
        if (!param.isDynamic()) {
            return param;
        }
        var offset = totalOffset;
        totalOffset += param.dynamicPartLength();
        return param.withOffset(offset);
    });

    // encode everything!
    return offsetParams.reduce(function (result, param) {
        return result + param.dynamicPart();
    }, offsetParams.reduce(function (result, param) {
        return result + param.staticPart();
    }, ''));
};

module.exports = SolidityParam;

},{"./utils":74}],69:[function(require,module,exports){
'use strict';

var f = require('./formatters');
var SolidityType = require('./type');

/**
 * SolidityTypeReal is a prootype that represents real type
 * It matches:
 * real
 * real[]
 * real[4]
 * real[][]
 * real[3][]
 * real[][6][], ...
 * real32
 * real64[]
 * real8[4]
 * real256[][]
 * real[3][]
 * real64[][6][], ...
 */
var SolidityTypeReal = function SolidityTypeReal() {
    this._inputFormatter = f.formatInputReal;
    this._outputFormatter = f.formatOutputReal;
};

SolidityTypeReal.prototype = new SolidityType({});
SolidityTypeReal.prototype.constructor = SolidityTypeReal;

SolidityTypeReal.prototype.isType = function (name) {
    return !!name.match(/real([0-9]*)?(\[([0-9]*)\])?/);
};

module.exports = SolidityTypeReal;

},{"./formatters":66,"./type":71}],70:[function(require,module,exports){
'use strict';

var f = require('./formatters');
var SolidityType = require('./type');

var SolidityTypeString = function SolidityTypeString() {
    this._inputFormatter = f.formatInputString;
    this._outputFormatter = f.formatOutputString;
};

SolidityTypeString.prototype = new SolidityType({});
SolidityTypeString.prototype.constructor = SolidityTypeString;

SolidityTypeString.prototype.isType = function (name) {
    return !!name.match(/^string(\[([0-9]*)\])*$/);
};

SolidityTypeString.prototype.isDynamicType = function () {
    return true;
};

module.exports = SolidityTypeString;

},{"./formatters":66,"./type":71}],71:[function(require,module,exports){
'use strict';

var f = require('./formatters');
var SolidityParam = require('./param');

/**
 * SolidityType prototype is used to encode/decode solidity params of certain type
 */
var SolidityType = function SolidityType(config) {
    this._inputFormatter = config.inputFormatter;
    this._outputFormatter = config.outputFormatter;
};

/**
 * Should be used to determine if this SolidityType do match given name
 *
 * @method isType
 * @param {String} name
 * @return {Bool} true if type match this SolidityType, otherwise false
 */
SolidityType.prototype.isType = function (name) {
    throw "this method should be overrwritten for type " + name;
};

/**
 * Should be used to determine what is the length of static part in given type
 *
 * @method staticPartLength
 * @param {String} name
 * @return {Number} length of static part in bytes
 */
SolidityType.prototype.staticPartLength = function (name) {
    // If name isn't an array then treat it like a single element array.
    return (this.nestedTypes(name) || ['[1]']).map(function (type) {
        // the length of the nested array
        return parseInt(type.slice(1, -1), 10) || 1;
    }).reduce(function (previous, current) {
        return previous * current;
        // all basic types are 32 bytes long
    }, 32);
};

/**
 * Should be used to determine if type is dynamic array
 * eg:
 * "type[]" => true
 * "type[4]" => false
 *
 * @method isDynamicArray
 * @param {String} name
 * @return {Bool} true if the type is dynamic array
 */
SolidityType.prototype.isDynamicArray = function (name) {
    var nestedTypes = this.nestedTypes(name);
    return !!nestedTypes && !nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g);
};

/**
 * Should be used to determine if type is static array
 * eg:
 * "type[]" => false
 * "type[4]" => true
 *
 * @method isStaticArray
 * @param {String} name
 * @return {Bool} true if the type is static array
 */
SolidityType.prototype.isStaticArray = function (name) {
    var nestedTypes = this.nestedTypes(name);
    return !!nestedTypes && !!nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g);
};

/**
 * Should return length of static array
 * eg.
 * "int[32]" => 32
 * "int256[14]" => 14
 * "int[2][3]" => 3
 * "int" => 1
 * "int[1]" => 1
 * "int[]" => 1
 *
 * @method staticArrayLength
 * @param {String} name
 * @return {Number} static array length
 */
SolidityType.prototype.staticArrayLength = function (name) {
    var nestedTypes = this.nestedTypes(name);
    if (nestedTypes) {
        return parseInt(nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g) || 1);
    }
    return 1;
};

/**
 * Should return nested type
 * eg.
 * "int[32]" => "int"
 * "int256[14]" => "int256"
 * "int[2][3]" => "int[2]"
 * "int" => "int"
 * "int[]" => "int"
 *
 * @method nestedName
 * @param {String} name
 * @return {String} nested name
 */
SolidityType.prototype.nestedName = function (name) {
    // remove last [] in name
    var nestedTypes = this.nestedTypes(name);
    if (!nestedTypes) {
        return name;
    }

    return name.substr(0, name.length - nestedTypes[nestedTypes.length - 1].length);
};

/**
 * Should return true if type has dynamic size by default
 * such types are "string", "bytes"
 *
 * @method isDynamicType
 * @param {String} name
 * @return {Bool} true if is dynamic, otherwise false
 */
SolidityType.prototype.isDynamicType = function () {
    return false;
};

/**
 * Should return array of nested types
 * eg.
 * "int[2][3][]" => ["[2]", "[3]", "[]"]
 * "int[] => ["[]"]
 * "int" => null
 *
 * @method nestedTypes
 * @param {String} name
 * @return {Array} array of nested types
 */
SolidityType.prototype.nestedTypes = function (name) {
    // return list of strings eg. "[]", "[3]", "[]", "[2]"
    return name.match(/(\[[0-9]*\])/g);
};

/**
 * Should be used to encode the value
 *
 * @method encode
 * @param {Object} value
 * @param {String} name
 * @return {String} encoded value
 */
SolidityType.prototype.encode = function (value, name) {
    var self = this;
    if (this.isDynamicArray(name)) {

        return function () {
            var length = value.length; // in int
            var nestedName = self.nestedName(name);

            var result = [];
            result.push(f.formatInputInt(length).encode());

            value.forEach(function (v) {
                result.push(self.encode(v, nestedName));
            });

            return result;
        }();
    } else if (this.isStaticArray(name)) {

        return function () {
            var length = self.staticArrayLength(name); // in int
            var nestedName = self.nestedName(name);

            var result = [];
            for (var i = 0; i < length; i++) {
                result.push(self.encode(value[i], nestedName));
            }

            return result;
        }();
    }

    return this._inputFormatter(value, name).encode();
};

/**
 * Should be used to decode value from bytes
 *
 * @method decode
 * @param {String} bytes
 * @param {Number} offset in bytes
 * @param {String} name type name
 * @returns {Object} decoded value
 */
SolidityType.prototype.decode = function (bytes, offset, name) {
    var self = this;

    if (this.isDynamicArray(name)) {

        return function () {
            var arrayOffset = parseInt('0x' + bytes.substr(offset * 2, 64)); // in bytes
            var length = parseInt('0x' + bytes.substr(arrayOffset * 2, 64)); // in int
            var arrayStart = arrayOffset + 32; // array starts after length; // in bytes

            var nestedName = self.nestedName(name);
            var nestedStaticPartLength = self.staticPartLength(nestedName); // in bytes
            var roundedNestedStaticPartLength = Math.floor((nestedStaticPartLength + 31) / 32) * 32;
            var result = [];

            for (var i = 0; i < length * roundedNestedStaticPartLength; i += roundedNestedStaticPartLength) {
                result.push(self.decode(bytes, arrayStart + i, nestedName));
            }

            return result;
        }();
    } else if (this.isStaticArray(name)) {

        return function () {
            var length = self.staticArrayLength(name); // in int
            var arrayStart = offset; // in bytes

            var nestedName = self.nestedName(name);
            var nestedStaticPartLength = self.staticPartLength(nestedName); // in bytes
            var roundedNestedStaticPartLength = Math.floor((nestedStaticPartLength + 31) / 32) * 32;
            var result = [];

            for (var i = 0; i < length * roundedNestedStaticPartLength; i += roundedNestedStaticPartLength) {
                result.push(self.decode(bytes, arrayStart + i, nestedName));
            }

            return result;
        }();
    } else if (this.isDynamicType(name)) {

        return function () {
            var dynamicOffset = parseInt('0x' + bytes.substr(offset * 2, 64)); // in bytes
            var length = parseInt('0x' + bytes.substr(dynamicOffset * 2, 64)); // in bytes
            var roundedLength = Math.floor((length + 31) / 32); // in int
            var param = new SolidityParam(bytes.substr(dynamicOffset * 2, (1 + roundedLength) * 64), 0);
            return self._outputFormatter(param, name);
        }();
    }

    var length = this.staticPartLength(name);
    var param = new SolidityParam(bytes.substr(offset * 2, length * 2));
    return this._outputFormatter(param, name);
};

module.exports = SolidityType;

},{"./formatters":66,"./param":68}],72:[function(require,module,exports){
'use strict';

var f = require('./formatters');
var SolidityType = require('./type');

/**
 * SolidityTypeUInt is a prootype that represents uint type
 * It matches:
 * uint
 * uint[]
 * uint[4]
 * uint[][]
 * uint[3][]
 * uint[][6][], ...
 * uint32
 * uint64[]
 * uint8[4]
 * uint256[][]
 * uint[3][]
 * uint64[][6][], ...
 */
var SolidityTypeUInt = function SolidityTypeUInt() {
    this._inputFormatter = f.formatInputInt;
    this._outputFormatter = f.formatOutputUInt;
};

SolidityTypeUInt.prototype = new SolidityType({});
SolidityTypeUInt.prototype.constructor = SolidityTypeUInt;

SolidityTypeUInt.prototype.isType = function (name) {
    return !!name.match(/^uint([0-9]*)?(\[([0-9]*)\])*$/);
};

module.exports = SolidityTypeUInt;

},{"./formatters":66,"./type":71}],73:[function(require,module,exports){
'use strict';

var f = require('./formatters');
var SolidityType = require('./type');

/**
 * SolidityTypeUReal is a prootype that represents ureal type
 * It matches:
 * ureal
 * ureal[]
 * ureal[4]
 * ureal[][]
 * ureal[3][]
 * ureal[][6][], ...
 * ureal32
 * ureal64[]
 * ureal8[4]
 * ureal256[][]
 * ureal[3][]
 * ureal64[][6][], ...
 */
var SolidityTypeUReal = function SolidityTypeUReal() {
    this._inputFormatter = f.formatInputReal;
    this._outputFormatter = f.formatOutputUReal;
};

SolidityTypeUReal.prototype = new SolidityType({});
SolidityTypeUReal.prototype.constructor = SolidityTypeUReal;

SolidityTypeUReal.prototype.isType = function (name) {
    return !!name.match(/^ureal([0-9]*)?(\[([0-9]*)\])*$/);
};

module.exports = SolidityTypeUReal;

},{"./formatters":66,"./type":71}],74:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file utils.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

/**
 * Utils
 *
 * @module utils
 */

/**
 * Utility functions
 *
 * @class [utils] utils
 * @constructor
 */

var BigNumber = require('bignumber.js');
var sha3 = require('ethereumjs-util').sha3;
var utf8 = require('utf8');

var unitMap = {
    'noether': '0',
    'wei': '1',
    'kwei': '1000',
    'Kwei': '1000',
    'babbage': '1000',
    'femtoether': '1000',
    'mwei': '1000000',
    'Mwei': '1000000',
    'lovelace': '1000000',
    'picoether': '1000000',
    'gwei': '1000000000',
    'Gwei': '1000000000',
    'shannon': '1000000000',
    'nanoether': '1000000000',
    'nano': '1000000000',
    'szabo': '1000000000000',
    'microether': '1000000000000',
    'micro': '1000000000000',
    'finney': '1000000000000000',
    'milliether': '1000000000000000',
    'milli': '1000000000000000',
    'ether': '1000000000000000000',
    'kether': '1000000000000000000000',
    'grand': '1000000000000000000000',
    'mether': '1000000000000000000000000',
    'gether': '1000000000000000000000000000',
    'tether': '1000000000000000000000000000000'
};

/**
 * Should be called to pad string to expected length
 *
 * @method padLeft
 * @param {String} string to be padded
 * @param {Number} characters that result string should have
 * @param {String} sign, by default 0
 * @returns {String} right aligned string
 */
var padLeft = function padLeft(string, chars, sign) {
    return new Array(chars - string.length + 1).join(sign ? sign : "0") + string;
};

/**
 * Should be called to pad string to expected length
 *
 * @method padRight
 * @param {String} string to be padded
 * @param {Number} characters that result string should have
 * @param {String} sign, by default 0
 * @returns {String} right aligned string
 */
var padRight = function padRight(string, chars, sign) {
    return string + new Array(chars - string.length + 1).join(sign ? sign : "0");
};

/**
 * Should be called to get utf8 from it's hex representation
 *
 * @method toUtf8
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */
var toUtf8 = function toUtf8(hex) {
    // Find termination
    var str = "";
    var i = 0,
        l = hex.length;
    if (hex.substring(0, 2) === '0x') {
        i = 2;
    }
    for (; i < l; i += 2) {
        var code = parseInt(hex.substr(i, 2), 16);
        if (code === 0) break;
        str += String.fromCharCode(code);
    }

    return utf8.decode(str);
};

/**
 * Should be called to get ascii from it's hex representation
 *
 * @method toAscii
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */
var toAscii = function toAscii(hex) {
    // Find termination
    var str = "";
    var i = 0,
        l = hex.length;
    if (hex.substring(0, 2) === '0x') {
        i = 2;
    }
    for (; i < l; i += 2) {
        var code = parseInt(hex.substr(i, 2), 16);
        str += String.fromCharCode(code);
    }

    return str;
};

/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @method fromUtf8
 * @param {String} string
 * @param {Number} optional padding
 * @returns {String} hex representation of input string
 */
var fromUtf8 = function fromUtf8(str) {
    str = utf8.encode(str);
    var hex = "";
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code === 0) break;
        var n = code.toString(16);
        hex += n.length < 2 ? '0' + n : n;
    }

    return "0x" + hex;
};

/**
 * Should be called to get hex representation (prefixed by 0x) of ascii string
 *
 * @method fromAscii
 * @param {String} string
 * @param {Number} optional padding
 * @returns {String} hex representation of input string
 */
var fromAscii = function fromAscii(str) {
    var hex = "";
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        var n = code.toString(16);
        hex += n.length < 2 ? '0' + n : n;
    }

    return "0x" + hex;
};

/**
 * Should be used to create full function/event name from json abi
 *
 * @method transformToFullName
 * @param {Object} json-abi
 * @return {String} full fnction/event name
 */
var transformToFullName = function transformToFullName(json) {
    if (json.name.indexOf('(') !== -1) {
        return json.name;
    }

    var typeName = json.inputs.map(function (i) {
        return i.type;
    }).join();
    return json.name + '(' + typeName + ')';
};

/**
 * Should be called to get display name of contract function
 *
 * @method extractDisplayName
 * @param {String} name of function/event
 * @returns {String} display name for function/event eg. multiply(uint256) -> multiply
 */
var extractDisplayName = function extractDisplayName(name) {
    var length = name.indexOf('(');
    return length !== -1 ? name.substr(0, length) : name;
};

/// @returns overloaded part of function/event name
var extractTypeName = function extractTypeName(name) {
    /// TODO: make it invulnerable
    var length = name.indexOf('(');
    return length !== -1 ? name.substr(length + 1, name.length - 1 - (length + 1)).replace(' ', '') : "";
};

/**
 * Converts value to it's decimal representation in string
 *
 * @method toDecimal
 * @param {String|Number|BigNumber}
 * @return {String}
 */
var toDecimal = function toDecimal(value) {
    return toBigNumber(value).toNumber();
};

/**
 * Converts value to it's hex representation
 *
 * @method fromDecimal
 * @param {String|Number|BigNumber}
 * @return {String}
 */
var fromDecimal = function fromDecimal(value) {
    var number = toBigNumber(value);
    var result = number.toString(16);

    return number.lessThan(0) ? '-0x' + result.substr(1) : '0x' + result;
};

/**
 * Auto converts any given value into it's hex representation.
 *
 * And even stringifys objects before.
 *
 * @method toHex
 * @param {String|Number|BigNumber|Object}
 * @return {String}
 */
var toHex = function toHex(val) {
    /*jshint maxcomplexity: 8 */

    if (isBoolean(val)) return fromDecimal(+val);

    if (isBigNumber(val)) return fromDecimal(val);

    if (isObject(val)) return fromUtf8(JSON.stringify(val));

    // if its a negative number, pass it through fromDecimal
    if (isString(val)) {
        if (val.indexOf('-0x') === 0) return fromDecimal(val);else if (val.indexOf('0x') === 0) return val;else if (!isFinite(val)) return fromAscii(val);
    }

    return fromDecimal(val);
};

/**
 * Returns value of unit in Wei
 *
 * @method getValueOfUnit
 * @param {String} unit the unit to convert to, default ether
 * @returns {BigNumber} value of the unit (in Wei)
 * @throws error if the unit is not correct:w
 */
var getValueOfUnit = function getValueOfUnit(unit) {
    unit = unit ? unit.toLowerCase() : 'ether';
    var unitValue = unitMap[unit];
    if (unitValue === undefined) {
        throw new Error('This unit doesn\'t exists, please use the one of the following units' + JSON.stringify(unitMap, null, 2));
    }
    return new BigNumber(unitValue, 10);
};

/**
 * Takes a number of wei and converts it to any other ether unit.
 *
 * Possible units are:
 *   SI Short   SI Full        Effigy       Other
 * - kwei       femtoether     babbage
 * - mwei       picoether      lovelace
 * - gwei       nanoether      shannon      nano
 * - --         microether     szabo        micro
 * - --         milliether     finney       milli
 * - ether      --             --
 * - kether                    --           grand
 * - mether
 * - gether
 * - tether
 *
 * @method fromWei
 * @param {Number|String} number can be a number, number string or a HEX of a decimal
 * @param {String} unit the unit to convert to, default ether
 * @return {String|Object} When given a BigNumber object it returns one as well, otherwise a number
*/
var fromWei = function fromWei(number, unit) {
    var returnValue = toBigNumber(number).dividedBy(getValueOfUnit(unit));

    return isBigNumber(number) ? returnValue : returnValue.toString(10);
};

/**
 * Takes a number of a unit and converts it to wei.
 *
 * Possible units are:
 *   SI Short   SI Full        Effigy       Other
 * - kwei       femtoether     babbage
 * - mwei       picoether      lovelace
 * - gwei       nanoether      shannon      nano
 * - --         microether     szabo        micro
 * - --         microether     szabo        micro
 * - --         milliether     finney       milli
 * - ether      --             --
 * - kether                    --           grand
 * - mether
 * - gether
 * - tether
 *
 * @method toWei
 * @param {Number|String|BigNumber} number can be a number, number string or a HEX of a decimal
 * @param {String} unit the unit to convert from, default ether
 * @return {String|Object} When given a BigNumber object it returns one as well, otherwise a number
*/
var toWei = function toWei(number, unit) {
    var returnValue = toBigNumber(number).times(getValueOfUnit(unit));

    return isBigNumber(number) ? returnValue : returnValue.toString(10);
};

/**
 * Takes an input and transforms it into an bignumber
 *
 * @method toBigNumber
 * @param {Number|String|BigNumber} a number, string, HEX string or BigNumber
 * @return {BigNumber} BigNumber
*/
var toBigNumber = function toBigNumber(number) {
    /*jshint maxcomplexity:5 */
    number = number || 0;
    if (isBigNumber(number)) return number;

    if (isString(number) && (number.indexOf('0x') === 0 || number.indexOf('-0x') === 0)) {
        return new BigNumber(number.replace('0x', ''), 16);
    }

    return new BigNumber(number.toString(10), 10);
};

/**
 * Takes and input transforms it into bignumber and if it is negative value, into two's complement
 *
 * @method toTwosComplement
 * @param {Number|String|BigNumber}
 * @return {BigNumber}
 */
var toTwosComplement = function toTwosComplement(number) {
    var bigNumber = toBigNumber(number).round();
    if (bigNumber.lessThan(0)) {
        return new BigNumber("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16).plus(bigNumber).plus(1);
    }
    return bigNumber;
};

/**
 * Checks if the given string is strictly an address
 *
 * @method isStrictAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/
var isStrictAddress = function isStrictAddress(address) {
    return (/^0x[0-9a-f]{40}$/i.test(address)
    );
};

/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/
var isAddress = function isAddress(address) {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        // check if it has the basic requirements of an address
        return false;
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
        // If it's all small caps or all all caps, return true
        return true;
    } else {
        // Otherwise check each case
        return isChecksumAddress(address);
    }
};

/**
 * Checks if the given string is a checksummed address
 *
 * @method isChecksumAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/
var isChecksumAddress = function isChecksumAddress(address) {
    // Check each case
    address = address.replace('0x', '');
    var addressHash = sha3(address.toLowerCase()).toString('hex');
    for (var i = 0; i < 40; i++) {
        // the nth letter should be uppercase if the nth digit of casemap is 1
        if (parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i] || parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i]) {
            return false;
        }
    }
    return true;
};

/**
 * Makes a checksum address
 *
 * @method toChecksumAddress
 * @param {String} address the given HEX adress
 * @return {String}
*/
var toChecksumAddress = function toChecksumAddress(address) {
    if (typeof address === 'undefined') return '';

    address = address.toLowerCase().replace('0x', '');
    var addressHash = sha3(address).toString('hex');
    var checksumAddress = '0x';

    for (var i = 0; i < address.length; i++) {
        // If ith character is 9 to f then make it uppercase 
        if (parseInt(addressHash[i], 16) > 7) {
            checksumAddress += address[i].toUpperCase();
        } else {
            checksumAddress += address[i];
        }
    }
    return checksumAddress;
};

/**
 * Transforms given string to valid 20 bytes-length addres with 0x prefix
 *
 * @method toAddress
 * @param {String} address
 * @return {String} formatted address
 */
var toAddress = function toAddress(address) {
    if (isStrictAddress(address)) {
        return address;
    }

    if (/^[0-9a-f]{40}$/.test(address)) {
        return '0x' + address;
    }

    return '0x' + padLeft(toHex(address).substr(2), 40);
};

/**
 * Returns true if object is BigNumber, otherwise false
 *
 * @method isBigNumber
 * @param {Object}
 * @return {Boolean}
 */
var isBigNumber = function isBigNumber(object) {
    return object instanceof BigNumber || object && object.constructor && object.constructor.name === 'BigNumber';
};

/**
 * Returns true if object is string, otherwise false
 *
 * @method isString
 * @param {Object}
 * @return {Boolean}
 */
var isString = function isString(object) {
    return typeof object === 'string' || object && object.constructor && object.constructor.name === 'String';
};

/**
 * Returns true if object is function, otherwise false
 *
 * @method isFunction
 * @param {Object}
 * @return {Boolean}
 */
var isFunction = function isFunction(object) {
    return typeof object === 'function';
};

/**
 * Returns true if object is Objet, otherwise false
 *
 * @method isObject
 * @param {Object}
 * @return {Boolean}
 */
var isObject = function isObject(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object';
};

/**
 * Returns true if object is boolean, otherwise false
 *
 * @method isBoolean
 * @param {Object}
 * @return {Boolean}
 */
var isBoolean = function isBoolean(object) {
    return typeof object === 'boolean';
};

/**
 * Returns true if object is array, otherwise false
 *
 * @method isArray
 * @param {Object}
 * @return {Boolean}
 */
var isArray = function isArray(object) {
    return object instanceof Array;
};

/**
 * Returns true if given string is valid json object
 *
 * @method isJson
 * @param {String}
 * @return {Boolean}
 */
var isJson = function isJson(str) {
    try {
        return !!JSON.parse(str);
    } catch (e) {
        return false;
    }
};

module.exports = {
    padLeft: padLeft,
    padRight: padRight,
    toHex: toHex,
    toDecimal: toDecimal,
    fromDecimal: fromDecimal,
    toUtf8: toUtf8,
    toAscii: toAscii,
    fromUtf8: fromUtf8,
    fromAscii: fromAscii,
    transformToFullName: transformToFullName,
    extractDisplayName: extractDisplayName,
    extractTypeName: extractTypeName,
    toWei: toWei,
    fromWei: fromWei,
    toBigNumber: toBigNumber,
    toTwosComplement: toTwosComplement,
    toAddress: toAddress,
    isBigNumber: isBigNumber,
    isStrictAddress: isStrictAddress,
    isAddress: isAddress,
    isChecksumAddress: isChecksumAddress,
    toChecksumAddress: toChecksumAddress,
    isFunction: isFunction,
    isString: isString,
    isObject: isObject,
    isBoolean: isBoolean,
    isArray: isArray,
    isJson: isJson
};

},{"bignumber.js":134,"ethereumjs-util":215,"utf8":302}],75:[function(require,module,exports){
'use strict';

var marked = require('marked');
var myRenderer = new marked.Renderer();
myRenderer.paragraph = function (text) {
	return text + '\n';
};
myRenderer.link = function (href, title, text) {
	if (this.options.sanitize) {
		try {
			var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
		} catch (e) {
			return '';
		}
		if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
			return '';
		}
	}
	var out = '<a target="_blank" href="' + href + '"';
	if (title) {
		out += ' title="' + title + '"';
	}
	out += '>' + text + '</a>';
	return out;
};
marked.setOptions({
	renderer: myRenderer
});
module.exports = marked;

},{"marked":243}],76:[function(require,module,exports){
(function (Buffer){
/********************************************************************************
*   Ledger Communication toolkit
*   (c) 2016 Ledger
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License.
********************************************************************************/

'use strict';

var LedgerEth = function LedgerEth(comm) {
	this.comm = comm;
};

LedgerEth.splitPath = function (path) {
	var result = [];
	var components = path.split('/');
	components.forEach(function (element, index) {
		var number = parseInt(element, 10);
		if (isNaN(number)) {
			return;
		}
		if (element.length > 1 && element[element.length - 1] == "'") {
			number += 0x80000000;
		}
		result.push(number);
	});
	return result;
};

// callback is function(response, error)
LedgerEth.prototype.getAddress = function (path, callback, boolDisplay, boolChaincode) {
	var splitPath = LedgerEth.splitPath(path);
	var buffer = new Buffer(5 + 1 + splitPath.length * 4);
	buffer[0] = 0xe0;
	buffer[1] = 0x02;
	buffer[2] = boolDisplay ? 0x01 : 0x00;
	buffer[3] = boolChaincode ? 0x01 : 0x00;
	buffer[4] = 1 + splitPath.length * 4;
	buffer[5] = splitPath.length;
	splitPath.forEach(function (element, index) {
		buffer.writeUInt32BE(element, 6 + 4 * index);
	});
	var self = this;
	var localCallback = function localCallback(response, error) {
		if (typeof error != "undefined") {
			callback(undefined, error);
		} else {
			var result = {};
			response = new Buffer(response, 'hex');
			var sw = response.readUInt16BE(response.length - 2);
			if (sw != 0x9000) {
				callback(undefined, "Invalid status " + sw.toString(16) + ". Check to make sure contract data is on?");
				return;
			}
			var publicKeyLength = response[0];
			var addressLength = response[1 + publicKeyLength];
			result['publicKey'] = response.slice(1, 1 + publicKeyLength).toString('hex');
			result['address'] = "0x" + response.slice(1 + publicKeyLength + 1, 1 + publicKeyLength + 1 + addressLength).toString('ascii');
			if (boolChaincode) {
				result['chainCode'] = response.slice(1 + publicKeyLength + 1 + addressLength, 1 + publicKeyLength + 1 + addressLength + 32).toString('hex');
			}
			callback(result);
		}
	};
	this.comm.exchange(buffer.toString('hex'), localCallback);
};

// callback is function(response, error)
LedgerEth.prototype.signTransaction = function (path, rawTxHex, callback) {
	var splitPath = LedgerEth.splitPath(path);
	var offset = 0;
	var rawTx = new Buffer(rawTxHex, 'hex');
	var apdus = [];
	while (offset != rawTx.length) {
		var maxChunkSize = offset == 0 ? 150 - 1 - splitPath.length * 4 : 150;
		var chunkSize = offset + maxChunkSize > rawTx.length ? rawTx.length - offset : maxChunkSize;
		var buffer = new Buffer(offset == 0 ? 5 + 1 + splitPath.length * 4 + chunkSize : 5 + chunkSize);
		buffer[0] = 0xe0;
		buffer[1] = 0x04;
		buffer[2] = offset == 0 ? 0x00 : 0x80;
		buffer[3] = 0x00;
		buffer[4] = offset == 0 ? 1 + splitPath.length * 4 + chunkSize : chunkSize;
		if (offset == 0) {
			buffer[5] = splitPath.length;
			splitPath.forEach(function (element, index) {
				buffer.writeUInt32BE(element, 6 + 4 * index);
			});
			rawTx.copy(buffer, 6 + 4 * splitPath.length, offset, offset + chunkSize);
		} else {
			rawTx.copy(buffer, 5, offset, offset + chunkSize);
		}
		apdus.push(buffer.toString('hex'));
		offset += chunkSize;
	}
	var self = this;
	var localCallback = function localCallback(response, error) {
		if (typeof error != "undefined") {
			callback(undefined, error);
		} else {
			response = new Buffer(response, 'hex');
			var sw = response.readUInt16BE(response.length - 2);
			if (sw != 0x9000) {
				callback(undefined, "Invalid status " + sw.toString(16) + ". Check to make sure contract data is on?");
				return;
			}
			if (apdus.length == 0) {
				var result = {};
				result['v'] = response.slice(0, 1).toString('hex');
				result['r'] = response.slice(1, 1 + 32).toString('hex');
				result['s'] = response.slice(1 + 32, 1 + 32 + 32).toString('hex');
				callback(result);
			} else {
				self.comm.exchange(apdus.shift(), localCallback);
			}
		}
	};
	self.comm.exchange(apdus.shift(), localCallback);
};

// callback is function(response, error)
LedgerEth.prototype.getAppConfiguration = function (callback) {
	var buffer = new Buffer(5);
	buffer[0] = 0xe0;
	buffer[1] = 0x06;
	buffer[2] = 0x00;
	buffer[3] = 0x00;
	buffer[4] = 0x00;
	var localCallback = function localCallback(response, error) {
		if (typeof error != "undefined") {
			callback(undefined, error);
		} else {
			response = new Buffer(response, 'hex');
			var result = {};
			var sw = response.readUInt16BE(response.length - 2);
			if (sw != 0x9000) {
				callback(undefined, "Invalid status " + sw.toString(16) + ". Check to make sure contract data is on?");
				return;
			}
			result['arbitraryDataEnabled'] = response[0] & 0x01;
			result['version'] = "" + response[1] + '.' + response[2] + '.' + response[3];
			callback(result);
		}
	};
	this.comm.exchange(buffer.toString('hex'), localCallback);
};

module.exports = LedgerEth;

}).call(this,require("buffer").Buffer)
},{"buffer":174}],77:[function(require,module,exports){
(function (Buffer){
/********************************************************************************
*   Ledger Communication toolkit
*   (c) 2016 Ledger
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License.
********************************************************************************/

'use strict';

var Ledger3 = function Ledger3(scrambleKey, timeoutSeconds) {
	this.scrambleKey = new Buffer(scrambleKey, 'ascii');
	this.timeoutSeconds = timeoutSeconds;
};

Ledger3.wrapApdu = function (apdu, key) {
	var result = new Buffer(apdu.length);
	for (var i = 0; i < apdu.length; i++) {
		result[i] = apdu[i] ^ key[i % key.length];
	}
	return result;
};

// Convert from normal to web-safe, strip trailing "="s
Ledger3.webSafe64 = function (base64) {
	return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

// Convert from web-safe to normal, add trailing "="s
Ledger3.normal64 = function (base64) {
	return base64.replace(/\-/g, '+').replace(/_/g, '/') + '=='.substring(0, 3 * base64.length % 4);
};

Ledger3.prototype.u2fCallback = function (response, callback) {
	if (typeof response['signatureData'] != "undefined") {
		var data = new Buffer(Ledger3.normal64(response['signatureData']), 'base64');
		callback(data.toString('hex', 5));
	} else {
		callback(undefined, response);
	}
};

// callback is function(response, error)
Ledger3.prototype.exchange = function (apduHex, callback) {
	var apdu = new Buffer(apduHex, 'hex');
	var keyHandle = Ledger3.wrapApdu(apdu, this.scrambleKey);
	var challenge = new Buffer("0000000000000000000000000000000000000000000000000000000000000000", 'hex');
	var key = {};
	key['version'] = 'U2F_V2';
	key['keyHandle'] = Ledger3.webSafe64(keyHandle.toString('base64'));
	var self = this;
	var localCallback = function localCallback(result) {
		self.u2fCallback(result, callback);
	};
	u2f.sign(location.origin, Ledger3.webSafe64(challenge.toString('base64')), [key], localCallback, this.timeoutSeconds);
};

module.exports = Ledger3;

}).call(this,require("buffer").Buffer)
},{"buffer":174}],78:[function(require,module,exports){
'use strict';

/**
 * (C) 2017 SatoshiLabs
 *
 * GPLv3
 */

if (!Array.isArray) {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

var HD_HARDENED = 0x80000000;

'use strict';

var chrome = window.chrome;
var IS_CHROME_APP = chrome && chrome.app && chrome.app.window;

var ERR_TIMED_OUT = 'Loading timed out';
var ERR_WINDOW_CLOSED = 'Window closed';
var ERR_WINDOW_BLOCKED = 'Window blocked';
var ERR_ALREADY_WAITING = 'Already waiting for a response';
var ERR_CHROME_NOT_CONNECTED = 'Internal Chrome popup is not responding.';

var DISABLE_LOGIN_BUTTONS = window.TREZOR_DISABLE_LOGIN_BUTTONS || false;
var CHROME_URL = window.TREZOR_CHROME_URL || './chrome/wrapper.html';
var POPUP_URL = window.TREZOR_POPUP_URL || 'https://connect.trezor.io/1/popup/popup.html';
var POPUP_PATH = window.TREZOR_POPUP_PATH || 'https://connect.trezor.io/1/';
var POPUP_ORIGIN = window.TREZOR_POPUP_ORIGIN || 'https://connect.trezor.io';

var INSIGHT_URLS = window.TREZOR_INSIGHT_URLS || ['https://bitcore1.trezor.io/api/', 'https://bitcore3.trezor.io/api/'];

var POPUP_INIT_TIMEOUT = 15000;

/**
  * Public API.
  */
function TrezorConnect() {

    var manager = new PopupManager();

    /**
      * Popup errors.
      */
    this.ERR_TIMED_OUT = ERR_TIMED_OUT;
    this.ERR_WINDOW_CLOSED = ERR_WINDOW_CLOSED;
    this.ERR_WINDOW_BLOCKED = ERR_WINDOW_BLOCKED;
    this.ERR_ALREADY_WAITING = ERR_ALREADY_WAITING;
    this.ERR_CHROME_NOT_CONNECTED = ERR_CHROME_NOT_CONNECTED;

    /**
      * Open the popup for further communication. All API functions open the
      * popup automatically, but if you need to generate some parameters
      * asynchronously, use `open` first to avoid popup blockers.
      * @param {function(?Error)} callback
      */
    this.open = function (callback) {
        var onchannel = function onchannel(result) {
            if (result instanceof Error) {
                callback(result);
            } else {
                callback();
            }
        };
        manager.waitForChannel(onchannel);
    };

    /**
      * Close the opened popup, if any.
      */
    this.close = function () {
        manager.close();
    };

    /**
      * Enable or disable closing the opened popup after a successful call.
      * @param {boolean} value
      */
    this.closeAfterSuccess = function (value) {
        manager.closeAfterSuccess = value;
    };

    /**
      * Enable or disable closing the opened popup after a failed call.
      * @param {boolean} value
      */
    this.closeAfterFailure = function (value) {
        manager.closeAfterFailure = value;
    };

    /**
      * @typedef XPubKeyResult
      * @param {boolean} success
      * @param {?string} error
      * @param {?string} xpubkey  serialized extended public key
      * @param {?string} path     BIP32 serializd path of the key
      */

    /**
      * Load BIP32 extended public key by path.
      *
      * Path can be specified either in the string form ("m/44'/1/0") or as
      * raw integer array. In case you omit the path, user is asked to select
      * a BIP32 account to export, and the result contains m/44'/0'/x' node
      * of the account.
      *
      * @param {?(string|array<number>)} path
      * @param {function(XPubKeyResult)} callback
      * @param {?(string|array<number>)} requiredFirmware
      */
    this.getXPubKey = function (path, callback, requiredFirmware) {
        if (typeof path === 'string') {
            path = parseHDPath(path);
        }
        manager.sendWithChannel({
            type: 'xpubkey',
            path: path,
            requiredFirmware: requiredFirmware
        }, callback);
    };

    this.getFreshAddress = function (callback, requiredFirmware) {
        var wrapperCallback = function wrapperCallback(result) {
            if (result.success) {
                callback({ success: true, address: result.freshAddress });
            } else {
                callback(result);
            }
        };

        manager.sendWithChannel({
            type: 'accountinfo'
        }, wrapperCallback);
    };

    this.getAccountInfo = function (input, callback, requiredFirmware) {
        try {
            var description = parseAccountInfoInput(input);
            manager.sendWithChannel({
                type: 'accountinfo',
                description: description,
                requiredFirmware: requiredFirmware
            }, callback);
        } catch (e) {
            callback({ success: false, error: e });
        }
    };

    this.getBalance = function (callback, requiredFirmware) {
        manager.sendWithChannel({
            type: 'accountinfo',
            requiredFirmware: requiredFirmware
        }, callback);
    };

    /**
      * @typedef SignTxResult
      * @param {boolean} success
      * @param {?string} error
      * @param {?string} serialized_tx      serialized tx, in hex, including signatures
      * @param {?array<string>} signatures  array of input signatures, in hex
      */

    /**
      * Sign a transaction in the device and return both serialized
      * transaction and the signatures.
      *
      * @param {array<TxInputType>} inputs
      * @param {array<TxOutputType>} outputs
      * @param {function(SignTxResult)} callback
      * @param {?(string|array<number>)} requiredFirmware
      *
      * @see https://github.com/trezor/trezor-common/blob/master/protob/types.proto
      */
    this.signTx = function (inputs, outputs, callback, requiredFirmware) {
        manager.sendWithChannel({
            type: 'signtx',
            inputs: inputs,
            outputs: outputs,
            requiredFirmware: requiredFirmware
        }, callback);
    };

    this.signEthereumTx = function (address_n, nonce, gas_price, gas_limit, to, value, data, chain_id, callback, requiredFirmware) {
        if (requiredFirmware == null) {
            requiredFirmware = '1.4.0'; // first firmware that supports ethereum
        }
        if (typeof address_n === 'string') {
            address_n = parseHDPath(address_n);
        }
        manager.sendWithChannel({
            type: 'signethtx',
            address_n: address_n,
            nonce: nonce,
            gas_price: gas_price,
            gas_limit: gas_limit,
            to: to,
            value: value,
            data: data,
            chain_id: chain_id,
            requiredFirmware: requiredFirmware
        }, callback);
    };

    /**
      * @typedef TxRecipient
      * @param {number} amount   the amount to send, in satoshis
      * @param {string} address  the address of the recipient
      */

    /**
      * Compose a transaction by doing BIP-0044 discovery, letting the user
      * select an account, and picking UTXO by internal preferences.
      * Transaction is then signed and returned in the same format as
      * `signTx`.  Only supports BIP-0044 accounts (single-signature).
      *
      * @param {array<TxRecipient>} recipients
      * @param {function(SignTxResult)} callback
      * @param {?(string|array<number>)} requiredFirmware
      */
    this.composeAndSignTx = function (recipients, callback, requiredFirmware) {
        manager.sendWithChannel({
            type: 'composetx',
            recipients: recipients,
            requiredFirmware: requiredFirmware
        }, callback);
    };

    /**
      * @typedef RequestLoginResult
      * @param {boolean} success
      * @param {?string} error
      * @param {?string} public_key  public key used for signing, in hex
      * @param {?string} signature   signature, in hex
      */

    /**
      * Sign a login challenge for active origin.
      *
      * @param {?string} hosticon
      * @param {string} challenge_hidden
      * @param {string} challenge_visual
      * @param {string|function(RequestLoginResult)} callback
      * @param {?(string|array<number>)} requiredFirmware
      *
      * @see https://github.com/trezor/trezor-common/blob/master/protob/messages.proto
      */
    this.requestLogin = function (hosticon, challenge_hidden, challenge_visual, callback, requiredFirmware) {
        if (typeof callback === 'string') {
            // special case for a login through <trezor:login> button.
            // `callback` is name of global var
            callback = window[callback];
        }
        if (!callback) {
            throw new TypeError('TrezorConnect: login callback not found');
        }
        manager.sendWithChannel({
            type: 'login',
            icon: hosticon,
            challenge_hidden: challenge_hidden,
            challenge_visual: challenge_visual,
            requiredFirmware: requiredFirmware
        }, callback);
    };

    /**
      * @typedef SignMessageResult
      * @param {boolean} success
      * @param {?string} error
      * @param {?string} address address (in base58check)
      * @param {?string} signature   signature, in base64
      */

    /**
      * Sign a message
      *
      * @param {string|array} path  
      * @param {string} message to sign (ascii)
      * @param {string|function(SignMessageResult)} callback
      * @param {?string} opt_coin - (optional) name of coin (default Bitcoin)
      * @param {?(string|array<number>)} requiredFirmware
      *
      */
    this.signMessage = function (path, message, callback, opt_coin, requiredFirmware) {
        if (typeof path === 'string') {
            path = parseHDPath(path);
        }
        if (!opt_coin) {
            opt_coin = 'Bitcoin';
        }
        if (!callback) {
            throw new TypeError('TrezorConnect: callback not found');
        }
        manager.sendWithChannel({
            type: 'signmsg',
            path: path,
            message: message,
            coin: { coin_name: opt_coin },
            requiredFirmware: requiredFirmware
        }, callback);
    };

    /**
      * Verify message
      *
      * @param {string} address
      * @param {string} signature (base64)
      * @param {string} message (string)
      * @param {string|function()} callback
      * @param {?string} opt_coin - (optional) name of coin (default Bitcoin)
      * @param {?(string|array<number>)} requiredFirmware
      *
      */
    this.verifyMessage = function (address, signature, message, callback, opt_coin, requiredFirmware) {
        if (!opt_coin) {
            opt_coin = 'Bitcoin';
        }
        if (!callback) {
            throw new TypeError('TrezorConnect: callback not found');
        }
        manager.sendWithChannel({
            type: 'verifymsg',
            address: address,
            signature: signature,
            message: message,
            coin: { coin_name: opt_coin },
            requiredFirmware: requiredFirmware
        }, callback);
    };

    /**
      * Symmetric key-value encryption
      *
      * @param {string|array} path
      * @param {string} key to show on device display
      * @param {string} value hexadecimal value, length a multiple of 16 bytes
      * @param {boolean} encrypt / decrypt direction
      * @param {boolean} ask_on_encrypt (should user confirm on encrypt?)
      * @param {boolean} ask_on_decrypt (should user confirm on decrypt?)
      * @param {string|function()} callback
      * @param {?(string|array<number>)} requiredFirmware
      *
      */
    this.cipherKeyValue = function (path, key, value, encrypt, ask_on_encrypt, ask_on_decrypt, callback, requiredFirmware) {
        if (typeof path === 'string') {
            path = parseHDPath(path);
        }
        if (typeof value !== 'string') {
            throw new TypeError('TrezorConnect: Value must be a string');
        }
        if (!/^[0-9A-Fa-f]*$/.test(value)) {
            throw new TypeError('TrezorConnect: Value must be hexadecimal');
        }
        if (value.length % 32 !== 0) {
            // 1 byte == 2 hex strings
            throw new TypeError('TrezorConnect: Value length must be multiple of 16 bytes');
        }
        if (!callback) {
            throw new TypeError('TrezorConnect: callback not found');
        }
        manager.sendWithChannel({
            type: 'cipherkeyvalue',
            path: path,
            key: key,
            value: value,
            encrypt: !!encrypt,
            ask_on_encrypt: !!ask_on_encrypt,
            ask_on_decrypt: !!ask_on_decrypt,
            requiredFirmware: requiredFirmware
        }, callback);
    };

    this.pushTransaction = function (rawTx, callback) {
        if (!/^[0-9A-Fa-f]*$/.test(rawTx)) {
            throw new TypeError('TrezorConnect: Transaction must be hexadecimal');
        }
        if (!callback) {
            throw new TypeError('TrezorConnect: callback not found');
        }

        var tryUrl = function tryUrl(i) {
            var insight_url = INSIGHT_URLS[i];
            var xhr = new XMLHttpRequest();
            var method = 'POST';
            var url = insight_url + '/tx/send';
            var data = {
                rawtx: rawTx
            };

            xhr.open(method, url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        var txid = JSON.parse(xhr.responseText).txid;
                        callback({ success: true, txid: txid });
                    } else {
                        if (i === INSIGHT_URLS.length - 1) {
                            callback({ error: new Error(xhr.responseText) });
                        } else {
                            tryUrl(i + 1);
                        }
                    }
                }
            };
            xhr.send(JSON.stringify(data));
        };

        tryUrl(0);
    };

    var LOGIN_CSS = '<style>@import url("@connect_path@/login_buttons.css")</style>';

    var LOGIN_ONCLICK = 'TrezorConnect.requestLogin(' + "'@hosticon@','@challenge_hidden@','@challenge_visual@','@callback@'" + ')';

    var LOGIN_HTML = '<div id="trezorconnect-wrapper">' + '  <a id="trezorconnect-button" onclick="' + LOGIN_ONCLICK + '">' + '    <span id="trezorconnect-icon"></span>' + '    <span id="trezorconnect-text">@text@</span>' + '  </a>' + '  <span id="trezorconnect-info">' + '    <a id="trezorconnect-infolink" href="https://www.buytrezor.com/"' + '       target="_blank">What is TREZOR?</a>' + '  </span>' + '</div>';

    /**
      * Find <trezor:login> elements and replace them with login buttons.
      * It's not required to use these special elements, feel free to call
      * `TrezorConnect.requestLogin` directly.
      */
    this.renderLoginButtons = function () {
        var elements = document.getElementsByTagName('trezor:login');

        for (var i = 0; i < elements.length; i++) {
            var e = elements[i];
            var text = e.getAttribute('text') || 'Sign in with TREZOR';
            var callback = e.getAttribute('callback') || '';
            var hosticon = e.getAttribute('icon') || '';
            var challenge_hidden = e.getAttribute('challenge_hidden') || '';
            var challenge_visual = e.getAttribute('challenge_visual') || '';

            // it's not valid to put markup into attributes, so let users
            // supply a raw text and make TREZOR bold
            text = text.replace('TREZOR', '<strong>TREZOR</strong>');
            e.outerHTML = (LOGIN_CSS + LOGIN_HTML).replace('@text@', text).replace('@callback@', callback).replace('@hosticon@', hosticon).replace('@challenge_hidden@', challenge_hidden).replace('@challenge_visual@', challenge_visual).replace('@connect_path@', POPUP_PATH);
        }
    };
}

/*
  * `getXPubKey()`
  */

function parseHDPath(string) {
    return string.toLowerCase().split('/').filter(function (p) {
        return p !== 'm';
    }).map(function (p) {
        var hardened = false;
        if (p[p.length - 1] === "'") {
            hardened = true;
            p = p.substr(0, p.length - 1);
        }
        if (isNaN(p)) {
            throw new Error('Not a valid path.');
        }
        var n = parseInt(p);
        if (hardened) {
            // hardened index
            n = (n | 0x80000000) >>> 0;
        }
        return n;
    });
}

function getIdFromPath(path) {
    if (path.length !== 3) {
        throw new Error();
    }
    if (path[0] >>> 0 !== (44 | HD_HARDENED) >>> 0) {
        throw new Error();
    }
    if (path[1] >>> 0 !== (0 | HD_HARDENED) >>> 0) {
        throw new Error();
    }
    return (path[2] & ~HD_HARDENED) >>> 0;
}

// parses first argument from getAccountInfo
function parseAccountInfoInput(input) {
    if (input == null) {
        return null;
    }

    if (typeof input === 'string') {
        if (input.substr(0, 4) === 'xpub') {
            return input;
        }
        if (isNaN(input)) {
            var parsedPath = parseHDPath(input);
            return getIdFromPath(parsedPath);
        } else {
            return parseInt(input);
        }
    } else if (Array.isArray(input)) {
        return getIdFromPath(input);
    } else if (typeof input === 'number') {
        return input;
    }
    throw new Error('Unknown input format.');
}

/*
  * Popup management
  */

function ChromePopup(url, name, width, height) {
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;
    var opts = {
        id: name,
        innerBounds: {
            width: width,
            height: height,
            left: left,
            top: top
        }
    };

    var closed = function () {
        if (this.onclose) {
            this.onclose(false); // never report as blocked
        }
    }.bind(this);

    var opened = function (w) {
        this.window = w;
        this.window.onClosed.addListener(closed);
    }.bind(this);

    chrome.app.window.create(url, opts, opened);

    this.name = name;
    this.window = null;
    this.onclose = null;
}

function ChromeChannel(popup, waiting) {
    var port = null;

    var respond = function respond(data) {
        if (waiting) {
            var w = waiting;
            waiting = null;
            w(data);
        }
    };

    var setup = function setup(p) {
        if (p.name === popup.name) {
            port = p;
            port.onMessage.addListener(respond);
            chrome.runtime.onConnect.removeListener(setup);
        }
    };

    chrome.runtime.onConnect.addListener(setup);

    this.respond = respond;

    this.close = function () {
        chrome.runtime.onConnect.removeListener(setup);
        port.onMessage.removeListener(respond);
        port.disconnect();
        port = null;
    };

    this.send = function (value, callback) {
        if (waiting === null) {
            waiting = callback;

            if (port) {
                port.postMessage(value);
            } else {
                throw new Error(ERR_CHROME_NOT_CONNECTED);
            }
        } else {
            throw new Error(ERR_ALREADY_WAITING);
        }
    };
}

function Popup(url, origin, name, width, height) {
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;
    var opts = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top + ',menubar=no' + ',toolbar=no' + ',location=no' + ',personalbar=no' + ',status=no';
    var w = window.open(url, name, opts);

    var interval;
    var blocked = w.closed;
    var iterate = function () {
        if (w.closed) {
            clearInterval(interval);
            if (this.onclose) {
                this.onclose(blocked);
            }
        }
    }.bind(this);
    interval = setInterval(iterate, 100);

    this.window = w;
    this.origin = origin;
    this.onclose = null;
}

function Channel(popup, waiting) {

    var respond = function respond(data) {
        if (waiting) {
            var w = waiting;
            waiting = null;
            w(data);
        }
    };

    var receive = function receive(event) {
        if (event.source === popup.window && event.origin === popup.origin) {
            respond(event.data);
        }
    };

    window.addEventListener('message', receive);

    this.respond = respond;

    this.close = function () {
        window.removeEventListener('message', receive);
    };

    this.send = function (value, callback) {
        if (waiting === null) {
            waiting = callback;
            popup.window.postMessage(value, popup.origin);
        } else {
            throw new Error(ERR_ALREADY_WAITING);
        }
    };
}

function ConnectedChannel(p) {

    var ready = function () {
        clearTimeout(this.timeout);
        this.popup.onclose = null;
        this.ready = true;
        this.onready();
    }.bind(this);

    var closed = function (blocked) {
        clearTimeout(this.timeout);
        this.channel.close();
        if (blocked) {
            this.onerror(new Error(ERR_WINDOW_BLOCKED));
        } else {
            this.onerror(new Error(ERR_WINDOW_CLOSED));
        }
    }.bind(this);

    var timedout = function () {
        this.popup.onclose = null;
        if (this.popup.window) {
            this.popup.window.close();
        }
        this.channel.close();
        this.onerror(new Error(ERR_TIMED_OUT));
    }.bind(this);

    if (IS_CHROME_APP) {
        this.popup = new ChromePopup(p.chromeUrl, p.name, p.width, p.height);
        this.channel = new ChromeChannel(this.popup, ready);
    } else {
        this.popup = new Popup(p.url, p.origin, p.name, p.width, p.height);
        this.channel = new Channel(this.popup, ready);
    }

    this.timeout = setTimeout(timedout, POPUP_INIT_TIMEOUT);

    this.popup.onclose = closed;

    this.ready = false;
    this.onready = null;
    this.onerror = null;
}

function PopupManager() {
    var cc = null;

    var closed = function closed() {
        cc.channel.respond(new Error(ERR_WINDOW_CLOSED));
        cc.channel.close();
        cc = null;
    };

    var open = function (callback) {
        cc = new ConnectedChannel({
            name: 'trezor-connect',
            width: 600,
            height: 500,
            origin: POPUP_ORIGIN,
            path: POPUP_PATH,
            url: POPUP_URL,
            chromeUrl: CHROME_URL
        });
        cc.onready = function () {
            cc.popup.onclose = closed;
            callback(cc.channel);
        };
        cc.onerror = function (error) {
            cc = null;
            callback(error);
        };
    }.bind(this);

    this.closeAfterSuccess = true;
    this.closeAfterFailure = true;

    this.close = function () {
        if (cc && cc.popup.window) {
            cc.popup.window.close();
        }
    };

    this.waitForChannel = function (callback) {
        if (cc) {
            if (cc.ready) {
                callback(cc.channel);
            } else {
                callback(new Error(ERR_ALREADY_WAITING));
            }
        } else {
            try {
                open(callback);
            } catch (e) {
                callback(new Error(ERR_WINDOW_BLOCKED));
            }
        }
    };

    this.sendWithChannel = function (message, callback) {

        var respond = function (response) {
            var succ = response.success && this.closeAfterSuccess;
            var fail = !response.success && this.closeAfterFailure;
            if (succ || fail) {
                this.close();
            }
            callback(response);
        }.bind(this);

        var onresponse = function onresponse(response) {
            if (response instanceof Error) {
                var error = response;
                respond({ success: false, error: error.message });
            } else {
                respond(response);
            }
        };

        var onchannel = function onchannel(channel) {
            if (channel instanceof Error) {
                var error = channel;
                respond({ success: false, error: error.message });
            } else {
                channel.send(message, onresponse);
            }
        };

        this.waitForChannel(onchannel);
    };
}

var connect = new TrezorConnect();

if (!IS_CHROME_APP && !DISABLE_LOGIN_BUTTONS) {
    connect.renderLoginButtons();
}

module.exports = { TrezorConnect: connect };

},{}],79:[function(require,module,exports){
//Copyright 2014-2015 Google Inc. All rights reserved.

//Use of this source code is governed by a BSD-style
//license that can be found in the LICENSE file or at
//https://developers.google.com/open-source/licenses/bsd

/**
 * @fileoverview The U2F api.
 */
'use strict';

/**
 * Namespace for the U2F api.
 * @type {Object}
 */

var u2f = u2f || {};

/**
 * FIDO U2F Javascript API Version
 * @number
 */
var js_api_version;

/**
 * The U2F extension id
 * @const {string}
 */
// The Chrome packaged app extension ID.
// Uncomment this if you want to deploy a server instance that uses
// the package Chrome app and does not require installing the U2F Chrome extension.
u2f.EXTENSION_ID = 'kmendfapggjehodndflmmgagdbamhnfd';
// The U2F Chrome extension ID.
// Uncomment this if you want to deploy a server instance that uses
// the U2F Chrome extension to authenticate.
// u2f.EXTENSION_ID = 'pfboblefjcgdjicmnffhdgionmgcdmne';


/**
 * Message types for messsages to/from the extension
 * @const
 * @enum {string}
 */
u2f.MessageTypes = {
  'U2F_REGISTER_REQUEST': 'u2f_register_request',
  'U2F_REGISTER_RESPONSE': 'u2f_register_response',
  'U2F_SIGN_REQUEST': 'u2f_sign_request',
  'U2F_SIGN_RESPONSE': 'u2f_sign_response',
  'U2F_GET_API_VERSION_REQUEST': 'u2f_get_api_version_request',
  'U2F_GET_API_VERSION_RESPONSE': 'u2f_get_api_version_response'
};

/**
 * Response status codes
 * @const
 * @enum {number}
 */
u2f.ErrorCodes = {
  'OK': 0,
  'OTHER_ERROR': 1,
  'BAD_REQUEST': 2,
  'CONFIGURATION_UNSUPPORTED': 3,
  'DEVICE_INELIGIBLE': 4,
  'TIMEOUT': 5
};

u2f.getErrorByCode = function (code) {
  for (var prop in u2f.ErrorCodes) {
    if (u2f.ErrorCodes.hasOwnProperty(prop)) {
      if (u2f.ErrorCodes[prop] === code) return prop;
    }
  }
};

/**
 * A message for registration requests
 * @typedef {{
 *   type: u2f.MessageTypes,
 *   appId: ?string,
 *   timeoutSeconds: ?number,
 *   requestId: ?number
 * }}
 */
u2f.U2fRequest;

/**
 * A message for registration responses
 * @typedef {{
 *   type: u2f.MessageTypes,
 *   responseData: (u2f.Error | u2f.RegisterResponse | u2f.SignResponse),
 *   requestId: ?number
 * }}
 */
u2f.U2fResponse;

/**
 * An error object for responses
 * @typedef {{
 *   errorCode: u2f.ErrorCodes,
 *   errorMessage: ?string
 * }}
 */
u2f.Error;

/**
 * Data object for a single sign request.
 * @typedef {enum {BLUETOOTH_RADIO, BLUETOOTH_LOW_ENERGY, USB, NFC}}
 */
u2f.Transport;

/**
 * Data object for a single sign request.
 * @typedef {Array<u2f.Transport>}
 */
u2f.Transports;

/**
 * Data object for a single sign request.
 * @typedef {{
 *   version: string,
 *   challenge: string,
 *   keyHandle: string,
 *   appId: string
 * }}
 */
u2f.SignRequest;

/**
 * Data object for a sign response.
 * @typedef {{
 *   keyHandle: string,
 *   signatureData: string,
 *   clientData: string
 * }}
 */
u2f.SignResponse;

/**
 * Data object for a registration request.
 * @typedef {{
 *   version: string,
 *   challenge: string
 * }}
 */
u2f.RegisterRequest;

/**
 * Data object for a registration response.
 * @typedef {{
 *   version: string,
 *   keyHandle: string,
 *   transports: Transports,
 *   appId: string
 * }}
 */
u2f.RegisterResponse;

/**
 * Data object for a registered key.
 * @typedef {{
 *   version: string,
 *   keyHandle: string,
 *   transports: ?Transports,
 *   appId: ?string
 * }}
 */
u2f.RegisteredKey;

/**
 * Data object for a get API register response.
 * @typedef {{
 *   js_api_version: number
 * }}
 */
u2f.GetJsApiVersionResponse;

//Low level MessagePort API support

/**
 * Sets up a MessagePort to the U2F extension using the
 * available mechanisms.
 * @param {function((MessagePort|u2f.WrappedChromeRuntimePort_))} callback
 */
u2f.getMessagePort = function (callback) {
  if (typeof chrome != 'undefined' && chrome.runtime) {
    // The actual message here does not matter, but we need to get a reply
    // for the callback to run. Thus, send an empty signature request
    // in order to get a failure response.
    var msg = {
      type: u2f.MessageTypes.U2F_SIGN_REQUEST,
      signRequests: []
    };
    chrome.runtime.sendMessage(u2f.EXTENSION_ID, msg, function () {
      if (!chrome.runtime.lastError) {
        // We are on a whitelisted origin and can talk directly
        // with the extension.
        u2f.getChromeRuntimePort_(callback);
      } else {
        // chrome.runtime was available, but we couldn't message
        // the extension directly, use iframe
        u2f.getIframePort_(callback);
      }
    });
  } else if (u2f.isAndroidChrome_()) {
    u2f.getAuthenticatorPort_(callback);
  } else if (u2f.isIosChrome_()) {
    u2f.getIosPort_(callback);
  } else {
    // chrome.runtime was not available at all, which is normal
    // when this origin doesn't have access to any extensions.
    u2f.getIframePort_(callback);
  }
};

/**
 * Detect chrome running on android based on the browser's useragent.
 * @private
 */
u2f.isAndroidChrome_ = function () {
  var userAgent = navigator.userAgent;
  return userAgent.indexOf('Chrome') != -1 && userAgent.indexOf('Android') != -1;
};

/**
 * Detect chrome running on iOS based on the browser's platform.
 * @private
 */
u2f.isIosChrome_ = function () {
  return $.inArray(navigator.platform, ["iPhone", "iPad", "iPod"]) > -1;
};

/**
 * Connects directly to the extension via chrome.runtime.connect.
 * @param {function(u2f.WrappedChromeRuntimePort_)} callback
 * @private
 */
u2f.getChromeRuntimePort_ = function (callback) {
  var port = chrome.runtime.connect(u2f.EXTENSION_ID, { 'includeTlsChannelId': true });
  setTimeout(function () {
    callback(new u2f.WrappedChromeRuntimePort_(port));
  }, 0);
};

/**
 * Return a 'port' abstraction to the Authenticator app.
 * @param {function(u2f.WrappedAuthenticatorPort_)} callback
 * @private
 */
u2f.getAuthenticatorPort_ = function (callback) {
  setTimeout(function () {
    callback(new u2f.WrappedAuthenticatorPort_());
  }, 0);
};

/**
 * Return a 'port' abstraction to the iOS client app.
 * @param {function(u2f.WrappedIosPort_)} callback
 * @private
 */
u2f.getIosPort_ = function (callback) {
  setTimeout(function () {
    callback(new u2f.WrappedIosPort_());
  }, 0);
};

/**
 * A wrapper for chrome.runtime.Port that is compatible with MessagePort.
 * @param {Port} port
 * @constructor
 * @private
 */
u2f.WrappedChromeRuntimePort_ = function (port) {
  this.port_ = port;
};

/**
 * Format and return a sign request compliant with the JS API version supported by the extension.
 * @param {Array<u2f.SignRequest>} signRequests
 * @param {number} timeoutSeconds
 * @param {number} reqId
 * @return {Object}
 */
u2f.formatSignRequest_ = function (appId, challenge, registeredKeys, timeoutSeconds, reqId) {
  if (js_api_version === undefined || js_api_version < 1.1) {
    // Adapt request to the 1.0 JS API
    var signRequests = [];
    for (var i = 0; i < registeredKeys.length; i++) {
      signRequests[i] = {
        version: registeredKeys[i].version,
        challenge: challenge,
        keyHandle: registeredKeys[i].keyHandle,
        appId: appId
      };
    }
    return {
      type: u2f.MessageTypes.U2F_SIGN_REQUEST,
      signRequests: signRequests,
      timeoutSeconds: timeoutSeconds,
      requestId: reqId
    };
  }
  // JS 1.1 API
  return {
    type: u2f.MessageTypes.U2F_SIGN_REQUEST,
    appId: appId,
    challenge: challenge,
    registeredKeys: registeredKeys,
    timeoutSeconds: timeoutSeconds,
    requestId: reqId
  };
};

/**
 * Format and return a register request compliant with the JS API version supported by the extension..
 * @param {Array<u2f.SignRequest>} signRequests
 * @param {Array<u2f.RegisterRequest>} signRequests
 * @param {number} timeoutSeconds
 * @param {number} reqId
 * @return {Object}
 */
u2f.formatRegisterRequest_ = function (appId, registeredKeys, registerRequests, timeoutSeconds, reqId) {
  if (js_api_version === undefined || js_api_version < 1.1) {
    // Adapt request to the 1.0 JS API
    for (var i = 0; i < registerRequests.length; i++) {
      registerRequests[i].appId = appId;
    }
    var signRequests = [];
    for (var i = 0; i < registeredKeys.length; i++) {
      signRequests[i] = {
        version: registeredKeys[i].version,
        challenge: registerRequests[0],
        keyHandle: registeredKeys[i].keyHandle,
        appId: appId
      };
    }
    return {
      type: u2f.MessageTypes.U2F_REGISTER_REQUEST,
      signRequests: signRequests,
      registerRequests: registerRequests,
      timeoutSeconds: timeoutSeconds,
      requestId: reqId
    };
  }
  // JS 1.1 API
  return {
    type: u2f.MessageTypes.U2F_REGISTER_REQUEST,
    appId: appId,
    registerRequests: registerRequests,
    registeredKeys: registeredKeys,
    timeoutSeconds: timeoutSeconds,
    requestId: reqId
  };
};

/**
 * Posts a message on the underlying channel.
 * @param {Object} message
 */
u2f.WrappedChromeRuntimePort_.prototype.postMessage = function (message) {
  this.port_.postMessage(message);
};

/**
 * Emulates the HTML 5 addEventListener interface. Works only for the
 * onmessage event, which is hooked up to the chrome.runtime.Port.onMessage.
 * @param {string} eventName
 * @param {function({data: Object})} handler
 */
u2f.WrappedChromeRuntimePort_.prototype.addEventListener = function (eventName, handler) {
  var name = eventName.toLowerCase();
  if (name == 'message' || name == 'onmessage') {
    this.port_.onMessage.addListener(function (message) {
      // Emulate a minimal MessageEvent object
      handler({ 'data': message });
    });
  } else {
    console.error('WrappedChromeRuntimePort only supports onMessage');
  }
};

/**
 * Wrap the Authenticator app with a MessagePort interface.
 * @constructor
 * @private
 */
u2f.WrappedAuthenticatorPort_ = function () {
  this.requestId_ = -1;
  this.requestObject_ = null;
};

/**
 * Launch the Authenticator intent.
 * @param {Object} message
 */
u2f.WrappedAuthenticatorPort_.prototype.postMessage = function (message) {
  var intentUrl = u2f.WrappedAuthenticatorPort_.INTENT_URL_BASE_ + ';S.request=' + encodeURIComponent(JSON.stringify(message)) + ';end';
  document.location = intentUrl;
};

/**
 * Tells what type of port this is.
 * @return {String} port type
 */
u2f.WrappedAuthenticatorPort_.prototype.getPortType = function () {
  return "WrappedAuthenticatorPort_";
};

/**
 * Emulates the HTML 5 addEventListener interface.
 * @param {string} eventName
 * @param {function({data: Object})} handler
 */
u2f.WrappedAuthenticatorPort_.prototype.addEventListener = function (eventName, handler) {
  var name = eventName.toLowerCase();
  if (name == 'message') {
    var self = this;
    /* Register a callback to that executes when
     * chrome injects the response. */
    window.addEventListener('message', self.onRequestUpdate_.bind(self, handler), false);
  } else {
    console.error('WrappedAuthenticatorPort only supports message');
  }
};

/**
 * Callback invoked  when a response is received from the Authenticator.
 * @param function({data: Object}) callback
 * @param {Object} message message Object
 */
u2f.WrappedAuthenticatorPort_.prototype.onRequestUpdate_ = function (callback, message) {
  var messageObject = JSON.parse(message.data);
  var intentUrl = messageObject['intentURL'];

  var errorCode = messageObject['errorCode'];
  var responseObject = null;
  if (messageObject.hasOwnProperty('data')) {
    responseObject = /** @type {Object} */JSON.parse(messageObject['data']);
  }

  callback({ 'data': responseObject });
};

/**
 * Base URL for intents to Authenticator.
 * @const
 * @private
 */
u2f.WrappedAuthenticatorPort_.INTENT_URL_BASE_ = 'intent:#Intent;action=com.google.android.apps.authenticator.AUTHENTICATE';

/**
 * Wrap the iOS client app with a MessagePort interface.
 * @constructor
 * @private
 */
u2f.WrappedIosPort_ = function () {};

/**
 * Launch the iOS client app request
 * @param {Object} message
 */
u2f.WrappedIosPort_.prototype.postMessage = function (message) {
  var str = JSON.stringify(message);
  var url = "u2f://auth?" + encodeURI(str);
  location.replace(url);
};

/**
 * Tells what type of port this is.
 * @return {String} port type
 */
u2f.WrappedIosPort_.prototype.getPortType = function () {
  return "WrappedIosPort_";
};

/**
 * Emulates the HTML 5 addEventListener interface.
 * @param {string} eventName
 * @param {function({data: Object})} handler
 */
u2f.WrappedIosPort_.prototype.addEventListener = function (eventName, handler) {
  var name = eventName.toLowerCase();
  if (name !== 'message') {
    console.error('WrappedIosPort only supports message');
  }
};

/**
 * Sets up an embedded trampoline iframe, sourced from the extension.
 * @param {function(MessagePort)} callback
 * @private
 */
u2f.getIframePort_ = function (callback) {
  // Create the iframe
  var iframeOrigin = 'chrome-extension://' + u2f.EXTENSION_ID;
  var iframe = document.createElement('iframe');
  iframe.src = iframeOrigin + '/u2f-comms.html';
  iframe.setAttribute('style', 'display:none');
  document.body.appendChild(iframe);

  var channel = new MessageChannel();
  var ready = function ready(message) {
    if (message.data == 'ready') {
      channel.port1.removeEventListener('message', ready);
      callback(channel.port1);
    } else {
      console.error('First event on iframe port was not "ready"');
    }
  };
  channel.port1.addEventListener('message', ready);
  channel.port1.start();

  iframe.addEventListener('load', function () {
    // Deliver the port to the iframe and initialize
    iframe.contentWindow.postMessage('init', iframeOrigin, [channel.port2]);
  });
};

//High-level JS API

/**
 * Default extension response timeout in seconds.
 * @const
 */
u2f.EXTENSION_TIMEOUT_SEC = 30;

/**
 * A singleton instance for a MessagePort to the extension.
 * @type {MessagePort|u2f.WrappedChromeRuntimePort_}
 * @private
 */
u2f.port_ = null;

/**
 * Callbacks waiting for a port
 * @type {Array<function((MessagePort|u2f.WrappedChromeRuntimePort_))>}
 * @private
 */
u2f.waitingForPort_ = [];

/**
 * A counter for requestIds.
 * @type {number}
 * @private
 */
u2f.reqCounter_ = 0;

/**
 * A map from requestIds to client callbacks
 * @type {Object.<number,(function((u2f.Error|u2f.RegisterResponse))
 *                       |function((u2f.Error|u2f.SignResponse)))>}
 * @private
 */
u2f.callbackMap_ = {};

/**
 * Creates or retrieves the MessagePort singleton to use.
 * @param {function((MessagePort|u2f.WrappedChromeRuntimePort_))} callback
 * @private
 */
u2f.getPortSingleton_ = function (callback) {
  if (u2f.port_) {
    callback(u2f.port_);
  } else {
    if (u2f.waitingForPort_.length == 0) {
      u2f.getMessagePort(function (port) {
        u2f.port_ = port;
        u2f.port_.addEventListener('message',
        /** @type {function(Event)} */u2f.responseHandler_);

        // Careful, here be async callbacks. Maybe.
        while (u2f.waitingForPort_.length) {
          u2f.waitingForPort_.shift()(u2f.port_);
        }
      });
    }
    u2f.waitingForPort_.push(callback);
  }
};

/**
 * Handles response messages from the extension.
 * @param {MessageEvent.<u2f.Response>} message
 * @private
 */
u2f.responseHandler_ = function (message) {
  var response = message.data;
  var reqId = response['requestId'];
  if (!reqId || !u2f.callbackMap_[reqId]) {
    console.error('Unknown or missing requestId in response.');
    return;
  }
  var cb = u2f.callbackMap_[reqId];
  delete u2f.callbackMap_[reqId];
  cb(response['responseData']);
};

/**
 * Dispatches an array of sign requests to available U2F tokens.
 * If the JS API version supported by the extension is unknown, it first sends a
 * message to the extension to find out the supported API version and then it sends
 * the sign request.
 * @param {string=} appId
 * @param {string=} challenge
 * @param {Array<u2f.RegisteredKey>} registeredKeys
 * @param {function((u2f.Error|u2f.SignResponse))} callback
 * @param {number=} opt_timeoutSeconds
 */
u2f.sign = function (appId, challenge, registeredKeys, callback, opt_timeoutSeconds) {
  if (js_api_version === undefined) {
    // Send a message to get the extension to JS API version, then send the actual sign request.
    u2f.getApiVersion(function (response) {
      js_api_version = response['js_api_version'] === undefined ? 0 : response['js_api_version'];
      console.log("Extension JS API Version: ", js_api_version);
      u2f.sendSignRequest(appId, challenge, registeredKeys, callback, opt_timeoutSeconds);
    });
  } else {
    // We know the JS API version. Send the actual sign request in the supported API version.
    u2f.sendSignRequest(appId, challenge, registeredKeys, callback, opt_timeoutSeconds);
  }
};

/**
 * Dispatches an array of sign requests to available U2F tokens.
 * @param {string=} appId
 * @param {string=} challenge
 * @param {Array<u2f.RegisteredKey>} registeredKeys
 * @param {function((u2f.Error|u2f.SignResponse))} callback
 * @param {number=} opt_timeoutSeconds
 */
u2f.sendSignRequest = function (appId, challenge, registeredKeys, callback, opt_timeoutSeconds) {
  u2f.getPortSingleton_(function (port) {
    var reqId = ++u2f.reqCounter_;
    u2f.callbackMap_[reqId] = callback;
    var timeoutSeconds = typeof opt_timeoutSeconds !== 'undefined' ? opt_timeoutSeconds : u2f.EXTENSION_TIMEOUT_SEC;
    var req = u2f.formatSignRequest_(appId, challenge, registeredKeys, timeoutSeconds, reqId);
    port.postMessage(req);
  });
};

/**
 * Dispatches register requests to available U2F tokens. An array of sign
 * requests identifies already registered tokens.
 * If the JS API version supported by the extension is unknown, it first sends a
 * message to the extension to find out the supported API version and then it sends
 * the register request.
 * @param {string=} appId
 * @param {Array<u2f.RegisterRequest>} registerRequests
 * @param {Array<u2f.RegisteredKey>} registeredKeys
 * @param {function((u2f.Error|u2f.RegisterResponse))} callback
 * @param {number=} opt_timeoutSeconds
 */
u2f.register = function (appId, registerRequests, registeredKeys, callback, opt_timeoutSeconds) {
  if (js_api_version === undefined) {
    // Send a message to get the extension to JS API version, then send the actual register request.
    u2f.getApiVersion(function (response) {
      js_api_version = response['js_api_version'] === undefined ? 0 : response['js_api_version'];
      console.log("Extension JS API Version: ", js_api_version);
      u2f.sendRegisterRequest(appId, registerRequests, registeredKeys, callback, opt_timeoutSeconds);
    });
  } else {
    // We know the JS API version. Send the actual register request in the supported API version.
    u2f.sendRegisterRequest(appId, registerRequests, registeredKeys, callback, opt_timeoutSeconds);
  }
};

/**
 * Dispatches register requests to available U2F tokens. An array of sign
 * requests identifies already registered tokens.
 * @param {string=} appId
 * @param {Array<u2f.RegisterRequest>} registerRequests
 * @param {Array<u2f.RegisteredKey>} registeredKeys
 * @param {function((u2f.Error|u2f.RegisterResponse))} callback
 * @param {number=} opt_timeoutSeconds
 */
u2f.sendRegisterRequest = function (appId, registerRequests, registeredKeys, callback, opt_timeoutSeconds) {
  u2f.getPortSingleton_(function (port) {
    var reqId = ++u2f.reqCounter_;
    u2f.callbackMap_[reqId] = callback;
    var timeoutSeconds = typeof opt_timeoutSeconds !== 'undefined' ? opt_timeoutSeconds : u2f.EXTENSION_TIMEOUT_SEC;
    var req = u2f.formatRegisterRequest_(appId, registeredKeys, registerRequests, timeoutSeconds, reqId);
    port.postMessage(req);
  });
};

/**
 * Dispatches a message to the extension to find out the supported
 * JS API version.
 * If the user is on a mobile phone and is thus using Google Authenticator instead
 * of the Chrome extension, don't send the request and simply return 0.
 * @param {function((u2f.Error|u2f.GetJsApiVersionResponse))} callback
 * @param {number=} opt_timeoutSeconds
 */
u2f.getApiVersion = function (callback, opt_timeoutSeconds) {
  u2f.getPortSingleton_(function (port) {
    // If we are using Android Google Authenticator or iOS client app,
    // do not fire an intent to ask which JS API version to use.
    if (port.getPortType) {
      var apiVersion;
      switch (port.getPortType()) {
        case 'WrappedIosPort_':
        case 'WrappedAuthenticatorPort_':
          apiVersion = 1.1;
          break;

        default:
          apiVersion = 0;
          break;
      }
      callback({ 'js_api_version': apiVersion });
      return;
    }
    var reqId = ++u2f.reqCounter_;
    u2f.callbackMap_[reqId] = callback;
    var req = {
      type: u2f.MessageTypes.U2F_GET_API_VERSION_REQUEST,
      timeoutSeconds: typeof opt_timeoutSeconds !== 'undefined' ? opt_timeoutSeconds : u2f.EXTENSION_TIMEOUT_SEC,
      requestId: reqId
    };
    port.postMessage(req);
  });
};
module.exports = u2f;

},{}],80:[function(require,module,exports){
'use strict';

var Token = function Token(contractAddress, userAddress, symbol, decimal, type) {
    this.contractAddress = contractAddress;
    this.userAddress = userAddress;
    this.symbol = symbol;;
    this.decimal = decimal;
    this.type = type;
    this.balance = "loading";
};
Token.balanceHex = "0x70a08231";
Token.transferHex = "0xa9059cbb";
Token.popTokens = [];
Token.prototype.getContractAddress = function () {
    return this.contractAddress;
};
Token.prototype.getUserAddress = function () {
    return this.userAddress;
};
Token.prototype.setUserAddress = function (address) {
    this.userAddress = address;
};
Token.prototype.getSymbol = function () {
    return this.symbol;
};
Token.prototype.getDecimal = function () {
    return this.decimal;
};
Token.prototype.getBalance = function () {
    return this.balance;
};
Token.prototype.getBalanceBN = function () {
    return this.balanceBN;
};
Token.prototype.setBalance = function (callback) {
    var balanceCall = ethFuncs.getDataObj(this.contractAddress, Token.balanceHex, [ethFuncs.getNakedAddress(this.userAddress)]);
    var parentObj = this;
    ajaxReq.getEthCall(balanceCall, function (data) {
        try {
            if (!data.error) {
                parentObj.balance = new BigNumber(data.data).div(new BigNumber(10).pow(parentObj.getDecimal())).toString();
                parentObj.balanceBN = new BigNumber(data.data).toString();
                if (callback) callback();
            }
        } catch (e) {
            parentObj.balance = globalFuncs.errorMsgs[20];
            parentObj.balanceBN = '0';
        }
    });
};
Token.getTokenByAddress = function (toAdd) {
    toAdd = ethFuncs.sanitizeHex(toAdd);
    for (var i = 0; i < Token.popTokens.length; i++) {
        if (toAdd.toLowerCase() == Token.popTokens[i].address.toLowerCase()) return Token.popTokens[i];
    }
    return {
        "address": toAdd,
        "symbol": "Unknown",
        "decimal": 0,
        "type": "default"
    };
};
Token.prototype.getData = function (toAdd, value) {
    try {
        if (!ethFuncs.validateEtherAddress(toAdd)) throw globalFuncs.errorMsgs[5];else if (!globalFuncs.isNumeric(value) || parseFloat(value) < 0) throw globalFuncs.errorMsgs[7];
        var value = ethFuncs.padLeft(new BigNumber(value).times(new BigNumber(10).pow(this.getDecimal())).toString(16), 64);
        var toAdd = ethFuncs.padLeft(ethFuncs.getNakedAddress(toAdd), 64);
        var data = Token.transferHex + toAdd + value;
        return {
            isError: false,
            data: data
        };
    } catch (e) {
        return {
            isError: true,
            error: e
        };
    }
};
module.exports = Token;

},{}],81:[function(require,module,exports){
module.exports=[
  {
    "address":"0x085fb4f24031eaedbc2b611aa528f22343eb52db",
    "symbol":"BEC",
    "decimal":8,
    "type":"default"
  }
 ]

},{}],82:[function(require,module,exports){
module.exports=[
  {
    "address":"0xAf30D2a7E90d7DC361c8C4585e9BB7D2F6f15bc7",
    "symbol":"1ST",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0x960b236A07cf122663c4303350609A66A7B288C0",
    "symbol":"ANT",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0xAc709FcB44a43c35F0DA4e3163b117A17F3770f5",
    "symbol":"ARC",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
    "symbol":"BAT",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0x74C1E4b8caE59269ec1D85D3D4F324396048F4ac",
    "symbol":"BeerCoin 🍺 ",
    "decimal":0,
    "type":"default"
  },
  {
    "address":"0x1e797Ce986C3CFF4472F7D38d5C4aba55DfEFE40",
    "symbol":"BCDN",
    "decimal":15,
    "type":"default"
  },
  {
    "address":"0xAef38fBFBF932D1AeF3B808Bc8fBd8Cd8E1f8BC5",
    "symbol":"CRB",
    "decimal":8,
    "type":"default"
  },
  {
    "address":"0xE4c94d45f7Aef7018a5D66f44aF780ec6023378e",
    "symbol":"CryptoCarbon",
    "decimal":6,
    "type":"default"
  },
  {
    "address":"0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413",
    "symbol":"DAO",
    "decimal":16,
    "type":"default"
  },
  {
    "address":"0x5c40eF6f527f4FbA68368774E6130cE6515123f2",
    "symbol":"DAO_extraBalance",
    "decimal":0,
    "type":"default"
  },
  {
    "address":"0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A",
    "symbol":"DGD",
    "decimal":9,
    "type":"default"
  },
  {
    "address":"0x55b9a11c2e8351b4Ffc7b11561148bfaC9977855",
    "symbol":"DGX 1.0",
    "decimal":9,
    "type":"default"
  },
  {
    "address":"0x08711D3B02C8758F2FB3ab4e80228418a7F8e39c",
    "symbol":"EDG",
    "decimal":0,
    "type":"default"
  },
  {
    "address":"0xB802b24E0637c2B87D2E8b7784C055BBE921011a",
    "symbol":"EMV",
    "decimal":2,
    "type":"default"
  },
  {
    "address":"0x6810e776880C02933D47DB1b9fc05908e5386b96",
    "symbol":"GNO",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0xa74476443119A942dE498590Fe1f2454d7D4aC0d",
    "symbol":"GNT",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0xf7B098298f7C69Fc14610bf71d5e02c60792894C",
    "symbol":"GUP",
    "decimal":3,
    "type":"default"
  },
  {
    "address":"0x1D921EeD55a6a9ccaA9C79B1A4f7B25556e44365",
    "symbol":"GT",
    "decimal":0,
    "type":"default"
  },
  {
    "address":"0x14F37B574242D366558dB61f3335289a5035c506",
    "symbol":"HKG",
    "decimal":3,
    "type":"default"
  },
  {
    "address":"0xcbCC0F036ED4788F63FC0fEE32873d6A7487b908",
    "symbol":"HMQ",
    "decimal":8,
    "type":"default"
  },
  {
    "address":"0x888666CA69E0f178DED6D75b5726Cee99A87D698",
    "symbol":"ICN",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0xc1E6C6C681B286Fb503B36a9dD6c1dbFF85E73CF",
    "symbol":"JET",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0xfa05A73FfE78ef8f1a739473e462c54bae6567D9",
    "symbol":"LUN",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0x93E682107d1E9defB0b5ee701C71707a4B2E46Bc",
    "symbol":"MCAP",
    "decimal":8,
    "type":"default"
  },
  {
    "address":"0xB04cfa8a26D602fb50232CEe0DaF29060264e04B",
    "symbol":"MCO",
    "decimal":8,
    "type":"default"
  },
  {
    "address":"0xd0b171Eb0b0F2CbD35cCD97cDC5EDC3ffe4871aa",
    "symbol":"MDA",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0xe23cd160761f63FC3a1cF78Aa034b6cdF97d3E0C",
    "symbol":"MIT",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0xC66eA802717bFb9833400264Dd12c2bCeAa34a6d",
    "symbol":"MKR",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0xBEB9eF514a379B997e0798FDcC901Ee474B6D9A1",
    "symbol":"MLN",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0x1a95B271B0535D15fa49932Daba31BA612b52946",
    "symbol":"MNE",
    "decimal":8,
    "type":"default"
  },
  {
    "address":"0x45e42D659D9f9466cD5DF622506033145a9b89Bc",
    "symbol":"NxC",
    "decimal":3,
    "type":"default"
  },
  {
    "address":"0x8Ae4BF2C33a8e667de34B54938B0ccD03Eb8CC06",
    "symbol":"PTOY",
    "decimal":8,
    "type":"default"
  },
  {
    "address":"0xD8912C10681D8B21Fd3742244f44658dBA12264E",
    "symbol":"PLU",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5",
    "symbol":"REP",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0x607F4C5BB672230e8672085532f7e901544a7375",
    "symbol":"RLC",
    "decimal":9,
    "type":"default"
  },
  {
    "address":"0x2e071D2966Aa7D8dECB1005885bA1977D6038A65",
    "symbol":"ROL",
    "decimal":16,
    "type":"default"
  },
  {
    "address":"0x4993CB95c7443bdC06155c5f5688Be9D8f6999a5",
    "symbol":"ROUND",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0xd248B0D48E44aaF9c49aea0312be7E13a6dc1468",
    "symbol":"SGT",
    "decimal":1,
    "type":"default"
  },
  {
    "address":"0xaeC2E87E0A235266D9C5ADc9DEb4b2E29b54D009",
    "symbol":"SNGLS",
    "decimal":0,
    "type":"default"
  },
  {
    "address":"0x1dCE4Fa03639B7F0C38ee5bB6065045EdCf9819a",
    "symbol":"SRC",
    "decimal":8,
    "type":"default"
  },
  {
   "address":"0xB9e7F8568e08d5659f5D29C4997173d84CdF2607",
   "symbol":"SWT",
   "decimal":18,
   "type":"default"
  },
  {
    "address":"0xE7775A6e9Bcf904eb39DA2b68c5efb4F9360e08C",
    "symbol":"TaaS",
    "decimal":6,
    "type":"default"
  },
  {
    "address":"0x6531f133e6DeeBe7F2dcE5A0441aA7ef330B4e53",
    "symbol":"TIME",
    "decimal":8,
    "type":"default"
  },
  {
    "address":"0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a",
    "symbol":"TKN",
    "decimal":8,
    "type":"default"
  },
  {
    "address":"0xCb94be6f13A1182E4A4B6140cb7bf2025d28e41B",
    "symbol":"TRST",
    "decimal":6,
    "type":"default"
  },
  {
    "address":"0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
    "symbol":"Unicorn 🦄 ",
    "decimal":0,
    "type":"default"
  },
  {
    "address":"0x5c543e7AE0A1104f78406C340E9C64FD9fCE5170",
    "symbol":"VSL",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374",
    "symbol":"VERI",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0x667088b212ce3d06a1b553a7221E1fD19000d9aF",
    "symbol":"WINGS",
    "decimal":18,
    "type":"default"
  },
  {
    "address":"0x4DF812F6064def1e5e029f1ca858777CC98D2D81",
    "symbol":"XAUR",
    "decimal":8,
    "type":"default"
  }
]

},{}],83:[function(require,module,exports){
module.exports=[
  {
    "address":"0x3C67f7D4decF7795225f51b54134F81137385f83",
    "symbol":"GUP",
    "decimal":3,
    "type":"default"
  }
]

},{}],84:[function(require,module,exports){
module.exports=[]
},{}],85:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],86:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],87:[function(require,module,exports){
// German
'use strict';

var _de$data;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var de = function de() {};
de.code = 'de';
de.data = (_de$data = {

  /* Navigation*/
  NAV_AddWallet: 'Wallet hinzufügen ',
  NAV_BulkGenerate: 'Mehrere Wallets erstellen ',
  NAV_Contact: 'Kontakt ',
  NAV_Contracts: 'Verträge ',
  NAV_DeployContract: 'Vertrag aufstellen ',
  NAV_ENS: 'ENS',
  NAV_GenerateWallet: 'Wallet erstellen ',
  NAV_Help: 'Hilfe ',
  NAV_InteractContract: 'Interact with Contract ',
  NAV_Multisig: 'Multisig ',
  NAV_MyWallets: 'Meine Wallets ',
  NAV_Offline: 'Sende offline ',
  NAV_SendEther: 'Sende Ether und Tokens ',
  NAV_SendTokens: 'Sende Tokens ',
  NAV_SignMsg: 'Sign Message ',
  NAV_Swap: 'Swap ',
  NAV_ViewWallet: 'Wallet Infos anzeigen ',
  NAV_YourWallets: 'Deine Wallets ',

  /* General */
  x_Access: 'Access ',
  x_AddessDesc: 'Dies ist deine "Kontonummer" oder dein "Öffentlicher Schlüssel". Du benötigst diese Adresse, wenn dir jemand Ether senden möchte. Das Icon ist eine einfache Möglichkeit, die Adresse zu überprüfen ',
  x_Address: 'Deine Adresse ',
  x_Cancel: 'Abbrechen ',
  x_CSV: 'CSV-Datei (unverschlüsselt) ',
  x_Download: 'Herunterladen ',
  x_Json: 'JSON-Datei (unverschlüsselt) ',
  x_JsonDesc: 'Dies ist die unverschlüsselte Version deines privaten Schlüssels im JSON-Format. Du benötigst daher kein Passwort, aber jeder, der über diese JSON-Datei verfügt, hat ohne Passwort Zugang zu deinem Wallet und dem darin enthaltenen Ether. ',
  x_Keystore: 'Keystore File (UTC / JSON · Empfohlen · Verschlüsselt) ',
  x_Keystore2: 'Keystore File (UTC / JSON) ',
  x_KeystoreDesc: 'Diese Keystore-Datei passt zu dem Format, das von Mist verwendet wird, sodass du diese Datei dort zukünftig einfach importieren kannst. Es ist empfehlenswert, diese Datei herunterzuladen und zu sichern. ',
  x_Mnemonic: 'Mnemonic Phrase ',
  x_ParityPhrase: 'Parity Phrase ',
  x_Password: 'Passwort ',
  x_Print: 'Papier-Version des Wallets drucken ',
  x_PrintDesc: 'ProTip: Klicke auf "Drucken" und sichere die Datei als PDF, auch wenn du keinen Drucker hast! ',
  x_PrintShort: 'Drucken ',
  x_PrivKey: 'Privater Schlüssel (unverschlüsselt) ',
  x_PrivKey2: 'Privater Schlüssel ',
  x_PrivKeyDesc: 'Dies ist die unverschlüsselte Textversion deines privaten Schlüssels, d. h. du benötigst kein Passwort. Wenn jemand über diesen unverschlüsselten privaten Schlüssel verfügt, hat er/sie ohne Passwort Zugang zu deinem Wallet. Es wird daher empfohlen, den privaten Schlüssel zu verschlüsseln. ',
  x_Save: 'Sichern ',
  x_TXT: 'TXT-Datei (unverschlüsselt) ',
  x_Wallet: 'Wallet ',

  /* Header */
  MEW_Warning_1: 'Bitte prüfe stets die URL, bevor du auf dein Wallet zugreifst oder ein neues Wallet erzeugst. Vorsicht vor Phishing-Seiten! ',
  CX_Warning_1: 'Stelle sicher, dass du über eine **externe Sicherung** von allen Wallets verfügst, die du hier speicherst. Es gibt viele Möglichkeiten, die dazu führen können, dass deine in dieser Chrome-Extension gespeicherten Daten verloren gehen, z.B. Deinstallation oder Neu-Installation. Diese Extension erleichert den Zugang zu deinen Wallets, ist jedoch keine empfohlene Möglichkeit, diese zu sichern. ',
  MEW_Tagline: 'Open Source JavaScript Client-Side Ether Wallet ',
  CX_Tagline: 'Open Source JavaScript Client-Side Ether Wallet Chrome Extension ',

  /* Footer */
  FOOTER_1: 'Ein quelloffenes, browserseitiges Werkzeug zur Erzeugung von Ethereum-Wallets und Versenden von Transaktionen. ',
  FOOTER_1b: 'Erstellt von ',
  FOOTER_2: 'Spenden sind herzlich willkommen ',
  FOOTER_3: 'Browserseitige Wallet-Erzeugung durch ',
  FOOTER_4: 'Disclaimer ',

  /* Sidebar */
  sidebar_AccountInfo: 'Kontoinformation ',
  sidebar_AccountAddr: 'Kontoadresse ',
  sidebar_AccountBal: 'Kontostand ',
  sidebar_TokenBal: 'Token Kontostand ',
  sidebar_Equiv: 'Währungs-Gegenwerte ',
  sidebar_TransHistory: 'Transaktions-Historie ',
  sidebar_donation: 'MyEtherWallet ist ein freier, quelloffener Service, der deiner Privatsphäre und Sicherheit gewidmet ist. Je mehr Spenden wir erhalten, desto mehr Zeit können wir investieren, um neue Funktionen zu programmieren, dein Feedback zu verarbeiten und dir zu geben, was du dir wünschst. Wir sind nur zwei Leute, die die Welt ändern möchten. Hilfst du uns dabei? ',
  sidebar_donate: 'Spenden ',
  sidebar_thanks: 'Dankeschön!!! ',

  /* Decrypt Panel */
  decrypt_Access: 'Wie möchtst du auf dein wallet zugreifen? ',
  decrypt_Title: 'Wähle das format deines privaten schlüssels ',
  decrypt_Select: 'Wallet auswählen ',

  /* Add Wallet */
  ADD_Label_1: 'Was möchtest du tun? ',
  ADD_Radio_1: 'Neues Wallet erstellen ',
  ADD_Radio_2: 'Wallet-Datei auswählen (Keystore / JSON) ',
  ADD_Radio_2_alt: 'Wallet-Datei auswählen ',
  ADD_Radio_2_short: 'WALLET-DATEI AUSWÄHLEN... ',
  ADD_Radio_3: 'Kopiere/Tippe deinen privaten Schlüssel ein ',
  ADD_Radio_4: 'Kontoadresse zur Beobachtung hinzufügen ',
  ADD_Radio_5: 'Füge deinen Mnemonic ein ',
  ADD_Radio_5_Path: 'Select HD derivation path ',
  ADD_Radio_5_PathCustom: 'Benutzerdefiniert ',
  ADD_Label_2: 'Wähle ein Kürzel ',
  ADD_Label_3: 'Deine Datei ist verschlüsselt. Bitte gib das Passwort ein ',
  ADD_Label_4: 'Kontoadresse zur Beobachtung hinzufügen ',
  ADD_Warning_1: 'Du kannst unter dem "Wallet-Tab" eine Kontoadresse "beobachten", ohne den privaten Schlüssel hochzuladen. Du hast damit **keinen** Zugang zu diesem Wallet und kannst auch keinen Ether daraus versenden. ',
  ADD_Label_5: 'Kontoadresse eingeben ',
  ADD_Label_6: 'Wallet entsperren ',
  ADD_Label_6_short: 'Entsperren ',
  ADD_Label_7: 'Kontoadresse hinzufügen ',

  /* Generate Wallets */
  GEN_desc: 'Wenn du mehrere Wallets auf einmal erstellen möchtest, kannst du dies hier tun ',
  GEN_Label_1: 'Gib ein starkes Passwort ein (mindestens 9 Zeichen) ',
  GEN_Placeholder_1: 'BITTE VERGISS NICHT dieses Passwort an einem sicheren Ort zu notieren! ',
  GEN_SuccessMsg: 'Erfolgreich! Dein Wallet wurde erzeugt. ',
  GEN_Label_2: 'Sichere deine Keystore-Datei oder deinen privaten Schlüssel. Sichere auch dein Passwort! ',
  GEN_Label_3: 'Sichere deine Kontoadresse. ',
  GEN_Label_4: 'Optional: Drucke dein Papier-Wallet oder speichere einen QR-Code. ',

  /* Bulk Generate Wallets */
  BULK_Label_1: 'Anzahl zu generierender Wallets ',
  BULK_Label_2: 'Wallets erstellen ',
  BULK_SuccessMsg: 'Erfolgreich! Deine Wallets wurden erstellt. ',

  /* Sending Ether and Tokens */
  SEND_addr: 'An Adresse ',
  SEND_amount: 'Zu sendender Betrag ',
  SEND_amount_short: 'Betrag ',
  SEND_custom: 'Benutzerdefiniert ',
  SEND_gas: 'Gas ',
  SEND_TransferTotal: 'Gesamten verfügbaren Saldo übertragen ',
  SEND_generate: 'Erzeuge Transaktion ',
  SEND_raw: 'Transaktion (Binärformat) ',
  SEND_signed: 'Signierte Transaktion ',
  SEND_trans: 'Sende Transaktion '
}, _defineProperty(_de$data, 'SEND_custom', 'Add Custom Token '), _defineProperty(_de$data, 'SENDModal_Title', 'Achtung! '), _defineProperty(_de$data, 'SENDModal_Content_1', 'Du bist dabei, '), _defineProperty(_de$data, 'SENDModal_Content_2', 'an die Adresse '), _defineProperty(_de$data, 'SENDModal_Content_3', 'zu senden. Bis du sicher, dass du das willst? '), _defineProperty(_de$data, 'SENDModal_Content_4', 'HINWEIS: Wenn du eine Fehlermeldung erhälst, musst du vermutlich deinen Ether-Saldo erhöhen, um die Gas-Kosten des Token-Versands zu bezahlen. Gas wird in Ether bezahlt. '), _defineProperty(_de$data, 'SENDModal_No', 'Nein, ich möchte diesen Vorgang abbrechen! '), _defineProperty(_de$data, 'SENDModal_Yes', 'Ja, ich bin mir sicher! Führe die Transaktion durch. '), _defineProperty(_de$data, 'TOKEN_Addr', 'Adresse '), _defineProperty(_de$data, 'TOKEN_Symbol', 'Token-Symbol '), _defineProperty(_de$data, 'TOKEN_Dec', 'Dezimalstellen '), _defineProperty(_de$data, 'TOKEN_hide', 'Verstecke Token '), _defineProperty(_de$data, 'TOKEN_show', 'Zeige alle Tokens '), _defineProperty(_de$data, 'TRANS_desc', 'Wenn du Token senden willst, nutze bitte die "Sende Tokens" Funktion '), _defineProperty(_de$data, 'TRANS_warning', 'Wenn du die "Nur ETH" oder "Nur ETC" Funktionen benutzt, erfolgt die Transaktion über einen Vertrag. Einige Dienste haben ein Problem damit diese Transaktionen zu empfangen. Mehr lesen. '), _defineProperty(_de$data, 'TRANS_advanced', '+Fortgeschritten: Daten hinzufügen '), _defineProperty(_de$data, 'TRANS_data', 'Daten '), _defineProperty(_de$data, 'TRANS_gas', 'Gas Limit '), _defineProperty(_de$data, 'TRANS_sendInfo', 'Eine Standard Transaktion mit 21000 Gas kostet 0.000441 ETH. Wir zahlen einen minimal höheren Gaspreis von 0.000000021 ETH um zu garantieren, dass die Transaktion schnell bearbeitet wird. Wir erheben keine Transaktionsgebühren. '), _defineProperty(_de$data, 'TRANSModal_Title', '"Nur ETH" und "Nur ETC" Transaktionen '), _defineProperty(_de$data, 'TRANSModal_Content_0', 'Ein Hinweis zu den verschiedenen Transaktionen und Angeboten '), _defineProperty(_de$data, 'TRANSModal_Content_1', '**ETH (Standard Transaktion): ** Dies erzeugt eine Standard Transaktion direkt von einer Adresse zu einer anderen. Diese nutzt standardmässig 21000 Gas. Es ist gut möglich, dass alle Transaktionen dieser Art auf der ETC Blockchain wiederholt werden (Replay Attacke). '), _defineProperty(_de$data, 'TRANSModal_Content_2', '**Nur ETH: ** Dies sendet die Transaktion so über [Timon Rapp\'s "replay protection contract" (wie von VB empfohlen)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/), dass sie nur auf der **ETH** Blockchain ausgeführt wird. '), _defineProperty(_de$data, 'TRANSModal_Content_3', '**Nur ETC: ** Dies sendet die Transaktion so über [Timon Rapp\'s "replay protection contract" (wie von VB empfohlen)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/), dass sie nur auf der **ETC** Blockchain ausgeführt wird. '), _defineProperty(_de$data, 'TRANSModal_Content_4', '**Coinbase & ShapeShift: ** Sende nur Standard Transaktionen. Wenn du die Transaktion über eine der "Nur" Funktionen versendest, musst du den Support kontaktieren um deinen Betrag oder eine Rückerstattung zu erhalten. [Du kannst auch Shapeshifts "split" Werkzeug ausprobieren.](https://split.shapeshift.io/) '), _defineProperty(_de$data, 'TRANSModal_Content_5', '**Kraken & Poloniex:** Keine Probleme bekannt. Nutzen, was dir lieber ist '), _defineProperty(_de$data, 'TRANSModal_Yes', 'Cool, jetzt hab ich\'s verstanden. '), _defineProperty(_de$data, 'TRANSModal_No', 'Bitte was? Ich bin noch verwirrter. Ich brauche Hilfe '), _defineProperty(_de$data, 'OFFLINE_Title', 'Erzeuge & sende Offline Transaktionen '), _defineProperty(_de$data, 'OFFLINE_Desc', 'Offline Transaktionen können in drei Schritten erzeugt werden. Schritt 1 und 3 erledigst an einem Online Computer und Schritt 3 an einem Offline/abgeschirmten Computer. Dies stellt sicher, dass deine privaten Schlüssel nie ein mit dem Internet verbundenes Gerät berühren. '), _defineProperty(_de$data, 'OFFLLINE_Step1_Title', 'Schritt 1: Informationen sammeln (Online Computer) '), _defineProperty(_de$data, 'OFFLINE_Step1_Button', 'Informationen sammeln '), _defineProperty(_de$data, 'OFFLINE_Step1_Label_1', 'Von Adresse '), _defineProperty(_de$data, 'OFFLINE_Step1_Label_2', 'Hinweis: Dies ist die VON Adresse, nicht die AN Adresse. Die Nonce wird basierend auf dem Ursprungsaccount berechnet. Wenn du einen abgeschirmten Computer nutzt, wäre dies die Adresse deines "cold-storage". '), _defineProperty(_de$data, 'OFFLINE_Step2_Title', 'Schritt 2: Transaktion generieren (Offline Computer) '), _defineProperty(_de$data, 'OFFLINE_Step2_Label_1', 'An Adresse '), _defineProperty(_de$data, 'OFFLINE_Step2_Label_2', 'Zu sendender Betrag '), _defineProperty(_de$data, 'OFFLINE_Step2_Label_3', 'Gaspreis '), _defineProperty(_de$data, 'OFFLINE_Step2_Label_3b', 'Dies wurde dir in Schritt 1 an deinem Online Computer angezeigt. '), _defineProperty(_de$data, 'OFFLINE_Step2_Label_4', 'Gas Limit '), _defineProperty(_de$data, 'OFFLINE_Step2_Label_4b', '21000 ist das Standard Gas Limit. Wenn du Verträge oder Daten sendest, musst du diesen Wert eventuell anpassen. Alles ungenutzte Gas wird dir zurück gesendet. '), _defineProperty(_de$data, 'OFFLINE_Step2_Label_5', 'Nonce '), _defineProperty(_de$data, 'OFFLINE_Step2_Label_5b', 'Dies wurde dir in Schritt 1 an deinem Online Computer angezeigt. '), _defineProperty(_de$data, 'OFFLINE_Step2_Label_6', 'Daten '), _defineProperty(_de$data, 'OFFLINE_Step2_Label_6b', 'Dies ist optional. Daten werden meist in Transaktionen an Verträge verwendet. '), _defineProperty(_de$data, 'OFFLINE_Step2_Label_7', 'Gib deine privaten Schlüssel ein. '), _defineProperty(_de$data, 'OFFLINE_Step3_Title', 'Schritt 3: Transaktion senden/veröffentlichen (Online Computer) '), _defineProperty(_de$data, 'OFFLINE_Step3_Label_1', 'Kopiere die signierte Transaktion aus Schritt 2 hier hinein und drücke "TRANSAKTION SENDEN". '), _defineProperty(_de$data, 'DEP_generate', 'Bytecode generieren '), _defineProperty(_de$data, 'DEP_generated', 'Generierter Bytecode '), _defineProperty(_de$data, 'DEP_signtx', 'Transaktion signieren '), _defineProperty(_de$data, 'DEP_interface', 'Generiertes Interface '), _defineProperty(_de$data, 'MYWAL_Nick', 'Wallet Spitzname '), _defineProperty(_de$data, 'MYWAL_Address', 'Wallet Addresse '), _defineProperty(_de$data, 'MYWAL_Bal', 'Guthaben '), _defineProperty(_de$data, 'MYWAL_Edit', 'Bearbeiten '), _defineProperty(_de$data, 'MYWAL_View', 'Ansehen '), _defineProperty(_de$data, 'MYWAL_Remove', 'Löschen '), _defineProperty(_de$data, 'MYWAL_RemoveWal', 'Wallet löschen '), _defineProperty(_de$data, 'MYWAL_WatchOnly', 'Deine Watch-Only Konten '), _defineProperty(_de$data, 'MYWAL_Viewing', 'Du siehst Wallet '), _defineProperty(_de$data, 'MYWAL_Hide', 'Wallet Info verstecken '), _defineProperty(_de$data, 'MYWAL_Edit_2', 'Wallet bearbeiten '), _defineProperty(_de$data, 'MYWAL_Name', 'Wallet Name '), _defineProperty(_de$data, 'MYWAL_Content_1', 'Achtung! Du bist gerade dabei dein Wallet zu löschen '), _defineProperty(_de$data, 'MYWAL_Content_2', 'Stelle sicher, dass du **die private Key/JSON Datei und das Passwort** deines Wallets gespeichert hast, bevor du es löschst. '), _defineProperty(_de$data, 'MYWAL_Content_3', 'Wenn du dieses Wallet in Zukunft mit MyEtherWallet CX verwenden willst, musst du es mittels der privaten Key/JSON Datei und deinem Passwort manuell wieder hinzufügen. '), _defineProperty(_de$data, 'VIEWWALLET_Subtitle', 'Dies erlaubt dir den Download verschiedener Versionen deines privaten Schlüssel sowie das erneute Drucken deines Papier-Wallets. Es wird empfohlen, dies zu tun um [Deinen Account in Geth/Mist zu importieren.](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Zum Überprüfen deines Kontostands empfehlen wir, einen Blockchain Explorer wie [etherscan.io](http://etherscan.io/) zu verwenden. '), _defineProperty(_de$data, 'VIEWWALLET_Subtitle_Short', 'Dies erlaubt dir den Download verschiedener Versionen deines privaten Schlüssel sowie das erneute Drucken deines Papier-Wallets. '), _defineProperty(_de$data, 'VIEWWALLET_SuccessMsg', 'Erfolgreich! Hier sind die Daten deines Wallets. '), _defineProperty(_de$data, 'CX_error_1', 'Du hast keine Wallets gespeichert. Klicke ["Wallet hinzufügen"](/cx-wallet.html#add-wallet) um eines hinzuzufügen! '), _defineProperty(_de$data, 'CX_quicksend', 'Senden '), _defineProperty(_de$data, 'NODE_Title', 'Benutzerdefinierten Knoten einstellen'), _defineProperty(_de$data, 'NODE_Subtitle', 'Verbinde mit einem lokalem Knoten...'), _defineProperty(_de$data, 'NODE_Warning', 'Your node must be HTTPS in order to connect to it via MyEtherWallet.com. You can [download the MyEtherWallet repo & run it locally](https://github.com/kvhnuke/etherwallet/releases/latest) to connect to any node. Or, get free SSL certificate via [LetsEncrypt](https://letsencrypt.org/)'), _defineProperty(_de$data, 'NODE_Name', 'Knotenname'), _defineProperty(_de$data, 'NODE_Port', 'Knotenport'), _defineProperty(_de$data, 'NODE_CTA', 'Speicher & Benutze Knoten'), _defineProperty(_de$data, 'CONTRACT_Title', 'Vertragsadresse '), _defineProperty(_de$data, 'CONTRACT_Title_2', 'Existierenden Vertrag auswählen '), _defineProperty(_de$data, 'CONTRACT_Json', 'ABI / JSON Schnittstelle '), _defineProperty(_de$data, 'CONTRACT_Interact_Title', 'Vertrag lesen / schreiben '), _defineProperty(_de$data, 'CONTRACT_Interact_CTA', 'Wähle eine Funktion '), _defineProperty(_de$data, 'CONTRACT_ByteCode', 'Byte Code '), _defineProperty(_de$data, 'CONTRACT_Read', 'LESEN '), _defineProperty(_de$data, 'CONTRACT_Write', 'SCHREIBEN '), _defineProperty(_de$data, 'SWAP_rates', "Aktueller Kurs "), _defineProperty(_de$data, 'SWAP_init_1', "Wechsel meine  "), _defineProperty(_de$data, 'SWAP_init_2', " gegen "), _defineProperty(_de$data, 'SWAP_init_CTA', "Lass es uns tun! "), _defineProperty(_de$data, 'SWAP_information', "Deine Informationen "), _defineProperty(_de$data, 'SWAP_send_amt', "Zusendender Betrag "), _defineProperty(_de$data, 'SWAP_rec_amt', "Empfangender Betrag "), _defineProperty(_de$data, 'SWAP_your_rate', "Dein Kurs "), _defineProperty(_de$data, 'SWAP_rec_add', "Deine Empfangsadresse "), _defineProperty(_de$data, 'SWAP_start_CTA', "Starte Wechsel "), _defineProperty(_de$data, 'SWAP_ref_num', "Deine Referenznummer "), _defineProperty(_de$data, 'SWAP_time', "Zum Senden verbleibende Zeit   "), _defineProperty(_de$data, 'SWAP_progress_1', "Auftrag initialisiert "), _defineProperty(_de$data, 'SWAP_progress_2', "Warte auf deine "), _defineProperty(_de$data, 'SWAP_progress_3', "Erhalten! "), _defineProperty(_de$data, 'SWAP_progress_4', "Sende deine {{orderResult.output.currency}} "), _defineProperty(_de$data, 'SWAP_progress_5', "Auftrag erfüllt "), _defineProperty(_de$data, 'SWAP_order_CTA', "Bitte sende "), _defineProperty(_de$data, 'SWAP_unlock', "Schalte dein Wallet frei um ETH oder Tokens direkt von dieser Seite aus zu senden "), _defineProperty(_de$data, 'MSG_message', 'Nachticht '), _defineProperty(_de$data, 'MSG_date', 'Datum '), _defineProperty(_de$data, 'MSG_signature', 'Signatur '), _defineProperty(_de$data, 'MSG_verify', 'Nachricht verifizieren '), _defineProperty(_de$data, 'MSG_info1', 'Include the current date so the signature cannot be reused on a different date. '), _defineProperty(_de$data, 'MSG_info2', 'Include your nickname and where you use the nickname so someone else cannot use it. '), _defineProperty(_de$data, 'MSG_info3', 'Include a specific reason for the message so it cannot be reused for a different purpose. '), _defineProperty(_de$data, 'MNEM_1', 'Wähle den Vertrag, mit dem du interagieren willst. '), _defineProperty(_de$data, 'MNEM_2', 'Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. '), _defineProperty(_de$data, 'MNEM_more', 'Mehrere Adressen '), _defineProperty(_de$data, 'MNEM_prev', 'Letzte Adressen '), _defineProperty(_de$data, 'x_Ledger', 'Ledger Nano S '), _defineProperty(_de$data, 'ADD_Ledger_1', 'Verbinde deinen Ledger Nano S '), _defineProperty(_de$data, 'ADD_Ledger_2', 'Öffne das Ethereum Programm (oder ein Vertragsprogramm) '), _defineProperty(_de$data, 'ADD_Ledger_3', 'Gehe sicher, dass Browser Support aktiviert ist. '), _defineProperty(_de$data, 'ADD_Ledger_4', 'If no Browser Support is found in settings, verify that you have [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) '), _defineProperty(_de$data, 'ADD_Ledger_0a', 'Re-open MyEtherWallet on a secure (SSL) connection '), _defineProperty(_de$data, 'ADD_Ledger_0b', 'Re-open MyEtherWallet using [Chrome](https://www.google.com/chrome/browser/desktop/) or [Opera](https://www.opera.com/) '), _defineProperty(_de$data, 'ADD_Ledger_scan', 'Connect to Ledger Nano S '), _defineProperty(_de$data, 'x_Trezor', 'TREZOR '), _defineProperty(_de$data, 'ADD_Trezor_scan', 'Connect to TREZOR '), _defineProperty(_de$data, 'ADD_Trezor_select', 'This is a TREZOR seed '), _defineProperty(_de$data, 'ERROR_0', 'Bitte gebe eine gültige betrag ein '), _defineProperty(_de$data, 'ERROR_1', 'Dein Passwort muss mindestens 9 Zeichen lang sein. Bitte wähle ein sicheres Passwort. '), _defineProperty(_de$data, 'ERROR_2', 'Oh oh! Wir haben den Typ der Wallet-Datei nicht erkannt. '), _defineProperty(_de$data, 'ERROR_3', 'Dies ist keine gültige Wallet-Datei. '), _defineProperty(_de$data, 'ERROR_4', 'Diese Einheit existiert nicht, bitte wähle eine dieser Einheiten aus '), _defineProperty(_de$data, 'ERROR_5', 'Bitte gebe eine gültige Addresse ein. '), _defineProperty(_de$data, 'ERROR_6', 'Bitte gebe eine gültige Passwort ein. '), _defineProperty(_de$data, 'ERROR_7', 'Bitte gebe eine gültige Betrag ein. (Must be integer. Try 0-18.) '), _defineProperty(_de$data, 'ERROR_8', 'Bitte gebe eine gültige Gasverbrauch ein. (Must be integer. Try 21000-4000000.) '), _defineProperty(_de$data, 'ERROR_9', 'Bitte gebe eine gültige Datenwert ein. (Must be hex.) '), _defineProperty(_de$data, 'ERROR_10', 'Bitte gebe eine gültige Gasbetrag ein. (Must be integer. Try 20 GWEI / 20000000000 WEI.) '), _defineProperty(_de$data, 'ERROR_11', 'Bitte gebe eine gültige Nonce ein. (Must be integer.) '), _defineProperty(_de$data, 'ERROR_12', 'Ungültige unterzeichnete Transaktion. '), _defineProperty(_de$data, 'ERROR_13', 'Ein Wallet mit diesem Spitznamen existiert bereits. '), _defineProperty(_de$data, 'ERROR_14', 'Wallet nicht gefunden. '), _defineProperty(_de$data, 'ERROR_15', 'Es sieht nicht so aus als würde ein Proposal mit dieser ID existieren oder es gab einen Fehler beim Lesen des Proposal. '), _defineProperty(_de$data, 'ERROR_16', 'Es ist bereits ein Wallet mit dieser Adresse gespeichert. Bitte überprüfe die Seite deines Wallets. '), _defineProperty(_de$data, 'ERROR_17', 'Unzureichendes Guthaben für Gasverbrauch * Gaspreis + Wert. Du brauchst **0.01 ETH** in deinem Account um die Gaskosten zu decken. Bitte füge ETH hinzu und versuche es noch einmal. '), _defineProperty(_de$data, 'ERROR_18', 'Diese Transaktion würde dein gesamtes verbleibendes Gas verbrauchen. Das bedeutet, du hast bereits über dieses Proposal abgestimmt oder die Debattierphase ist zu Ende. '), _defineProperty(_de$data, 'ERROR_19', 'Ungültiges Symbol '), _defineProperty(_de$data, 'ERROR_20', 'Not a valid ERC-20 token '), _defineProperty(_de$data, 'ERROR_21', 'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative. '), _defineProperty(_de$data, 'ERROR_22', 'Bitte gebe einen gültigen Knotennamen ein '), _defineProperty(_de$data, 'ERROR_23', 'Bitte gebe eine gültige URL ein. Falls du dich mit HTTPS verbindest, muss auch der Knoten mit HTTPS ausgestattet werden. '), _defineProperty(_de$data, 'ERROR_24', 'Bitte gebe eine gültige Portnummer ein '), _defineProperty(_de$data, 'ERROR_25', 'Bitte gebe eine gültige Chain-ID ein '), _defineProperty(_de$data, 'ERROR_26', 'Bitte gebe eine gültige ABI ein '), _defineProperty(_de$data, 'ERROR_27', 'Mindestbetrag: 0.01. Maximaler Betrag: '), _defineProperty(_de$data, 'ERROR_28', '**Du benötigst deine Keystore-Datei & das Passwort** (oder den privaten Schlüssel) um künftig auf dein Wallet zugreifen zu können. Bitte sichere diese Datei daher auf einem externen Medium! Es gibt KEINE Möglichkeit, ein Wallet wiederherzustellen, wenn du diese Datei und das Passwort nicht sicherst. Lies die [Hilfe-Seite](https://www.myetherwallet.com/#help) für weitere Informationen. '), _defineProperty(_de$data, 'ERROR_29', 'Bitte gebe einen gültigen Benutzer und Password ein '), _defineProperty(_de$data, 'ERROR_30', 'Bitte gebe einen gültigen ENS Namen ein '), _defineProperty(_de$data, 'ERROR_31', 'Bitte gebe einen gültigen Geheime Phasre ein '), _defineProperty(_de$data, 'ERROR_32', 'Verbindung zum Knoten nicht möglich. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.'), _defineProperty(_de$data, 'ERROR_33', 'The wallet you have unlocked does not match the owner\'s address. '), _defineProperty(_de$data, 'ERROR_34', 'The name you are attempting to reveal does not match the name you have entered. '), _defineProperty(_de$data, 'SUCCESS_1', 'Gültige Addresse '), _defineProperty(_de$data, 'SUCCESS_2', 'Wallet erfolgreich entschlüsselt '), _defineProperty(_de$data, 'SUCCESS_3', 'TX was broadcast to the blockchain. Click to see your transaction & verify it was mined and does not have any out of gas or contract execution errors.  TX ID:  '), _defineProperty(_de$data, 'SUCCESS_4', 'Dein Wallet wurde erfolgreich hinzugefügt '), _defineProperty(_de$data, 'SUCCESS_5', 'Ausgewählte Datei '), _defineProperty(_de$data, 'SUCCESS_6', 'Erfolgreich verbunden '), _defineProperty(_de$data, 'SUCCESS_7', 'Nachtichten Signatur verifiziert'), _defineProperty(_de$data, 'GETH_InvalidSender', 'Invalid sender Ungültiger Sender '), _defineProperty(_de$data, 'GETH_Nonce', 'Nonce too low  '), _defineProperty(_de$data, 'GETH_Cheap', 'Gaspreis zu niedrig! '), _defineProperty(_de$data, 'GETH_Balance', 'Nicht genügend Guthaben '), _defineProperty(_de$data, 'GETH_NonExistentAccount', 'Account existiert nicht oder besitzt nicht genügend Guthaben '), _defineProperty(_de$data, 'GETH_InsufficientFunds', 'Unzureichendes Guthaben für Gasverbrauch * Gaspreis + Wert '), _defineProperty(_de$data, 'GETH_IntrinsicGas', 'Intrinsic gas too low '), _defineProperty(_de$data, 'GETH_GasLimit', 'Exceeds block gas limit '), _defineProperty(_de$data, 'GETH_NegativeValue', 'Negativer Wert '), _defineProperty(_de$data, 'PARITY_AlreadyImported', "Transaction with the same hash was already imported."), _defineProperty(_de$data, 'PARITY_Old', "Transaction nonce is too low. Try incrementing the nonce."), _defineProperty(_de$data, 'PARITY_TooCheapToReplace', "Transaction fee is too low. There is another transaction with same nonce in the queue. Try increasing the fee or incrementing the nonce."), _defineProperty(_de$data, 'PARITY_LimitReached', "There are too many transactions in the queue. Your transaction was dropped due to limit. Try increasing the fee."), _defineProperty(_de$data, 'PARITY_InsufficientGasPrice', "Transaction fee is too low. It does not satisfy your node's minimal fee (minimal: {}, got: {}). Try increasing the fee."), _defineProperty(_de$data, 'PARITY_InsufficientBalance', "Insufficient funds. Account you try to send transaction from does not have enough funds. Required {} and got: {}."), _defineProperty(_de$data, 'PARITY_GasLimitExceeded', "Transaction cost exceeds current gas limit. Limit: {}, got: {}. Try decreasing supplied gas."), _defineProperty(_de$data, 'PARITY_InvalidGasLimit', "Supplied gas is beyond limit."), _defineProperty(_de$data, 'WARN_Send_Link', 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. '), _defineProperty(_de$data, 'translate_version', '0.5 '), _defineProperty(_de$data, 'Translator_Desc', 'Vielen Dank an unsere ÜbersetzerInnen '), _defineProperty(_de$data, 'TranslatorName_1', 'christoph2806 · K · '), _defineProperty(_de$data, 'TranslatorAddr_1', ''), _defineProperty(_de$data, 'TranslatorName_2', '[mawalu](https://www.myetherwallet.com/?gaslimit=21000&to=0xA6e9A24981aFB71f96C7330618139a7B34BCdEc3&value=1.0#send-transaction) · '), _defineProperty(_de$data, 'TranslatorAddr_2', '0xA6e9A24981aFB71f96C7330618139a7B34BCdEc3 '), _defineProperty(_de$data, 'TranslatorName_3', '[huhn_solo](https://www.myetherwallet.com/?gaslimit=21000&to=0x1DAd1765381460db9A44846cDfA6f74c65A06B77&value=1.0#send-transaction) · '), _defineProperty(_de$data, 'TranslatorAddr_3', '0x1DAd1765381460db9A44846cDfA6f74c65A06B77 '), _defineProperty(_de$data, 'TranslatorName_4', '[FelixA](https://www.myetherwallet.com/?gaslimit=21000&to=0xb6999051b0Bfad32E192e107181E0ac72bE7EE3D&value=1.0#send-transaction) · '), _defineProperty(_de$data, 'TranslatorAddr_4', '0xb6999051b0Bfad32E192e107181E0ac72bE7EE3D '), _defineProperty(_de$data, 'TranslatorName_5', 'danielsun174 · ffidan61 '), _defineProperty(_de$data, 'TranslatorAddr_5', ''), _defineProperty(_de$data, 'HELP_Warning', 'Falls du vor dem **31.12.2015** ein Wallet generiert, oder das Repository heruntergeladen hast, bitte überprüfe deine Wallets &amp; lade eine neue Version des Repositories herunter. Klick für details. '), _defineProperty(_de$data, 'HELP_Desc', 'Hast du das Gefühl etwas fehlt? Hast du eine andere Frage? [Schreib uns](mailto:support@myetherwallet.com) und wir werden nicht nur deine Frage beantworten, wir werden auch die Seite updaten, damit diese in der Zukunft noch einfacher zu bedienen sein wird! '), _defineProperty(_de$data, 'HELP_Remind_Title', 'Ein paar Reminder '), _defineProperty(_de$data, 'HELP_Remind_Desc_1', '**Ethereum, MyEtherWallet.com & MyEtherWallet CX, sowie einige der verwendeten Javascript Bibliotheken, die wir verwenden, befinden sich noch in Entwicklung.** Zwar haben wir alles umfassend getestet und es wurden erfolgeich tausende Wallets von Menschen aus aller Welt kreiert, jedoch bestimmt immer eine gewisse Gefahr, dass etwas unerwartetes passiert und dein Ether verloren geht. Bitte investiere nicht mehr als du verlieren kannst, und sei immer vorsichtig. Sollte etwas schlimmes passieren, **können wir uns leider nicht verantwortlich für einen Verlust zeichnen**. '), _defineProperty(_de$data, 'HELP_Remind_Desc_2', 'MyEtherWallet.com & MyEtherWallet CX sind keine "web wallets". Du erstellst keinen Account oder sendest uns Ether den wir halten. Alle Daten bleiben auf deinem Computer, bzw. Browser. Unser Auftrag ist es, dir das Erstellen, Speichern und Zugreifen auf deine Accounts zu vereinfachen, sowie dir eine simple Möglichkeit zur Interaktion mit der Blockchain zu bieten. '), _defineProperty(_de$data, 'HELP_Remind_Desc_3', 'Falls du deinen privaten Schlüssel und Passwort nicht speicherst, gibt es keine Möglichkeit den Zugriff auf das Konto und die darauf befindlichen Mittel wieder herzustellen. Bitte erstelle Back-ups und speichere deine Zugriffsdaten an verschiedenen Orten &ndash; nicht nur deinem Computer! '), _defineProperty(_de$data, 'HELP_0_Title', '0) Ich bin neu. Was soll ich machen? '), _defineProperty(_de$data, 'HELP_0_Desc_1', 'MyEtherWallet bietet dir die Möglichkeit neue Wallets zu generieren, damit du deinen Ether selbst speichern kannst, und keine Exchange nutzen musst. Dieser Prozess findet ausschließlich auf deinem Computer statt. Daher bist auch **du dafür Verantwortlich, Back-ups zu erstellen** wenn du ein Wallet verwenden möchtest. '), _defineProperty(_de$data, 'HELP_0_Desc_2', 'Erstelle ein neues Wallet. '), _defineProperty(_de$data, 'HELP_0_Desc_3', 'Erstelle ein Back-up deines Wallets. '), _defineProperty(_de$data, 'HELP_0_Desc_4', 'Verifiziere, dass du Zugriff auf dein neues Wallet hast und alle nötigen Informationen korrekt gespeichert sind. '), _defineProperty(_de$data, 'HELP_0_Desc_5', 'Überweise Ether auf das neue Wallet. '), _defineProperty(_de$data, 'HELP_1_Title', '1) Wie erstelle ich ein neues Wallet? '), _defineProperty(_de$data, 'HELP_1_Desc_1', 'Geh zur "Wallet hinzufügen" Seite. '), _defineProperty(_de$data, 'HELP_1_Desc_2', 'Geh zur "Wallet hinzufügen" Seite & wähle "Neues Wallet erstellen" aus. '), _defineProperty(_de$data, 'HELP_1_Desc_3', 'Wähle ein starkes Passwort aus. Falls du glaubst, dass du es vergessen könntest, speichere es an einem sicheren Ort ab. Du benötigst das Passwort um Transaktionen zu tätigen. '), _defineProperty(_de$data, 'HELP_1_Desc_4', 'Klicke auf "Wallet erstellen". '), _defineProperty(_de$data, 'HELP_1_Desc_5', 'Dein Wallet wurde nun erstellt. '), _defineProperty(_de$data, 'HELP_2a_Title', '2a) Wie speichere ich/erstelle Back-ups meines Wallets? '), _defineProperty(_de$data, 'HELP_2a_Desc_1', 'Du solltest dein Wallet immer an verschiedenen physischen Orten abspeichern - beispielsweise auf einem USB-Stick und/oder einem Stück Papier. '), _defineProperty(_de$data, 'HELP_2a_Desc_2', 'Speichere die Adresse. Du kannst sie für dich behalten oder mit anderen teilen. Auf diese Adresse können andere Ether an dich senden. '), _defineProperty(_de$data, 'HELP_2a_Desc_3', 'Speiche verschiedene Versionen deines privaten Schlüssels. Teile ihn nicht mit jemand anderem. Dein privater Schlüssel ist notwendig, wenn du auf deinen Ether zugreifen willst, um eine Überweisung zu tätigen! Es gibt 3 Arten des privaten Schlüssels '), _defineProperty(_de$data, 'HELP_2a_Desc_4', 'Speichere deine Adresse, die verschiedenen Versionen des privaten Schlüssels, sowie eine PDF deines Papier-Wallets in einem Ordner. Speichere diesen auf deinem Computer und einem USB-Stick. '), _defineProperty(_de$data, 'HELP_2a_Desc_5', 'Drucke das Wallet falls du einen Drucker hast. Andernfalls, schreibe deinen privaten Schlüssel und die Adresse auf ein Blatt Papier. Lagere dieses an einem sicheren Ort, abseits von deinem Computer und dem USB-Stick. '), _defineProperty(_de$data, 'HELP_2a_Desc_6', 'Bitte denk daran, dass du den Verlust des Schlüssels aufgrund des Verlusts oder Versagen deiner Festplatte, des USB-Sticks oder dem Papier, selbst verhindern musst. Erwäge daher auch Situationen wie ein Feuer oder eine Überflutung. '), _defineProperty(_de$data, 'HELP_2b_Title', '2b) How do I safely / offline / cold storage with MyEtherWallet? '), _defineProperty(_de$data, 'HELP_2b_Desc_1', 'Go to [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). '), _defineProperty(_de$data, 'HELP_2b_Desc_2', 'Click on `dist-vX.X.X.X.zip`. '), _defineProperty(_de$data, 'HELP_2b_Desc_3', 'Move zip to an airgapped computer. '), _defineProperty(_de$data, 'HELP_2b_Desc_4', 'Unzip it and double-click `index.html`. '), _defineProperty(_de$data, 'HELP_2b_Desc_5', 'Generate a wallet with a strong password. '), _defineProperty(_de$data, 'HELP_2b_Desc_6', 'Save the address. Save versions of the private key. Save the password if you might not remember it forever. '), _defineProperty(_de$data, 'HELP_2b_Desc_7', 'Store these papers / USBs in multiple physically separate locations. '), _defineProperty(_de$data, 'HELP_2b_Desc_8', 'Go to the "View Wallet Info" page and type in your private key / password to ensure they are correct and access your wallet. Check that the address you wrote down is the same. '), _defineProperty(_de$data, 'HELP_3_Title', '3) How do I verify I have access to my new wallet? '), _defineProperty(_de$data, 'HELP_3_Desc_1', '**Before you send any Ether to your new wallet**, you should ensure you have access to it. '), _defineProperty(_de$data, 'HELP_3_Desc_2', 'Navigate to the "View Wallet Info" page. '), _defineProperty(_de$data, 'HELP_3_Desc_3', 'Navigate to the MyEtherWallet.com "View Wallet Info" page. '), _defineProperty(_de$data, 'HELP_3_Desc_4', 'Select your wallet file -or- your private key and unlock your wallet. '), _defineProperty(_de$data, 'HELP_3_Desc_5', 'If the wallet is encrypted, a text box will automatically appear. Enter the password. '), _defineProperty(_de$data, 'HELP_3_Desc_6', 'Click the "Unlock Wallet" button. '), _defineProperty(_de$data, 'HELP_3_Desc_7', 'Your wallet information should show up. Find you account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet. '), _defineProperty(_de$data, 'HELP_3_Desc_8', 'If you are planning on holding a large amount of ether, we recommend that send a small amount of ether from new wallet before depositing a large amount. Send 0.001 ether to your new wallet, access that wallet, send that 0.001 ether to another address, and ensure everything works smoothly. '), _defineProperty(_de$data, 'HELP_4_Title', '4) Wie kann ich Ether von einer Wallet zur anderen senden? '), _defineProperty(_de$data, 'HELP_4_Desc_1', 'If you plan to move a large amount of ether, you should test sending a small amount to your wallet first to ensure everything goes as planned. '), _defineProperty(_de$data, 'HELP_4_Desc_2', 'Navigate to the "Sende Ether und Tokens" page. '), _defineProperty(_de$data, 'HELP_4_Desc_3', 'Select your wallet file -or- your private key and unlock your wallet. '), _defineProperty(_de$data, 'HELP_4_Desc_4', 'If the wallet is encrypted, a text box will automatically appear. Enter the password. '), _defineProperty(_de$data, 'HELP_4_Desc_5', 'Click the "Unlock Wallet" button. '), _defineProperty(_de$data, 'HELP_4_Desc_6', 'Enter the address you would like to send to in the "To Address:" field. '), _defineProperty(_de$data, 'HELP_4_Desc_7', 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. '), _defineProperty(_de$data, 'HELP_4_Desc_9', 'Click "Generate Transaction". '), _defineProperty(_de$data, 'HELP_4_Desc_10', 'A couple more fields will appear. This is your browser generating the transaction. '), _defineProperty(_de$data, 'HELP_4_Desc_11', 'Click the blue "Send Transaction" button below that. '), _defineProperty(_de$data, 'HELP_4_Desc_12', 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. '), _defineProperty(_de$data, 'HELP_4_Desc_13', 'The transaction will be submitted. The TX ID will display. You can click that TX ID to see it on the blockchain. '), _defineProperty(_de$data, 'HELP_4CX_Title', '4) Wie kann ich Ether über MyEtherWallet CX senden? '), _defineProperty(_de$data, 'HELP_4CX_Desc_1', 'First, you need to add a wallet. Once you have done that, you have 2 options: the "QuickSend" functionality from the Chrome Extension icon or the "Sende Ether und Tokens" page. '), _defineProperty(_de$data, 'HELP_4CX_Desc_2', 'QuickSend '), _defineProperty(_de$data, 'HELP_4CX_Desc_3', 'Click the Chrome Extension Icon. '), _defineProperty(_de$data, 'HELP_4CX_Desc_4', 'Click the "QuickSend" button. '), _defineProperty(_de$data, 'HELP_4CX_Desc_5', 'Select the wallet you wish to send from. '), _defineProperty(_de$data, 'HELP_4CX_Desc_6', 'Enter the address you would like to send to in the "To Address:" field. '), _defineProperty(_de$data, 'HELP_4CX_Desc_7', 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. '), _defineProperty(_de$data, 'HELP_4CX_Desc_8', 'Click "Send Transaction". '), _defineProperty(_de$data, 'HELP_4CX_Desc_9', 'Verify the address and the amount you are sending is correct. '), _defineProperty(_de$data, 'HELP_4CX_Desc_10', 'Enter the password for that wallet. '), _defineProperty(_de$data, 'HELP_4CX_Desc_11', 'Click "Send Transaction." '), _defineProperty(_de$data, 'HELP_4CX_Desc_12', 'Using "Sende Ether und Tokens" Page '), _defineProperty(_de$data, 'HELP_5_Title', '5) Wie kann ich MyEtherWallet.com offline/lokal starten? '), _defineProperty(_de$data, 'HELP_5_Desc_1', 'You can run MyEtherWallet.com on your computer instead of from the GitHub servers. You can generate a wallet completely offline and send transactions from the "Offline Transaction" page. '), _defineProperty(_de$data, 'HELP_5_Desc_7', 'MyEtherWallet.com is now running entirely on your computer. '), _defineProperty(_de$data, 'HELP_5_Desc_8', 'In case you are not familiar, you need to keep the entire folder in order to run the website, not just `index.html`. Don\'t touch or move anything around in the folder. If you are storing a backup of the MyEtherWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact. '), _defineProperty(_de$data, 'HELP_5_Desc_9', 'As we are constantly updating MyEtherWallet.com, we recommend you periodically update your saved version of the repo. '), _defineProperty(_de$data, 'HELP_5CX_Title', '5) How can I install this extension from the repo instead of the Chrome Store? '), _defineProperty(_de$data, 'HELP_5CX_Desc_2', 'Click on `chrome-extension-vX.X.X.X.zip` and unzip it. '), _defineProperty(_de$data, 'HELP_5CX_Desc_3', 'Go to Google Chrome and find you settings (in the menu in the upper right). '), _defineProperty(_de$data, 'HELP_5CX_Desc_4', 'Click "Extensions" on the left. '), _defineProperty(_de$data, 'HELP_5CX_Desc_5', 'Check the "Developer Mode" button at the top of that page. '), _defineProperty(_de$data, 'HELP_5CX_Desc_6', 'Click the "Load unpacked extension..." button. '), _defineProperty(_de$data, 'HELP_5CX_Desc_7', 'Navigate to the now-unzipped folder that you downloaded earlier. Click "select". '), _defineProperty(_de$data, 'HELP_5CX_Desc_8', 'The extension should now show up in your extensions and in your Chrome Extension bar. '), _defineProperty(_de$data, 'HELP_7_Title', '7) How do I send Tokens & add custom tokens? '), _defineProperty(_de$data, 'HELP_7_Desc_0', '[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token. '), _defineProperty(_de$data, 'HELP_7_Desc_1', 'Navigate to the "Sende Ether und Tokens" page. '), _defineProperty(_de$data, 'HELP_7_Desc_2', 'Unlock your wallet. '), _defineProperty(_de$data, 'HELP_7_Desc_3', 'Enter the address you would like to send to in the "To Address:" field. '), _defineProperty(_de$data, 'HELP_7_Desc_4', 'Enter the amount you would like to send. '), _defineProperty(_de$data, 'HELP_7_Desc_5', 'Select which token you would like to send. '), _defineProperty(_de$data, 'HELP_7_Desc_6', 'If you do not see the token listed '), _defineProperty(_de$data, 'HELP_7_Desc_7', 'Click "Custom". '), _defineProperty(_de$data, 'HELP_7_Desc_8', 'Enter the address, name, and decimals of the token. These are provided by the developers of the token and are also needed when you "Add a Watch Token" to Mist. '), _defineProperty(_de$data, 'HELP_7_Desc_9', 'Click "Save". '), _defineProperty(_de$data, 'HELP_7_Desc_10', 'You can now send that token as well as see it\'s balance in the sidebar. '), _defineProperty(_de$data, 'HELP_7_Desc_11', 'Click "Generate Transaction". '), _defineProperty(_de$data, 'HELP_7_Desc_12', 'A couple more fields will appear. This is your browser generating the transaction. '), _defineProperty(_de$data, 'HELP_7_Desc_13', 'Click the blue "Send Transaction" button below that. '), _defineProperty(_de$data, 'HELP_7_Desc_14', 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. '), _defineProperty(_de$data, 'HELP_7_Desc_15', 'The transaction will be submitted. The TX ID will display. You can click that TX ID to see it on the blockchain. '), _defineProperty(_de$data, 'HELP_8_Title', '8) What happens if your site goes down? '), _defineProperty(_de$data, 'HELP_8_Desc_1', 'MyEtherWallet is not a web wallet. You don\'t have a login and nothing ever gets saved to our servers. It is simply an interface that allows you interact with the blockchain. '), _defineProperty(_de$data, 'HELP_8_Desc_2', 'If MyEtherWallet.com goes down, you would have to find another way (like geth or Ethereum Wallet / Mist) to do what we are doing. But you wouldn\'t have to "get" your Ether out of MyEtherWallet because it\'s not in MyEtherWallet. It\'s in whatever wallet your generated via our site. '), _defineProperty(_de$data, 'HELP_8_Desc_3', 'You can import your unencrypted private key and your Geth/Mist Format (encrypted) files directly into geth / Ethereum Wallet / Mist very easily now. See question #12 below. '), _defineProperty(_de$data, 'HELP_8_Desc_4', 'In addition, the likelihood of us taking MyEtherWallet down is slim to none. It costs us almost nothing to maintain as we aren\'t storing any information. If we do take the domain down, it still is, and always will be, publicly available at [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). You can download the ZIP there and run it locally. '), _defineProperty(_de$data, 'HELP_8CX_Title', '8) What happens if MyEtherWallet CX disappears? '), _defineProperty(_de$data, 'HELP_8CX_Desc_1', 'First, all data is saved on your computer, not our servers. I know it can be confusing, but when you look at the Chrome Extension, you are NOT looking at stuff saved on our servers somewhere - it\'s all saved on your own computer. '), _defineProperty(_de$data, 'HELP_8CX_Desc_2', 'That said, it is **very important** that you back up all your information for any new wallets generated with MyEtherWallet CX. That way if anything happens to MyEtherWallet CX or your computer, you still have all the information necessary to access your Ether. See the #2a for how to back up your wallets. '), _defineProperty(_de$data, 'HELP_8CX_Desc_3', 'If for some reason MyEtherWallet CX disappears from the Chrome Store, you can find the source on Github and load it manually. See #5 above. '), _defineProperty(_de$data, 'HELP_9_Title', '9) Is the "Sende Ether und Tokens" page offline? '), _defineProperty(_de$data, 'HELP_9_Desc_1', 'No. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times. '), _defineProperty(_de$data, 'HELP_10_Title', '10) How do I make an offline transaction? '), _defineProperty(_de$data, 'HELP_10_Desc_1', 'Navigate to the "Offline Transaction" page via your online computer. '), _defineProperty(_de$data, 'HELP_10_Desc_2', 'Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price. '), _defineProperty(_de$data, 'HELP_10_Desc_3', 'Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send. '), _defineProperty(_de$data, 'HELP_10_Desc_4', 'Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1. '), _defineProperty(_de$data, 'HELP_10_Desc_5', 'Enter the "NONCE" as it was displayed to you on your online computer in step #1. '), _defineProperty(_de$data, 'HELP_10_Desc_6', 'The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you. '), _defineProperty(_de$data, 'HELP_10_Desc_7', 'If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format. '), _defineProperty(_de$data, 'HELP_10_Desc_8', 'Select your wallet file -or- your private key and unlock your wallet. '), _defineProperty(_de$data, 'HELP_10_Desc_9', 'Press the "GENERATE SIGNED TRANSACTION" button. '), _defineProperty(_de$data, 'HELP_10_Desc_10', 'The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer. '), _defineProperty(_de$data, 'HELP_10_Desc_11', 'On your online computer, paste the signed transaction into the text field in step #3 and click send. This will broadcast your transaction. '), _defineProperty(_de$data, 'HELP_12_Title', '12) How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist? '), _defineProperty(_de$data, 'HELP_12_Desc_1', 'Using an Geth/Mist JSON file from MyEtherWallet v2+.... '), _defineProperty(_de$data, 'HELP_12_Desc_2', 'Go to the "View Wallet Info" page. '), _defineProperty(_de$data, 'HELP_12_Desc_3', 'Unlock your wallet using your **encrypted** private key or JSON file. '), _defineProperty(_de$data, 'HELP_12_Desc_4', 'Go to the "My Wallets" page. '), _defineProperty(_de$data, 'HELP_12_Desc_5', 'Select the wallet you want to import into Mist, click the "View" icon, enter your password, and access your wallet. '), _defineProperty(_de$data, 'HELP_12_Desc_6', 'Find the "Download JSON file - Geth/Mist Format (encrypted)" section. Press the "Download" button below that. You now have your keystore file. '), _defineProperty(_de$data, 'HELP_12_Desc_7', 'Open the Ethereum Wallet application. '), _defineProperty(_de$data, 'HELP_12_Desc_8', 'In the menu bar, go "Accounts" -> "Backup" -> "Accounts" '), _defineProperty(_de$data, 'HELP_12_Desc_9', 'This will open your keystore folder. Copy the file you just downloaded (`UTC--2016-04-14......../`) into that keystore folder. '), _defineProperty(_de$data, 'HELP_12_Desc_10', 'Your account should show up immediately under "Accounts." '), _defineProperty(_de$data, 'HELP_12_Desc_11', 'Using your unencrypted private key... '), _defineProperty(_de$data, 'HELP_12_Desc_12', 'If you do not already have your unencrypted private key, navigate to the "View Wallet Details" page. '), _defineProperty(_de$data, 'HELP_12_Desc_13', 'Select your wallet file -or- enter/paste your private key to unlock your wallet. '), _defineProperty(_de$data, 'HELP_12_Desc_14', 'Copy Your Private Key (unencrypted). '), _defineProperty(_de$data, 'HELP_12_Desc_15', 'If you are on a Mac '), _defineProperty(_de$data, 'HELP_12_Desc_15b', 'Wenn du an einem PC bist '), _defineProperty(_de$data, 'HELP_12_Desc_16', 'Open Text Edit and paste this private key. '), _defineProperty(_de$data, 'HELP_12_Desc_17', 'Go to the menu bar and click "Format" -> "Make Plain Text". '), _defineProperty(_de$data, 'HELP_12_Desc_18', 'Save this file to your `desktop/` as `nothing_special_delete_me.txt`. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog. '), _defineProperty(_de$data, 'HELP_12_Desc_19', 'Open terminal and run the following command: `geth account import ~/Desktop/nothing_special_delete_me.txt` '), _defineProperty(_de$data, 'HELP_12_Desc_20', 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. '), _defineProperty(_de$data, 'HELP_12_Desc_21', 'After successful import, delete `nothing_special_delete_me.txt` '), _defineProperty(_de$data, 'HELP_12_Desc_22', 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". '), _defineProperty(_de$data, 'HELP_12_Desc_23', 'Open Notepad & paste the private key '), _defineProperty(_de$data, 'HELP_12_Desc_24', 'Save the file as `nothing_special_delete_me.txt` at `C:` '), _defineProperty(_de$data, 'HELP_12_Desc_25', 'Run the command, `geth account import C:\\nothing_special_delete_me.txt` '), _defineProperty(_de$data, 'HELP_12_Desc_26', 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. '), _defineProperty(_de$data, 'HELP_12_Desc_27', 'After successful import, delete `nothing_special_delete_me.txt` '), _defineProperty(_de$data, 'HELP_12_Desc_28', 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". '), _defineProperty(_de$data, 'HELP_13_Title', '13) What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean? '), _defineProperty(_de$data, 'HELP_13_Desc_1', 'This means you do not have enough Ether in your account to cover the cost of gas. Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. The number displayed is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`, and subtract the amount of Ether you were trying to send (if you were attempting to send Ether). This will give you the amount of Ether you need to send to that account to make the transaction. '), _defineProperty(_de$data, 'HELP_14_Title', '14) Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn\'t do this. Is the random number generation for MyEtherWallet safe? '), _defineProperty(_de$data, 'HELP_14_Desc_1', 'While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren\'t unsafe, it\'s just that we (and tons of other crypto experiments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here\'s a [conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). '), _defineProperty(_de$data, 'HELP_15_Title', '15) Why hasn\'t the account I just created show up in the blockchain explorer? (ie: etherchain, etherscan) '), _defineProperty(_de$data, 'HELP_15_Desc_1', 'Accounts will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it. '), _defineProperty(_de$data, 'HELP_16_Title', '16) How do I check the balance of my account? '), _defineProperty(_de$data, 'HELP_16_Desc_1', 'You can use a blockchain explorer like [etherscan.io](http://etherscan.io/). Paste your address into the search bar and it will pull up your address and transaction history. For example, here\'s what our [donation account](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) looks like on etherscan.io '), _defineProperty(_de$data, 'HELP_17_Title', '17) Why isn\'t my balance showing up when I unlock my wallet? '), _defineProperty(_de$data, 'HELP_17_Desc_1', 'This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like etherscan.io '), _defineProperty(_de$data, 'HELP_18_Title', '18) Where is my geth wallet file? '), _defineProperty(_de$data, 'HELP_19_Title', '19) Where is my Mist wallet file? '), _defineProperty(_de$data, 'HELP_19_Desc_1', 'Mist files are typically found in the file locations above, but it\'s much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored. '), _defineProperty(_de$data, 'HELP_20_Title', '20) Where is my pre-sale wallet file? '), _defineProperty(_de$data, 'HELP_20_Desc_1', 'Wherever you saved it. ;) It also was emailed to you, so check there. Look for the file called `"ethereum_wallet_backup.json"` and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale. '), _defineProperty(_de$data, 'HELP_21_Title', '21) Couldn\'t everybody put in random private keys, look for a balance, and send to their own address? '), _defineProperty(_de$data, 'HELP_21_Desc_1', 'Short version: yes, but finding an account with a balance would take longer than the universe...so...no. '), _defineProperty(_de$data, 'HELP_21_Desc_2', 'Long ELI5 Version: So Ethereum is based on [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), specifically [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf) which is very widely used, not just in Ethereum. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and a lot of other stuff. The Ethereum keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts. '), _defineProperty(_de$data, 'HELP_21_Desc_3', 'In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this cryptography means that if there is a way to go from public key to private key, your lost ether is the least of everyone’s problems. '), _defineProperty(_de$data, 'HELP_21_Desc_4', 'Now, that said, YES if someone else has your private key then they can indeed send ether from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers. You could download the Keystore version of your private key which is the private key that is encrypted with a password. This is like having a password that is also protected by another password. '), _defineProperty(_de$data, 'HELP_21_Desc_5', 'And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worthwhile - it is more likely you, and your great-grandchildren, will die before getting a match. '), _defineProperty(_de$data, 'HELP_21_Desc_6', 'If you know anything about Bitcoin, [this will put it in perspective:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion. '), _defineProperty(_de$data, 'HELP_21_Desc_7', '[If you want something a bit more technical:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space. '), _defineProperty(_de$data, 'HELP_21_Desc_8', 'Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria, as do Jaxx and Mist/geth. The Ethereum wallets are all pretty good. Keys generated by brainwallets do not, as a person\'s brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that\'s a separate issue that can wait for another day. '), _defineProperty(_de$data, 'HELP_SecCX_Title', 'Security - MyEtherWallet CX '), _defineProperty(_de$data, 'HELP_SecCX_Desc_1', 'Where is this extension saving my information? '), _defineProperty(_de$data, 'HELP_SecCX_Desc_2', 'The information you store in this Chrome Extension is saved via [chrome.storage](http://chrome.storage/). - this is the same place your passwords are saved when you save your password in Chrome. '), _defineProperty(_de$data, 'HELP_SecCX_Desc_3', 'What information is saved? '), _defineProperty(_de$data, 'HELP_SecCX_Desc_4', 'The address, nickname, private key is stored in chrome.storage. The private key is encrypted using the password you set when you added the wallet. The nickname and wallet address is not encrypted. '), _defineProperty(_de$data, 'HELP_SecCX_Desc_5', 'Why aren\'t the nickname and wallet address encrypted? '), _defineProperty(_de$data, 'HELP_SecCX_Desc_6', 'If we were to encrypt these items, you would need to enter a password each time you wanted to view your account balance or view the nicknames. If this concerns you, we recommend you use MyEtherWallet.com instead of this Chrome Extension. '), _defineProperty(_de$data, 'HELP_Sec_Title', 'Security '), _defineProperty(_de$data, 'HELP_Sec_Desc_1', 'If one of your first questions is "Why should I trust these people?", that is a good thing. Hopefully the following will help ease your fears. '), _defineProperty(_de$data, 'HELP_Sec_Desc_2', 'We\'ve been up and running since August 2015. If you search for ["myetherwallet" on reddit](https://www.reddit.com/search?q=myetherwallet), you can see numerous people who use us with great success. '), _defineProperty(_de$data, 'HELP_Sec_Desc_3', 'We aren\'t going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" pages are completely client-side. That means that all the code is executed on ** your computer** and it is never saved and transmitted anywhere. '), _defineProperty(_de$data, 'HELP_Sec_Desc_4', 'Check the URL -- This site is being served through GitHub and you can see the source code here: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) to [https://www.myetherwallet.com](https://www.myetherwallet.com). '), _defineProperty(_de$data, 'HELP_Sec_Desc_5', 'For generating wallets, you can download the [source code and run it locally](https://github.com/kvhnuke/etherwallet/releases/latest). See #5 above. '), _defineProperty(_de$data, 'HELP_Sec_Desc_6', 'Generate a test wallet and check and see what network activity is happening. The easiest way for you to do this is to right click on the page and click "inspect element". Go to the "Network" tab. Generate a test wallet. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred. '), _defineProperty(_de$data, 'HELP_Sec_Desc_8', 'If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line or run a full node. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks! '), _defineProperty(_de$data, 'HELP_FAQ_Title', 'More Helpful Answers to Frequent Questions '), _defineProperty(_de$data, 'HELP_Contact_Title', 'Ways to Get in Touch'), _de$data);

module.exports = de;

},{}],88:[function(require,module,exports){
// Greek
'use strict';

var _el$data;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var el = function el() {};
el.code = 'el';
el.data = (_el$data = {

  /* Navigation*/
  NAV_AddWallet: 'Προσθήκη Πορτοφολιού ',
  NAV_BulkGenerate: 'Δημιουργία Πολλών Πορτοφολιών ',
  NAV_Contact: 'Επικοινωνία ',
  NAV_Contracts: 'Contracts ',
  NAV_DeployContract: 'Deploy Contract ',
  NAV_ENS: 'ENS',
  NAV_GenerateWallet: 'Δημηουργία Πορτοφολιού ',
  NAV_Help: 'Βοήθεια ',
  NAV_InteractContract: 'Interact with Contract ',
  NAV_Multisig: 'Multisig ',
  NAV_MyWallets: 'Τα Πορτοφόλια μου ',
  NAV_Offline: 'Αποστολή εκτός Σύνδεσης ',
  NAV_SendEther: 'Αποστολή Ether και Tokens ',
  NAV_SendTokens: 'Αποστολή Tokens ',
  NAV_SignMsg: 'Sign Message ',
  NAV_Swap: 'Swap ',
  NAV_ViewWallet: 'Προβολή Πληροφοριών Πορτοφολιού ',
  NAV_YourWallets: 'Τα Πορτοφόλια σας ',

  /* General */
  x_Access: 'Access ',
  x_AddessDesc: 'Γνωστή και ως "Αριθμός Λογαριασμού" σας ή "Δημόσιο Κλειδί" σας. Αυτή δίνετε σε όσους επιθυμούν να σας στείλουν ether. Το εικονίδιο είναι ένας εύκολος τρόπος αναγνώρισης της διεύθυνσής σας. ',
  x_Address: 'Η Διεύθυνσή σας ',
  x_Cancel: 'Ακύρωση ',
  x_CSV: 'Αρχείο CSV (μη κρυπτογραφημένο) ',
  x_Download: 'Λήψη ',
  x_Json: 'Αρχείο JSON (μη κρυπτογραφημένο) ',
  x_JsonDesc: 'Αυτή είναι η μη κρυπτογραφημένη, JSON μορφή του Ιδιωτικού Κλειδιού σας. Αυτό σημαίνει ότι δεν απαιτείται κωδικός όμως οποιοσδήποτε βρει το JSON σας έχει πρόσβαση στο πορτοφόλι και τα Ether σας χωρίς κωδικό. ',
  x_Keystore: 'Αρχείο Keystore (UTC / JSON · Συνιστάται · Κρυπτογραφημένο) ',
  x_Keystore2: 'Αρχείο Keystore (UTC / JSON) ',
  x_KeystoreDesc: 'Αυτό το Αρχείο Keystore έχει την ίδια μορφή που χρησιμοποιείται από το Mist ώστε να μπορείτε εύκολα να το εισάγετε στο μέλλον. Είναι το συνιστώμενο αρχείο για λήψη και δημιουργία αντιγράφου ασφαλείας. ',
  x_Mnemonic: 'Mnemonic Phrase ',
  x_ParityPhrase: 'Parity Phrase ',
  x_Password: 'Κωδικός ',
  x_Print: 'Εκτύπωση Χάρτινου Πορτοφολιού ',
  x_PrintDesc: 'Συμβουλή: Κλικάρετε "Εκτύπωση και Αποθήκευση ως PDF" ακόμη κι αν δεν έχετε εκτυπωτή! ',
  x_PrintShort: 'Εκτύπωση ',
  x_PrivKey: 'Ιδιωτικό Κλειδί (μη κρυπτογραφημένο) ',
  x_PrivKey2: 'Ιδιωτικό Κλειδί ',
  x_PrivKeyDesc: 'Αυτό το κείμενο είναι η μη κρυπτογραφημένη εκδοχή του Ιδιωτικού Κλειδιού σας που σημαίνει ότι δεν απαιτείται κωδικός. Στην περίπτωση που κάποιος βρει το μη κρυπτογραφημένο Ιδιωτικό Κλειδί σας, έχει πρόσβαση στο πορτοφόλι σας χωρίς κωδικό. Για αυτόν τον λόγο, συνήθως συνιστώνται οι κρυπτογραφημένες εκδοχές. ',
  x_Save: 'Αποθήκευση ',
  x_TXT: 'Αρχείο TXT (μη κρυπτογραφημένο) ',
  x_Wallet: 'Πορτοφόλι ',

  /* Header */
  MEW_Warning_1: 'Πάντα να ελέγχετε την διεύθυνση URL προτού μπείτε στο πορτοφόλι σας ή δημιουργήσετε καινούριο πορτοφόλι. Προσοχή στις σελίδες ηλεκτρονικού ψαρέματος! ',
  CX_Warning_1: 'Σιγουρευτείτε ότι έχετε **εξωτερικά αντίγραφα ασφαλείας** όλων των πορτοφολιών που αποθηκεύετε εδώ. Μπορούν να συμβούν διάφορα που θα προκαλούσαν απώλεια των δεδομένων σας σε αυτήν την επέκταση Chrome, συμπεριλαμβανομένης απεγκατάστασης και επανεγκατάστασης της επέκτασης. Αυτή η επέκταση είναι ένας τρόπος εύκολης πρόσβασης στα πορτοφόλια σας και **όχι** ένας τρόπος να δημηιουργήσετε αντίγραφα ασφαλείας τους. ',
  MEW_Tagline: 'Ασφαλές Πορτοφόλι Ether Ανοιχτού Κώδικα JavaScript από την πλευρά του Πελάτη ',
  CX_Tagline: 'Επέκταση Chrome για Ασφαλές Πορτοφόλι Ether Ανοιχτού Κώδικα JavaScript από την πλευρά του Πελάτη ',

  /* Footer */
  FOOTER_1: 'Ένα εργαλείο ανοιχτού κώδικα, javascript, από πλευράς πελάτη για την δημιουργία Πορτοφολιών Ethereum & αποστολή συναλλαγών. ',
  FOOTER_1b: 'Δημιουργήθηκε από ',
  FOOTER_2: 'Εκτιμούμε πολύ τις δωρεές σας: ',
  FOOTER_3: 'Δημιουργία Πορτοφολιών από πλευράς πελάτη από ',
  FOOTER_4: 'Disclaimer ',

  /* Sidebar */
  sidebar_AccountInfo: 'Πληροφορίες Λογαριασμού ',
  sidebar_AccountAddr: 'Διεύθυνση Λογαριασμού ',
  sidebar_AccountBal: 'Υπόλοιπο Λογαριασμού ',
  sidebar_TokenBal: 'Υπόλοιπο Token ',
  sidebar_Equiv: 'Ισότιμες Αξίες ',
  sidebar_TransHistory: 'Ιστορικό Συναλλαγών ',
  sidebar_donation: 'Το MyEtherWallet είναι μία δωρεάν υπηρεσία ανοιχτού κώδικα αφοσιωμένη στην ιδιωτικότητα και την ασφάλεια σας. Όσο περισσότερες δωρεές λαμβάνουμε, τόσο περισσότερο χρόνο αφιερώνουμε στη δημιουργία νέων χαρακτηριστικών καθώς και την αξιολόγηση και εφαρμογή όσων μας προτείνετε. Είμαστε απλά δύο άνθρωποι που προσπαθούν να αλλάξουν τον κόσμο. Θα μας βοηθήσετε; ',
  sidebar_donate: 'Δωρεά ',
  sidebar_thanks: 'ΣΑΣ ΕΥΧΑΡΙΣΤΟΥΜΕ!!! ',

  /* Decrypt Panel */
  decrypt_Access: 'Πώς θα θέλατε να έχετε πρόσβαση στο Πορτοφόλι σας; ',
  decrypt_Title: 'Επιλέξτε την μορφή του Ιδιωτικού Κλειδιού σας: ',
  decrypt_Select: 'Επιλέξτε Πορτοφόλι: ',

  /* Add Wallet */
  ADD_Label_1: 'Τι θα θέλατε να κάνετε; ',
  ADD_Radio_1: 'Δημιουργία Νέου Πορτοφολιού ',
  ADD_Radio_2: 'Επιλέξτε το αρχείο Πορτοφολιού σας (Keystore / JSON) ',
  ADD_Radio_2_short: 'ΕΠΙΛΕΞΤΕ ΑΡΧΕΙΟ ΠΟΡΤΟΦΟΛΙΟΥ... ',
  ADD_Radio_3: 'Επικολλήστε/Πληκτρολογήστε το Ιδιωτικό Κλειδί σας ',
  ADD_Radio_4: 'Προσθήκη Λογαριασμού προς Παρακολούθηση ',
  ADD_Radio_5: 'Paste/Type Your Mnemonic ',
  ADD_Radio_5_Path: 'Select HD derivation path ',
  ADD_Radio_5_PathCustom: 'Custom',
  ADD_Label_2: 'Δημιουργία Ψευδωνύμου: ',
  ADD_Label_3: 'Το πορτοφόλι σας είναι κρυπτογραφημένο. Παρακαλώ εισάγετε τον κωδικό ',
  ADD_Label_4: 'Προσθήκη Λογαριασμού προς Παρακολούθηση ',
  ADD_Warning_1: 'Μπορείτε να προσθέσετε έναν λογαριασμό προς "παρακολούθηση" στην καρτέλα πορτοφολιών χωρίς να ανεβάσετε ιδιωτικό κλειδί. Αυτό ** δεν ** σημαίνει ότι έχετε πρόσβαση στο πορτοφόλι, ούτε ότι μπορείτε να μεταφέρετε Ether από αυτό. ',
  ADD_Label_5: 'Εισάγετε την Διεύθυνση ',
  ADD_Label_6: 'Ξεκλειδώστε το Πορτοφόλι σας ',
  ADD_Label_6_short: 'Ξεκλείδωμα ',
  ADD_Label_7: 'Προσθήκη Λογαριασμού ',

  /* Generate Wallets */
  GEN_desc: 'Αν επιθυμείτε να δημιουργήσετε πολλά πορτοφόλια, μπορείτε να το κάνετε εδώ: ',
  GEN_Label_1: 'Εισάγετε ισχυρό κωδικό (τουλάχιστον 9 χαρακτήρες) ',
  GEN_Placeholder_1: 'ΜΗΝ ξεχάσετε να τον αποθηκεύσετε! ',
  GEN_SuccessMsg: 'Επιτυχία! Το πορτοφόλι σας δημιουργήθηκε. ',
  GEN_Label_2: 'Αποθηκεύστε το αρχέιο Keystore/JSON ή το Ιδιωτικό Κλειδί. Μην ξεχάσετε τον παραπάνω κωδικό. ',
  GEN_Label_3: 'Αποθηκέυστε την Διεύθυνση σας. ',
  GEN_Label_4: 'Εκτυπώστε το χάρτινο Πορτοφόλι σας ή αποθηκέυστε την εκδοχή με QR code. (προαιρετικό) ',

  /* Bulk Generate Wallets */
  BULK_Label_1: 'Αριθμός Πορτοφολιών για Δημιουργία ',
  BULK_Label_2: 'Δημιουργία Πορτοφολιών ',
  BULK_SuccessMsg: 'Επιτυχία! Τα πορτοφόλια σας δημιουργήθηκαν. ',

  /* Sending Ether and Tokens */
  SEND_addr: 'Προς Διεύθυνση ',
  SEND_amount: 'Ποσό για αποστολή ',
  SEND_amount_short: 'Ποσό ',
  SEND_custom: 'Custom ',
  SEND_gas: 'Gas ',
  SEND_generate: 'Δημιουργία Υπογεγραμμένης Συναλλαγής ',
  SEND_raw: 'Ακατέργαστη Συναλλαγή ',
  SEND_signed: 'Υπογεγραμμένη Συναλλαγή ',
  SEND_trans: 'Αποστολή Συναλλαγής ',
  SEND_TransferTotal: 'Μεταφορά συνολικού διαθέσιμου υπολοίπου '
}, _defineProperty(_el$data, 'SEND_custom', 'Add Custom Token '), _defineProperty(_el$data, 'SENDModal_Title', 'Προσοχή! '), _defineProperty(_el$data, 'SENDModal_Content_1', 'Πρόκειται να στείλετε '), _defineProperty(_el$data, 'SENDModal_Content_2', 'στη διεύθυνση '), _defineProperty(_el$data, 'SENDModal_Content_3', 'Είστε σίγουροι ότι θέλετε να το κάνετε; '), _defineProperty(_el$data, 'SENDModal_Content_4', 'ΣΗΜΕΙΩΣΗ: Αν αντιμετωπίσετε σφάλμα, το πιο πιθανό χρειάζεται να προσθέσετε ether στον λογαριασμό σας για να καλύψετε το κόστος gas για την αποστολή token. Το gas πληρώνεται σε ether. '), _defineProperty(_el$data, 'SENDModal_No', 'Όχι, θέλω να φύγω από εδώ! '), _defineProperty(_el$data, 'SENDModal_Yes', 'Ναι, είμαι σίγουρος/η! Εκτελέστε την συναλλαγή. '), _defineProperty(_el$data, 'SEND_TransferTotal', 'Μεταφορά όλου του υπάρχοντος υπολοίπου '), _defineProperty(_el$data, 'TOKEN_Addr', 'Διεύθυνση '), _defineProperty(_el$data, 'TOKEN_Symbol', 'Σύμβολο Token '), _defineProperty(_el$data, 'TOKEN_Dec', 'Δεκαδικά '), _defineProperty(_el$data, 'TOKEN_hide', 'Hide Tokens '), _defineProperty(_el$data, 'TOKEN_show', 'Show All Tokens '), _defineProperty(_el$data, 'TRANS_desc', 'Άν επιθυμείτε να στείλετε Tokens, παρακαλώ χρησιμοποιήστε την σελίδα "Αποστολή Token". '), _defineProperty(_el$data, 'TRANS_warning', 'Άν χρησιμοποιείτε τις λειτουργίες "Μόνο ETH" ή "Μόνο ETC", η αποστολή γίνεται μέσω contracts. Ορισμένες υπηρεσίες παρουσιάζουν προβλήματα με την αποδοχή τέτοιων συναλλαγών. Διαβάστε περισσότερα. '), _defineProperty(_el$data, 'TRANS_advanced', '+Για προχωρημένους: Προσθήκη Data '), _defineProperty(_el$data, 'TRANS_data', 'Data '), _defineProperty(_el$data, 'TRANS_gas', 'Gas Limit '), _defineProperty(_el$data, 'TRANS_sendInfo', 'Μία standard συναλλαγή που χρησιμοποιεί 21000 gas θα κοστίσει 0,000441 ETH. Χρησιμοποιούμε για τιμή gas 0.000000021 ETH που είναι λίγο πάνω απο την ελάχιστη ώστε διασφαλίσουμε οτι θα επικυρωθεί γρήγορα. Δεν παίρνουμε προμήθεια για την συναλλαγή. '), _defineProperty(_el$data, 'TRANSModal_Title', 'Συναλλαγές "Μόνο ETH" και "Μόνο ETC" '), _defineProperty(_el$data, 'TRANSModal_Content_0', 'Μια σημείωση για τις διάφορετικές συναλλαγές και διαφορετικές υπηρεσίες συναλλαγών: '), _defineProperty(_el$data, 'TRANSModal_Content_1', '**ETH (Standard Συναλλαγή): ** This generates a default transaction directly from one address to another. It has a default gas of 21000. It is likely that any ETH sent via this method will be replayed onto the ETC chain. '), _defineProperty(_el$data, 'TRANSModal_Content_2', '**Μόνο ETH: ** This sends via [Timon Rapp\'s replay protection contract (as recommended by VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) so that you only send on the **ETH** chain. '), _defineProperty(_el$data, 'TRANSModal_Content_3', '**Μόνο ETC: ** This sends via [Timon Rapp\'s replay protection contract (as recommended by VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) so that you only send on the **ETC** chain. '), _defineProperty(_el$data, 'TRANSModal_Content_4', '**Coinbase & ShapeShift: ** Αποστέλλετε μόνο με Standard Συναλλαγή. Αν στείλετε με τα "Μόνο" contracts, θα χρεαιστεί να έρθετε σε επφή με το προσωπικό υποστήριξης τους ώστε να σας βοηθήσουν με χειροκίνητη μεταφορά υπολοίπων ή επιστροφή χρημάτων.[Μπορείτε επίσης να δοκιμάσετε το εργαλείο "διαχωρισμού" του Shapeshift](https://split.shapeshift.io/) '), _defineProperty(_el$data, 'TRANSModal_Content_5', '**Kraken & Poloniex:** Δεν υπάρχουν γνωστά προβλήματα. Αποστέλλετε με οποιαδήποτε μέθοδο. '), _defineProperty(_el$data, 'TRANSModal_Yes', 'Τέλεια, το κατάλαβα. '), _defineProperty(_el$data, 'TRANSModal_No', 'Πωπω, μπερδεύτηκα ακόμη περισσότερο. Βοηθήστε με. '), _defineProperty(_el$data, 'OFFLINE_Title', 'Δημιουργία και Αποστολή Συναλλαγής εκτός Σύνδεσης '), _defineProperty(_el$data, 'OFFLINE_Desc', 'Η δημιουργία συναλλαγών εκτός σύνδεσης μπορεί να γίνει σε τρία βήματα. Θα προβείτε στα βήματα 1 και 3 σε έναν συνδεδεμένο υπολογιστή και το βήμα 2 σε έναν εκτός σύνδεσης/αποκομμένο υπολογιστή. Αυτό εξασφαλίζει ότι τα ιδιωτικά κλειδιά σας δεν έρχονται σε επαφή με συσκευή συνδεδεμένη στο διαδίκτυο. '), _defineProperty(_el$data, 'OFFLLINE_Step1_Title', 'Βήμα 1: Δημιουργία Πληροφοριών (Συνδεδεμένος Υπολογιστής) '), _defineProperty(_el$data, 'OFFLINE_Step1_Button', 'Δημιουργία Πληροφοριών '), _defineProperty(_el$data, 'OFFLINE_Step1_Label_1', 'Από Διεύθυνση: '), _defineProperty(_el$data, 'OFFLINE_Step1_Label_2', 'Σημείωση: Αυτή είναι η Διεύθυνση ΑΠΟΣΤΟΛΕΑ, ΟΧΙ η Διεύθυνση. Το nonce δημιουργείται απο τον λογαριασμό προέλευσης. Αν χρησιμοποιείται αποκομμένο υπολογιστή, πρόκειται για την διεύθυνση του λογαριασμού σε cold-storage. '), _defineProperty(_el$data, 'OFFLINE_Step2_Title', 'Step 2: Δημιουργία Συναλλαγής (εκτός Σύνδεσης Υπολογιστής) '), _defineProperty(_el$data, 'OFFLINE_Step2_Label_1', 'Προς Διεύθυνση '), _defineProperty(_el$data, 'OFFLINE_Step2_Label_2', 'Αξία / Ποσό για Αποστολή '), _defineProperty(_el$data, 'OFFLINE_Step2_Label_3', 'Τιμή Gas '), _defineProperty(_el$data, 'OFFLINE_Step2_Label_3b', 'Εμφανίστηκε στο Βήμα 1 στον συνδεδεμένο υπολογιστή σας. '), _defineProperty(_el$data, 'OFFLINE_Step2_Label_4', 'Όριο Gas '), _defineProperty(_el$data, 'OFFLINE_Step2_Label_4b', '21000 είναι το προεπιλεγμένο όριο gas. When you send contracts or add\'l data, this may need to be different. Any unused gas will be returned to you. '), _defineProperty(_el$data, 'OFFLINE_Step2_Label_5', 'Nonce '), _defineProperty(_el$data, 'OFFLINE_Step2_Label_5b', 'Εμφανίστηκε στο Βήμα 1 στον συνδεδεμένο υπολογιστή σας. '), _defineProperty(_el$data, 'OFFLINE_Step2_Label_6', 'Data '), _defineProperty(_el$data, 'OFFLINE_Step2_Label_6b', 'Αυτό είναι προαιρετικό. Data συνήθως χρησιμοποιούνται όταν αποστέλλονται συναλλαγές σε contracts. '), _defineProperty(_el$data, 'OFFLINE_Step2_Label_7', 'Εισαγωγή / Επιλογή του Ιδιωτικού Κλειδιού / JSON. '), _defineProperty(_el$data, 'OFFLINE_Step3_Title', 'Βήμα 3: Δημοσίευση Συναλλαγής (Συνδεδεμένος Υπολογιστής) '), _defineProperty(_el$data, 'OFFLINE_Step3_Label_1', 'Επικολλήστε την υπογεγραμμένη συναλλαγή εδώ και πατήστε το κουμπί "ΑΠΟΣΤΟΛΗ ΣΥΝΑΛΛΑΓΗΣ". '), _defineProperty(_el$data, 'MYWAL_Nick', 'Ψευδώνυμο Πορτοφολιού '), _defineProperty(_el$data, 'MYWAL_Address', 'Διεύθυνση Πορτοφολιού '), _defineProperty(_el$data, 'MYWAL_Bal', 'Υπόλοιπο '), _defineProperty(_el$data, 'MYWAL_Edit', 'Επεξεργασία '), _defineProperty(_el$data, 'MYWAL_View', 'Προβολή '), _defineProperty(_el$data, 'MYWAL_Remove', 'Αφαίρεση '), _defineProperty(_el$data, 'MYWAL_RemoveWal', 'Αφαίρεση Πορτοφολιού: '), _defineProperty(_el$data, 'MYWAL_WatchOnly', 'Οι Μόνο-προς-παρακολούθηση-Λογαριασμοί '), _defineProperty(_el$data, 'MYWAL_Viewing', 'Προβάλλεται το Πορτοφόλι '), _defineProperty(_el$data, 'MYWAL_Hide', 'Απόκρυψη Πληροφοριών Πορτοφολιού '), _defineProperty(_el$data, 'MYWAL_Edit', 'Επεξεργασία Πορτοφολιού '), _defineProperty(_el$data, 'MYWAL_Name', 'Όνομα Πορτοφολιού '), _defineProperty(_el$data, 'MYWAL_Content_1', 'Προσοχή! Πρόκειται να αφαιρέσετε το πορτοφόλι σας. '), _defineProperty(_el$data, 'MYWAL_Content_2', 'Σιγουρευτείτε ότι έχετε **αποθηκεύσει το αρχέιο Keystore/JSON και τον κωδικό** του πορτοφολιού αυτού πριν το αφαιρέσετε. '), _defineProperty(_el$data, 'MYWAL_Content_3', 'Αν θέλετε να χρησιμοποιήσετε το ποροτοφόλι αυτό με το MyEtherWalletCX στο μέλλον, θα χρειαστεί να το ξαναπροσθέσετε χειροκίνητα χρησιμοποιώντας το Ιδιωτικό Κλειδί/JSON και τον κωδικό. '), _defineProperty(_el$data, 'VIEWWALLET_Subtitle', 'Αυτό σας επιτρέπει να κατεβάσετε διαφορετικές εκδοχές των ιδιωτικών κλειδιών σας και να επανεκτυπώσετε το χάρτινο πορτοφόλι σας. Ίσως επιθυμείτε να το κάνετε προκειμένου να [εισάγετε τον Λογαριασμό σας στο Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Αν επιθυμείτε να ελέγξετε το υπόλοιπό σας, συνιστούμε να χρησιμοποιήσετε ένα εργαλείο εξερεύνησης blockchain όπως το [etherscan.io](http://etherscan.io/). '), _defineProperty(_el$data, 'VIEWWALLET_Subtitle_Short', 'Αυτό σας επιτρέπει να κατεβάσετε διαφορετικές εκδοχές των ιδιωτικών κλειδιών σας και να επανεκτυπώσετε το χάρτινο πορτοφόλι σας. '), _defineProperty(_el$data, 'VIEWWALLET_SuccessMsg', 'Επιτυχία! Εδώ είναι οι πληροφορίες για το πορτοφόλι σας. '), _defineProperty(_el$data, 'CX_error_1', 'Δεν έχετε αποθηκευμένα πορτοφόλια. Κάντε κλικ στο ["Προσθήκη Πορτοφολιού"](/cx-wallet.html#add-wallet) για να προσθεσετε ένα! '), _defineProperty(_el$data, 'CX_quicksend', 'ΤαχυΑποστολή '), _defineProperty(_el$data, 'NODE_Title', 'Set Up Your Custom Node'), _defineProperty(_el$data, 'NODE_Subtitle', 'To connect to a local node...'), _defineProperty(_el$data, 'NODE_Warning', 'Your node must be HTTPS in order to connect to it via MyEtherWallet.com. You can [download the MyEtherWallet repo & run it locally](https://github.com/kvhnuke/etherwallet/releases/latest) to connect to any node. Or, get free SSL certificate via [LetsEncrypt](https://letsencrypt.org/)'), _defineProperty(_el$data, 'NODE_Name', 'Node Name'), _defineProperty(_el$data, 'NODE_Port', 'Node Port'), _defineProperty(_el$data, 'NODE_CTA', 'Save & Use Custom Node'), _defineProperty(_el$data, 'CONTRACT_Title', 'Contract Address '), _defineProperty(_el$data, 'CONTRACT_Title_2', 'Select Existing Contract '), _defineProperty(_el$data, 'CONTRACT_Json', 'ABI / JSON Interface '), _defineProperty(_el$data, 'CONTRACT_Interact_Title', 'Read / Write Contract '), _defineProperty(_el$data, 'CONTRACT_Interact_CTA', 'Select a function '), _defineProperty(_el$data, 'CONTRACT_ByteCode', 'Byte Code '), _defineProperty(_el$data, 'CONTRACT_Read', 'READ '), _defineProperty(_el$data, 'CONTRACT_Write', 'WRITE '), _defineProperty(_el$data, 'DEP_generate', 'Generate Bytecode '), _defineProperty(_el$data, 'DEP_generated', 'Generated Bytecode '), _defineProperty(_el$data, 'DEP_signtx', 'Sign Transaction '), _defineProperty(_el$data, 'DEP_interface', 'Generated Interface '), _defineProperty(_el$data, 'SWAP_rates', "Current Rates "), _defineProperty(_el$data, 'SWAP_init_1', "I want to swap my "), _defineProperty(_el$data, 'SWAP_init_2', " for "), _defineProperty(_el$data, 'SWAP_init_CTA', "Let's do this! "), _defineProperty(_el$data, 'SWAP_information', "Your Information "), _defineProperty(_el$data, 'SWAP_send_amt', "Amount to send "), _defineProperty(_el$data, 'SWAP_rec_amt', "Amount to receive "), _defineProperty(_el$data, 'SWAP_your_rate', "Your rate "), _defineProperty(_el$data, 'SWAP_rec_add', "Your Receiving Address "), _defineProperty(_el$data, 'SWAP_start_CTA', "Start Swap "), _defineProperty(_el$data, 'SWAP_ref_num', "Your reference number "), _defineProperty(_el$data, 'SWAP_time', "Time remaining to send "), _defineProperty(_el$data, 'SWAP_progress_1', "Order Initiated "), _defineProperty(_el$data, 'SWAP_progress_2', "Waiting for your "), _defineProperty(_el$data, 'SWAP_progress_3', "Received! "), _defineProperty(_el$data, 'SWAP_progress_4', "Sending your {{orderResult.output.currency}} "), _defineProperty(_el$data, 'SWAP_progress_5', "Order Complete "), _defineProperty(_el$data, 'SWAP_order_CTA', "Please send "), _defineProperty(_el$data, 'SWAP_unlock', "Unlock your wallet to send ETH or Tokens directly from this page. "), _defineProperty(_el$data, 'MSG_message', 'Message '), _defineProperty(_el$data, 'MSG_date', 'Date '), _defineProperty(_el$data, 'MSG_signature', 'Signature '), _defineProperty(_el$data, 'MSG_verify', 'Verify Message '), _defineProperty(_el$data, 'MSG_info1', 'Include the current date so the signature cannot be reused on a different date. '), _defineProperty(_el$data, 'MSG_info2', 'Include your nickname and where you use the nickname so someone else cannot use it. '), _defineProperty(_el$data, 'MSG_info3', 'Include a specific reason for the message so it cannot be reused for a different purpose. '), _defineProperty(_el$data, 'MNEM_1', 'Please select the address you would like to interact with. '), _defineProperty(_el$data, 'MNEM_2', 'Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. '), _defineProperty(_el$data, 'MNEM_more', 'More Addresses '), _defineProperty(_el$data, 'MNEM_prev', 'Previous Addresses '), _defineProperty(_el$data, 'x_Ledger', 'Ledger Nano S '), _defineProperty(_el$data, 'ADD_Ledger_1', 'Connect your Ledger Nano S '), _defineProperty(_el$data, 'ADD_Ledger_2', 'Open the Ethereum application (or a contract application) '), _defineProperty(_el$data, 'ADD_Ledger_3', 'Verify that Browser Support is enabled in Settings '), _defineProperty(_el$data, 'ADD_Ledger_4', 'If no Browser Support is found in settings, verify that you have [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) '), _defineProperty(_el$data, 'ADD_Ledger_0a', 'Re-open MyEtherWallet on a secure (SSL) connection '), _defineProperty(_el$data, 'ADD_Ledger_0b', 'Re-open MyEtherWallet using [Chrome](https://www.google.com/chrome/browser/desktop/) or [Opera](https://www.opera.com/) '), _defineProperty(_el$data, 'ADD_Ledger_scan', 'Connect to Ledger Nano S '), _defineProperty(_el$data, 'x_Trezor', 'TREZOR '), _defineProperty(_el$data, 'ADD_Trezor_scan', 'Connect to TREZOR '), _defineProperty(_el$data, 'ADD_Trezor_select', 'This is a TREZOR seed '), _defineProperty(_el$data, 'ERROR_0', 'Παρακαλώ εισάγετε έγκυρο ποσό. '), _defineProperty(_el$data, 'ERROR_1', 'Ο κωδικός σας πρέπει να αποτελείται απο τουλάχιστον 9 χαρακτήρες. Παρακαλώ σιγουρευτείτε ότι είναι ισχυρός κωδικός. '), _defineProperty(_el$data, 'ERROR_2', 'Συγγνώμη! Δεν αναγνωρίζουμε αυτού του είδους αρχεία πορτοφολιού '), _defineProperty(_el$data, 'ERROR_3', 'Αυτό δεν είναι έγκυρο αρχείο πορτοφολιού. '), _defineProperty(_el$data, 'ERROR_4', 'Αυτή η μονάδα δεν υπάρχει, παρακαλώ χρησιμοποιήστε μία απο τις ακόλουθες μονάδες: '), _defineProperty(_el$data, 'ERROR_5', 'Λάθος Διεύθυνση. '), _defineProperty(_el$data, 'ERROR_6', 'Λάθος κωδικός. '), _defineProperty(_el$data, 'ERROR_7', 'Λάθος ποσό. (Must be integer. Try 0-18.) '), _defineProperty(_el$data, 'ERROR_8', 'Λάθος όριο gas. (Must be integer. Try 21000-4000000.) '), _defineProperty(_el$data, 'ERROR_9', 'Λάθος data value. (Must be hex.) '), _defineProperty(_el$data, 'ERROR_10', 'Λάθος ποσό gas. (Must be integer. Try 20 GWEI / 20000000000 WEI.) '), _defineProperty(_el$data, 'ERROR_11', 'Λάθος nonce. (Must be integer.) '), _defineProperty(_el$data, 'ERROR_12', 'Λάθος υπογεγραμμένη συναλλαγή. '), _defineProperty(_el$data, 'ERROR_13', 'Υπάρχει ήδη πορτοφόλι με αυτό το ψευδώνυμο. '), _defineProperty(_el$data, 'ERROR_14', 'Δεν βρέθηκε πορτοφόλι. '), _defineProperty(_el$data, 'ERROR_15', 'Φαίνετα να μην υπάρχει ακόμη πρόταση με αυτό το ID ή υπήρξε σφάλμα κατά την ανάγνωση της πρότασης αυτής. '), _defineProperty(_el$data, 'ERROR_16', 'Υπάρχει ήδη αποθηκευμένο πορτοφόλι με αυτή την διεύθυνση. Παρακαλώ ελέγξτε την σελίδα πορτοφολιών σας. '), _defineProperty(_el$data, 'ERROR_17', 'Account you are sending from does not have enough funds. If sending tokens, you must have 0.01 ETH in your account to cover the cost of gas. '), _defineProperty(_el$data, 'ERROR_18', 'Όλο το gas θα είχε δαπανηθεί στην συναλλαγή αυτή. Αυτό σημαίνει ότι έχετε ήδη ψηφίσει στην πρόταση αυτή ή ότι η περίοδος συζήτησης έχει λήξει. '), _defineProperty(_el$data, 'ERROR_19', 'Λάθος σύμβολο '), _defineProperty(_el$data, 'ERROR_20', 'Not a valid ERC-20 token'), _defineProperty(_el$data, 'ERROR_21', 'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.'), _defineProperty(_el$data, 'ERROR_22', 'Please enter a valid node name'), _defineProperty(_el$data, 'ERROR_23', 'Please enter a valid URL. If you are on https, your URL must be https'), _defineProperty(_el$data, 'ERROR_24', 'Please enter a valid port. '), _defineProperty(_el$data, 'ERROR_25', 'Please enter a valid chain ID. '), _defineProperty(_el$data, 'ERROR_26', 'Please enter a valid ABI. '), _defineProperty(_el$data, 'ERROR_27', 'Minimum amount: 0.01. Max amount: '), _defineProperty(_el$data, 'ERROR_28', 'Προκειμένου να έχετε πρόσβαση σε αυτό το πορτοφόλι στο μέλλον **είναι απαραίτητο το αρχείο Keystore/JSON & ο κωδικός ή το Ιδιωτικό Κλειδί σας**. Παρακαλούμε κρατήστε ένα εξωτερικό αντίγραφο ασφαλείας! Δεν υπάρχει τρόπος ανάκτησης ενός πορτοφολιού άν δεν το αποθηκέυσετε. Διαβάστε την σελίδα [Βοήθειας](https://www.myetherwallet.com/#help) για οδηγίες. '), _defineProperty(_el$data, 'ERROR_29', 'Please enter valid user and password '), _defineProperty(_el$data, 'ERROR_30', 'Please enter a valid name (7+ characters, limited punctuation) '), _defineProperty(_el$data, 'ERROR_31', 'Please enter a valid secret phrase. '), _defineProperty(_el$data, 'ERROR_32', 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.'), _defineProperty(_el$data, 'ERROR_34', 'The name you are attempting to reveal does not match the name you have entered. '), _defineProperty(_el$data, 'SUCCESS_1', 'Έγκυρη διεύθυνση '), _defineProperty(_el$data, 'SUCCESS_2', 'Το πορτοφόλι αποκρυπτογραφήθηκε επιτυχώς '), _defineProperty(_el$data, 'SUCCESS_3', 'TX was broadcast to the blockchain. Click to see your transaction & verify it was mined and does not have any out of gas or contract execution errors.  TX ID:  '), _defineProperty(_el$data, 'SUCCESS_4', 'Το πορτοφόλι σας προστέθηκε επιτυχώς '), _defineProperty(_el$data, 'SUCCESS_5', 'File Selected '), _defineProperty(_el$data, 'SUCCESS_6', 'You are successfully connected '), _defineProperty(_el$data, 'SUCCESS_7', 'Message Signature Verified'), _defineProperty(_el$data, 'GETH_InvalidSender', 'Invalid sender '), _defineProperty(_el$data, 'GETH_Nonce', 'Nonce too low '), _defineProperty(_el$data, 'GETH_Cheap', 'Gas price too low for acceptance '), _defineProperty(_el$data, 'GETH_Balance', 'Insufficient balance '), _defineProperty(_el$data, 'GETH_NonExistentAccount', 'Account does not exist or account balance too low '), _defineProperty(_el$data, 'GETH_InsufficientFunds', 'Insufficient funds for gas * price + value '), _defineProperty(_el$data, 'GETH_IntrinsicGas', 'Intrinsic gas too low '), _defineProperty(_el$data, 'GETH_GasLimit', 'Exceeds block gas limit '), _defineProperty(_el$data, 'GETH_NegativeValue', 'Negative value '), _defineProperty(_el$data, 'PARITY_AlreadyImported', "Transaction with the same hash was already imported."), _defineProperty(_el$data, 'PARITY_Old', "Transaction nonce is too low. Try incrementing the nonce."), _defineProperty(_el$data, 'PARITY_TooCheapToReplace', "Transaction fee is too low. There is another transaction with same nonce in the queue. Try increasing the fee or incrementing the nonce."), _defineProperty(_el$data, 'PARITY_LimitReached', "There are too many transactions in the queue. Your transaction was dropped due to limit. Try increasing the fee."), _defineProperty(_el$data, 'PARITY_InsufficientGasPrice', "Transaction fee is too low. It does not satisfy your node's minimal fee (minimal: {}, got: {}). Try increasing the fee."), _defineProperty(_el$data, 'PARITY_InsufficientBalance', "Insufficient funds. Account you try to send transaction from does not have enough funds. Required {} and got: {}."), _defineProperty(_el$data, 'PARITY_GasLimitExceeded', "Transaction cost exceeds current gas limit. Limit: {}, got: {}. Try decreasing supplied gas."), _defineProperty(_el$data, 'PARITY_InvalidGasLimit', "Supplied gas is beyond limit."), _defineProperty(_el$data, 'WARN_Send_Link', 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. '), _defineProperty(_el$data, 'translate_version', '0.3 '), _defineProperty(_el$data, 'Translator_Desc', 'Ευχαριστούμε τους μεταφραστές μας '), _defineProperty(_el$data, 'TranslatorName_1', '[VitalikFanBoy#117](https://www.myetherwallet.com/?gaslimit=21000&to=0x245f27796a44d7e3d30654ed62850ff09ee85656&value=1.0#send-transaction) · '), _defineProperty(_el$data, 'TranslatorAddr_1', '0x245f27796a44d7e3d30654ed62850ff09ee85656 '), _defineProperty(_el$data, 'TranslatorName_2', 'LefterisJP  · '), _defineProperty(_el$data, 'TranslatorAddr_2', ''), _defineProperty(_el$data, 'TranslatorName_3', '[Nikos Vavoulas](https://www.myetherwallet.com/?gaslimit=21000&to=0x062711C89Bd46E9765CfF0b743Cb83a9dBA2d2d2&value=1.0#send-transaction) · '), _defineProperty(_el$data, 'TranslatorAddr_3', '0x062711C89Bd46E9765CfF0b743Cb83a9dBA2d2d2 '), _defineProperty(_el$data, 'TranslatorName_4', ''), _defineProperty(_el$data, 'TranslatorAddr_4', ''), _defineProperty(_el$data, 'TranslatorName_5', ''), _defineProperty(_el$data, 'TranslatorAddr_5', ''), _defineProperty(_el$data, 'HELP_Warning', 'If you created a wallet -or- downloaded the repo before **Dec. 31st, 2015**, please check your wallets &amp; download a new version of the repo. Click for details. '), _defineProperty(_el$data, 'HELP_Desc', 'Do you see something missing? Have another question? [Get in touch with us](mailto:support@myetherwallet.com), and we will not only answer your question, we will update this page to be more useful to people in the future! '), _defineProperty(_el$data, 'HELP_Remind_Title', 'Some reminders '), _defineProperty(_el$data, 'HELP_Remind_Desc_1', '**Ethereum, MyEtherWallet.com & MyEtherWallet CX, and some of the underlying Javascript libraries we use are under active development.** While we have thoroughly tested & tens of thousands of wallets have been successfully created by people all over the globe, there is always the remote possibility that something unexpected happens that causes your ETH to be lost. Please do not invest more than you are willing to lose, and please be careful. If something were to happen, we are sorry, but **we are not responsible for the lost Ether**. '), _defineProperty(_el$data, 'HELP_Remind_Desc_2', 'MyEtherWallet.com & MyEtherWallet CX are not "web wallets". You do not create an account or give us your Ether to hold onto. All data never leaves your computer/your browser. We make it easy for you to create, save, and access your information and interact with the blockchain. '), _defineProperty(_el$data, 'HELP_Remind_Desc_3', 'If you do not save your private key & password, there is no way to recover access to your wallet or the funds it holds.  Back them up in multiple physical locations &ndash; not just on your computer! '), _defineProperty(_el$data, 'HELP_0_Title', '0) Είμαι νέος χρήστης. Τι κάνω? '), _defineProperty(_el$data, 'HELP_0_Desc_1', 'Το MyEtherWallet σας δίνει την δυνατότητα να δημιουργήσετε νέα πορτοφόλια ώστε να μπορείτε να αποθηκεύσετε το Ether σας μόνοι σας, και όχι σε κάποιο ανταλλακτήριο (exchange provider). Αυτή η διαδικασία συμβαίνει εξ\'ολοκλήρου στον υπολογιστή σας, και όχι στους servers μας. Γι\'αυτό, όταν δημιουργείτε ένα νέο πορτοφόλι, **εσείς είστε υπεύθυνοι να κρατήσετε αντίγραφα ασφαλείας**. '), _defineProperty(_el$data, 'HELP_0_Desc_2', 'Δημιουργήστε ένα νέο πορτοφόλι. '), _defineProperty(_el$data, 'HELP_0_Desc_3', 'Κρατήστε αντίγραφο ασφαλείας ποτοφολιού. '), _defineProperty(_el$data, 'HELP_0_Desc_4', 'Επιβεβαιώστε ότι έχετε πρόσβαση στο νέο αυτό πορτοφόλι και ότι αποθηκεύσατε σωστά όλες τις απαραίτητες πληροφορίες. '), _defineProperty(_el$data, 'HELP_0_Desc_5', 'Μεταφέρετε Ether στο νέο αυτό πορτοφόλι. '), _defineProperty(_el$data, 'HELP_1_Title', '1) Πως φτιάχνω ένα νέο πορτοφόλι? '), _defineProperty(_el$data, 'HELP_1_Desc_1', 'Πηγαίνετε στην σελίδα "Δημιουργία Πορτοφολιού". '), _defineProperty(_el$data, 'HELP_1_Desc_2', 'Πηγαίνετε στην σελίδα "Προσθήκη Πορτοφολιού" & επιλέξτε "Δημιουργία Νέου Πορτοφολιού" '), _defineProperty(_el$data, 'HELP_1_Desc_3', 'Οληκτρολογήστε ένα δυνατό συνθηματικό (password). Αν νομίζετε ότι μπορεί να το ξεχάσετε, αποθηκεύστε το κάπου που να είναι ασφαλές. Θα χρειαστείτε αυτό το password για τις εξερχόμενες συναλλαγές σας. '), _defineProperty(_el$data, 'HELP_1_Desc_4', 'Κάντε κλικ στο "ΔΗΜΙΟΥΡΓΙΑ". '), _defineProperty(_el$data, 'HELP_1_Desc_5', 'Το πορτοφόλι σας δημιοθργήθηκε με επιτυχία. '), _defineProperty(_el$data, 'HELP_2a_Title', '2a) How do I save/backup my wallet? '), _defineProperty(_el$data, 'HELP_2a_Desc_1', 'You should always back up your wallet externally and in multiple physical locations - like on a USB drive and/or a piece of paper. '), _defineProperty(_el$data, 'HELP_2a_Desc_2', 'Save the address. You can keep it to yourself or share it with others. That way, others can transfer ether to you. '), _defineProperty(_el$data, 'HELP_2a_Desc_3', 'Save versions of the private key. Do not share it with anyone else. Your private key is necessary when you want to access your Ether to send it! There are 3 types of private keys: '), _defineProperty(_el$data, 'HELP_2a_Desc_4', 'Place your address, versions of the private key, and the PDF version of your paper wallet in a folder. Save this on your computer and a USB drive. '), _defineProperty(_el$data, 'HELP_2a_Desc_5', 'Print the wallet if you have a printer. Otherwise, write down your private key and address on a piece of paper. Store this as a secure location, separate from your computer and the USB drive. '), _defineProperty(_el$data, 'HELP_2a_Desc_6', 'Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood). '), _defineProperty(_el$data, 'HELP_2b_Title', '2b) How do I safely / offline / cold storage with MyEtherWallet? '), _defineProperty(_el$data, 'HELP_2b_Desc_1', 'Go to [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). '), _defineProperty(_el$data, 'HELP_2b_Desc_2', 'Click on `dist-vX.X.X.X.zip`. '), _defineProperty(_el$data, 'HELP_2b_Desc_3', 'Move zip to an airgapped computer. '), _defineProperty(_el$data, 'HELP_2b_Desc_4', 'Unzip it and double-click `index.html`. '), _defineProperty(_el$data, 'HELP_2b_Desc_5', 'Generate a wallet with a strong password. '), _defineProperty(_el$data, 'HELP_2b_Desc_6', 'Save the address. Save versions of the private key. Save the password if you might not remember it forever. '), _defineProperty(_el$data, 'HELP_2b_Desc_7', 'Store these papers / USBs in multiple physically separate locations. '), _defineProperty(_el$data, 'HELP_2b_Desc_8', 'Go to the "View Wallet Info" page and type in your private key / password to ensure they are correct and access your wallet. Check that the address you wrote down is the same. '), _defineProperty(_el$data, 'HELP_3_Title', '3) How do I verify I have access to my new wallet? '), _defineProperty(_el$data, 'HELP_3_Desc_1', '**Before you send any Ether to your new wallet**, you should ensure you have access to it. '), _defineProperty(_el$data, 'HELP_3_Desc_2', 'Navigate to the "View Wallet Info" page. '), _defineProperty(_el$data, 'HELP_3_Desc_3', 'Navigate to the MyEtherWallet.com "View Wallet Info" page. '), _defineProperty(_el$data, 'HELP_3_Desc_4', 'Select your wallet file -or- your private key and unlock your wallet. '), _defineProperty(_el$data, 'HELP_3_Desc_5', 'If the wallet is encrypted, a text box will automatically appear. Enter the password. '), _defineProperty(_el$data, 'HELP_3_Desc_6', 'Click the "Unlock Wallet" button. '), _defineProperty(_el$data, 'HELP_3_Desc_7', 'Your wallet information should show up. Find your account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet. '), _defineProperty(_el$data, 'HELP_3_Desc_8', 'If you are planning on holding a large amount of ether, we recommend that send a small amount of ether from new wallet before depositing a large amount. Send 0.001 ether to your new wallet, access that wallet, send that 0.001 ether to another address, and ensure everything works smoothly. '), _defineProperty(_el$data, 'HELP_4_Title', '4) How do I send Ether from one wallet to another? '), _defineProperty(_el$data, 'HELP_4_Desc_1', 'If you plan to move a large amount of ether, you should test sending a small amount to your wallet first to ensure everything goes as planned. '), _defineProperty(_el$data, 'HELP_4_Desc_2', 'Navigate to the "Αποστολή Ether και Tokens" page. '), _defineProperty(_el$data, 'HELP_4_Desc_3', 'Select your wallet file -or- your private key and unlock your wallet. '), _defineProperty(_el$data, 'HELP_4_Desc_4', 'If the wallet is encrypted, a text box will automatically appear. Enter the password. '), _defineProperty(_el$data, 'HELP_4_Desc_5', 'Click the "Unlock Wallet" button. '), _defineProperty(_el$data, 'HELP_4_Desc_6', 'Enter the address you would like to send to in the "To Address:" field. '), _defineProperty(_el$data, 'HELP_4_Desc_7', 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. '), _defineProperty(_el$data, 'HELP_4_Desc_9', 'Click "Generate Transaction". '), _defineProperty(_el$data, 'HELP_4_Desc_10', 'A couple more fields will appear. This is your browser generating the transaction. '), _defineProperty(_el$data, 'HELP_4_Desc_11', 'Click the blue "Send Transaction" button below that. '), _defineProperty(_el$data, 'HELP_4_Desc_12', 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. '), _defineProperty(_el$data, 'HELP_4_Desc_13', 'The transaction will be submitted. The TX ID will display. You can click that TX ID to see it on the blockchain. '), _defineProperty(_el$data, 'HELP_4CX_Title', '4) How do I send Ether using MyEtherWallet CX? '), _defineProperty(_el$data, 'HELP_4CX_Desc_1', 'First, you need to add a wallet. Once you have done that, you have 2 options: the "QuickSend" functionality from the Chrome Extension icon or the "Αποστολή Ether και Tokens" page. '), _defineProperty(_el$data, 'HELP_4CX_Desc_2', 'QuickSend: '), _defineProperty(_el$data, 'HELP_4CX_Desc_3', 'Click the Chrome Extension Icon. '), _defineProperty(_el$data, 'HELP_4CX_Desc_4', 'Click the "QuickSend" button. '), _defineProperty(_el$data, 'HELP_4CX_Desc_5', 'Select the wallet you wish to send from. '), _defineProperty(_el$data, 'HELP_4CX_Desc_6', 'Enter the address you would like to send to in the "To Address:" field. '), _defineProperty(_el$data, 'HELP_4CX_Desc_7', 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. '), _defineProperty(_el$data, 'HELP_4CX_Desc_8', 'Click "Send Transaction". '), _defineProperty(_el$data, 'HELP_4CX_Desc_9', 'Verify the address and the amount you are sending is correct. '), _defineProperty(_el$data, 'HELP_4CX_Desc_10', 'Enter the password for that wallet. '), _defineProperty(_el$data, 'HELP_4CX_Desc_11', 'Click "Send Transaction." '), _defineProperty(_el$data, 'HELP_4CX_Desc_12', 'Using "Αποστολή Ether και Tokens" Page '), _defineProperty(_el$data, 'HELP_5_Title', '5) How do I run MyEtherWallet.com offline/locally? '), _defineProperty(_el$data, 'HELP_5_Desc_1', 'You can run MyEtherWallet.com on your computer instead of from the GitHub servers. You can generate a wallet completely offline and send transactions from the "Offline Transaction" page. '), _defineProperty(_el$data, 'HELP_5_Desc_7', 'MyEtherWallet.com is now running entirely on your computer. '), _defineProperty(_el$data, 'HELP_5_Desc_8', 'In case you are not familiar, you need to keep the entire folder in order to run the website, not just `index.html`. Don\'t touch or move anything around in the folder. If you are storing a backup of the MyEtherWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact. '), _defineProperty(_el$data, 'HELP_5_Desc_9', 'As we are constantly updating MyEtherWallet.com, we recommend you periodically update your saved version of the repo. '), _defineProperty(_el$data, 'HELP_5CX_Title', '5) How can I install this extension from the repo instead of the Chrome Store? '), _defineProperty(_el$data, 'HELP_5CX_Desc_2', 'Click on `chrome-extension-vX.X.X.X.zip` and unzip it. '), _defineProperty(_el$data, 'HELP_5CX_Desc_3', 'Go to Google Chrome and find you settings (in the menu in the upper right). '), _defineProperty(_el$data, 'HELP_5CX_Desc_4', 'Click "Extensions" on the left. '), _defineProperty(_el$data, 'HELP_5CX_Desc_5', 'Check the "Developer Mode" button at the top of that page. '), _defineProperty(_el$data, 'HELP_5CX_Desc_6', 'Click the "Load unpacked extension..." button. '), _defineProperty(_el$data, 'HELP_5CX_Desc_7', 'Navigate to the now-unzipped folder that you downloaded earlier. Click "select". '), _defineProperty(_el$data, 'HELP_5CX_Desc_8', 'The extension should now show up in your extensions and in your Chrome Extension bar. '), _defineProperty(_el$data, 'HELP_7_Title', '7) How do I send Tokens & add custom tokens? '), _defineProperty(_el$data, 'HELP_7_Desc_0', '[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token. '), _defineProperty(_el$data, 'HELP_7_Desc_1', 'Navigate to the "Αποστολή Ether και Tokens" page. '), _defineProperty(_el$data, 'HELP_7_Desc_2', 'Unlock your wallet. '), _defineProperty(_el$data, 'HELP_7_Desc_3', 'Enter the address you would like to send to in the "To Address:" field. '), _defineProperty(_el$data, 'HELP_7_Desc_4', 'Enter the amount you would like to send. '), _defineProperty(_el$data, 'HELP_7_Desc_5', 'Select which token you would like to send. '), _defineProperty(_el$data, 'HELP_7_Desc_6', 'If you do not see the token listed: '), _defineProperty(_el$data, 'HELP_7_Desc_7', 'Click "Custom". '), _defineProperty(_el$data, 'HELP_7_Desc_8', 'Enter the address, name, and decimals of the token. These are provided by the developers of the token and are also needed when you "Add a Watch Token" to Mist. '), _defineProperty(_el$data, 'HELP_7_Desc_9', 'Click "Save". '), _defineProperty(_el$data, 'HELP_7_Desc_10', 'You can now send that token as well as see it\'s balance in the sidebar. '), _defineProperty(_el$data, 'HELP_7_Desc_11', 'Click "Generate Transaction". '), _defineProperty(_el$data, 'HELP_7_Desc_12', 'A couple more fields will appear. This is your browser generating the transaction. '), _defineProperty(_el$data, 'HELP_7_Desc_13', 'Click the blue "Send Transaction" button below that. '), _defineProperty(_el$data, 'HELP_7_Desc_14', 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. '), _defineProperty(_el$data, 'HELP_7_Desc_15', 'The transaction will be submitted. The TX ID will display. You can click that TX ID to see it on the blockchain. '), _defineProperty(_el$data, 'HELP_8_Title', '8) What happens if your site goes down? '), _defineProperty(_el$data, 'HELP_8_Desc_1', 'MyEtherWallet is not a web wallet. You don\'t have a login and nothing ever gets saved to our servers. It is simply an interface that allows you interact with the blockchain. '), _defineProperty(_el$data, 'HELP_8_Desc_2', 'If MyEtherWallet.com goes down, you would have to find another way (like geth or Ethereum Wallet / Mist) to do what we are doing. But you wouldn\'t have to "get" your Ether out of MyEtherWallet because it\'s not in MyEtherWallet. It\'s in whatever wallet your generated via our site. '), _defineProperty(_el$data, 'HELP_8_Desc_3', 'You can import your unencrypted private key and your Geth/Mist Format (encrypted) files directly into geth / Ethereum Wallet / Mist very easily now. See question #12 below. '), _defineProperty(_el$data, 'HELP_8_Desc_4', 'In addition, the likelihood of us taking MyEtherWallet down is slim to none. It costs us almost nothing to maintain as we aren\'t storing any information. If we do take the domain down, it still is, and always will be, publicly available at [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). You can download the ZIP there and run it locally. '), _defineProperty(_el$data, 'HELP_8CX_Title', '8) What happens if MyEtherWallet CX disappears? '), _defineProperty(_el$data, 'HELP_8CX_Desc_1', 'First, all data is saved on your computer, not our servers. I know it can be confusing, but when you look at the Chrome Extension, you are NOT looking at stuff saved on our servers somewhere - it\'s all saved on your own computer. '), _defineProperty(_el$data, 'HELP_8CX_Desc_2', 'That said, it is **very important** that you back up all your information for any new wallets generated with MyEtherWallet CX. That way if anything happens to MyEtherWallet CX or your computer, you still have all the information necessary to access your Ether. See the #2a for how to back up your wallets. '), _defineProperty(_el$data, 'HELP_8CX_Desc_3', 'If for some reason MyEtherWallet CX disappears from the Chrome Store, you can find the source on Github and load it manually. See #5 above. '), _defineProperty(_el$data, 'HELP_9_Title', '9) Is the "Αποστολή Ether και Tokens" page offline? '), _defineProperty(_el$data, 'HELP_9_Desc_1', 'No. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times. '), _defineProperty(_el$data, 'HELP_10_Title', '10) How do I make an offline transaction? '), _defineProperty(_el$data, 'HELP_10_Desc_1', 'Navigate to the "Offline Transaction" page via your online computer. '), _defineProperty(_el$data, 'HELP_10_Desc_2', 'Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price. '), _defineProperty(_el$data, 'HELP_10_Desc_3', 'Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send. '), _defineProperty(_el$data, 'HELP_10_Desc_4', 'Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1. '), _defineProperty(_el$data, 'HELP_10_Desc_5', 'Enter the "NONCE" as it was displayed to you on your online computer in step #1. '), _defineProperty(_el$data, 'HELP_10_Desc_6', 'The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you. '), _defineProperty(_el$data, 'HELP_10_Desc_7', 'If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format. '), _defineProperty(_el$data, 'HELP_10_Desc_8', 'Select your wallet file -or- your private key and unlock your wallet. '), _defineProperty(_el$data, 'HELP_10_Desc_9', 'Press the "GENERATE SIGNED TRANSACTION" button. '), _defineProperty(_el$data, 'HELP_10_Desc_10', 'The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer. '), _defineProperty(_el$data, 'HELP_10_Desc_11', 'On your online computer, paste the signed transaction into the text field in step #3 and click send. This will broadcast your transaction. '), _defineProperty(_el$data, 'HELP_12_Title', '12) How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist? '), _defineProperty(_el$data, 'HELP_12_Desc_1', 'Using an Geth/Mist JSON file from MyEtherWallet v2+.... '), _defineProperty(_el$data, 'HELP_12_Desc_2', 'Go to the "View Wallet Info" page. '), _defineProperty(_el$data, 'HELP_12_Desc_3', 'Unlock your wallet using your **encrypted** private key or JSON file. '), _defineProperty(_el$data, 'HELP_12_Desc_4', 'Go to the "My Wallets" page. '), _defineProperty(_el$data, 'HELP_12_Desc_5', 'Select the wallet you want to import into Mist, click the "View" icon, enter your password, and access your wallet. '), _defineProperty(_el$data, 'HELP_12_Desc_6', 'Find the "Download JSON file - Geth/Mist Format (encrypted)" section. Press the "Download" button below that. You now have your keystore file. '), _defineProperty(_el$data, 'HELP_12_Desc_7', 'Open the Ethereum Wallet application. '), _defineProperty(_el$data, 'HELP_12_Desc_8', 'In the menu bar, go "Accounts" -> "Backup" -> "Accounts" '), _defineProperty(_el$data, 'HELP_12_Desc_9', 'This will open your keystore folder. Copy the file you just downloaded (`UTC--2016-04-14......../`) into that keystore folder. '), _defineProperty(_el$data, 'HELP_12_Desc_10', 'Your account should show up immediately under "Accounts." '), _defineProperty(_el$data, 'HELP_12_Desc_11', 'Using your unencrypted private key... '), _defineProperty(_el$data, 'HELP_12_Desc_12', 'If you do not already have your unencrypted private key, navigate to the "View Wallet Details" page. '), _defineProperty(_el$data, 'HELP_12_Desc_13', 'Select your wallet file -or- enter/paste your private key to unlock your wallet. '), _defineProperty(_el$data, 'HELP_12_Desc_14', 'Copy Your Private Key (μη κρυπτογραφημένο). '), _defineProperty(_el$data, 'HELP_12_Desc_15', 'If you are on a Mac: '), _defineProperty(_el$data, 'HELP_12_Desc_15b', 'If you are on a PC: '), _defineProperty(_el$data, 'HELP_12_Desc_16', 'Open Text Edit and paste this private key. '), _defineProperty(_el$data, 'HELP_12_Desc_17', 'Go to the menu bar and click "Format" -> "Make Plain Text". '), _defineProperty(_el$data, 'HELP_12_Desc_18', 'Save this file to your `desktop/` as `nothing_special_delete_me.txt`. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog. '), _defineProperty(_el$data, 'HELP_12_Desc_19', 'Open terminal and run the following command: `geth account import ~/Desktop/nothing_special_delete_me.txt` '), _defineProperty(_el$data, 'HELP_12_Desc_20', 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. '), _defineProperty(_el$data, 'HELP_12_Desc_21', 'After successful import, delete `nothing_special_delete_me.txt` '), _defineProperty(_el$data, 'HELP_12_Desc_22', 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". '), _defineProperty(_el$data, 'HELP_12_Desc_23', 'Open Notepad & paste the private key '), _defineProperty(_el$data, 'HELP_12_Desc_24', 'Save the file as `nothing_special_delete_me.txt` at `C:` '), _defineProperty(_el$data, 'HELP_12_Desc_25', 'Run the command, `geth account import C:\\nothing_special_delete_me.txt` '), _defineProperty(_el$data, 'HELP_12_Desc_26', 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. '), _defineProperty(_el$data, 'HELP_12_Desc_27', 'After successful import, delete `nothing_special_delete_me.txt` '), _defineProperty(_el$data, 'HELP_12_Desc_28', 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". '), _defineProperty(_el$data, 'HELP_13_Title', '13) What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean? '), _defineProperty(_el$data, 'HELP_13_Desc_1', 'This means you do not have enough Ether in your account to cover the cost of gas. Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. The number displayed is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`, and subtract the amount of Ether you were trying to send (if you were attempting to send Ether). This will give you the amount of Ether you need to send to that account to make the transaction. '), _defineProperty(_el$data, 'HELP_14_Title', '14) Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn\'t do this. Is the random number generation for MyEtherWallet safe? '), _defineProperty(_el$data, 'HELP_14_Desc_1', 'While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren\'t unsafe, it\'s just that we (and tons of other crypto experiments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here\'s a [conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). '), _defineProperty(_el$data, 'HELP_15_Title', '15) Why hasn\'t the account I just created show up in the blockchain explorer? (ie: etherchain, etherscan) '), _defineProperty(_el$data, 'HELP_15_Desc_1', 'Accounts will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it. '), _defineProperty(_el$data, 'HELP_16_Title', '16) How do I check the balance of my account? '), _defineProperty(_el$data, 'HELP_16_Desc_1', 'You can use a blockchain explorer like [etherscan.io](http://etherscan.io/). Paste your address into the search bar and it will pull up your address and transaction history. For example, here\'s what our [donation account](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) looks like on etherscan.io '), _defineProperty(_el$data, 'HELP_17_Title', '17) Why isn\'t my balance showing up when I unlock my wallet? '), _defineProperty(_el$data, 'HELP_17_Desc_1', 'This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like etherscan.io '), _defineProperty(_el$data, 'HELP_18_Title', '18) Where is my geth wallet file? '), _defineProperty(_el$data, 'HELP_19_Title', '19) Where is my Mist wallet file? '), _defineProperty(_el$data, 'HELP_19_Desc_1', 'Mist files are typically found in the file locations above, but it\'s much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored. '), _defineProperty(_el$data, 'HELP_20_Title', '20) Where is my pre-sale wallet file? '), _defineProperty(_el$data, 'HELP_20_Desc_1', 'Wherever you saved it. ;) It also was emailed to you, so check there. Look for the file called `"ethereum_wallet_backup.json"` and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale. '), _defineProperty(_el$data, 'HELP_21_Title', '21) Couldn\'t everybody put in random private keys, look for a balance, and send to their own address? '), _defineProperty(_el$data, 'HELP_21_Desc_1', 'Short version: yes, but finding an account with a balance would take longer than the universe...so...no. '), _defineProperty(_el$data, 'HELP_21_Desc_2', 'Long ELI5 Version: So Ethereum is based on [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), specifically [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf) which is very widely used, not just in Ethereum. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and a lot of other stuff. The Ethereum keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts. '), _defineProperty(_el$data, 'HELP_21_Desc_3', 'In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this cryptography means that if there is a way to go from public key to private key, your lost ether is the least of everyone’s problems. '), _defineProperty(_el$data, 'HELP_21_Desc_4', 'Now, that said, YES if someone else has your private key then they can indeed send ether from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers. You could download the Keystore version of your private key which is the private key that is encrypted with a password. This is like having a password that is also protected by another password. '), _defineProperty(_el$data, 'HELP_21_Desc_5', 'And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worthwhile - it is more likely you, and your great-grandchildren, will die before getting a match. '), _defineProperty(_el$data, 'HELP_21_Desc_6', 'If you know anything about Bitcoin, [this will put it in perspective:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion. '), _defineProperty(_el$data, 'HELP_21_Desc_7', '[If you want something a bit more technical:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space. '), _defineProperty(_el$data, 'HELP_21_Desc_8', 'Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria, as do Jaxx and Mist/geth. The Ethereum wallets are all pretty good. Keys generated by brainwallets do not, as a person\'s brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that\'s a separate issue that can wait for another day. '), _defineProperty(_el$data, 'HELP_SecCX_Title', 'Security - MyEtherWallet CX '), _defineProperty(_el$data, 'HELP_SecCX_Desc_1', 'Where is this extension saving my information? '), _defineProperty(_el$data, 'HELP_SecCX_Desc_2', 'The information you store in this Chrome Extension is saved via [chrome.storage](http://chrome.storage/). - this is the same place your passwords are saved when you save your password in Chrome. '), _defineProperty(_el$data, 'HELP_SecCX_Desc_3', 'What information is saved? '), _defineProperty(_el$data, 'HELP_SecCX_Desc_4', 'The address, nickname, private key is stored in chrome.storage. The private key is encrypted using the password you set when you added the wallet. The nickname and wallet address is not encrypted. '), _defineProperty(_el$data, 'HELP_SecCX_Desc_5', 'Why aren\'t the nickname and wallet address encrypted? '), _defineProperty(_el$data, 'HELP_SecCX_Desc_6', 'If we were to encrypt these items, you would need to enter a password each time you wanted to view your account balance or view the nicknames. If this concerns you, we recommend you use MyEtherWallet.com instead of this Chrome Extension. '), _defineProperty(_el$data, 'HELP_Sec_Title', 'Security '), _defineProperty(_el$data, 'HELP_Sec_Desc_1', 'If one of your first questions is "Why should I trust these people?", that is a good thing. Hopefully the following will help ease your fears. '), _defineProperty(_el$data, 'HELP_Sec_Desc_2', 'We\'ve been up and running since August 2015. If you search for ["myetherwallet" on reddit](https://www.reddit.com/search?q=myetherwallet), you can see numerous people who use us with great success. '), _defineProperty(_el$data, 'HELP_Sec_Desc_3', 'We aren\'t going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" pages are completely client-side. That means that all the code is executed on ** your computer** and it is never saved and transmitted anywhere. '), _defineProperty(_el$data, 'HELP_Sec_Desc_4', 'Check the URL -- This site is being served through GitHub and you can see the source code here: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) to [https://www.myetherwallet.com](https://www.myetherwallet.com). '), _defineProperty(_el$data, 'HELP_Sec_Desc_5', 'For generating wallets, you can download the [source code and run it locally](https://github.com/kvhnuke/etherwallet/releases/latest). See #5 above. '), _defineProperty(_el$data, 'HELP_Sec_Desc_6', 'Generate a test wallet and check and see what network activity is happening. The easiest way for you to do this is to right click on the page and click "inspect element". Go to the "Network" tab. Generate a test wallet. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred. '), _defineProperty(_el$data, 'HELP_Sec_Desc_8', 'If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line or run a full node. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks! '), _defineProperty(_el$data, 'HELP_FAQ_Title', 'More Helpful Answers to Frequent Questions '), _defineProperty(_el$data, 'HELP_Contact_Title', 'Ways to Get in Touch'), _el$data);

module.exports = el;

},{}],89:[function(require,module,exports){
// English
'use strict';

var en = function en() {};
en.code = 'en';
en.data = {

  /* Navigation*/
  NAV_AddWallet: 'Add Wallet ',
  NAV_BulkGenerate: 'Bulk Generate ',
  NAV_Contact: 'Contact ',
  NAV_Contracts: 'Contracts ',
  NAV_DeployContract: 'Deploy Contract ',
  NAV_ENS: 'ENS',
  NAV_GenerateWallet: 'Generate Wallet ',
  NAV_Help: 'Help ',
  NAV_InteractContract: 'Interact with Contract ',
  NAV_Multisig: 'Multisig ',
  NAV_MyWallets: 'My Wallets ',
  NAV_Offline: 'Send Offline ',
  NAV_SendEther: 'Send Ether & Tokens ',
  NAV_SendTokens: 'Send Tokens ',
  NAV_SignMsg: 'Sign Message ',
  NAV_Swap: 'Swap ',
  NAV_ViewWallet: 'View Wallet Info ',
  NAV_YourWallets: 'Your Wallets ',

  /* General */
  x_Access: 'Access ',
  x_AddessDesc: 'You may know this as your "Account #" or your "Public Key". It is what you send people so they can send you ether. That icon is an easy way to recognize your address. ',
  x_Address: 'Your Address ',
  x_Cancel: 'Cancel ',
  x_CSV: 'CSV file (unencrypted) ',
  x_Download: 'Download ',
  x_Json: 'JSON File (unencrypted) ',
  x_JsonDesc: 'This is the unencrypted, JSON format of your private key. This means you do not need the password but anyone who finds your JSON can access your wallet & Ether without the password. ',
  x_Keystore: 'Keystore File (UTC / JSON · Recommended · Encrypted) ',
  x_Keystore2: 'Keystore File (UTC / JSON) ',
  x_KeystoreDesc: 'This Keystore file matches the format used by Mist so you can easily import it in the future. It is the recommended file to download and back up. ',
  x_Mnemonic: 'Mnemonic Phrase ',
  x_ParityPhrase: 'Parity Phrase ',
  x_Password: 'Password ',
  x_Print: 'Print Paper Wallet ',
  x_PrintDesc: 'ProTip: Click print and save this as a PDF, even if you do not own a printer! ',
  x_PrintShort: 'Print ',
  x_PrivKey: 'Private Key (unencrypted) ',
  x_PrivKey2: 'Private Key ',
  x_PrivKeyDesc: 'This is the unencrypted text version of your private key, meaning no password is necessary. If someone were to find your unencrypted private key, they could access your wallet without a password. For this reason, encrypted versions are typically recommended. ',
  x_Save: 'Save ',
  x_TXT: 'TXT file (unencrypted) ',
  x_Wallet: 'Wallet ',

  /* Header */
  CX_Tagline: 'Open Source JavaScript Client-Side Ether Wallet Chrome Extension ',
  CX_Warning_1: 'Make sure you have **external backups** of any wallets you store here. Many things could happen that would cause you to lose the data in this Chrome Extension, including uninstalling and reinstalling the extension. This extension is a way to easily access your wallets, **not** a way to back them up. ',
  MEW_Tagline: 'Open Source JavaScript Client-Side Ether Wallet ',
  MEW_Warning_1: 'Always check the URL before accessing your wallet or creating a new wallet. Beware of phishing sites! ',

  /* Footer */
  FOOTER_1: 'Open-Source, client-side tool for easily &amp; securely interacting with the Ethereum network. ',
  FOOTER_1b: 'Created by ',
  FOOTER_2: 'Donations greatly appreciated ',
  FOOTER_3: 'Client-side wallet generation by ',
  FOOTER_4: 'Disclaimer ',

  /* Sidebar */
  sidebar_AccountInfo: 'Account Information ',
  sidebar_AccountAddr: 'Account Address ',
  sidebar_AccountBal: 'Account Balance ',
  sidebar_TokenBal: 'Token Balances ',
  sidebar_Equiv: 'Equivalent Values ',
  sidebar_TransHistory: 'Transaction History ',
  sidebar_donation: 'MyEtherWallet is a free, open-source service dedicated to your privacy and security. The more donations we receive, the more time we spend creating new features, listening to your feedback, and giving you what you want. We are just two people trying to change the world. Help us? ',
  sidebar_donate: 'Donate ',
  sidebar_thanks: 'THANK YOU!!! ',

  /* Decrypt Panel */
  decrypt_Access: 'How would you like to access your wallet? ',
  decrypt_Title: 'Select the format of your private key ',
  decrypt_Select: 'Select a Wallet ',

  /* Mnemonic */
  MNEM_1: 'Please select the address you would like to interact with. ',
  MNEM_2: 'Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. ',
  MNEM_more: 'More Addresses ',
  MNEM_prev: 'Previous Addresses ',

  /* Hardware wallets */
  x_Ledger: 'Ledger Nano S ',
  ADD_Ledger_1: 'Connect your Ledger Nano S ',
  ADD_Ledger_2: 'Open the Ethereum application (or a contract application) ',
  ADD_Ledger_3: 'Verify that Browser Support is enabled in Settings ',
  ADD_Ledger_4: 'If no Browser Support is found in settings, verify that you have [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
  ADD_Ledger_0a: 'Re-open MyEtherWallet on a secure (SSL) connection ',
  ADD_Ledger_0b: 'Re-open MyEtherWallet using [Chrome](https://www.google.com/chrome/browser/desktop/) or [Opera](https://www.opera.com/) ',
  ADD_Ledger_scan: 'Connect to Ledger Nano S ',
  x_Trezor: 'TREZOR ',
  ADD_Trezor_scan: 'Connect to TREZOR ',

  /* Add Wallet */
  ADD_Label_1: 'What would you like to do? ',
  ADD_Radio_1: 'Generate New Wallet ',
  ADD_Radio_2: 'Select Your Wallet File (Keystore / JSON) ',
  ADD_Radio_2_alt: 'Select Your Wallet File ',
  ADD_Radio_2_short: 'SELECT WALLET FILE... ',
  ADD_Radio_3: 'Paste/Type Your Private Key ',
  ADD_Radio_4: 'Add an Account to Watch ',
  ADD_Radio_5: 'Paste/Type Your Mnemonic ',
  ADD_Radio_5_Path: 'Select HD derivation path ',
  ADD_Radio_5_PathCustom: 'Custom',
  ADD_Label_2: 'Create a Nickname ',
  ADD_Label_3: 'Your wallet is encrypted. Please enter the password. ',
  ADD_Label_4: 'Add an Account to Watch ',
  ADD_Warning_1: 'You can add any account to "watch" on the wallets tab without uploading a private key. This does ** not ** mean you have access to this wallet, nor can you transfer Ether from it. ',
  ADD_Label_5: 'Enter the Address ',
  ADD_Label_6: 'Unlock your Wallet ',
  ADD_Label_6_short: 'Unlock ',
  ADD_Label_7: 'Add Account ',
  ADD_Label_8: 'Password (optional): ',

  /* My Wallet */
  MYWAL_Nick: 'Wallet Nickname ',
  MYWAL_Address: 'Wallet Address ',
  MYWAL_Bal: 'Balance ',
  MYWAL_Edit: 'Edit ',
  MYWAL_View: 'View ',
  MYWAL_Remove: 'Remove ',
  MYWAL_RemoveWal: 'Remove Wallet ',
  MYWAL_WatchOnly: 'Your Watch-Only Accounts ',
  MYWAL_Viewing: 'Viewing Wallet ',
  MYWAL_Hide: 'Hide Wallet Info ',
  MYWAL_Edit_2: 'Edit Wallet ',
  MYWAL_Name: 'Wallet Name ',
  MYWAL_Content_1: 'Warning! You are about to remove your wallet ',
  MYWAL_Content_2: 'Be sure you have **saved the private key and/or Keystore File and the password** before you remove it. ',
  MYWAL_Content_3: 'If you want to use this wallet with your MyEtherWallet CX in the future, you will need to manually re-add it using the private key/JSON and password. ',

  /* Generate Wallets */
  GEN_desc: 'If you want to generate multiple wallets, you can do so here ',
  GEN_Label_1: 'Enter a strong password (at least 9 characters) ',
  GEN_Placeholder_1: 'Do NOT forget to save this! ',
  GEN_SuccessMsg: 'Success! Your wallet has been generated. ',
  GEN_Label_2: 'Save your Wallet File.   ',
  GEN_Label_3: 'Save Your Address. ',
  GEN_Label_4: 'Print paper wallet or a QR code. ',

  /* Bulk Generate Wallets */
  BULK_Label_1: 'Number of Wallets To Generate ',
  BULK_Label_2: 'Generate Wallets ',
  BULK_SuccessMsg: 'Success! Your wallets have been generated. ',

  /* Sending Ether and Tokens */
  SEND_addr: 'To Address ',
  SEND_amount: 'Amount to Send ',
  SEND_amount_short: 'Amount ',
  SEND_custom: 'Add Custom Token ',
  SEND_gas: 'Gas ',
  SEND_TransferTotal: 'Send Entire Balance ',
  SEND_generate: 'Generate Transaction ',
  SEND_raw: 'Raw Transaction ',
  SEND_signed: 'Signed Transaction ',
  SEND_trans: 'Send Transaction ',
  SENDModal_Title: 'Warning! ',
  /* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
  SENDModal_Content_1: 'You are about to send ',
  SENDModal_Content_2: 'to address ',
  SENDModal_Content_3: 'Are you sure you want to do this? ',
  SENDModal_Content_4: 'NOTE: If you encounter an error, you most likely need to add ether to your account to cover the gas cost of sending tokens. Gas is paid in ether. ',
  SENDModal_No: 'No, get me out of here! ',
  SENDModal_Yes: 'Yes, I am sure! Make transaction. ',

  /* Tokens */
  TOKEN_Addr: 'Address ',
  TOKEN_Symbol: 'Token Symbol ',
  TOKEN_Dec: 'Decimals ',
  TOKEN_show: 'Show All Tokens ',
  TOKEN_hide: 'Hide Tokens ',

  /* Send Transaction */
  TRANS_desc: 'If you want to send Tokens, please use the "Send Token" page instead. ',
  TRANS_warning: 'If you are using the "Only ETH" or "Only ETC" Functions you are sending via a contract. Some services have issues accepting these transactions. Read more. ',
  TRANS_advanced: '+Advanced: Add Data ',
  TRANS_data: 'Data ',
  TRANS_gas: 'Gas Limit ',
  TRANS_sendInfo: 'A standard transaction using 21000 gas will cost 0.000441 ETH. We use a slightly-above-minimum gas price of 0.000000021 ETH to ensure it gets mined quickly. We do not take a transaction fee. ',

  /* Offline Transaction */
  OFFLINE_Title: 'Generate & Send Offline Transaction ',
  OFFLINE_Desc: 'Generating offline transactions can be done in three steps. You will complete steps 1 and 3 on an online computer, and step 2 on an offline/airgapped computer. This ensures your private keys do not touch an internet-connected device. ',
  OFFLLINE_Step1_Title: 'Step 1: Generate Information (Online Computer) ',
  OFFLINE_Step1_Button: 'Generate Information ',
  OFFLINE_Step1_Label_1: 'From Address ',
  OFFLINE_Step1_Label_2: 'Note: This is the FROM address, not the TO address. Nonce is generated from the originating account. If using an airgapped computer, it would be the address of the cold-storage account. ',
  OFFLINE_Step2_Title: 'Step 2: Generate Transaction (Offline Computer) ',
  OFFLINE_Step2_Label_1: 'To Address ',
  OFFLINE_Step2_Label_2: 'Value / Amount to Send ',
  OFFLINE_Step2_Label_3: 'Gas Price ',
  OFFLINE_Step2_Label_3b: 'This was displayed in Step 1 on your online computer. ',
  OFFLINE_Step2_Label_4: 'Gas Limit ',
  OFFLINE_Step2_Label_4b: '21000 is the default gas limit. When you send contracts or add\'l data, this may need to be different. Any unused gas will be returned to you. ',
  OFFLINE_Step2_Label_5: 'Nonce ',
  OFFLINE_Step2_Label_5b: 'This was displayed in Step 1 on your online computer. ',
  OFFLINE_Step2_Label_6: 'Data ',
  OFFLINE_Step2_Label_6b: 'This is optional. Data is often used when you send transactions to contracts. ',
  OFFLINE_Step2_Label_7: 'Enter / Select your Private Key / JSON. ',
  OFFLINE_Step3_Title: 'Step 3: Send / Publish Transaction (Online Computer) ',
  OFFLINE_Step3_Label_1: 'Paste the signed transaction from Step 2 here and press the "SEND TRANSACTION" button. ',

  /* Contracts */
  CONTRACT_Title: 'Contract Address ',
  CONTRACT_Title_2: 'Select Existing Contract ',
  CONTRACT_Json: 'ABI / JSON Interface ',
  CONTRACT_Interact_Title: 'Read / Write Contract ',
  CONTRACT_Interact_CTA: 'Select a function ',
  CONTRACT_ByteCode: 'Byte Code ',
  CONTRACT_Read: 'READ ',
  CONTRACT_Write: 'WRITE ',
  DEP_generate: 'Generate Bytecode ',
  DEP_generated: 'Generated Bytecode ',
  DEP_signtx: 'Sign Transaction ',
  DEP_interface: 'Generated Interface ',

  /* Node Switcher */
  NODE_Title: 'Set Up Your Custom Node',
  NODE_Subtitle: 'To connect to a local node...',
  NODE_Warning: 'Your node must be HTTPS in order to connect to it via MyEtherWallet.com. You can [download the MyEtherWallet repo & run it locally](https://github.com/kvhnuke/etherwallet/releases/latest) to connect to any node. Or, get free SSL certificate via [LetsEncrypt](https://letsencrypt.org/)',
  NODE_Name: 'Node Name',
  NODE_Port: 'Node Port',
  NODE_CTA: 'Save & Use Custom Node',

  /* Swap / Exchange */
  SWAP_rates: "Current Rates ",
  SWAP_init_1: "I want to swap my ",
  SWAP_init_2: " for ", // "I want to swap my X ETH for X BTC"
  SWAP_init_CTA: "Let's do this! ", // or "Continue"
  SWAP_information: "Your Information ",
  SWAP_send_amt: "Amount to send ",
  SWAP_rec_amt: "Amount to receive ",
  SWAP_your_rate: "Your rate ",
  SWAP_rec_add: "Your Receiving Address ",
  SWAP_start_CTA: "Start Swap ",
  SWAP_ref_num: "Your reference number ",
  SWAP_time: "Time remaining to send ",
  SWAP_elapsed: "Time elapsed since sent ",
  SWAP_progress_1: "Order Initiated ",
  SWAP_progress_2: "Waiting for your ", // Waiting for your BTC...
  SWAP_progress_3: "Received! ", // ETH Received!
  SWAP_progress_4: "Sending your {{orderResult.output.currency}} ",
  SWAP_progress_5: "Order Complete ",
  SWAP_order_CTA: "Please send ", // Please send 1 ETH...
  SWAP_unlock: "Unlock your wallet to send ETH or Tokens directly from this page. ",

  /* Sign Message */
  MSG_message: 'Message ',
  MSG_date: 'Date ',
  MSG_signature: 'Signature ',
  MSG_verify: 'Verify Message ',
  MSG_info1: 'Include the current date so the signature cannot be reused on a different date. ',
  MSG_info2: 'Include your nickname and where you use the nickname so someone else cannot use it. ',
  MSG_info3: 'Include a specific reason for the message so it cannot be reused for a different purpose. ',

  /* View Wallet Details */
  VIEWWALLET_Subtitle: 'This allows you to download different versions of private keys and re-print your paper wallet. You may want to do this in order to [import your account into Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). If you want to check your balance, we recommend using a blockchain explorer like [etherscan.io](http://etherscan.io/). ',
  VIEWWALLET_Subtitle_Short: 'This allows you to download different versions of private keys and re-print your paper wallet. ',
  VIEWWALLET_SuccessMsg: 'Success! Here are your wallet details. ',
  VIEWWALLET_ShowPrivKey: '(show)',
  VIEWWALLET_HidePrivKey: '(hide)',

  /* Chrome Extension */
  CX_error_1: 'You don\'t have any wallets saved. Click ["Add Wallet"](/cx-wallet.html#add-wallet) to add one! ',
  CX_quicksend: 'QuickSend ', // if no appropriate translation, just use "Send"

  /* Error Messages */
  ERROR_0: 'Please enter a valid amount.', // 0
  ERROR_1: 'Your password must be at least 9 characters. Please ensure it is a strong password. ', // 1
  ERROR_2: 'Sorry! We don\'t recognize this type of wallet file. ', // 2
  ERROR_3: 'This is not a valid wallet file. ', // 3
  ERROR_4: 'This unit doesn\'t exists, please use the one of the following units ', // 4
  ERROR_5: 'Please enter a valid address. ', // 5
  ERROR_6: 'Please enter a valid password. ', // 6
  ERROR_7: 'Please enter valid decimals     (Must be integer. Try 0-18.) ', // 7
  ERROR_8: 'Please enter a valid gas limit  (Must be integer. Try 21000-4000000.) ', // 8
  ERROR_9: 'Please enter a valid data value (Must be hex.) ', // 9
  ERROR_10: 'Please enter a valid gas price. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
  ERROR_11: 'Please enter a valid nonce      (Must be integer.) ', // 11
  ERROR_12: 'Invalid signed transaction. ', // 12
  ERROR_13: 'A wallet with this nickname already exists. ', // 13
  ERROR_14: 'Wallet not found. ', // 14
  ERROR_15: 'Whoops. It doesn\'t look like a proposal with this ID exists yet or there is an error reading this proposal. ', // 15 - NOT USED
  ERROR_16: 'A wallet with this address already exists in storage. Please check your wallets page. ', // 16
  ERROR_17: 'Account you are sending from does not have enough funds. If sending tokens, you must have 0.01 ETH in your account to cover the cost of gas. ', // 17
  ERROR_18: 'All gas would be used on this transaction. This means you have already voted on this proposal or the debate period has ended.', // 18
  ERROR_19: 'Please enter a valid symbol', // 19
  ERROR_20: 'Not a valid ERC-20 token', // 20
  ERROR_21: 'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.', // 21
  ERROR_22: 'Please enter a valid node name', // 22
  ERROR_23: 'Please enter a valid URL. If you are on https, your URL must be https', // 23
  ERROR_24: 'Please enter a valid port. ', // 24
  ERROR_25: 'Please enter a valid chain ID. ', // 25
  ERROR_26: 'Please enter a valid ABI. ', // 26
  ERROR_27: 'Minimum amount: 0.01. Max amount: ', // 27
  ERROR_28: 'You need your Wallet File & Password to access this wallet in the future. ', // 28
  ERROR_29: 'Please enter a valid user and password. ', // 29
  ERROR_30: 'Please enter a valid name (7+ characters, limited punctuation) ', // 30
  ERROR_31: 'Please enter a valid secret phrase. ', // 31
  ERROR_32: 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
  ERROR_33: 'The wallet you have unlocked does not match the owner\'s address. ', // 33
  ERROR_34: 'The name you are attempting to reveal does not match the name you have entered. ', // 34
  ERROR_35: 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank"> More info</a>', // 35

  SUCCESS_1: 'Valid address ',
  SUCCESS_2: 'Wallet successfully decrypted ',
  SUCCESS_3: 'TX was broadcast to the blockchain. Click to see your transaction & verify it was mined and does not have any out of gas or contract execution errors.  TX ID: ',
  SUCCESS_4: 'Your wallet was successfully added ',
  SUCCESS_5: 'File Selected ',
  SUCCESS_6: 'You are successfully connected ',
  SUCCESS_7: 'Message Signature Verified',
  WARN_Send_Link: 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. ',

  /* Geth Error Messages */
  GETH_InvalidSender: 'Invalid sender ',
  GETH_Nonce: 'Nonce too low ',
  GETH_Cheap: 'Gas price too low for acceptance ',
  GETH_Balance: 'Insufficient balance ',
  GETH_NonExistentAccount: 'Account does not exist or account balance too low ',
  GETH_InsufficientFunds: 'Insufficient funds for gas * price + value ',
  GETH_IntrinsicGas: 'Intrinsic gas too low ',
  GETH_GasLimit: 'Exceeds block gas limit ',
  GETH_NegativeValue: 'Negative value ',

  /* Parity Error Messages */
  PARITY_AlreadyImported: "Transaction with the same hash was already imported.",
  PARITY_Old: "Transaction nonce is too low. Try incrementing the nonce.",
  PARITY_TooCheapToReplace: "Transaction fee is too low. There is another transaction with same nonce in the queue. Try increasing the fee or incrementing the nonce.",
  PARITY_LimitReached: "There are too many transactions in the queue. Your transaction was dropped due to limit. Try increasing the fee.",
  PARITY_InsufficientGasPrice: "Transaction fee is too low. It does not satisfy your node's minimal fee (minimal: {}, got: {}). Try increasing the fee.",
  PARITY_InsufficientBalance: "Insufficient funds. Account you try to send transaction from does not have enough funds. Required {} wei and got: {} wei.",
  PARITY_GasLimitExceeded: "Transaction cost exceeds current gas limit. Limit: {}, got: {}. Try decreasing supplied gas.",
  PARITY_InvalidGasLimit: "Supplied gas is beyond limit.",

  /* Tranlsation Info */
  translate_version: '0.5 ',
  Translator_Desc: ' ',
  TranslatorName_1: ' ',
  TranslatorAddr_1: ' ',
  /* Translator 1             : Insert Comments Here */
  TranslatorName_2: ' ',
  TranslatorAddr_2: ' ',
  /* Translator 2             : Insert Comments Here */
  TranslatorName_3: ' ',
  TranslatorAddr_3: ' ',
  /* Translator 3             : Insert Comments Here */
  TranslatorName_4: ' ',
  TranslatorAddr_4: ' ',
  /* Translator 4             : Insert Comments Here */
  TranslatorName_5: ' ',
  TranslatorAddr_5: ' ',
  /* Translator 5             : Insert Comments Here */

  /* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */
  HELP_Warning: 'If you created a wallet -or- downloaded the repo before **Dec. 31st, 2015**, please check your wallets &amp; download a new version of the repo. Click for details. ',
  HELP_Desc: 'Do you see something missing? Have another question? [Get in touch with us](mailto:support@myetherwallet.com), and we will not only answer your question, we will update this page to be more useful to people in the future! ',
  HELP_Remind_Title: 'Some reminders ',
  HELP_Remind_Desc_1: '**Ethereum, MyEtherWallet.com & MyEtherWallet CX, and some of the underlying Javascript libraries we use are under active development.** While we have thoroughly tested & tens of thousands of wallets have been successfully created by people all over the globe, there is always the remote possibility that something unexpected happens that causes your ETH to be lost. Please do not invest more than you are willing to lose, and please be careful. If something were to happen, we are sorry, but **we are not responsible for the lost Ether**. ',
  HELP_Remind_Desc_2: 'MyEtherWallet.com & MyEtherWallet CX are not "web wallets". You do not create an account or give us your Ether to hold onto. All data never leaves your computer/your browser. We make it easy for you to create, save, and access your information and interact with the blockchain. ',
  HELP_Remind_Desc_3: 'If you do not save your private key & password, there is no way to recover access to your wallet or the funds it holds.  Back them up in multiple physical locations &ndash; not just on your computer! ',

  HELP_0_Title: '0) I\'m new. What do I do? ',
  HELP_0_Desc_1: 'MyEtherWallet gives you the ability to generate new wallets so you can store your Ether yourself, not on an exchange. This process happens entirely on your computer, not our servers. Therefore, when you generate a new wallet, **you are responsible for safely backing it up**. ',
  HELP_0_Desc_2: 'Create a new wallet. ',
  HELP_0_Desc_3: 'Back the wallet up. ',
  HELP_0_Desc_4: 'Verify you have access to this new wallet and have correctly saved all necessary information. ',
  HELP_0_Desc_5: 'Transfer Ether to this new wallet. ',

  HELP_1_Title: '1) How do I create a new wallet? ',
  HELP_1_Desc_1: 'Go to the "Generate Wallet" page. ',
  HELP_1_Desc_2: 'Go to the "Add Wallet" page & select "Generate New Wallet" ',
  HELP_1_Desc_3: 'Enter a strong password. If you think you may forget it, save it somewhere safe. You will need this password to send transactions. ',
  HELP_1_Desc_4: 'Click "GENERATE". ',
  HELP_1_Desc_5: 'Your wallet has now been generated. ',

  HELP_2a_Title: '2a) How do I save/backup my wallet? ',
  HELP_2a_Desc_1: 'You should always back up your wallet externally and in multiple physical locations - like on a USB drive and/or a piece of paper. ',
  HELP_2a_Desc_2: 'Save the address. You can keep it to yourself or share it with others. That way, others can transfer ether to you. ',
  HELP_2a_Desc_3: 'Save versions of the private key. Do not share it with anyone else. Your private key is necessary when you want to access your Ether to send it! There are 3 types of private keys ',
  HELP_2a_Desc_4: 'Place your address, versions of the private key, and the PDF version of your paper wallet in a folder. Save this on your computer and a USB drive. ',
  HELP_2a_Desc_5: 'Print the wallet if you have a printer. Otherwise, write down your private key and address on a piece of paper. Store this as a secure location, separate from your computer and the USB drive. ',
  HELP_2a_Desc_6: 'Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood). ',

  HELP_2b_Title: '2b) How do I safely / offline / cold storage with MyEtherWallet? ',
  HELP_2b_Desc_1: 'Go to [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ',
  HELP_2b_Desc_2: 'Click on `dist-vX.X.X.X.zip`. ',
  HELP_2b_Desc_3: 'Move zip to an airgapped computer. ',
  HELP_2b_Desc_4: 'Unzip it and double-click `index.html`. ',
  HELP_2b_Desc_5: 'Generate a wallet with a strong password. ',
  HELP_2b_Desc_6: 'Save the address. Save versions of the private key. Save the password if you might not remember it forever. ',
  HELP_2b_Desc_7: 'Store these papers / USBs in multiple physically separate locations. ',
  HELP_2b_Desc_8: 'Go to the "View Wallet Info" page and type in your private key / password to ensure they are correct and access your wallet. Check that the address you wrote down is the same. ',

  HELP_3_Title: '3) How do I verify I have access to my new wallet? ',
  HELP_3_Desc_1: '**Before you send any Ether to your new wallet**, you should ensure you have access to it. ',
  HELP_3_Desc_2: 'Navigate to the "View Wallet Info" page. ',
  HELP_3_Desc_3: 'Navigate to the MyEtherWallet.com "View Wallet Info" page. ',
  HELP_3_Desc_4: 'Select your wallet file -or- your private key and unlock your wallet. ',
  HELP_3_Desc_5: 'If the wallet is encrypted, a text box will automatically appear. Enter the password. ',
  HELP_3_Desc_6: 'Click the "Unlock Wallet" button. ',
  HELP_3_Desc_7: 'Your wallet information should show up. Find your account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet. ',
  HELP_3_Desc_8: 'If you are planning on holding a large amount of ether, we recommend that send a small amount of ether from new wallet before depositing a large amount. Send 0.001 ether to your new wallet, access that wallet, send that 0.001 ether to another address, and ensure everything works smoothly. ',

  HELP_4_Title: '4) How do I send Ether from one wallet to another? ',
  HELP_4_Desc_1: 'If you plan to move a large amount of ether, you should test sending a small amount to your wallet first to ensure everything goes as planned. ',
  HELP_4_Desc_2: 'Navigate to the "Send Ether & Tokens" page. ',
  HELP_4_Desc_3: 'Select your wallet file -or- your private key and unlock your wallet. ',
  HELP_4_Desc_4: 'If the wallet is encrypted, a text box will automatically appear. Enter the password. ',
  HELP_4_Desc_5: 'Click the "Unlock Wallet" button. ',
  HELP_4_Desc_6: 'Enter the address you would like to send to in the "To Address:" field. ',
  HELP_4_Desc_7: 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. ',
  HELP_4_Desc_9: 'Click "Generate Transaction". ',
  HELP_4_Desc_10: 'A couple more fields will appear. This is your browser generating the transaction. ',
  HELP_4_Desc_11: 'Click the blue "Send Transaction" button below that. ',
  HELP_4_Desc_12: 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. ',
  HELP_4_Desc_13: 'The transaction will be submitted. The TX ID will display. You can click that TX ID to see it on the blockchain. ',

  HELP_4CX_Title: '4) How do I send Ether using MyEtherWallet CX? ',
  HELP_4CX_Desc_1: 'First, you need to add a wallet. Once you have done that, you have 2 options: the "QuickSend" functionality from the Chrome Extension icon or the "Send Ether & Tokens" page. ',
  HELP_4CX_Desc_2: 'QuickSend ',
  HELP_4CX_Desc_3: 'Click the Chrome Extension Icon. ',
  HELP_4CX_Desc_4: 'Click the "QuickSend" button. ',
  HELP_4CX_Desc_5: 'Select the wallet you wish to send from. ',
  HELP_4CX_Desc_6: 'Enter the address you would like to send to in the "To Address:" field. ',
  HELP_4CX_Desc_7: 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. ',
  HELP_4CX_Desc_8: 'Click "Send Transaction". ',
  HELP_4CX_Desc_9: 'Verify the address and the amount you are sending is correct. ',
  HELP_4CX_Desc_10: 'Enter the password for that wallet. ',
  HELP_4CX_Desc_11: 'Click "Send Transaction." ',
  HELP_4CX_Desc_12: 'Using "Send Ether & Tokens" Page ',

  HELP_5_Title: '5) How do I run MyEtherWallet.com offline/locally? ',
  HELP_5_Desc_1: 'You can run MyEtherWallet.com on your computer instead of from the GitHub servers. You can generate a wallet completely offline and send transactions from the "Offline Transaction" page. ',
  HELP_5_Desc_7: 'MyEtherWallet.com is now running entirely on your computer. ',
  HELP_5_Desc_8: 'In case you are not familiar, you need to keep the entire folder in order to run the website, not just `index.html`. Don\'t touch or move anything around in the folder. If you are storing a backup of the MyEtherWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact. ',
  HELP_5_Desc_9: 'As we are constantly updating MyEtherWallet.com, we recommend you periodically update your saved version of the repo. ',

  HELP_5CX_Title: '5) How can I install this extension from the repo instead of the Chrome Store? ',
  HELP_5CX_Desc_2: 'Click on `chrome-extension-vX.X.X.X.zip` and unzip it. ',
  HELP_5CX_Desc_3: 'Go to Google Chrome and find you settings (in the menu in the upper right). ',
  HELP_5CX_Desc_4: 'Click "Extensions" on the left. ',
  HELP_5CX_Desc_5: 'Check the "Developer Mode" button at the top of that page. ',
  HELP_5CX_Desc_6: 'Click the "Load unpacked extension..." button. ',
  HELP_5CX_Desc_7: 'Navigate to the now-unzipped folder that you downloaded earlier. Click "select". ',
  HELP_5CX_Desc_8: 'The extension should now show up in your extensions and in your Chrome Extension bar. ',

  HELP_7_Title: '7) How do I send tokens & add custom tokens? ',
  HELP_7_Desc_0: '[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token. ',
  HELP_7_Desc_1: 'Navigate to the "Send Ether & Tokens" page. ',
  HELP_7_Desc_2: 'Unlock your wallet. ',
  HELP_7_Desc_3: 'Enter the address you would like to send to in the "To Address:" field. ',
  HELP_7_Desc_4: 'Enter the amount you would like to send. ',
  HELP_7_Desc_5: 'Select which token you would like to send. ',
  HELP_7_Desc_6: 'If you do not see the token listed ',
  HELP_7_Desc_7: 'Click "Custom". ',
  HELP_7_Desc_8: 'Enter the address, name, and decimals of the token. These are provided by the developers of the token and are also needed when you "Add a Watch Token" to Mist. ',
  HELP_7_Desc_9: 'Click "Save". ',
  HELP_7_Desc_10: 'You can now send that token as well as see it\'s balance in the sidebar. ',
  HELP_7_Desc_11: 'Click "Generate Transaction". ',
  HELP_7_Desc_12: 'A couple more fields will appear. This is your browser generating the transaction. ',
  HELP_7_Desc_13: 'Click the blue "Send Transaction" button below that. ',
  HELP_7_Desc_14: 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. ',
  HELP_7_Desc_15: 'The transaction will be submitted. The TX ID will display. You can click that TX ID to see it on the blockchain. ',

  HELP_8_Title: '8) What happens if your site goes down? ',
  HELP_8_Desc_1: 'MyEtherWallet is not a web wallet. You don\'t have a login and nothing ever gets saved to our servers. It is simply an interface that allows you interact with the blockchain. ',
  HELP_8_Desc_2: 'If MyEtherWallet.com goes down, you would have to find another way (like geth or Ethereum Wallet / Mist) to do what we are doing. But you wouldn\'t have to "get" your Ether out of MyEtherWallet because it\'s not in MyEtherWallet. It\'s in whatever wallet your generated via our site. ',
  HELP_8_Desc_3: 'You can import your unencrypted private key and your Geth/Mist Format (encrypted) files directly into geth / Ethereum Wallet / Mist very easily now. See question #12 below. ',
  HELP_8_Desc_4: 'In addition, the likelihood of us taking MyEtherWallet down is slim to none. It costs us almost nothing to maintain as we aren\'t storing any information. If we do take the domain down, it still is, and always will be, publicly available at [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). You can download the ZIP there and run it locally. ',

  HELP_8CX_Title: '8) What happens if MyEtherWallet CX disappears? ',
  HELP_8CX_Desc_1: 'First, all data is saved on your computer, not our servers. I know it can be confusing, but when you look at the Chrome Extension, you are NOT looking at stuff saved on our servers somewhere - it\'s all saved on your own computer. ',
  HELP_8CX_Desc_2: 'That said, it is **very important** that you back up all your information for any new wallets generated with MyEtherWallet CX. That way if anything happens to MyEtherWallet CX or your computer, you still have all the information necessary to access your Ether. See the #2a for how to back up your wallets. ',
  HELP_8CX_Desc_3: 'If for some reason MyEtherWallet CX disappears from the Chrome Store, you can find the source on Github and load it manually. See #5 above. ',

  HELP_9_Title: '9) Is the "Send Ether & Tokens" page offline? ',
  HELP_9_Desc_1: 'No. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times. ',

  HELP_10_Title: '10) How do I make an offline transaction? ',
  HELP_10_Desc_1: 'Navigate to the "Offline Transaction" page via your online computer. ',
  HELP_10_Desc_2: 'Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price. ',
  HELP_10_Desc_3: 'Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send. ',
  HELP_10_Desc_4: 'Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1. ',
  HELP_10_Desc_5: 'Enter the "NONCE" as it was displayed to you on your online computer in step #1. ',
  HELP_10_Desc_6: 'The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you. ',
  HELP_10_Desc_7: 'If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format. ',
  HELP_10_Desc_8: 'Select your wallet file -or- your private key and unlock your wallet. ',
  HELP_10_Desc_9: 'Press the "GENERATE SIGNED TRANSACTION" button. ',
  HELP_10_Desc_10: 'The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer. ',
  HELP_10_Desc_11: 'On your online computer, paste the signed transaction into the text field in step #3 and click send. This will broadcast your transaction. ',

  HELP_12_Title: '12) How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist? ',
  HELP_12_Desc_1: 'Using an Geth/Mist JSON file from MyEtherWallet v2+.... ',
  HELP_12_Desc_2: 'Go to the "View Wallet Info" page. ',
  HELP_12_Desc_3: 'Unlock your wallet using your **encrypted** private key or JSON file. ',
  HELP_12_Desc_4: 'Go to the "My Wallets" page. ',
  HELP_12_Desc_5: 'Select the wallet you want to import into Mist, click the "View" icon, enter your password, and access your wallet. ',
  HELP_12_Desc_6: 'Find the "Download JSON file - Geth/Mist Format (encrypted)" section. Press the "Download" button below that. You now have your keystore file. ',
  HELP_12_Desc_7: 'Open the Ethereum Wallet application. ',
  HELP_12_Desc_8: 'In the menu bar, go "Accounts" -> "Backup" -> "Accounts" ',
  HELP_12_Desc_9: 'This will open your keystore folder. Copy the file you just downloaded (`UTC--2016-04-14......../`) into that keystore folder. ',
  HELP_12_Desc_10: 'Your account should show up immediately under "Accounts." ',
  HELP_12_Desc_11: 'Using your unencrypted private key... ',
  HELP_12_Desc_12: 'If you do not already have your unencrypted private key, navigate to the "View Wallet Details" page. ',
  HELP_12_Desc_13: 'Select your wallet file -or- enter/paste your private key to unlock your wallet. ',
  HELP_12_Desc_14: 'Copy Your Private Key (unencrypted). ',
  HELP_12_Desc_15: 'If you are on a Mac ',
  HELP_12_Desc_15b: 'If you are on a PC ',
  HELP_12_Desc_16: 'Open Text Edit and paste this private key. ',
  HELP_12_Desc_17: 'Go to the menu bar and click "Format" -> "Make Plain Text". ',
  HELP_12_Desc_18: 'Save this file to your `desktop/` as `nothing_special_delete_me.txt`. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog. ',
  HELP_12_Desc_19: 'Open terminal and run the following command: `geth account import ~/Desktop/nothing_special_delete_me.txt` ',
  HELP_12_Desc_20: 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. ',
  HELP_12_Desc_21: 'After successful import, delete `nothing_special_delete_me.txt` ',
  HELP_12_Desc_22: 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". ',
  HELP_12_Desc_23: 'Open Notepad & paste the private key ',
  HELP_12_Desc_24: 'Save the file as `nothing_special_delete_me.txt` at `C:` ',
  HELP_12_Desc_25: 'Run the command, `geth account import C:\\nothing_special_delete_me.txt` ',
  HELP_12_Desc_26: 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. ',
  HELP_12_Desc_27: 'After successful import, delete `nothing_special_delete_me.txt` ',
  HELP_12_Desc_28: 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". ',

  HELP_13_Title: '13) What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean? ',
  HELP_13_Desc_1: 'This means you do not have enough Ether in your account to cover the cost of gas. Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. The number displayed is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`, and subtract the amount of Ether you were trying to send (if you were attempting to send Ether). This will give you the amount of Ether you need to send to that account to make the transaction. ',

  HELP_14_Title: '14) Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn\'t do this. Is the random number generation for MyEtherWallet safe? ',
  HELP_14_Desc_1: 'While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren\'t unsafe, it\'s just that we (and tons of other crypto experiments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here\'s a [conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). ',

  HELP_15_Title: '15) Why hasn\'t the account I just created show up in the blockchain explorer? (ie: etherchain, etherscan) ',
  HELP_15_Desc_1: 'Accounts will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it. ',

  HELP_16_Title: '16) How do I check the balance of my account? ',
  HELP_16_Desc_1: 'You can use a blockchain explorer like [etherscan.io](http://etherscan.io/). Paste your address into the search bar and it will pull up your address and transaction history. For example, here\'s what our [donation account](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) looks like on etherscan.io ',

  HELP_17_Title: '17) Why isn\'t my balance showing up when I unlock my wallet? ',
  HELP_17_Desc_1: ' This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like etherscan.io ',

  HELP_18_Title: '18) Where is my geth wallet file? ',

  HELP_19_Title: '19) Where is my Mist wallet file? ',
  HELP_19_Desc_1: 'Mist files are typically found in the file locations above, but it\'s much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored. ',

  HELP_20_Title: '20) Where is my pre-sale wallet file? ',
  HELP_20_Desc_1: 'Wherever you saved it. ;) It also was emailed to you, so check there. Look for the file called `"ethereum_wallet_backup.json"` and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale. ',

  HELP_21_Title: '21) Couldn\'t everybody put in random private keys, look for a balance, and send to their own address? ',
  HELP_21_Desc_1: 'Short version: yes, but finding an account with a balance would take longer than the universe...so...no. ',
  HELP_21_Desc_2: 'Long ELI5 Version: So Ethereum is based on [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), specifically [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf) which is very widely used, not just in Ethereum. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and a lot of other stuff. The Ethereum keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts. ',
  HELP_21_Desc_3: 'In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this cryptography means that if there is a way to go from public key to private key, your lost ether is the least of everyone’s problems. ',
  HELP_21_Desc_4: 'Now, that said, YES if someone else has your private key then they can indeed send ether from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers. You could download the Keystore version of your private key which is the private key that is encrypted with a password. This is like having a password that is also protected by another password. ',
  HELP_21_Desc_5: 'And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worthwhile - it is more likely you, and your great-grandchildren, will die before getting a match. ',
  HELP_21_Desc_6: 'If you know anything about Bitcoin, [this will put it in perspective:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion. ',
  HELP_21_Desc_7: '[If you want something a bit more technical:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space. ',
  HELP_21_Desc_8: 'Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria, as do Jaxx and Mist/geth. The Ethereum wallets are all pretty good. Keys generated by brainwallets do not, as a person\'s brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that\'s a separate issue that can wait for another day. ',

  HELP_SecCX_Title: 'Security - MyEtherWallet CX ',
  HELP_SecCX_Desc_1: 'Where is this extension saving my information? ',
  HELP_SecCX_Desc_2: 'The information you store in this Chrome Extension is saved via [chrome.storage](http://chrome.storage/). - this is the same place your passwords are saved when you save your password in Chrome. ',
  HELP_SecCX_Desc_3: 'What information is saved? ',
  HELP_SecCX_Desc_4: 'The address, nickname, private key is stored in chrome.storage. The private key is encrypted using the password you set when you added the wallet. The nickname and wallet address is not encrypted. ',
  HELP_SecCX_Desc_5: 'Why aren\'t the nickname and wallet address encrypted? ',
  HELP_SecCX_Desc_6: 'If we were to encrypt these items, you would need to enter a password each time you wanted to view your account balance or view the nicknames. If this concerns you, we recommend you use MyEtherWallet.com instead of this Chrome Extension. ',

  HELP_Sec_Title: 'Security ',
  HELP_Sec_Desc_1: 'If one of your first questions is "Why should I trust these people?", that is a good thing. Hopefully the following will help ease your fears. ',
  HELP_Sec_Desc_2: 'We\'ve been up and running since August 2015. If you search for ["myetherwallet" on reddit](https://www.reddit.com/search?q=myetherwallet), you can see numerous people who use us with great success. ',
  HELP_Sec_Desc_3: 'We aren\'t going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" pages are completely client-side. That means that all the code is executed on ** your computer** and it is never saved and transmitted anywhere. ',
  HELP_Sec_Desc_4: 'Check the URL -- This site is being served through GitHub and you can see the source code here: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) to [https://www.myetherwallet.com](https://www.myetherwallet.com). ',
  HELP_Sec_Desc_5: 'For generating wallets, you can download the [source code and run it locally](https://github.com/kvhnuke/etherwallet/releases/latest). See #5 above. ',
  HELP_Sec_Desc_6: 'Generate a test wallet and check and see what network activity is happening. The easiest way for you to do this is to right click on the page and click "inspect element". Go to the "Network" tab. Generate a test wallet. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred. ',
  HELP_Sec_Desc_8: 'If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line or run a full node. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks! ',

  HELP_FAQ_Title: 'More Helpful Answers to Frequent Questions ',
  HELP_Contact_Title: 'Ways to Get in Touch '
};

module.exports = en;

},{}],90:[function(require,module,exports){
// Spanish
'use strict';

var _es$data;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var es = function es() {};
es.code = 'es';
es.data = (_es$data = {

  /* Navigation*/
  NAV_AddWallet: 'Añadir cartera ',
  NAV_BulkGenerate: 'Generar en masa ',
  NAV_Contact: 'Contacto ',
  NAV_Contracts: 'Contratos ',
  NAV_DeployContract: 'Desplegar contrato ',
  NAV_ENS: 'ENS',
  NAV_GenerateWallet: 'Generar cartera ',
  NAV_Help: 'Ayuda ',
  NAV_InteractContract: 'Interactuar con un contrato ',
  NAV_Multisig: 'Multifirma ',
  NAV_MyWallets: 'Mis carteras ',
  NAV_Offline: 'Enviar sin conexión ',
  NAV_SendEther: 'Enviar ether y tokens ',
  NAV_SendTokens: 'Enviar tokens ',
  NAV_SignMsg: 'Firmar mensaje ',
  NAV_Swap: 'Intercambiar ',
  NAV_ViewWallet: 'Ver información de las carteras ',
  NAV_YourWallets: 'Tus carteras ',

  /* General */
  x_Access: 'Access ',
  x_AddessDesc: 'Puedes pensar en esto como tu "número de cuenta" o tu "clave pública". Es lo que le das a la gente para que te puedan enviar ether. Ese icono es una forma fácil de reconocer tu dirección. ',
  x_Address: 'Tu dirección ',
  x_Cancel: 'Cancelar ',
  x_CSV: 'Archivo CSV (sin encriptar) ',
  x_Download: 'Descargar ',
  x_Json: 'Archivo JSON (sin encriptar) ',
  x_JsonDesc: 'Esta es tu clave privada sin encriptar en formato JSON. Esto significa que no necesitas una contraseña, pero cualquiera que encuentre tu archivo JSON puede acceder a tu cartera y ether sin necesitar ninguna contraseña. ',
  x_Keystore: 'Archivo Keystore (UTC / JSON · Recomendado · Encriptado) ',
  x_Keystore2: 'Archivo Keystore (UTC / JSON) ',
  x_KeystoreDesc: 'Este archivo Keystore/JSON concuerda con el formato usado por Mist para una fácil importación en el futuro. Es el archivo recomendado para descargar y guardar como copia de seguridad. ',
  x_Mnemonic: 'Mnemonic Phrase ',
  x_ParityPhrase: 'Parity Phrase ',
  x_Password: 'Contraseña ',
  x_Print: 'Imprimir Cartera de Papel ',
  x_PrintDesc: 'Consejo: Hax clic en imprimir y guardar esto como un PDF, ¡incluso si no tienes impresora! ',
  x_PrintShort: 'Imprimir ',
  x_PrivKey: 'Clave Privada (sin encriptar) ',
  x_PrivKey2: 'Clave Privada ',
  x_PrivKeyDesc: 'Esta es la versión en texto sin encriptar de tu clave privada, lo cual quiere decir que no hace falta contraseña. Si alguien encontrase tu clave privada sin encriptar, podrían acceder a tu cartera sin necesitar contraseña. Por esta razón, normalmente se recomiendan las versiones encriptadas. ',
  x_Save: 'Guardar ',
  x_TXT: 'Archivo TXT (sin encriptar) ',
  x_Wallet: 'Cartera ',

  /* Header */
  MEW_Warning_1: 'Comprueba siempre la URL antes de acceder a tu cartera o crear una cartera nueva. ¡Ten cuidado con los sitios falsos (phishing)! ',
  CX_Warning_1: 'Asegúrate de tener **copias de seguridad externas** de cualquier cartera que almacenes aquí. Pueden ocurrir muchas cosas que te hagan perder los datos de esta extensión de Chrome; esto incluye desinstalar y volver a instalar la extensión. Esta extensión es un modo de acceder fácilmente a tus carteras, **no** una manera de respaldarlas. ',
  MEW_Tagline: 'Cartera Ether JavaScript de código abierto ejecutado en el cliente ',
  CX_Tagline: 'Cartera Ether JavaScript de código abierto ejecutado en el cliente extensión Chrome ',

  /* Footer */
  FOOTER_1: 'Una herramienta de código abierto JavaScript que se ejecuta en el lado del cliente, para generar carteras y enviar transacciones Ethereum. ',
  FOOTER_1b: 'Creado por ',
  FOOTER_2: 'Se agradecen las donaciones: ',
  FOOTER_3: 'Generación de carteras en el cliente por ',
  FOOTER_4: 'Renuncia de responsabilidad ',

  /* Sidebar */
  sidebar_AccountInfo: 'Información de la cuenta ',
  sidebar_AccountAddr: 'Dirección de la cuenta ',
  sidebar_AccountBal: 'Saldo de la cuenta ',
  sidebar_TokenBal: 'Saldos de tokens ',
  sidebar_Equiv: 'Valores equivalentes ',
  sidebar_TransHistory: 'Historial de transacciones ',
  sidebar_donation: 'MyEtherWallet es un servicio gratuito y de código abierto dedicado a tu privacidad y seguridad. Cuantas más donaciones recibimos, más tiempo dedicamos creando nuevas características, escuchando vuestros comentarios y proporcionando lo que queréis. Sólo somos dos personas intentando cambiar el mundo. ¿Nos ayudas? ',
  sidebar_donate: 'Donar ',
  sidebar_thanks: '¡¡¡GRACIAS!!! ',

  /* Decrypt Panel */
  decrypt_Access: '¿Cómo te gustaría acceder a tu cartera? ',
  decrypt_Title: 'Elige el formato de tu clave privada: ',
  decrypt_Select: 'Elige una cartera: ',

  /* Add Wallet */
  ADD_Label_1: '¿Qué quieres hacer? ',
  ADD_Radio_1: 'Generar nueva cartera ',
  ADD_Radio_2: 'Elige tu archivo de cartera (Keystore / JSON) ',
  ADD_Radio_2_alt: 'Elige tu archivo de cartera ',
  ADD_Radio_2_short: 'ELIGE ARCHIVO DE CARTERA... ',
  ADD_Radio_3: 'Pega/escribe tu clave privada ',
  ADD_Radio_4: 'Añade una cuenta para supervisar ',
  ADD_Radio_5: 'Paste/Type Your Mnemonic ',
  ADD_Radio_5_Path: 'Select HD derivation path ',
  ADD_Radio_5_PathCustom: 'Personalizado',
  ADD_Label_2: 'Crear un alias: ',
  ADD_Label_3: 'Tu cartera está encriptada. Introduce tu contraseña ',
  ADD_Label_4: 'Añade una cuenta para supervisar ',
  ADD_Warning_1: 'Puedes añadir una cuenta para supervisar en la pestaña de carteras sin cargar una clave privada. Esto ** no ** significa que tengas acceso a la cartera, ni puedes transferir ether desde ésta. ',
  ADD_Label_5: 'Introduce la dirección ',
  ADD_Label_6: 'Desbloquea tu cartera ',
  ADD_Label_6_short: 'Desbloquear ',
  ADD_Label_7: 'Añadir cuenta ',

  /* Generate Wallets */
  GEN_desc: 'Si quieres generar varias carteras, puedes hacerlo aquí ',
  GEN_Label_1: 'Introduce una contraseña fuerte (mínimo 9 caracteres) ',
  GEN_Placeholder_1: '¡NO olvides guardar esto! ',
  GEN_SuccessMsg: '¡Enhorabuena! Se ha generado tu cartera. ',
  GEN_Label_2: 'Guarda tu Keystore. No olvides tu contraseña. ',
  GEN_Label_3: 'Guarda tu dirección. ',
  GEN_Label_4: 'Opcional: Imprime tu cartera en papel o guarda una versión en código QR. ',

  /* Bulk Generate Wallets */
  BULK_Label_1: 'Cantidad de carteras a generar ',
  BULK_Label_2: 'Generar carteras ',
  BULK_SuccessMsg: '¡Enhorabuena! Se han generado tus carteras. ',

  /* Sending Ether and Tokens */
  SEND_addr: 'Dirección de destino ',
  SEND_amount: 'Cantidad a enviar ',
  SEND_amount_short: 'Cantidad ',
  SEND_custom: 'Personalizado ',
  SEND_gas: 'Gas ',
  SEND_TransferTotal: 'Enviar todo el saldo ',
  SEND_generate: 'Generar transacción ',
  SEND_raw: 'Transacción en bruto ',
  SEND_signed: 'Transacción firmada ',
  SEND_trans: 'Enviar transacción '
}, _defineProperty(_es$data, 'SEND_custom', 'Añadir token personalizado '), _defineProperty(_es$data, 'SENDModal_Title', '¡Atención! '), _defineProperty(_es$data, 'SENDModal_Content_1', 'Vas a enviar '), _defineProperty(_es$data, 'SENDModal_Content_2', 'a la dirección '), _defineProperty(_es$data, 'SENDModal_Content_3', '¿Estás seguro de que quieres hacer esto? '), _defineProperty(_es$data, 'SENDModal_Content_4', 'NOTA: Si recibes un error, es muy probable que necesites añadir ether a tu cuenta para cubrir el coste en gas de enviar tokens. Gas se paga en ether. '), _defineProperty(_es$data, 'SENDModal_No', 'No, sácame de aquí. '), _defineProperty(_es$data, 'SENDModal_Yes', 'Sí, estoy seguro. Hacer la transacción. '), _defineProperty(_es$data, 'TOKEN_Addr', 'Dirección '), _defineProperty(_es$data, 'TOKEN_Symbol', 'Símbolo del token '), _defineProperty(_es$data, 'TOKEN_Dec', 'Decimales '), _defineProperty(_es$data, 'TOKEN_hide', 'Ocultar tokens '), _defineProperty(_es$data, 'TOKEN_show', 'Mostrar todos los tokens '), _defineProperty(_es$data, 'TRANS_desc', 'Si quieres enviar tokens, utiliza la página "Enviar tokens" en lugar de esta. '), _defineProperty(_es$data, 'TRANS_warning', 'Si utilizas las funciones "Sólo ETH" o "Sólo ETC" estás enviando a través de un contrato. Algunos servicios tienen problemas aceptando estas transacciones. Leer más. '), _defineProperty(_es$data, 'TRANS_advanced', '+Avanzado: Añadir datos '), _defineProperty(_es$data, 'TRANS_data', 'Datos '), _defineProperty(_es$data, 'TRANS_gas', 'Límite de gas '), _defineProperty(_es$data, 'TRANS_sendInfo', 'Una transacción estándar que utiliza 21000 gas cuesta 0.000441 ETH. Utilizamos un precio de gas de 0.000000021 ETH, ligeramente por encima del mínimo, para asegurarnos de que se mina con rapidez. Nosotros no recibimos ninguna comisión por la transacción. '), _defineProperty(_es$data, 'TRANSModal_Title', 'Transacciones "Sólo ETH" y "Sólo ETC" '), _defineProperty(_es$data, 'TRANSModal_Content_0', 'Una nota sobre las distintas transacciones y servicios: '), _defineProperty(_es$data, 'TRANSModal_Content_1', '**ETH (transacción estándar): ** Esto genera una transacción predeterminada directamente de una dirección a otra. Utiliza gas predeterminado de 21000. Es probable que cualquier transacción de ETH enviada mediante este método se reproduzca (replay) en la cadena ETC. '), _defineProperty(_es$data, 'TRANSModal_Content_2', '**Sólo ETH: ** Esto envía a través del [contrato de protección contra replay de Timon Rapp (según recomienda VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) de modo que envías solamente en la cadena **ETH**. '), _defineProperty(_es$data, 'TRANSModal_Content_3', '**Sólo ETC: ** Esto envía a través del [contrato de protección contra replay de Timon Rapp (según recomienda VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) de modo que envías solamente en la cadena **ETC**. '), _defineProperty(_es$data, 'TRANSModal_Content_4', '**Coinbase y ShapeShift: ** Envía solamente utilizando transacción estándar. Si envías utilizando los contratos "Sólo ETH" o "Sólo ETC", será necesario que contactes con su equipo de soporte para que añadan manualmente el saldo o te lo devuelvan. [También puedes probar la herramienta de "split" de Shapeshift.](https://split.shapeshift.io/) '), _defineProperty(_es$data, 'TRANSModal_Content_5', '**Kraken y Poloniex:** No se conocen problemas. Usa cualquiera. '), _defineProperty(_es$data, 'TRANSModal_Yes', 'Bien, ahora lo entiendo. '), _defineProperty(_es$data, 'TRANSModal_No', 'Estoy más confundido. Ayuda, por favor. '), _defineProperty(_es$data, 'OFFLINE_Title', 'Generar y enviar transacción sin conexión '), _defineProperty(_es$data, 'OFFLINE_Desc', 'Se puede generar transacciones sin conexión en tres pasos. Debes hacer los pasos 1 y 3 en un equipo online y el paso 2 en un equipo sin conexión y aislado. Esto asegura que tus claves privadas no estén en contacto con un equipo con conexión a Internet. '), _defineProperty(_es$data, 'OFFLLINE_Step1_Title', 'Paso 1: generar información (equipo conexión) '), _defineProperty(_es$data, 'OFFLINE_Step1_Button', 'Generar información '), _defineProperty(_es$data, 'OFFLINE_Step1_Label_1', 'Dirección de origen '), _defineProperty(_es$data, 'OFFLINE_Step1_Label_2', 'Nota: Esta es la dirección de origen, no la dirección de destino. El nonce se genera desde la cuenta que origina la transacción. Si se está utilizando un equipo aislado, será la dirección de la cuenta de almacenaje en frío. '), _defineProperty(_es$data, 'OFFLINE_Step2_Title', 'Paso 2: generar transacción (equipo sin conexión) '), _defineProperty(_es$data, 'OFFLINE_Step2_Label_1', 'Dirección de destino '), _defineProperty(_es$data, 'OFFLINE_Step2_Label_2', 'Valor / Cantidad a enviar '), _defineProperty(_es$data, 'OFFLINE_Step2_Label_3', 'Precio del gas '), _defineProperty(_es$data, 'OFFLINE_Step2_Label_3b', 'Esto se ha mostrado en el Paso 1 en tu equipo con conexión. '), _defineProperty(_es$data, 'OFFLINE_Step2_Label_4', 'Límite de gas '), _defineProperty(_es$data, 'OFFLINE_Step2_Label_4b', '21000 es el límite de gas predeterminado. Cuando envías contratos o datos adicionales, puede que esto necesite ser diferente. El gas no utilizado se te devolverá. '), _defineProperty(_es$data, 'OFFLINE_Step2_Label_5', 'Nonce '), _defineProperty(_es$data, 'OFFLINE_Step2_Label_5b', 'Esto se indicó en el Paso 1 en tu equipo con conexión. '), _defineProperty(_es$data, 'OFFLINE_Step2_Label_6', 'Datos '), _defineProperty(_es$data, 'OFFLINE_Step2_Label_6b', 'Opcional. Los datos se utilizan habitualmente al enviar transacciones a contratos. '), _defineProperty(_es$data, 'OFFLINE_Step2_Label_7', 'Introduce / elige tu Clave Privada / JSON. '), _defineProperty(_es$data, 'OFFLINE_Step3_Title', 'Paso 3: Enviar / Publicar transacción (con conexión) '), _defineProperty(_es$data, 'OFFLINE_Step3_Label_1', 'Pega aquí la transacción firmada del paso 2 y pulsa el botón "ENVIAR TRANSACCIÓN". '), _defineProperty(_es$data, 'DEP_generate', 'Generar Bytecode '), _defineProperty(_es$data, 'DEP_generated', 'Bytecode generado '), _defineProperty(_es$data, 'DEP_signtx', 'Firmar transacción '), _defineProperty(_es$data, 'DEP_interface', 'Interfaz generada '), _defineProperty(_es$data, 'MYWAL_Nick', 'Alias de cartera '), _defineProperty(_es$data, 'MYWAL_Address', 'Dirección de cartera '), _defineProperty(_es$data, 'MYWAL_Bal', 'Saldo '), _defineProperty(_es$data, 'MYWAL_Edit', 'Editar '), _defineProperty(_es$data, 'MYWAL_View', 'Ver '), _defineProperty(_es$data, 'MYWAL_Remove', 'Eliminar '), _defineProperty(_es$data, 'MYWAL_RemoveWal', 'Eliminar cartera: '), _defineProperty(_es$data, 'MYWAL_WatchOnly', 'Tus cuentas de sólo visualización '), _defineProperty(_es$data, 'MYWAL_Viewing', 'Viendo cartera '), _defineProperty(_es$data, 'MYWAL_Hide', 'Ocultar información de cartera '), _defineProperty(_es$data, 'MYWAL_Edit_2', 'Editar cartera '), _defineProperty(_es$data, 'MYWAL_Name', 'Nombre de la cartera '), _defineProperty(_es$data, 'MYWAL_Content_1', '¡Atención! Estás a punto de eliminar tu cartera '), _defineProperty(_es$data, 'MYWAL_Content_2', 'Asegúrate de haber **guardado tu clave privada y/o archivo almacén de clave y la contraseña** antes de eliminarlo. '), _defineProperty(_es$data, 'MYWAL_Content_3', 'Si en el futuro quieres utilizar esta cartera con MyEtherWallet CX, tendrás que volver a añadirla manualmente utilizando Clave Privada/JSON y contraseña. '), _defineProperty(_es$data, 'VIEWWALLET_Subtitle', 'Esto te permite descargar múltiples versiones de claves privadas e imprimir de nuevo tu cartera en papel. Puede que te interese hacer esto para [importar tu cuenta en Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Si quieres comprobar tu saldo, recomendamos utilizar un explorador de blockchain como [etherscan.io](http://etherscan.io/). '), _defineProperty(_es$data, 'VIEWWALLET_Subtitle_Short', 'Esto te permite descargar múltiples versiones de claves privadas e imprimir de nuevo tu cartera en papel. '), _defineProperty(_es$data, 'VIEWWALLET_SuccessMsg', '¡Enhorabuena! Estos son los detalles de tu cartera. '), _defineProperty(_es$data, 'CX_error_1', 'No tienes ninguna cartera guardada. ¡Haz clic en ["Añadir cartera"](/cx-wallet.html#add-wallet) para añadir una! '), _defineProperty(_es$data, 'CX_quicksend', 'Enviar '), _defineProperty(_es$data, 'NODE_Title', 'Configurar nodo personalizado'), _defineProperty(_es$data, 'NODE_Subtitle', 'Para conectar a un nodo local...'), _defineProperty(_es$data, 'NODE_Warning', 'Tu nodo debe ser HTTPS para poder conectar a él desde MyEtherWallet.com. Para conectarte a cualquier nodo, puedes [descargar el repositorio de MyEtherWallet y ejecutarlo localmente](https://github.com/kvhnuke/etherwallet/releases/latest). También puedes conseguir un certificado SSL gratuito a través de [Let\'s Encrypt](https://letsencrypt.org/)'), _defineProperty(_es$data, 'NODE_Name', 'Nombre del nodo'), _defineProperty(_es$data, 'NODE_Port', 'Puerto del nodo'), _defineProperty(_es$data, 'NODE_CTA', 'Guardar y usar nodo personalizado'), _defineProperty(_es$data, 'CONTRACT_Title', 'Dirección del contrato '), _defineProperty(_es$data, 'CONTRACT_Title_2', 'Seleccionar contrato existente '), _defineProperty(_es$data, 'CONTRACT_Json', 'Interfaz ABI / JSON '), _defineProperty(_es$data, 'CONTRACT_Interact_Title', 'Leer/escribir contrato '), _defineProperty(_es$data, 'CONTRACT_Interact_CTA', 'Seleccionar una función '), _defineProperty(_es$data, 'CONTRACT_ByteCode', 'Byte Code '), _defineProperty(_es$data, 'CONTRACT_Read', 'LEER '), _defineProperty(_es$data, 'CONTRACT_Write', 'ESCRIBIR '), _defineProperty(_es$data, 'SWAP_rates', "Tipos de cambio actuales "), _defineProperty(_es$data, 'SWAP_init_1', "Quiero cambiar mis "), _defineProperty(_es$data, 'SWAP_init_2', " por "), _defineProperty(_es$data, 'SWAP_init_CTA', "Continuar"), _defineProperty(_es$data, 'SWAP_information', "Tu información "), _defineProperty(_es$data, 'SWAP_send_amt', "Cantidad a enviar "), _defineProperty(_es$data, 'SWAP_rec_amt', "Cantidad a recibir "), _defineProperty(_es$data, 'SWAP_your_rate', "Tu tipo de cambio "), _defineProperty(_es$data, 'SWAP_rec_add', "Tu dirección de destino "), _defineProperty(_es$data, 'SWAP_start_CTA', "Iniciar intercambio "), _defineProperty(_es$data, 'SWAP_ref_num', "Tu número de referencia "), _defineProperty(_es$data, 'SWAP_time', "Tiempo restante para enviar "), _defineProperty(_es$data, 'SWAP_progress_1', "Pedido iniciado "), _defineProperty(_es$data, 'SWAP_progress_2', "Esperando recibir tus "), _defineProperty(_es$data, 'SWAP_progress_3', "¡Recibido! "), _defineProperty(_es$data, 'SWAP_progress_4', "Enviando tu {{orderResult.output.currency}} "), _defineProperty(_es$data, 'SWAP_progress_5', "Pedido completado "), _defineProperty(_es$data, 'SWAP_order_CTA', "Por favor, envía "), _defineProperty(_es$data, 'SWAP_unlock', "Desbloquea tu cartera para enviar ETH o tokens directamente desde esta página. "), _defineProperty(_es$data, 'MSG_message', 'Mensaje '), _defineProperty(_es$data, 'MSG_date', 'Fecha '), _defineProperty(_es$data, 'MSG_signature', 'Firma '), _defineProperty(_es$data, 'MSG_verify', 'Verificar mensaje '), _defineProperty(_es$data, 'MSG_info1', 'Incluye la fecha actual para que la firma no se pueda volver a utilizar en otra fecha. '), _defineProperty(_es$data, 'MSG_info2', 'Incluye tu apodo y dónde utilizas ese apodo para que otra persona no lo pueda utilizar. '), _defineProperty(_es$data, 'MSG_info3', 'Incluye una razón específica para el mensaje para que no se pueda volver a utilizar con otra finalidad. '), _defineProperty(_es$data, 'MNEM_1', 'Selecciona la dirección con la que deseas interactuar. '), _defineProperty(_es$data, 'MNEM_2', 'Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. '), _defineProperty(_es$data, 'MNEM_more', 'Más direcciones '), _defineProperty(_es$data, 'MNEM_prev', 'Direcciones anteriores '), _defineProperty(_es$data, 'x_Ledger', 'Ledger Nano S '), _defineProperty(_es$data, 'ADD_Ledger_1', 'Conecta tu Ledger Nano S '), _defineProperty(_es$data, 'ADD_Ledger_2', 'Inicia la aplicacin Ethereum (o una aplicación de contrato) '), _defineProperty(_es$data, 'ADD_Ledger_3', 'Comprueba que "Browser Support" está activado en "Settings" '), _defineProperty(_es$data, 'ADD_Ledger_4', 'Si no encuentras la opción "Browser Support" en "Settings", asegúrate de tener instalado el [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) '), _defineProperty(_es$data, 'ADD_Ledger_0a', 'Volver a abrir MyEtherWallet en una conexión segura (SSL) '), _defineProperty(_es$data, 'ADD_Ledger_0b', 'Volver a abrir MyEtherWallet usando [Chrome](https://www.google.com/chrome/browser/desktop/) u [Opera](https://www.opera.com/) '), _defineProperty(_es$data, 'ADD_Ledger_scan', 'Conectar a Ledger Nano S '), _defineProperty(_es$data, 'x_Trezor', 'TREZOR '), _defineProperty(_es$data, 'ADD_Trezor_scan', 'Conectar a TREZOR '), _defineProperty(_es$data, 'ADD_Trezor_select', 'Esto es una semilla TREZOR '), _defineProperty(_es$data, 'ERROR_0', 'Introduce una cantidad válida. '), _defineProperty(_es$data, 'ERROR_1', 'Tu contraseña debe tener al menos 9 caracteres. Por favor utiliza una contraseña fuerte. '), _defineProperty(_es$data, 'ERROR_2', 'Lo sentimos. No reconocemos este tipo de archivo de cartera. '), _defineProperty(_es$data, 'ERROR_3', 'Este no es un archivo de cartera válido. '), _defineProperty(_es$data, 'ERROR_4', 'Esta unidad no existe. Por favor utiliza una de las siguientes unidades '), _defineProperty(_es$data, 'ERROR_5', 'Introduce una Dirección válida. '), _defineProperty(_es$data, 'ERROR_6', 'Introduce una Contraseña válida. '), _defineProperty(_es$data, 'ERROR_7', 'Introduce una Cantidad válida. (Must be integer. Try 0-18.) '), _defineProperty(_es$data, 'ERROR_8', 'Introduce un Límite de gas válido. (Must be integer. Try 21000-4000000.) '), _defineProperty(_es$data, 'ERROR_9', 'Introduce un Valor de datos válido. (Must be hex.) '), _defineProperty(_es$data, 'ERROR_10', 'Introduce una Cantidad de gas válida. (Must be integer. Try 20 GWEI / 20000000000 WEI.) '), _defineProperty(_es$data, 'ERROR_11', 'Introduce un Nonce válido. (Must be integer.) '), _defineProperty(_es$data, 'ERROR_12', 'Introduce una Transacción firmada válida. '), _defineProperty(_es$data, 'ERROR_13', 'Ya existe una cartera con este alias. '), _defineProperty(_es$data, 'ERROR_14', 'Cartera no encontrada. '), _defineProperty(_es$data, 'ERROR_15', 'No parece que exista todavía una propuesta con este ID o hay un error al leer esta propuesta. '), _defineProperty(_es$data, 'ERROR_16', 'Ya hay almacenada una cartera con esta dirección. Por favor comprueba la página de carteras. '), _defineProperty(_es$data, 'ERROR_17', 'Fondos no suficientes para gas * precio + valor. Es necesario tener al menos 0.01 ether en tu cuenta para cubrir el coste del gas. Añade algo de ether e inténtalo de nuevo. '), _defineProperty(_es$data, 'ERROR_18', 'Sería necesario utilizar todo el gas en esta transacción. Esto significa que ya has votado en esta propuesta o que el periodo de debate ha concluido. '), _defineProperty(_es$data, 'ERROR_19', 'Introduce un Símbolo válido '), _defineProperty(_es$data, 'ERROR_20', 'No es un token ERC-20 válido '), _defineProperty(_es$data, 'ERROR_21', 'No se ha podido estimar el gas. No hay suficientes fondos en la cuenta, o el contrato de destino ha devuelto un error. Puedes ajustar el gas manualmente y continuar. Puede que el mensaje de error al enviar contenga más información. '), _defineProperty(_es$data, 'ERROR_22', 'Introduce un nombre de nodo válido '), _defineProperty(_es$data, 'ERROR_23', 'Introduce una URL válida. Si estás en HTTPS, tu URL debe ser HTTPS '), _defineProperty(_es$data, 'ERROR_24', 'Introduce un puerto válido '), _defineProperty(_es$data, 'ERROR_25', 'Introduce un chain ID válido '), _defineProperty(_es$data, 'ERROR_26', 'Introduce un ABI válido '), _defineProperty(_es$data, 'ERROR_27', 'Cantidad mínima 0.01 '), _defineProperty(_es$data, 'ERROR_28', '**Necesitas tu archivo Keystore/JSON y la contraseña** (o clave privada) para acceder a esta cartera en el futuro. Por favor ¡guárdala y respáldala externamente! No hay modo de recuperar una cartera si no la guardas. Lee la [página de ayuda](https://www.myetherwallet.com/#help) para instrucciones. '), _defineProperty(_es$data, 'ERROR_29', 'Introduce un user & password válido. '), _defineProperty(_es$data, 'ERROR_30', 'Introduce un name válido (7+ characters, limited punctuation) '), _defineProperty(_es$data, 'ERROR_31', 'Introduce un secret phrase válido. '), _defineProperty(_es$data, 'ERROR_32', 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.'), _defineProperty(_es$data, 'ERROR_34', 'The name you are attempting to reveal does not match the name you have entered. '), _defineProperty(_es$data, 'SUCCESS_1', 'Dirección válida '), _defineProperty(_es$data, 'SUCCESS_2', 'Cartera descifrada con éxito '), _defineProperty(_es$data, 'SUCCESS_3', 'TX was broadcast to the blockchain. Click to see your transaction & verify it was mined and does not have any out of gas or contract execution errors.  TX ID:  '), _defineProperty(_es$data, 'SUCCESS_4', 'Se ha añadido tu cartera '), _defineProperty(_es$data, 'SUCCESS_5', 'Archivo seleccionado '), _defineProperty(_es$data, 'SUCCESS_6', 'You are successfully connected '), _defineProperty(_es$data, 'SUCCESS_7', 'Message Signature Verified'), _defineProperty(_es$data, 'WARN_Send_Link', 'Has llegado aquí a través de un enlace que ya tiene rellenados la dirección, cantidad, gas, campos de datos o el tipo de transacción (modo de envío). Puedes cambiar cualquier parámetro antes de enviar. Desbloquea tu cartera para comenzar. '), _defineProperty(_es$data, 'GETH_InvalidSender', 'Remitente no válido '), _defineProperty(_es$data, 'GETH_Nonce', 'Nonce demasiado bajo '), _defineProperty(_es$data, 'GETH_Cheap', 'Precio de gas demasiado bajo para aceptación '), _defineProperty(_es$data, 'GETH_Balance', 'Saldo insuficiente '), _defineProperty(_es$data, 'GETH_NonExistentAccount', 'La cuenta no existe o tiene un saldo insuficiente '), _defineProperty(_es$data, 'GETH_InsufficientFunds', 'Fondos no suficientes para gas * precio + valor '), _defineProperty(_es$data, 'GETH_IntrinsicGas', 'Gas intrínseco demasiado bajo '), _defineProperty(_es$data, 'GETH_GasLimit', 'Sobrepasa el límite de gas del bloque '), _defineProperty(_es$data, 'GETH_NegativeValue', 'Valor negativo '), _defineProperty(_es$data, 'PARITY_AlreadyImported', "Transaction with the same hash was already imported."), _defineProperty(_es$data, 'PARITY_GasLimitExceeded', "Transaction cost exceeds current gas limit. Limit: {}, got: {}. Try decreasing supplied gas."), _defineProperty(_es$data, 'PARITY_InsufficientBalance', "Insufficient funds. Account you try to send transaction from does not have enough funds. Required {} and got: {}."), _defineProperty(_es$data, 'PARITY_InsufficientGasPrice', "Transaction fee is too low. It does not satisfy your node's minimal fee (minimal: {}, got: {}). Try increasing the fee."), _defineProperty(_es$data, 'PARITY_InvalidGasLimit', "Supplied gas is beyond limit."), _defineProperty(_es$data, 'PARITY_LimitReached', "There are too many transactions in the queue. Your transaction was dropped due to limit. Try increasing the fee."), _defineProperty(_es$data, 'PARITY_Old', "Transaction nonce is too low. Try incrementing the nonce."), _defineProperty(_es$data, 'PARITY_TooCheapToReplace', "Transaction fee is too low. There is another transaction with same nonce in the queue. Try increasing the fee or incrementing the nonce."), _defineProperty(_es$data, 'translate_version', '0.3 '), _defineProperty(_es$data, 'Translator_Desc', 'Gracias a nuestros traductores '), _defineProperty(_es$data, 'TranslatorName_1', 'Ignacio Fernández del Álamo  · '), _defineProperty(_es$data, 'TranslatorAddr_1', ''), _defineProperty(_es$data, 'TranslatorName_2', 'Carlos Lizarraga Rodrigo '), _defineProperty(_es$data, 'TranslatorAddr_2', ''), _defineProperty(_es$data, 'TranslatorName_3', ''), _defineProperty(_es$data, 'TranslatorAddr_3', ''), _defineProperty(_es$data, 'TranslatorName_4', ''), _defineProperty(_es$data, 'TranslatorAddr_4', ''), _defineProperty(_es$data, 'TranslatorName_5', ''), _defineProperty(_es$data, 'TranslatorAddr_5', ''), _defineProperty(_es$data, 'HELP_Warning', 'Si creaste una cartera -o- descargaste el repositorio antes del **31 de diciembre de 2015**, por favor comprueba tus carteras y descarga una nueva versión del repositorio. Haz clic para más información. '), _defineProperty(_es$data, 'HELP_Desc', '¿Echas algo en falta? ¿Tienes alguna otra pregunta? [Contacta con nosotros](mailto:support@myetherwallet.com) y no solamente contestaremos tu pregunta, sino que mejoraremos esta página para que sea más útil en el futuro. '), _defineProperty(_es$data, 'HELP_Remind_Title', 'Algunos recordatorios '), _defineProperty(_es$data, 'HELP_Remind_Desc_1', '**Ethereum, MyEtherWallet.com y MyEtherWallet CX, así como algunas de las librerías JavaScript que utilizamos están en desarrollo activo.** Aunque hemos testeado ampliamente y decenas de miles de carteras han sido creadas exitosamente por personas en todo el planeta, siempre existe la remota posibilidad de que ocurra algo inesperado que haga que se pierdan tus ETH. Por favor no inviertas más de lo que estés dispuesto a perder y, por favor, sé cuidadoso. Si algo ocurriera, lo lamentamos, pero **no somos responsables del Ether perdido**. '), _defineProperty(_es$data, 'HELP_Remind_Desc_2', 'MyEtherWallet.com y MyEtherWallet CX no son "carteras web". No estás creando una cuenta ni nos estás entregando tus Ether para que los guardemos. Toda tu información nunca abandona tu equipo o tu navegador. Te facilitamos que puedas crear, guardar y acceder a tu información e interactuar con la blockchain. '), _defineProperty(_es$data, 'HELP_Remind_Desc_3', 'Si no guardas tu clave privada y contraseña, no hay modo alguno de recuperar el acceso a tu cartera o a los fondos que ésta contiene. ¡Haz copias de seguridad en múltiples ubicaciones físicas, no solamente en tu equipo! '), _defineProperty(_es$data, 'HELP_0_Title', '0) Soy nuevo. ¿Qué hago? '), _defineProperty(_es$data, 'HELP_0_Desc_1', 'MyEtherWallet te permite generar nuevas carteras para poder almacenar tu Ether por tu cuenta en lugar de en una casa de cambio. Este proceso tiene lugar por completo en tu equipo, no en nuestros servidores. Por lo tanto, cuando generes una nueva cartera, **eres responsable de hacer una copia de seguridad**. '), _defineProperty(_es$data, 'HELP_0_Desc_2', 'Crear una nueva cartera. '), _defineProperty(_es$data, 'HELP_0_Desc_3', 'Hacer una copia de seguridad de la cartera. '), _defineProperty(_es$data, 'HELP_0_Desc_4', 'Comprobar que tienes acceso a esta nueva cartera y has guardado correctamente toda la información necesaria. '), _defineProperty(_es$data, 'HELP_0_Desc_5', 'Transferir Ether a la nueva cartera. '), _defineProperty(_es$data, 'HELP_1_Title', '1) ¿Cómo creo una nueva cartera? '), _defineProperty(_es$data, 'HELP_1_Desc_1', 'Ir a la página "Generar cartera". '), _defineProperty(_es$data, 'HELP_1_Desc_2', 'Ir a la página "Añadir cartera" y seleccionar "Generar nueva cartera" '), _defineProperty(_es$data, 'HELP_1_Desc_3', 'Introducir una contraseña fuerte. Si crees que puedes olvidarla, guárdala en un lugar seguro. Necesitarás esta contraseña para enviar transacciones. '), _defineProperty(_es$data, 'HELP_1_Desc_4', 'Haz clic en "GENERAR". '), _defineProperty(_es$data, 'HELP_1_Desc_5', 'Ahora se ha generado tu cartera. '), _defineProperty(_es$data, 'HELP_2a_Title', '2a) ¿Cómo guardo/respaldo mi cartera? '), _defineProperty(_es$data, 'HELP_2a_Desc_1', 'Deberías siempre respaldar tu cartera externamente y en varias ubicaciones físicas (como una unidad USB o en una hoja de papel). '), _defineProperty(_es$data, 'HELP_2a_Desc_2', 'Guardar la dirección. Puedes mantenerla en privado o compartirla con otras personas. De ese modo, otras personas te podrán enviar ether. '), _defineProperty(_es$data, 'HELP_2a_Desc_3', 'Guarda las versiones de tu clave privada. No la compartas con nadie. ¡Tu clave privada es necesaria cuando quieras tener acceso a tu ether para enviarlo! Hay tres tipos de claves privadas: '), _defineProperty(_es$data, 'HELP_2a_Desc_4', 'Pon tu dirección, las versiones de la clave privada y la versión PDF de tu cartera en papel en una carpeta. Guárdala en tu equipo y en una unidad USB. '), _defineProperty(_es$data, 'HELP_2a_Desc_5', 'Imprime la cartera si dispones de impresora. En caso contrario, escribe tu clave privada y tu dirección en una hoja de papel. Almacénalas en un lugar seguro y separado de tu equipo y de la unidad USB. '), _defineProperty(_es$data, 'HELP_2a_Desc_6', 'Recuerda, debes evitar la pérdida de las claves y la contraseña frente a una pérdida o fallo en tu unidad de disco duro, unidad USB u hoja de papel. Debes tener en cuenta también la posibilidad de pérdida o daño en una zona amplia (piensa en un incendio o una inundación). '), _defineProperty(_es$data, 'HELP_2b_Title', '2b) ¿Cómo almaceno con seguridad/sin conexión/en frío con MyEtherWallet? '), _defineProperty(_es$data, 'HELP_2b_Desc_1', 'Ve a nuestro github: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). '), _defineProperty(_es$data, 'HELP_2b_Desc_2', 'Haz clic en `dist-vX.X.X.X.zip` en la parte inferior. '), _defineProperty(_es$data, 'HELP_2b_Desc_3', 'Mueve el ZIP a un equipo aislado de internet (airgapped). '), _defineProperty(_es$data, 'HELP_2b_Desc_4', 'Descomprímelo y haz doble clic en `index.html`. '), _defineProperty(_es$data, 'HELP_2b_Desc_5', 'Genera una cartera con una contraseña fuerte. '), _defineProperty(_es$data, 'HELP_2b_Desc_6', 'Guarda la dirección. Guarda versiones de la clave privaa. Guarda la contraseña si crees que es posible que no la recuerdes siempre en el futuro.. '), _defineProperty(_es$data, 'HELP_2b_Desc_7', 'Almacena los papeles / USBs en múltiples ubicaciones separadas físicamente. '), _defineProperty(_es$data, 'HELP_2b_Desc_8', 'Ve a la página "Ver Información de las Carteras" y teclea to clave privada / contraseña para asegurarte de que son correctos y puedes acceder a tu cartera. Comprueba que la dirección que has escrito coincide. '), _defineProperty(_es$data, 'HELP_3_Title', '3) ¿Cómo verifico que tengo acceso a mi nueva cartera? '), _defineProperty(_es$data, 'HELP_3_Desc_1', '**Antes de enviar ether a tu nueva cartera,** deberías asegurarte de que tienes acceso a ésta. '), _defineProperty(_es$data, 'HELP_3_Desc_2', 'Ve a la página "Ver Información de las Carteras". '), _defineProperty(_es$data, 'HELP_3_Desc_3', 'Ve a la página "Ver Información de las Carteras" de MyEtherWallet.com. '), _defineProperty(_es$data, 'HELP_3_Desc_4', 'Selecciona tu archivo de cartera -o- tu clave privada y desloquea tu cartera. '), _defineProperty(_es$data, 'HELP_3_Desc_5', 'Si la cartera está cifrada aparecerá automáticamente una caja de texto. Introduce la contraseña. '), _defineProperty(_es$data, 'HELP_3_Desc_6', 'Haz clic en el botón "Desbloquear cartera". '), _defineProperty(_es$data, 'HELP_3_Desc_7', 'Debería mostrarse la información de tu cartera. Puedes encontrar la dirección de tu cuenta al lado de un icono circular de colores. Este icono es una representación visual de tu dirección. Asegúrate de que esta dirección coincide con la dirección que has guardado en tu archivo de texto y con la que está en tu cartera de papel. '), _defineProperty(_es$data, 'HELP_3_Desc_8', 'Si planeas guardar una cantidad elevada de ether, te recomendamos que primero envíes una cantidad pequeña de ether desde tu nueva cartera antes de ingresar una cantidad elevada. Envía 0.001 ether a tu nueva cartera, accede a tu cartera, envía los 0.001 ether desde tu cartera a otra dirección y asegúrate de que todo funciona bien. '), _defineProperty(_es$data, 'HELP_4_Title', '4) ¿Cómo envío ether de una cartera a otra? '), _defineProperty(_es$data, 'HELP_4_Desc_1', 'Si planeas mover una gran cantidad de ether, deberías probar primero a enviar una pequeña cantidad a tu cartera para asegurarte de que todo funciona según lo esperado. '), _defineProperty(_es$data, 'HELP_4_Desc_2', 'Ve a la página "Enviar Ether y Tokens". '), _defineProperty(_es$data, 'HELP_4_Desc_3', 'Selecciona tu archivo de cartera -o- tu clave privada y desbloquea tu cartera. '), _defineProperty(_es$data, 'HELP_4_Desc_4', 'Si la cartera está cifrada aparecerá automáticamente una caja de texto. Introduce la contraseña. '), _defineProperty(_es$data, 'HELP_4_Desc_5', 'Haz clic en el botón "Desbloquear cartera". '), _defineProperty(_es$data, 'HELP_4_Desc_6', 'Introduce la dirección a la que deseas enviar ether en el campo "Dirección de destino:". '), _defineProperty(_es$data, 'HELP_4_Desc_7', 'Introduce la cantidad que deseas enviar. También puedes hacer clic en "Enviar todo el saldo" si quieres enviar todo el saldo de la cartera. '), _defineProperty(_es$data, 'HELP_4_Desc_9', 'Haz clic en "Generar transacción". '), _defineProperty(_es$data, 'HELP_4_Desc_10', 'Aparecerán dos campos más. Esto es tu navegador generando la transacción. '), _defineProperty(_es$data, 'HELP_4_Desc_11', 'Haz clic en el botón azul "Enviar transacción" que está inmediatamente debajo. '), _defineProperty(_es$data, 'HELP_4_Desc_12', 'Aparecerá un cuadro emergente. Verifica que la cantidad y la dirección a la que estás enviando son correctos. Entonces, haz clic en el botón "Sí, estoy seguro. Hacer la transacción.". '), _defineProperty(_es$data, 'HELP_4_Desc_13', 'Se enviará la transacción y se mostrará el ID de transacción. Puedes hacer clic en el ID de transacción para verla en la cadena de bloques. '), _defineProperty(_es$data, 'HELP_4CX_Title', '4) ¿Cómo envío ether utilizando MyEtherWallet CX? '), _defineProperty(_es$data, 'HELP_4CX_Desc_1', 'Antes de nada, necesitas añadir una cartera. Una vez hecho, tienes dos opciones: la función "Enviar" del icono de la extensión de Chrome o la página "Enviar Ether y Tokens". '), _defineProperty(_es$data, 'HELP_4CX_Desc_2', 'Envío: '), _defineProperty(_es$data, 'HELP_4CX_Desc_3', 'Haz clic en el icono de la extensión de Chrome. '), _defineProperty(_es$data, 'HELP_4CX_Desc_4', 'Haz clic en el botón Click the "Enviar" button. '), _defineProperty(_es$data, 'HELP_4CX_Desc_5', 'Elige la cartera desde la que quieres enviar. '), _defineProperty(_es$data, 'HELP_4CX_Desc_6', 'Introduce la dirección a la que deseas enviar en el campo "Dirección de destino:". '), _defineProperty(_es$data, 'HELP_4CX_Desc_7', 'Introduce la cantidad que deseas enviar. También puedes hacer clic en "Enviar todo el saldo" si quieres enviar todo el saldo de la cartera. '), _defineProperty(_es$data, 'HELP_4CX_Desc_8', 'Haz clic en "Enviar transacción". '), _defineProperty(_es$data, 'HELP_4CX_Desc_9', 'Comprueba que la dirección y la cantidad que estás enviando son correctos. '), _defineProperty(_es$data, 'HELP_4CX_Desc_10', 'Introduce la contraseña para la cartera. '), _defineProperty(_es$data, 'HELP_4CX_Desc_11', 'Haz clic en "Enviar transacción". '), _defineProperty(_es$data, 'HELP_4CX_Desc_12', 'Utilizando la página "Enviar Ether y Tokens" '), _defineProperty(_es$data, 'HELP_5_Title', '5) ¿Cómo ejecuto MyEtherWallet.com sin conexión/localmente? '), _defineProperty(_es$data, 'HELP_5_Desc_1', 'Puedes ejecutar MyEtherWallet.com en tu equipo en lugar de desde los servidores de GitHub. Puedes generar una cartera totalmente sin conexión y enviar transacciones desde la página "Transacción sin conexión". '), _defineProperty(_es$data, 'HELP_5_Desc_7', 'MyEtherWallet.com is now running entirely on your computer. '), _defineProperty(_es$data, 'HELP_5_Desc_8', 'Por si no tienes costumbre, es necesario guardar la carpeta completa para ejecutar la página web, no solamente `index.html`. No modifiques ni muevas nada dentro de la carpeta. Si estás guardando una copia del repositorio MyEtherWallet para el futuro, recomendamos guardar únicamente el fichero ZIP para poder estar seguro de que el contenido permanezca intacto. '), _defineProperty(_es$data, 'HELP_5_Desc_9', 'Debido a que estamos constantemente actualizando MyEtherWallet.com, recomendamos que actualices periódicamente tu versión guardada del repositorio. '), _defineProperty(_es$data, 'HELP_5CX_Title', '5) ¿Cómo puedo instalar esta extensión desde el repositorio en lugar de desde la Chrome Store? '), _defineProperty(_es$data, 'HELP_5CX_Desc_2', 'Click on `chrome-extension-vX.X.X.X.zip` and unzip it. '), _defineProperty(_es$data, 'HELP_5CX_Desc_3', 'Go to Google Chrome and find you settings (in the menu in the upper right). '), _defineProperty(_es$data, 'HELP_5CX_Desc_4', 'Click "Extensions" on the left. '), _defineProperty(_es$data, 'HELP_5CX_Desc_5', 'Check the "Developer Mode" button at the top of that page. '), _defineProperty(_es$data, 'HELP_5CX_Desc_6', 'Click the "Load unpacked extension..." button. '), _defineProperty(_es$data, 'HELP_5CX_Desc_7', 'Navigate to the now-unzipped folder that you downloaded earlier. Click "select". '), _defineProperty(_es$data, 'HELP_5CX_Desc_8', 'The extension should now show up in your extensions and in your Chrome Extension bar. '), _defineProperty(_es$data, 'HELP_7_Title', '7) ¿Cómo envío tokens y añado tokens personalizados? '), _defineProperty(_es$data, 'HELP_7_Desc_0', '[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token. '), _defineProperty(_es$data, 'HELP_7_Desc_1', 'Navigate to the "Enviar ether y tokens" page. '), _defineProperty(_es$data, 'HELP_7_Desc_2', 'Desbloquea tu cartera. '), _defineProperty(_es$data, 'HELP_7_Desc_3', 'Enter the address you would like to send to in the "To Address:" field. '), _defineProperty(_es$data, 'HELP_7_Desc_4', 'Enter the amount you would like to send. '), _defineProperty(_es$data, 'HELP_7_Desc_5', 'Select which token you would like to send. '), _defineProperty(_es$data, 'HELP_7_Desc_6', 'If you do not see the token listed: '), _defineProperty(_es$data, 'HELP_7_Desc_7', 'Click "Custom". '), _defineProperty(_es$data, 'HELP_7_Desc_8', 'Enter the address, name, and decimals of the token. These are provided by the developers of the token and are also needed when you "Add a Watch Token" to Mist. '), _defineProperty(_es$data, 'HELP_7_Desc_9', 'Click "Save". '), _defineProperty(_es$data, 'HELP_7_Desc_10', 'You can now send that token as well as see it\'s balance in the sidebar. '), _defineProperty(_es$data, 'HELP_7_Desc_11', 'Click "Generate Transaction". '), _defineProperty(_es$data, 'HELP_7_Desc_12', 'A couple more fields will appear. This is your browser generating the transaction. '), _defineProperty(_es$data, 'HELP_7_Desc_13', 'Click the blue "Send Transaction" button below that. '), _defineProperty(_es$data, 'HELP_7_Desc_14', 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. '), _defineProperty(_es$data, 'HELP_7_Desc_15', 'The transaction will be submitted. The TX ID will display. You can click that TX ID to see it on the blockchain. '), _defineProperty(_es$data, 'HELP_8_Title', '8) ¿Qué ocurre si vuestro sitio web deja de funcionar? '), _defineProperty(_es$data, 'HELP_8_Desc_1', 'MyEtherWallet no es una cartera web. No tienes un login y nunca se graba nada en nuestros servidores. You don\'t have a login and nothing ever gets saved to our servers. Simplemente es una interfaz que te permite interactuar con la cadena de bloques. '), _defineProperty(_es$data, 'HELP_8_Desc_2', 'Si MyEtherWallet.com desapareciera, tendrías que encontrar otra manera de poder hacer lo que haces con nosotros (como por ejemplo obtener geth o Ethereum Wallet / Mist). Pero no necesitarías retirar tus ether de MyEtherWallet porque no están en MyEtherWallet. Están en la cartera que hayas generado a través de nuestro sitio. '), _defineProperty(_es$data, 'HELP_8_Desc_3', 'Puedes importar tu clave privada sin cifrar y tus archivos en formato Geth/Mist (cifrados) directamente en geth / Ethereum Wallet / Mist con mucha facilidad actualmente. Ver más abajo la pregunta #12. '), _defineProperty(_es$data, 'HELP_8_Desc_4', 'Además, la probabilidad de que cerremos MyEtherWallet es casi nula. No nos cuesta prácticamente nada mantenerlo ya que no almacenamos ninguna información. Si borramos el dominio, continúa estando disponible y siempre lo estará en [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Puedes descargar desde ahí el archivo ZIP y ejecutarlo localmente. '), _defineProperty(_es$data, 'HELP_8CX_Title', '8) ¿Qué ocurre si MyEtherWallet CX desaparece? '), _defineProperty(_es$data, 'HELP_8CX_Desc_1', 'En primer lugar, los datos se guardan en tu equipo, no en nuestros servidores. Sabemos que puede parecer confuso, pero si miras nuestra extensión de Chrome, NO estás mirando a algo almacenado en nuestros servidores en alguna parte - todo se guarda en tu equipo. '), _defineProperty(_es$data, 'HELP_8CX_Desc_2', 'Dicho esto, es **muy importante** que respaldes toda tu información para todas las nuevas carteras generadas con MyEtherWallet CX. De este modo, si algo le ocurre a MyEtherWallet CX o a tu equipo, seguirás teniendo toda la información necesaria para poder acceder a tus ether. Ver la pregunta #2a sobre cómo respaldar tus carteras. '), _defineProperty(_es$data, 'HELP_8CX_Desc_3', 'Si por algún motivo MyEtherWallet CX desaparece de Chrome Store, puedes encontrar el código fuente en Github y cargarlo manualmente. Ver #5 más arriba. '), _defineProperty(_es$data, 'HELP_9_Title', '9) Is the "Enviar ether y tokens" page offline? '), _defineProperty(_es$data, 'HELP_9_Desc_1', 'No. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times. '), _defineProperty(_es$data, 'HELP_10_Title', '10) ¿Cómo hago una transacción sin conexión? '), _defineProperty(_es$data, 'HELP_10_Desc_1', 'Navigate to the "Offline Transaction" page via your online computer. '), _defineProperty(_es$data, 'HELP_10_Desc_2', 'Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price. '), _defineProperty(_es$data, 'HELP_10_Desc_3', 'Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send. '), _defineProperty(_es$data, 'HELP_10_Desc_4', 'Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1. '), _defineProperty(_es$data, 'HELP_10_Desc_5', 'Enter the "NONCE" as it was displayed to you on your online computer in step #1. '), _defineProperty(_es$data, 'HELP_10_Desc_6', 'The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you. '), _defineProperty(_es$data, 'HELP_10_Desc_7', 'If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format. '), _defineProperty(_es$data, 'HELP_10_Desc_8', 'Select your wallet file -or- your private key and unlock your wallet. '), _defineProperty(_es$data, 'HELP_10_Desc_9', 'Press the "GENERATE SIGNED TRANSACTION" button. '), _defineProperty(_es$data, 'HELP_10_Desc_10', 'The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer. '), _defineProperty(_es$data, 'HELP_10_Desc_11', 'On your online computer, paste the signed transaction into the text field in step #3 and click "Enviar Ether y Tokens". This will broadcast your transaction. '), _defineProperty(_es$data, 'HELP_12_Title', '12) How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist? '), _defineProperty(_es$data, 'HELP_12_Desc_1', 'Using an Geth/Mist JSON file from MyEtherWallet v2+.... '), _defineProperty(_es$data, 'HELP_12_Desc_2', 'Go to the "View Wallet Info" page. '), _defineProperty(_es$data, 'HELP_12_Desc_3', 'Unlock your wallet using your **encrypted** private key or JSON file. '), _defineProperty(_es$data, 'HELP_12_Desc_4', 'Go to the "My Wallets" page. '), _defineProperty(_es$data, 'HELP_12_Desc_5', 'Select the wallet you want to import into Mist, click the "View" icon, enter your password, and access your wallet. '), _defineProperty(_es$data, 'HELP_12_Desc_6', 'Find the "Download JSON file - Geth/Mist Format (encrypted)" section. Press the "Download" button below that. You now have your keystore file. '), _defineProperty(_es$data, 'HELP_12_Desc_7', 'Open the Ethereum Wallet application. '), _defineProperty(_es$data, 'HELP_12_Desc_8', 'In the menu bar, go "Accounts" -> "Backup" -> "Accounts" '), _defineProperty(_es$data, 'HELP_12_Desc_9', 'This will open your keystore folder. Copy the file you just downloaded (`UTC--2016-04-14......../`) into that keystore folder. '), _defineProperty(_es$data, 'HELP_12_Desc_10', 'Your account should show up immediately under "Accounts." '), _defineProperty(_es$data, 'HELP_12_Desc_11', 'Using your unencrypted private key... '), _defineProperty(_es$data, 'HELP_12_Desc_12', 'If you do not already have your unencrypted private key, navigate to the "View Wallet Details" page. '), _defineProperty(_es$data, 'HELP_12_Desc_13', 'Select your wallet file -or- enter/paste your private key to unlock your wallet. '), _defineProperty(_es$data, 'HELP_12_Desc_14', 'Copy Your Private Key (unencrypted). '), _defineProperty(_es$data, 'HELP_12_Desc_15', 'If you are on a Mac: '), _defineProperty(_es$data, 'HELP_12_Desc_15b', 'If you are on a PC: '), _defineProperty(_es$data, 'HELP_12_Desc_16', 'Open Text Edit and paste this private key. '), _defineProperty(_es$data, 'HELP_12_Desc_17', 'Go to the menu bar and click "Format" -> "Make Plain Text". '), _defineProperty(_es$data, 'HELP_12_Desc_18', 'Save this file to your `desktop/` as `nothing_special_delete_me.txt`. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog. '), _defineProperty(_es$data, 'HELP_12_Desc_19', 'Open terminal and run the following command: `geth account import ~/Desktop/nothing_special_delete_me.txt` '), _defineProperty(_es$data, 'HELP_12_Desc_20', 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. '), _defineProperty(_es$data, 'HELP_12_Desc_21', 'After successful import, delete `nothing_special_delete_me.txt` '), _defineProperty(_es$data, 'HELP_12_Desc_22', 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". '), _defineProperty(_es$data, 'HELP_12_Desc_23', 'Open Notepad & paste the private key '), _defineProperty(_es$data, 'HELP_12_Desc_24', 'Save the file as `nothing_special_delete_me.txt` at `C:` '), _defineProperty(_es$data, 'HELP_12_Desc_25', 'Run the command, `geth account import C:\\nothing_special_delete_me.txt` '), _defineProperty(_es$data, 'HELP_12_Desc_26', 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. '), _defineProperty(_es$data, 'HELP_12_Desc_27', 'After successful import, delete `nothing_special_delete_me.txt` '), _defineProperty(_es$data, 'HELP_12_Desc_28', 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". '), _defineProperty(_es$data, 'HELP_13_Title', '13) What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean? '), _defineProperty(_es$data, 'HELP_13_Desc_1', 'This means you do not have enough Ether in your account to cover the cost of gas. Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. The number displayed is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`, and subtract the amount of Ether you were trying to send (if you were attempting to send Ether). This will give you the amount of Ether you need to send to that account to make the transaction. '), _defineProperty(_es$data, 'HELP_14_Title', '14) Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn\'t do this. Is the random number generation for MyEtherWallet safe? '), _defineProperty(_es$data, 'HELP_14_Desc_1', 'While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren\'t unsafe, it\'s just that we (and tons of other crypto experments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here\'s a [conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). '), _defineProperty(_es$data, 'HELP_15_Title', '15) Why hasn\'t the account I just created show up in the blockchain explorer? (ie: etherchain, etherscan) '), _defineProperty(_es$data, 'HELP_15_Desc_1', 'Accounts will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it. '), _defineProperty(_es$data, 'HELP_16_Title', '16) How do I check the balance of my account? '), _defineProperty(_es$data, 'HELP_16_Desc_1', 'You can use a blockchain explorer like [etherscan.io](http://etherscan.io/). Paste your address into the search bar and it will pull up your account and transaction history. For example, here\'s what our [donation account](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) looks like on etherscan.io '), _defineProperty(_es$data, 'HELP_17_Title', '17) Why isn\'t my balance showing up when I unlock my wallet? '), _defineProperty(_es$data, 'HELP_17_Desc_1', 'This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like etherscan.io '), _defineProperty(_es$data, 'HELP_18_Title', '18) Where is my geth wallet file? '), _defineProperty(_es$data, 'HELP_19_Title', '19) Where is my Mist wallet file? '), _defineProperty(_es$data, 'HELP_19_Desc_1', 'Mist files are typically found in the file locations above, but it\'s much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored. '), _defineProperty(_es$data, 'HELP_20_Title', '20) Where is my pre-sale wallet file? '), _defineProperty(_es$data, 'HELP_20_Desc_1', 'Wherever you saved it. ;) It also was emailed to you, so check there. Look for the file called `"ethereum_wallet_backup.json"` and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale. '), _defineProperty(_es$data, 'HELP_21_Title', '21) Couldn\'t everybody put in random private keys, look for a balance, and send to their own account? '), _defineProperty(_es$data, 'HELP_21_Desc_1', 'Short version: yes, but finding an account with a balance would take longer than the universe...so...no. '), _defineProperty(_es$data, 'HELP_21_Desc_2', 'Long ELI5 Version: So Ethereum is based on [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), specifically [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf) which is very widely used, not just in Ethereum. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and a lot of other stuff. The Ethereum keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts. '), _defineProperty(_es$data, 'HELP_21_Desc_3', 'In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this cryptography means that if there is a way to go from public key to private key, your lost ether is the least of everyone’s problems. '), _defineProperty(_es$data, 'HELP_21_Desc_4', 'Now, that said, YES if someone else has your private key then they can indeed send ether from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers. You could download the Keystore version of your private key which is the private key that is encrypted with a password. This is like having a password that is also protected by another password. '), _defineProperty(_es$data, 'HELP_21_Desc_5', 'And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worthwhile - it is more likely you, and your great-grandchildren, will die before getting a match. '), _defineProperty(_es$data, 'HELP_21_Desc_6', 'If you know anything about Bitcoin, [this will put it in perspective:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion. '), _defineProperty(_es$data, 'HELP_21_Desc_7', '[If you want something a bit more technical:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space. '), _defineProperty(_es$data, 'HELP_21_Desc_8', 'Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria, as do Jaxx and Mist/geth. The Ethereum wallets are all pretty good. Keys generated by brainwallets do not, as a person\'s brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that\'s a separate issue that can wait for another day. '), _defineProperty(_es$data, 'HELP_SecCX_Title', 'Seguridad - MyEtherWallet CX '), _defineProperty(_es$data, 'HELP_SecCX_Desc_1', '¿Dónde está guardando mi información esta extensión? '), _defineProperty(_es$data, 'HELP_SecCX_Desc_2', 'La información que guardas en esta extensión de Chrome se guarda por medio de [chrome.storage](http://chrome.storage/). - este es el mismo lugar en el que se guardan tus contraseñas cuando guardas tus contraseñas en Chrome. '), _defineProperty(_es$data, 'HELP_SecCX_Desc_3', '¿Qué información se guarda? '), _defineProperty(_es$data, 'HELP_SecCX_Desc_4', 'La dirección, alias y clave privada se guardan en chrome.storage. La clave privada se cifra utilizando la contraseña que introdujiste al añadir la cartra. El alias y la dirección de la cartera no están cifrados. '), _defineProperty(_es$data, 'HELP_SecCX_Desc_5', '¿Por qué no se cifran el alias y la dirección de la cartera? '), _defineProperty(_es$data, 'HELP_SecCX_Desc_6', 'Si cifráramos estos ítems, sería necesario que introduzcas una contraseña cada vez que quisieras comprobar el saldo de tu cuenta o vizualizar los alias. Si esto te preocupa, te recomendamos que utilices MyEtherWallet.com en lugar de esta extensión de Chrome. '), _defineProperty(_es$data, 'HELP_Sec_Title', 'Seguridad '), _defineProperty(_es$data, 'HELP_Sec_Desc_1', 'Si una de tus primeras preguntas es "¿Por qué debería confiar en estas personas?, se trata de algo bueno. Esperamos que lo que sigue te sirva de ayuda para disminuir tus preocupaciones. '), _defineProperty(_es$data, 'HELP_Sec_Desc_2', 'Hemos estado funcionando desde agosto de 2015. Si buscas ["myetherwallet" en reddit](https://www.reddit.com/search?q=myetherwallet), puedes encontrar numerosas personas que nos utilizan con gran éxito. '), _defineProperty(_es$data, 'HELP_Sec_Desc_3', 'No vamos a quitarte tu dinero ni a robar tus claves privadas. No hay código malicioso en este sitio. De hecho, las páginas "Generar Cartera" se ejecutan por completo en el cliente. Esto significa que todo el código se ejecuta en ** tu ordenador** y nunca se graba o se transmite a ningún lugar. '), _defineProperty(_es$data, 'HELP_Sec_Desc_4', 'Comprueba la URL -- Este sitio se sirve a través de GitHub y puedes ver el código fuente aquí: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) a [https://www.myetherwallet.com](https://www.myetherwallet.com). '), _defineProperty(_es$data, 'HELP_Sec_Desc_5', 'Para generar carteras, puedes descargar el [código fuente](https://github.com/kvhnuke/etherwallet/releases/latest). Ver #5 más arriba. '), _defineProperty(_es$data, 'HELP_Sec_Desc_6', 'Haz una prueba y observa qué actividad de red ocurre. La manera más fácil de hacer esto es hacer clic con el botón derecho en la página y hacer clic en "inspeccionar elemento". Ve a la pestaña "Red". Genera una cartera de prueba. Verás que no hay actividad de red. Puede que veas algo que aparece como data:image/gif y data:image/png. Se trata de los códigos QR generándose en tu ordenador y por tu ordenador. No se ha transferido ni un solo byte. '), _defineProperty(_es$data, 'HELP_Sec_Desc_8', 'Si no te encuentras cómodo utilizando esta herramienta, no la utilices bajo ningún concepto. Hemos creado esta herramienta como una manera útil para que la gente pueda generar carteras y hacer transacciones sin tener que utilizar la línea de comandos o ejecutar un nodo completo. De nuevo, por favor contáctanos si tienes inquietudes y responderemos lo más pronto posible. ¡Gracias! '), _defineProperty(_es$data, 'HELP_FAQ_Title', 'Más respuestas útiles a preguntas frecuentes '), _defineProperty(_es$data, 'HELP_Contact_Title', 'Maneras de contactar con nosotros'), _es$data);

module.exports = es;

},{}],91:[function(require,module,exports){
// Finnish
'use strict';

var _fi$data;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fi = function fi() {};
fi.code = 'fi';
fi.data = (_fi$data = {

  /* Navigation*/
  NAV_AddWallet: 'Lisää Lompakko ',
  NAV_BulkGenerate: 'Massa Generoi ',
  NAV_Contact: 'Yhteystiedot ',
  NAV_Contracts: 'Contracts ',
  NAV_DeployContract: 'Deploy Contract '
}, _defineProperty(_fi$data, 'NAV_DeployContract', 'Ota Käyttöön Sopimus '), _defineProperty(_fi$data, 'NAV_ENS', 'ENS'), _defineProperty(_fi$data, 'NAV_GenerateWallet', 'Luo Lompakko '), _defineProperty(_fi$data, 'NAV_Help', 'Apua '), _defineProperty(_fi$data, 'NAV_InteractContract', 'Interact with Contract '), _defineProperty(_fi$data, 'NAV_Multisig', 'Multisig '), _defineProperty(_fi$data, 'NAV_MyWallets', 'Minun Lompakkoni '), _defineProperty(_fi$data, 'NAV_Offline', 'Lähetä Offlinena '), _defineProperty(_fi$data, 'NAV_SendEther', 'Lähetä Etheriä ja Tokeneita '), _defineProperty(_fi$data, 'NAV_SendTokens', 'Lähetä Tokeneita '), _defineProperty(_fi$data, 'NAV_SignMsg', 'Sign Message '), _defineProperty(_fi$data, 'NAV_Swap', 'Swap '), _defineProperty(_fi$data, 'NAV_ViewWallet', 'Tarkastele Lompakon Tietoja '), _defineProperty(_fi$data, 'NAV_YourWallets', 'Sinun Lompakkosi '), _defineProperty(_fi$data, 'x_Access', 'Access '), _defineProperty(_fi$data, 'x_AddessDesc', 'Saatat tuntea tämän "Tilinumeronasi" tai "Julkisena Salausavaimenasi". Tämä on se jonka jaat ihmisille, jotta he voivat lähettää sinulle ETHiä. Tuo kuvake on helppo tapa tunnistaa sinun osoitteesi. '), _defineProperty(_fi$data, 'x_Address', 'Sinun osoitteesi '), _defineProperty(_fi$data, 'x_Cancel', 'Peruuta '), _defineProperty(_fi$data, 'x_CSV', 'CSV tiedosto (salaamaton) '), _defineProperty(_fi$data, 'x_Download', 'Lataa '), _defineProperty(_fi$data, 'x_Json', 'JSON Tiedosto (salaamaton) '), _defineProperty(_fi$data, 'x_JsonDesc', 'Tämä on salaamaton JSON tiedosto yksityisestä salausavaimestasi. Tämä tarkoittaa että et tarvitse salasanaa mutta kuka tahansa joka löytää JSON tiedostosi saa pääsyn lompakkoosi ja sen sisältämään Etheriin ilman salasanaa. '), _defineProperty(_fi$data, 'x_Keystore', 'Avainsäilö Tiedosto (UTC / JSON · Suositeltu · Salattu) '), _defineProperty(_fi$data, 'x_Keystore2', 'Avainsäilö Tiedosto (UTC / JSON) '), _defineProperty(_fi$data, 'x_KeystoreDesc', 'Tämä Avainsäilö tiedosto vastaa sitä tiedostoformaattia jota Mist käyttävät, joten voit helposti importata sen tulevaisuudessa. Se on suositeltu tiedostomuoto ladata ja varmuuskopioida. '), _defineProperty(_fi$data, 'x_Mnemonic', 'Mnemonic Phrase '), _defineProperty(_fi$data, 'x_ParityPhrase', 'Parity Phrase '), _defineProperty(_fi$data, 'x_Password', 'Salasana '), _defineProperty(_fi$data, 'x_Print', 'Tulosta Paperi Lompakko '), _defineProperty(_fi$data, 'x_PrintDesc', 'ProTip: Klikkaa Tulosta ja tallenna tämä PDF:nä, vaikka et omistaisikaan tulostinta! '), _defineProperty(_fi$data, 'x_PrintShort', 'Tulosta '), _defineProperty(_fi$data, 'x_PrivKey', 'Yksityinen salausavain (salaamaton) '), _defineProperty(_fi$data, 'x_PrivKey2', 'Yksityinen salausavain '), _defineProperty(_fi$data, 'x_PrivKeyDesc', 'Tämä on salaamaton versio sinun yksityisestä salausavaimestasi, tarkoittaen että salasanaa ei tarvita. Jos joku sattuisi löytämään sinun salaamattoman yksityisen salausavaimesi, he pääsisivät käsiksi sinun lompakkoosi ilman salasanaa. Tästä syystä salatut versiot ovat yleensä suositeltuja. '), _defineProperty(_fi$data, 'x_Save', 'Tallenna '), _defineProperty(_fi$data, 'x_TXT', 'TXT tiedosto (salaamaton) '), _defineProperty(_fi$data, 'x_Wallet', 'Lompakko '), _defineProperty(_fi$data, 'x_Wallet', 'Wallet '), _defineProperty(_fi$data, 'MEW_Warning_1', 'Tarkista URL aina ennen kuin avaat lompakkosi tai luot uuden lompakon. Varo tietojen-kalastelu sivustoja! '), _defineProperty(_fi$data, 'CX_Warning_1', 'Varmista että sinulla on **ulkoiset varmuuskopiot** kaikista lompakoista joita säilytät täällä. Monia asioita voi tapahtua joiden seurauksena voit menettää tietoja tässä Chrome Laajennuksessa, mukaan lukien laajennuksen asennuksen poistaminen tai uudelleenasennus. Tämä laajennus on keino jolla saat helpon pääsyn lompakkoosi, **ei** keino varmuuskopioida niitä. '), _defineProperty(_fi$data, 'MEW_Tagline', 'Avoimen Lähdekoodin JavaScript Ether Lompakko '), _defineProperty(_fi$data, 'CX_Tagline', 'Avoimen Lähdekoodin JavaScript Chrome Laajennus '), _defineProperty(_fi$data, 'FOOTER_1', 'Avoimen lähdekoodin, javascript työkalu Ethereum lompakkojen luomista & varojen siirtoja varten. '), _defineProperty(_fi$data, 'FOOTER_1b', 'Luonut '), _defineProperty(_fi$data, 'FOOTER_2', 'Lahjoituksia arvostetaan suuresti: '), _defineProperty(_fi$data, 'FOOTER_3', 'Lompakon luomisen tarjoaa '), _defineProperty(_fi$data, 'FOOTER_4', 'Vastuuvapauslauseke / Disclaimer '), _defineProperty(_fi$data, 'sidebar_AccountInfo', 'Tilin Tiedot '), _defineProperty(_fi$data, 'sidebar_AccountAddr', 'Tilin Osoite '), _defineProperty(_fi$data, 'sidebar_AccountBal', 'Tilin Saldo '), _defineProperty(_fi$data, 'sidebar_TokenBal', 'Tokenien Saldo '), _defineProperty(_fi$data, 'sidebar_Equiv', 'Vastaavat Arvot '), _defineProperty(_fi$data, 'sidebar_TransHistory', 'Siirto Historia '), _defineProperty(_fi$data, 'sidebar_donation', 'MyEtherWallet on ilmainen, avoimen lähdekoodin palvelu joka on omistautunut sinun yksityisyyteesi ja turvallisuuteesi. Mitä enemmän lahjoituksia me vastaanotamme, sitä enemmän aikaa me käytämme uusien toimintojen luomiseksi, kuunnellen teidän palautettanne ja antaen teille juuri sitä mitä te tahdotte. Me olemme vain kaksi ihmistä jotka koittavat muuttaa maailmaa. Auta meitä? '), _defineProperty(_fi$data, 'sidebar_donate', 'Lahjoita '), _defineProperty(_fi$data, 'sidebar_thanks', 'KIITOS!!! '), _defineProperty(_fi$data, 'decrypt_Access', 'Kuinka haluaisit saada pääsyn lompakkoosi? '), _defineProperty(_fi$data, 'decrypt_Title', 'Valitse yksityisen salausavaimesi muoto: '), _defineProperty(_fi$data, 'decrypt_Select', 'Valitse Lompakko: '), _defineProperty(_fi$data, 'ADD_Label_1', 'Mitä tahtoisit tehdä? '), _defineProperty(_fi$data, 'ADD_Radio_1', 'Luo Uusi Lompakko '), _defineProperty(_fi$data, 'ADD_Radio_2', 'Valitse Lompakko Tiedostosi (Avainsäilö / JSON) '), _defineProperty(_fi$data, 'ADD_Radio_2_alt', 'Valitse Lompakko Tiedostosi '), _defineProperty(_fi$data, 'ADD_Radio_2_short', 'VALITSE LOMPAKKO TIEDOSTO... '), _defineProperty(_fi$data, 'ADD_Radio_3', 'Liitä/Kirjoita Yksityinen Salausavaimesi '), _defineProperty(_fi$data, 'ADD_Radio_4', 'Lisää Tili Jota Seurata '), _defineProperty(_fi$data, 'ADD_Radio_5', 'Paste/Type Your Mnemonic '), _defineProperty(_fi$data, 'ADD_Radio_5_Path', 'Select HD derivation path '), _defineProperty(_fi$data, 'ADD_Radio_5_PathCustom', 'Custom'), _defineProperty(_fi$data, 'ADD_Label_2', 'Luo Kutsumanimi: '), _defineProperty(_fi$data, 'ADD_Label_3', 'Lompakkosi on salattu, ole hyvä ja syötä salasanasi '), _defineProperty(_fi$data, 'ADD_Label_4', 'Lisää Tili Jota Seurata '), _defineProperty(_fi$data, 'ADD_Warning_1', 'Voit lisätä minkä tahansa tilin jota "seurata" lompakkojen välilehdessä ilman yksityisen salausavaimesi lähettämistä. Tämä ** ei ** tarkoita että sinulla olisi pääsy tähän lompakkoon, tai että voit siirtää Etheriä siitä. '), _defineProperty(_fi$data, 'ADD_Label_5', 'Syötä Osoite '), _defineProperty(_fi$data, 'ADD_Label_6', 'Avaa Sinun Lompakkosi '), _defineProperty(_fi$data, 'ADD_Label_6_short', 'Avaa '), _defineProperty(_fi$data, 'ADD_Label_7', 'Lisää Tili '), _defineProperty(_fi$data, 'GEN_desc', 'Jos tahdot luoda useita lompakoita, voit tehdä sen täältä '), _defineProperty(_fi$data, 'GEN_Label_1', 'Syötä vahva salasana (vähintään 9 merkkiä) '), _defineProperty(_fi$data, 'GEN_Placeholder_1', 'ÄLÄ unohda tallentaa tätä! '), _defineProperty(_fi$data, 'GEN_SuccessMsg', 'Onnistui! Sinun lompakkosi on luotu. '), _defineProperty(_fi$data, 'GEN_Label_2', 'Tallenna Avainsäilö tai Yksityinen salausavaimesi. Älä unohda yllä olevaa salasanaasi. '), _defineProperty(_fi$data, 'GEN_Label_3', 'Tallenna Osoitteesi. '), _defineProperty(_fi$data, 'GEN_Label_4', 'Valinnainen: Tulosta paperi lompakkosi, tai säilö QR koodi versio. '), _defineProperty(_fi$data, 'BULK_Label_1', 'Kuinka Monta Lompakkoa Luodaan '), _defineProperty(_fi$data, 'BULK_Label_2', 'Luo Lompakot '), _defineProperty(_fi$data, 'BULK_SuccessMsg', 'Onnistui! Sinun lompakkosi on luotu. '), _defineProperty(_fi$data, 'SEND_addr', 'Osoitteeseen '), _defineProperty(_fi$data, 'SEND_amount', 'Summa Joka Lähetetään '), _defineProperty(_fi$data, 'SEND_amount_short', 'Summa '), _defineProperty(_fi$data, 'SEND_custom', 'Mukautettu '), _defineProperty(_fi$data, 'SEND_gas', 'Gas '), _defineProperty(_fi$data, 'SEND_TransferTotal', 'Lähetä Koko Saldo '), _defineProperty(_fi$data, 'SEND_generate', 'Luo Allekirjoitettu Siirto '), _defineProperty(_fi$data, 'SEND_raw', 'Käsittelemätön Siirto '), _defineProperty(_fi$data, 'SEND_signed', 'Allekirjoitettu Siirto '), _defineProperty(_fi$data, 'SEND_trans', 'Lähetä Siirto '), _defineProperty(_fi$data, 'SEND_custom', 'Add Custom Token '), _defineProperty(_fi$data, 'SENDModal_Title', 'Varoitus! '), _defineProperty(_fi$data, 'SENDModal_Content_1', 'Olet lähettämässä '), _defineProperty(_fi$data, 'SENDModal_Content_2', 'osoitteeseen '), _defineProperty(_fi$data, 'SENDModal_Content_3', 'Oletko varma että haluat tehdä tämän? '), _defineProperty(_fi$data, 'SENDModal_Content_4', 'HUOMAUTUS: Jos kohtaat virheen, sinun täytyy todennäköisesti lisätä ETHiä tilillesi kattaaksesi siirron vaatiman gasin hinnan. Gas maksetaan ETHeinä. '), _defineProperty(_fi$data, 'SENDModal_No', 'En, vie minut pois täältä! '), _defineProperty(_fi$data, 'SENDModal_Yes', 'Kyllä, olen varma! Toteuta siirto. '), _defineProperty(_fi$data, 'TOKEN_Addr', 'Osoite '), _defineProperty(_fi$data, 'TOKEN_Symbol', 'Token Tunnus '), _defineProperty(_fi$data, 'TOKEN_Dec', 'Desimaalit '), _defineProperty(_fi$data, 'TOKEN_hide', 'Hide Tokens '), _defineProperty(_fi$data, 'TOKEN_show', 'Show All Tokens '), _defineProperty(_fi$data, 'TRANS_desc', 'Jos haluat lähettää Tokeneita, ole hyvä ja käytä "Lähetä Tokeneita" sivua. '), _defineProperty(_fi$data, 'TRANS_warning', 'Jos käytät "Vain ETH" tai "Vain ETC" Toimintoja, niin lähetät sopimuksen kautta. Joillakin palveluilla on vaikeuksia hyväksyä näitä siirtoja. Lue lisää. '), _defineProperty(_fi$data, 'TRANS_advanced', '+Edistynyt: Lisää Tietoja '), _defineProperty(_fi$data, 'TRANS_data', 'Tiedot '), _defineProperty(_fi$data, 'TRANS_gas', 'Gas Limit '), _defineProperty(_fi$data, 'TRANS_sendInfo', 'Tavallinen siirto käyttäen 21000 gasia maksaa 0.000441 ETHiä. Me käytämme hieman-yli-minimin gasin hintaa 0.000000021 ETHiä varmistaaksemme että se louhitaan nopeasti. Me emme veloita siirto maksua. '), _defineProperty(_fi$data, 'TRANSModal_Title', '"Vain ETH" ja "Vain ETC" Siirrot '), _defineProperty(_fi$data, 'TRANSModal_Content_0', 'Huomautus erilaisista siirroista ja eri palveluista: '), _defineProperty(_fi$data, 'TRANSModal_Content_1', '**ETH (Tavallinen Siirto): ** Tämä luo oletusarvoisen siirron osoitteesta toiseen. Siinä on oletus gasina 21000. On todennäköistä että kaikki ETH joka lähetetään tällä tavalla, toistetaan ETC ketjussa. '), _defineProperty(_fi$data, 'TRANSModal_Content_2', '**Vain ETH: ** Tämä lähettää [Timon Rappin toiston suojaus sopimuksen kautta (kuten VB on suositellut)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) niin että sinä lähetät vain **ETH** ketjussa. '), _defineProperty(_fi$data, 'TRANSModal_Content_3', '**Only ETC: ** Tämä lähettää [Timon Rappin toiston suojaus sopimuksen kautta (kuten VB on suositellut)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) niin että sinä lähetät vain **ETC** ketjussa. '), _defineProperty(_fi$data, 'TRANSModal_Content_4', '**Coinbase & ShapeShift: ** Lähetä ainoastaan käyttäen Tavallista Siirtoa. Jos lähetät käyttäen "Vain" sopimuksia, sinun täytyy olla yhteydessä heidän asiakastukensa henkilöstöön jotta he joko manuaalisesti lisäävät sinun saldosi tai palauttavat rahasi. [Voit kokeilla myös ShapeShiftin "split" työkalua.](https://split.shapeshift.io/) '), _defineProperty(_fi$data, 'TRANSModal_Content_5', '**Kraken & Poloniex:** Ei tunnettuja ongelmia. Käytä mitä vain. '), _defineProperty(_fi$data, 'TRANSModal_Yes', 'Siistiä, nyt ymmärrän. '), _defineProperty(_fi$data, 'TRANSModal_No', 'Voi ei, olen entistä enemmän hämilläni. Auttakaa minua. '), _defineProperty(_fi$data, 'OFFLINE_Title', 'Luo ja Lähetä Offline Siirto '), _defineProperty(_fi$data, 'OFFLINE_Desc', 'Offline siirtojen luonti voidaan tehdä kolmella eri vaiheella. Teet vaiheet 1 ja 3 käyttäen verkkoon yhdistettyä (online) tietokonetta, ja vaiheen 2 käyttäen offline/airgappattua tietokonetta. Tämä varmistaa ettei sinun yksityinen salausavaimesi ole kosketuksissa internettiin yhdistetyn laitteen kanssa. '), _defineProperty(_fi$data, 'OFFLLINE_Step1_Title', 'Vaihe 1: Luo Tiedot (Online Tietokone) '), _defineProperty(_fi$data, 'OFFLINE_Step1_Button', 'Luo Tiedot '), _defineProperty(_fi$data, 'OFFLINE_Step1_Label_1', 'Osoitteesta '), _defineProperty(_fi$data, 'OFFLINE_Step1_Label_2', 'Huomautus: Tämä on MISTÄ osoitteesta, ei MIHIN osoitteeseen. Nonce luodaan osoitteesta josta siirto on peräisin. Jos käytetään airgappattua tietokonetta, se olisi kylmä-varasto tilin osoite. '), _defineProperty(_fi$data, 'OFFLINE_Step2_Title', 'Vaihe 2: Luo Siirto (Offline Tietokone) '), _defineProperty(_fi$data, 'OFFLINE_Step2_Label_1', 'Osoitteeseen '), _defineProperty(_fi$data, 'OFFLINE_Step2_Label_2', 'Arvo / Määrä Joka Lähetetään '), _defineProperty(_fi$data, 'OFFLINE_Step2_Label_3', 'Gasin hinta '), _defineProperty(_fi$data, 'OFFLINE_Step2_Label_3b', 'Tämä näytettiin kohdassa Vaihe 1 sinun verkkoon yhdistetyssä tietokoneessasi. '), _defineProperty(_fi$data, 'OFFLINE_Step2_Label_4', 'Gas Raja '), _defineProperty(_fi$data, 'OFFLINE_Step2_Label_4b', '21000 on oletusarvoinen gas raja. Kun lähetät sopimuksiin tai lisäät tietoa, saattaa tämä määrä joutua olemaan eri. Kaikki käyttämätön gas palautetaan sinulle. '), _defineProperty(_fi$data, 'OFFLINE_Step2_Label_5', 'Nonce '), _defineProperty(_fi$data, 'OFFLINE_Step2_Label_5b', 'Tämä näytettiin kohdassa Vaihe 1 sinun verkkoon yhdistetyssä tietokoneessasi. '), _defineProperty(_fi$data, 'OFFLINE_Step2_Label_6', 'Tiedot '), _defineProperty(_fi$data, 'OFFLINE_Step2_Label_6b', 'Tämä on valinnainen. Tietoja käytetään usein kun varoja lähetetään sopimuksiin. '), _defineProperty(_fi$data, 'OFFLINE_Step2_Label_7', 'Syötä / Valitse Yksityinen salausavaimesi / JSON. '), _defineProperty(_fi$data, 'OFFLINE_Step3_Title', 'Vaihe 3: Lähetä / Julkaise Siirto (Verkkoon yhdistetty (online) tietokone) '), _defineProperty(_fi$data, 'OFFLINE_Step3_Label_1', 'Liitä allekirjoitettu siirto Vaiheesta 2 tähän ja paina "LÄHETÄ SIIRTO" nappia. '), _defineProperty(_fi$data, 'DEP_generate', 'Generoi Bytecode '), _defineProperty(_fi$data, 'DEP_generated', 'Generoitu Bytecode '), _defineProperty(_fi$data, 'DEP_signtx', 'Allekirjoita Siirto '), _defineProperty(_fi$data, 'DEP_interface', 'Generoitu Rajapinta '), _defineProperty(_fi$data, 'MYWAL_Nick', 'Lompakon Kutsumanimi '), _defineProperty(_fi$data, 'MYWAL_Address', 'Lompakon Osoite '), _defineProperty(_fi$data, 'MYWAL_Bal', 'Saldo '), _defineProperty(_fi$data, 'MYWAL_Edit', 'Muokkaa '), _defineProperty(_fi$data, 'MYWAL_View', 'Katso '), _defineProperty(_fi$data, 'MYWAL_Remove', 'Poista '), _defineProperty(_fi$data, 'MYWAL_RemoveWal', 'Poista Lompakko: '), _defineProperty(_fi$data, 'MYWAL_WatchOnly', 'Sinun Seuraa-Ainoastaan Tilisi '), _defineProperty(_fi$data, 'MYWAL_Viewing', 'Tarkastellaan Lompakkoa '), _defineProperty(_fi$data, 'MYWAL_Hide', 'Piilota Lompakon Tiedot '), _defineProperty(_fi$data, 'MYWAL_Edit_2', 'Muokkaa Lompakkoa '), _defineProperty(_fi$data, 'MYWAL_Name', 'Lompakon Nimi '), _defineProperty(_fi$data, 'MYWAL_Content_1', 'Varoitus! Olet poistamassa lompakkoasi. '), _defineProperty(_fi$data, 'MYWAL_Content_2', 'Varmista että olet **tallentanut tähän lompakkoon liittyvät yksityisen salausavaimesi/JSON tiedostosi ja salasanasi** ennen kuin poistat sen. '), _defineProperty(_fi$data, 'MYWAL_Content_3', 'Jos tahdot käyttää tätä lompakkoa MyEtherWallet CX:si kanssa tulevaisuudessa, sinun täytyy manuaalisesti uudelleen-lisätä se käyttäen yksityistä salausavaintasi/JSONia ja salasanaa. '), _defineProperty(_fi$data, 'VIEWWALLET_Subtitle', 'Tämä antaa sinun ladata eri versiota yksityisistä salausavaimistasi ja uudelleen-tulostaa paperi lompakkosi. Saatat tahtoa tehdä tämän [tuodaksesi sinun tilisi Gethiin/Mistiin](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Jos haluat tarkistaa saldosi, me suosittelemme käyttämään blockchain exploreria kuten [etherscan.io](http://etherscan.io/). '), _defineProperty(_fi$data, 'VIEWWALLET_Subtitle_Short', 'Tämä antaa sinun ladata eri versiota yksityisistä salausavaimistasi ja uudelleen-tulostaa paperi lompakkosi. '), _defineProperty(_fi$data, 'VIEWWALLET_SuccessMsg', 'Onnistui! Tässä ovat lompakkosi yksityiskohdat. '), _defineProperty(_fi$data, 'CX_error_1', 'Sinulla ei ole lompakkoja tallennettuna. Klikkaa ["Lisää Lompakko"](/cx-wallet.html#add-wallet) lisätäksesi! '), _defineProperty(_fi$data, 'CX_quicksend', 'PikaLähetä '), _defineProperty(_fi$data, 'NODE_Title', 'Set Up Your Custom Node'), _defineProperty(_fi$data, 'NODE_Subtitle', 'To connect to a local node...'), _defineProperty(_fi$data, 'NODE_Warning', 'Your node must be HTTPS in order to connect to it via MyEtherWallet.com. You can [download the MyEtherWallet repo & run it locally](https://github.com/kvhnuke/etherwallet/releases/latest) to connect to any node. Or, get free SSL certificate via [LetsEncrypt](https://letsencrypt.org/)'), _defineProperty(_fi$data, 'NODE_Name', 'Node Name'), _defineProperty(_fi$data, 'NODE_Port', 'Node Port'), _defineProperty(_fi$data, 'NODE_CTA', 'Save & Use Custom Node'), _defineProperty(_fi$data, 'CONTRACT_Title', 'Contract Address '), _defineProperty(_fi$data, 'CONTRACT_Title_2', 'Select Existing Contract '), _defineProperty(_fi$data, 'CONTRACT_Json', 'ABI / JSON Interface '), _defineProperty(_fi$data, 'CONTRACT_Interact_Title', 'Read / Write Contract '), _defineProperty(_fi$data, 'CONTRACT_Interact_CTA', 'Select a function '), _defineProperty(_fi$data, 'CONTRACT_ByteCode', 'Byte Code '), _defineProperty(_fi$data, 'CONTRACT_Read', 'READ '), _defineProperty(_fi$data, 'CONTRACT_Write', 'WRITE '), _defineProperty(_fi$data, 'DEP_generate', 'Generate Bytecode '), _defineProperty(_fi$data, 'DEP_generated', 'Generated Bytecode '), _defineProperty(_fi$data, 'DEP_signtx', 'Sign Transaction '), _defineProperty(_fi$data, 'DEP_interface', 'Generated Interface '), _defineProperty(_fi$data, 'SWAP_rates', "Current Rates "), _defineProperty(_fi$data, 'SWAP_init_1', "I want to swap my "), _defineProperty(_fi$data, 'SWAP_init_2', " for "), _defineProperty(_fi$data, 'SWAP_init_CTA', "Let's do this! "), _defineProperty(_fi$data, 'SWAP_information', "Your Information "), _defineProperty(_fi$data, 'SWAP_send_amt', "Amount to send "), _defineProperty(_fi$data, 'SWAP_rec_amt', "Amount to receive "), _defineProperty(_fi$data, 'SWAP_your_rate', "Your rate "), _defineProperty(_fi$data, 'SWAP_rec_add', "Your Receiving Address "), _defineProperty(_fi$data, 'SWAP_start_CTA', "Start Swap "), _defineProperty(_fi$data, 'SWAP_ref_num', "Your reference number "), _defineProperty(_fi$data, 'SWAP_time', "Time remaining to send "), _defineProperty(_fi$data, 'SWAP_progress_1', "Order Initiated "), _defineProperty(_fi$data, 'SWAP_progress_2', "Waiting for your "), _defineProperty(_fi$data, 'SWAP_progress_3', "Received! "), _defineProperty(_fi$data, 'SWAP_progress_4', "Sending your {{orderResult.output.currency}} "), _defineProperty(_fi$data, 'SWAP_progress_5', "Order Complete "), _defineProperty(_fi$data, 'SWAP_order_CTA', "Please send "), _defineProperty(_fi$data, 'SWAP_unlock', "Unlock your wallet to send ETH or Tokens directly from this page. "), _defineProperty(_fi$data, 'MSG_message', 'Message '), _defineProperty(_fi$data, 'MSG_date', 'Date '), _defineProperty(_fi$data, 'MSG_signature', 'Signature '), _defineProperty(_fi$data, 'MSG_verify', 'Verify Message '), _defineProperty(_fi$data, 'MSG_info1', 'Include the current date so the signature cannot be reused on a different date. '), _defineProperty(_fi$data, 'MSG_info2', 'Include your nickname and where you use the nickname so someone else cannot use it. '), _defineProperty(_fi$data, 'MSG_info3', 'Include a specific reason for the message so it cannot be reused for a different purpose. '), _defineProperty(_fi$data, 'MNEM_1', 'Please select the address you would like to interact with. '), _defineProperty(_fi$data, 'MNEM_2', 'Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. '), _defineProperty(_fi$data, 'MNEM_more', 'More Addresses '), _defineProperty(_fi$data, 'MNEM_prev', 'Previous Addresses '), _defineProperty(_fi$data, 'x_Ledger', 'Ledger Nano S '), _defineProperty(_fi$data, 'ADD_Ledger_1', 'Connect your Ledger Nano S '), _defineProperty(_fi$data, 'ADD_Ledger_2', 'Open the Ethereum application (or a contract application) '), _defineProperty(_fi$data, 'ADD_Ledger_3', 'Verify that Browser Support is enabled in Settings '), _defineProperty(_fi$data, 'ADD_Ledger_4', 'If no Browser Support is found in settings, verify that you have [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) '), _defineProperty(_fi$data, 'ADD_Ledger_0a', 'Re-open MyEtherWallet on a secure (SSL) connection '), _defineProperty(_fi$data, 'ADD_Ledger_0b', 'Re-open MyEtherWallet using [Chrome](https://www.google.com/chrome/browser/desktop/) or [Opera](https://www.opera.com/) '), _defineProperty(_fi$data, 'ADD_Ledger_scan', 'Connect to Ledger Nano S '), _defineProperty(_fi$data, 'x_Trezor', 'TREZOR '), _defineProperty(_fi$data, 'ADD_Trezor_scan', 'Connect to TREZOR '), _defineProperty(_fi$data, 'ADD_Trezor_select', 'This is a TREZOR seed '), _defineProperty(_fi$data, 'CX_error_1', 'You don\'t have any wallets saved. Click ["Add Wallet"](/cx-wallet.html#add-wallet) to add one! '), _defineProperty(_fi$data, 'CX_quicksend', 'QuickSend '), _defineProperty(_fi$data, 'FOOTER_1b', 'Created by '), _defineProperty(_fi$data, 'FOOTER_4', 'Disclaimer '), _defineProperty(_fi$data, 'ERROR_0', 'Ole hyvä ja syötä kelpaava summa. '), _defineProperty(_fi$data, 'ERROR_1', 'Salasanasi pitää olla vähintään 9 merkkiä pitkä. Ole hyvä ja varmista että käytät vahvaa salasanaa. '), _defineProperty(_fi$data, 'ERROR_2', 'Pahoittelut! Emme tunnista tämänlaista lompakko tiedostoa. '), _defineProperty(_fi$data, 'ERROR_3', 'Tämä ei ole validi lompakko tiedosto. '), _defineProperty(_fi$data, 'ERROR_4', 'Tätä yksikköä ei ole olemassa, ole hyvä ja käytä jotain seuraavista yksiköistä '), _defineProperty(_fi$data, 'ERROR_5', 'Virheellinen osoite. '), _defineProperty(_fi$data, 'ERROR_6', 'Virheellinen salasana. '), _defineProperty(_fi$data, 'ERROR_7', 'Virheellinen summa. (Must be integer. Try 0-18.) '), _defineProperty(_fi$data, 'ERROR_8', 'Virheellinen gas raja. (Must be integer. Try 21000-4000000.) '), _defineProperty(_fi$data, 'ERROR_9', 'Virheellinen tieto arvo. (Must be hex.) '), _defineProperty(_fi$data, 'ERROR_10', 'Virheellinen gasin määrä. (Must be integer. Try 20 GWEI / 20000000000 WEI.) '), _defineProperty(_fi$data, 'ERROR_11', 'Virheellinen nonce. (Must be integer.) '), _defineProperty(_fi$data, 'ERROR_12', 'Virheellinen allekirjoitettu siirto. '), _defineProperty(_fi$data, 'ERROR_13', 'Lompakko tällä kutsumanimellä on jo olemassa. '), _defineProperty(_fi$data, 'ERROR_14', 'Lompakkoa ei löytynyt. '), _defineProperty(_fi$data, 'ERROR_15', 'Ei näytä että ehdotusta tällä ID:llä olisi vielä olemassa tai tapahtui virhe ehdotusta luettaessa. '), _defineProperty(_fi$data, 'ERROR_16', 'Lompakko jolla on tämä osoite on jo muistissa. Ole hyvä ja tarkista oma lompakko sivusi. '), _defineProperty(_fi$data, 'ERROR_17', 'Riittämätön saldo gas * hinta + arvo. Sinulla täytyy olla vähintään 0.01 ETHiä tililläsi kattaaksesi gasin hinnan. Ole hyvä ja lisää hieman ETHiä ja kokeile uudelleen. '), _defineProperty(_fi$data, 'ERROR_18', 'Kaikki gas käytettäisiin tässä siirrossa. Tämä tarkoittaa että olet jo äänestänyt tässä ehdotuksessa tai debaatti aika on jo päättynyt. '), _defineProperty(_fi$data, 'ERROR_19', 'Virheellinen merkki '), _defineProperty(_fi$data, 'ERROR_20', 'Not a valid ERC-20 token'), _defineProperty(_fi$data, 'ERROR_21', 'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.'), _defineProperty(_fi$data, 'ERROR_22', 'Please enter a valid node name'), _defineProperty(_fi$data, 'ERROR_23', 'Please enter a valid URL. If you are on https, your URL must be https'), _defineProperty(_fi$data, 'ERROR_24', 'Please enter a valid port. '), _defineProperty(_fi$data, 'ERROR_25', 'Please enter a valid chain ID. '), _defineProperty(_fi$data, 'ERROR_26', 'Please enter a valid ABI. '), _defineProperty(_fi$data, 'ERROR_27', 'Minimum amount: 0.01. Max amount: '), _defineProperty(_fi$data, 'ERROR_28', '**Tarvitset Avainsäilö Tiedostosi & salasanan tai Yksityisen salausavaimesi** saadaksesi pääsyn tähän lompakkoon tulevaisuudessa. Ole hyvä ja tallenna sekä varmuuskopioi se ulkoisesti! Ei ole mitään keinoa palauttaa sitä jos et tallenna sitä. Voit lukea ohjeet [Apua sivulta](https://www.myetherwallet.com/#help). '), _defineProperty(_fi$data, 'ERROR_29', 'Please enter a valid user and password. '), _defineProperty(_fi$data, 'ERROR_30', 'Please enter a valid name (7+ characters, limited punctuation) '), _defineProperty(_fi$data, 'ERROR_31', 'Please enter a valid secret phrase. '), _defineProperty(_fi$data, 'ERROR_32', 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.'), _defineProperty(_fi$data, 'ERROR_33', 'The wallet you have unlocked does not match the owner\'s address. '), _defineProperty(_fi$data, 'ERROR_34', 'The name you are attempting to reveal does not match the name you have entered. '), _defineProperty(_fi$data, 'SUCCESS_1', 'Validi osoite '), _defineProperty(_fi$data, 'SUCCESS_2', 'Lompakon salaus onnistuneesti purettu '), _defineProperty(_fi$data, 'SUCCESS_3', 'TX was broadcast to the blockchain. Click to see your transaction & verify it was mined and does not have any out of gas or contract execution errors.  TX ID:  '), _defineProperty(_fi$data, 'SUCCESS_4', 'Lompakkosi lisätty onnistuneesti '), _defineProperty(_fi$data, 'SUCCESS_5', 'Valittu Tiedosto '), _defineProperty(_fi$data, 'SUCCESS_6', 'You are successfully connected '), _defineProperty(_fi$data, 'SUCCESS_7', 'Message Signature Verified'), _defineProperty(_fi$data, 'WARN_Send_Link', 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. '), _defineProperty(_fi$data, 'GETH_InvalidSender', 'Virheellinen lähettäjä '), _defineProperty(_fi$data, 'GETH_Nonce', 'Nonce liian pieni '), _defineProperty(_fi$data, 'GETH_Cheap', 'Gasin hinta liian matala hyväksyttäväksi '), _defineProperty(_fi$data, 'GETH_Balance', 'Riittämätön saldo '), _defineProperty(_fi$data, 'GETH_NonExistentAccount', 'Tiliä ei ole olemassa tai tilin saldo liian pieni '), _defineProperty(_fi$data, 'GETH_InsufficientFunds', 'Riittämätön saldo gas * hinta + arvo '), _defineProperty(_fi$data, 'GETH_IntrinsicGas', 'Olennainen gas liian pieni '), _defineProperty(_fi$data, 'GETH_GasLimit', 'Ylittää blockin gas rajan '), _defineProperty(_fi$data, 'GETH_NegativeValue', 'Negatiivinen arvo '), _defineProperty(_fi$data, 'PARITY_AlreadyImported', "Transaction with the same hash was already imported."), _defineProperty(_fi$data, 'PARITY_Old', "Transaction nonce is too low. Try incrementing the nonce."), _defineProperty(_fi$data, 'PARITY_TooCheapToReplace', "Transaction fee is too low. There is another transaction with same nonce in the queue. Try increasing the fee or incrementing the nonce."), _defineProperty(_fi$data, 'PARITY_LimitReached', "There are too many transactions in the queue. Your transaction was dropped due to limit. Try increasing the fee."), _defineProperty(_fi$data, 'PARITY_InsufficientGasPrice', "Transaction fee is too low. It does not satisfy your node's minimal fee (minimal: {}, got: {}). Try increasing the fee."), _defineProperty(_fi$data, 'PARITY_InsufficientBalance', "Insufficient funds. Account you try to send transaction from does not have enough funds. Required {} wei and got: {} wei."), _defineProperty(_fi$data, 'PARITY_GasLimitExceeded', "Transaction cost exceeds current gas limit. Limit: {}, got: {}. Try decreasing supplied gas."), _defineProperty(_fi$data, 'PARITY_InvalidGasLimit', "Supplied gas is beyond limit."), _defineProperty(_fi$data, 'translate_version', '0.4 '), _defineProperty(_fi$data, 'Translator_Desc', 'Kiitos kääntäjillemme... '), _defineProperty(_fi$data, 'TranslatorName_1', '[Smokyish](https://www.myetherwallet.com/?gaslimit=21000&to=0xac9a2c1dd946da64c0dc8e70cec2cfb14304fd4f&value=1.0#send-transaction)'), _defineProperty(_fi$data, 'TranslatorAddr_1', ''), _defineProperty(_fi$data, 'TranslatorName_2', ''), _defineProperty(_fi$data, 'TranslatorAddr_2', ''), _defineProperty(_fi$data, 'TranslatorName_3', ''), _defineProperty(_fi$data, 'TranslatorAddr_3', ''), _defineProperty(_fi$data, 'TranslatorName_4', ''), _defineProperty(_fi$data, 'TranslatorAddr_4', ''), _defineProperty(_fi$data, 'TranslatorName_5', ''), _defineProperty(_fi$data, 'TranslatorAddr_5', ''), _defineProperty(_fi$data, 'HELP_Warning', 'If you created a wallet -or- downloaded the repo before **Dec. 31st, 2015**, please check your wallets &amp; download a new version of the repo. Click for details. '), _defineProperty(_fi$data, 'HELP_Desc', 'Do you see something missing? Have another question? [Get in touch with us](mailto:support@myetherwallet.com), and we will not only answer your question, we will update this page to be more useful to people in the future! '), _defineProperty(_fi$data, 'HELP_Remind_Title', 'Some reminders '), _defineProperty(_fi$data, 'HELP_Remind_Desc_1', '**Ethereum, MyEtherWallet.com & MyEtherWallet CX, and some of the underlying Javascript libraries we use are under active development.** While we have thoroughly tested & tens of thousands of wallets have been successfully created by people all over the globe, there is always the remote possibility that something unexpected happens that causes your ETH to be lost. Please do not invest more than you are willing to lose, and please be careful. If something were to happen, we are sorry, but **we are not responsible for the lost Ether**. '), _defineProperty(_fi$data, 'HELP_Remind_Desc_2', 'MyEtherWallet.com & MyEtherWallet CX are not "web wallets". You do not create an account or give us your Ether to hold onto. All data never leaves your computer/your browser. We make it easy for you to create, save, and access your information and interact with the blockchain. '), _defineProperty(_fi$data, 'HELP_Remind_Desc_3', 'If you do not save your private key & password, there is no way to recover access to your wallet or the funds it holds.  Back them up in multiple physical locations &ndash; not just on your computer! '), _defineProperty(_fi$data, 'HELP_0_Title', '0) I\'m new. What do I do? '), _defineProperty(_fi$data, 'HELP_0_Desc_1', 'MyEtherWallet gives you the ability to generate new wallets so you can store your Ether yourself, not on an exchange. This process happens entirely on your computer, not our servers. Therefore, when you generate a new wallet, **you are responsible for safely backing it up**. '), _defineProperty(_fi$data, 'HELP_0_Desc_2', 'Create a new wallet. '), _defineProperty(_fi$data, 'HELP_0_Desc_3', 'Back the wallet up. '), _defineProperty(_fi$data, 'HELP_0_Desc_4', 'Verify you have access to this new wallet and have correctly saved all necessary information. '), _defineProperty(_fi$data, 'HELP_0_Desc_5', 'Transfer Ether to this new wallet. '), _defineProperty(_fi$data, 'HELP_1_Title', '1) How do I create a new wallet? '), _defineProperty(_fi$data, 'HELP_1_Desc_1', 'Go to the "Generate Wallet" page. '), _defineProperty(_fi$data, 'HELP_1_Desc_2', 'Go to the "Add Wallet" page & select "Generate New Wallet" '), _defineProperty(_fi$data, 'HELP_1_Desc_3', 'Enter a strong password. If you think you may forget it, save it somewhere safe. You will need this password to send transactions. '), _defineProperty(_fi$data, 'HELP_1_Desc_4', 'Click "GENERATE". '), _defineProperty(_fi$data, 'HELP_1_Desc_5', 'Your wallet has now been generated. '), _defineProperty(_fi$data, 'HELP_2a_Title', '2a) How do I save/backup my wallet? '), _defineProperty(_fi$data, 'HELP_2a_Desc_1', 'You should always back up your wallet externally and in multiple physical locations - like on a USB drive and/or a piece of paper. '), _defineProperty(_fi$data, 'HELP_2a_Desc_2', 'Save the address. You can keep it to yourself or share it with others. That way, others can transfer ether to you. '), _defineProperty(_fi$data, 'HELP_2a_Desc_3', 'Save versions of the private key. Do not share it with anyone else. Your private key is necessary when you want to access your Ether to send it! There are 3 types of private keys: '), _defineProperty(_fi$data, 'HELP_2a_Desc_4', 'Place your address, versions of the private key, and the PDF version of your paper wallet in a folder. Save this on your computer and a USB drive. '), _defineProperty(_fi$data, 'HELP_2a_Desc_5', 'Print the wallet if you have a printer. Otherwise, write down your private key and address on a piece of paper. Store this as a secure location, separate from your computer and the USB drive. '), _defineProperty(_fi$data, 'HELP_2a_Desc_6', 'Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood). '), _defineProperty(_fi$data, 'HELP_2b_Title', '2b) How do I safely / offline / cold storage with MyEtherWallet? '), _defineProperty(_fi$data, 'HELP_2b_Desc_1', 'Go to [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). '), _defineProperty(_fi$data, 'HELP_2b_Desc_2', 'Click on `dist-vX.X.X.X.zip`. '), _defineProperty(_fi$data, 'HELP_2b_Desc_3', 'Move zip to an airgapped computer. '), _defineProperty(_fi$data, 'HELP_2b_Desc_4', 'Unzip it and double-click `index.html`. '), _defineProperty(_fi$data, 'HELP_2b_Desc_5', 'Generate a wallet with a strong password. '), _defineProperty(_fi$data, 'HELP_2b_Desc_6', 'Save the address. Save versions of the private key. Save the password if you might not remember it forever. '), _defineProperty(_fi$data, 'HELP_2b_Desc_7', 'Store these papers / USBs in multiple physically separate locations. '), _defineProperty(_fi$data, 'HELP_2b_Desc_8', 'Go to the "View Wallet Info" page and type in your private key / password to ensure they are correct and access your wallet. Check that the address you wrote down is the same. '), _defineProperty(_fi$data, 'HELP_3_Title', '3) How do I verify I have access to my new wallet? '), _defineProperty(_fi$data, 'HELP_3_Desc_1', '**Before you send any Ether to your new wallet**, you should ensure you have access to it. '), _defineProperty(_fi$data, 'HELP_3_Desc_2', 'Navigate to the "View Wallet Info" page. '), _defineProperty(_fi$data, 'HELP_3_Desc_3', 'Navigate to the MyEtherWallet.com "View Wallet Info" page. '), _defineProperty(_fi$data, 'HELP_3_Desc_4', 'Select your wallet file -or- your private key and unlock your wallet. '), _defineProperty(_fi$data, 'HELP_3_Desc_5', 'If the wallet is encrypted, a text box will automatically appear. Enter the password. '), _defineProperty(_fi$data, 'HELP_3_Desc_6', 'Click the "Unlock Wallet" button. '), _defineProperty(_fi$data, 'HELP_3_Desc_7', 'Your wallet information should show up. Find your account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet. '), _defineProperty(_fi$data, 'HELP_3_Desc_8', 'If you are planning on holding a large amount of ether, we recommend that send a small amount of ether from new wallet before depositing a large amount. Send 0.001 ether to your new wallet, access that wallet, send that 0.001 ether to another address, and ensure everything works smoothly. '), _defineProperty(_fi$data, 'HELP_4_Title', '4) How do I send Ether from one wallet to another? '), _defineProperty(_fi$data, 'HELP_4_Desc_1', 'If you plan to move a large amount of ether, you should test sending a small amount to your wallet first to ensure everything goes as planned. '), _defineProperty(_fi$data, 'HELP_4_Desc_2', 'Navigate to the "Lähetä Etheriä ja Tokeneita" page. '), _defineProperty(_fi$data, 'HELP_4_Desc_3', 'Select your wallet file -or- your private key and unlock your wallet. '), _defineProperty(_fi$data, 'HELP_4_Desc_4', 'If the wallet is encrypted, a text box will automatically appear. Enter the password. '), _defineProperty(_fi$data, 'HELP_4_Desc_5', 'Click the "Unlock Wallet" button. '), _defineProperty(_fi$data, 'HELP_4_Desc_6', 'Enter the address you would like to send to in the "To Address:" field. '), _defineProperty(_fi$data, 'HELP_4_Desc_7', 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. '), _defineProperty(_fi$data, 'HELP_4_Desc_9', 'Click "Generate Transaction". '), _defineProperty(_fi$data, 'HELP_4_Desc_10', 'A couple more fields will appear. This is your browser generating the transaction. '), _defineProperty(_fi$data, 'HELP_4_Desc_11', 'Click the blue "Send Transaction" button below that. '), _defineProperty(_fi$data, 'HELP_4_Desc_12', 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. '), _defineProperty(_fi$data, 'HELP_4_Desc_13', 'The transaction will be submitted. The TX ID will display. You can click that TX ID to see it on the blockchain. '), _defineProperty(_fi$data, 'HELP_4CX_Title', '4) How do I send Ether using MyEtherWallet CX? '), _defineProperty(_fi$data, 'HELP_4CX_Desc_1', 'First, you need to add a wallet. Once you have done that, you have 2 options: the "QuickSend" functionality from the Chrome Extension icon or the "Lähetä Etheriä ja Tokeneita" page. '), _defineProperty(_fi$data, 'HELP_4CX_Desc_2', 'QuickSend: '), _defineProperty(_fi$data, 'HELP_4CX_Desc_3', 'Click the Chrome Extension Icon. '), _defineProperty(_fi$data, 'HELP_4CX_Desc_4', 'Click the "QuickSend" button. '), _defineProperty(_fi$data, 'HELP_4CX_Desc_5', 'Select the wallet you wish to send from. '), _defineProperty(_fi$data, 'HELP_4CX_Desc_6', 'Enter the address you would like to send to in the "To Address:" field. '), _defineProperty(_fi$data, 'HELP_4CX_Desc_7', 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. '), _defineProperty(_fi$data, 'HELP_4CX_Desc_8', 'Click "Send Transaction". '), _defineProperty(_fi$data, 'HELP_4CX_Desc_9', 'Verify the address and the amount you are sending is correct. '), _defineProperty(_fi$data, 'HELP_4CX_Desc_10', 'Enter the password for that wallet. '), _defineProperty(_fi$data, 'HELP_4CX_Desc_11', 'Click "Send Transaction." '), _defineProperty(_fi$data, 'HELP_4CX_Desc_12', 'Using "Lähetä Etheriä ja Tokeneita" Page '), _defineProperty(_fi$data, 'HELP_5_Title', '5) How do I run MyEtherWallet.com offline/locally? '), _defineProperty(_fi$data, 'HELP_5_Desc_1', 'You can run MyEtherWallet.com on your computer instead of from the GitHub servers. You can generate a wallet completely offline and send transactions from the "Offline Transaction" page. '), _defineProperty(_fi$data, 'HELP_5_Desc_7', 'MyEtherWallet.com is now running entirely on your computer. '), _defineProperty(_fi$data, 'HELP_5_Desc_8', 'In case you are not familiar, you need to keep the entire folder in order to run the website, not just `index.html`. Don\'t touch or move anything around in the folder. If you are storing a backup of the MyEtherWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact. '), _defineProperty(_fi$data, 'HELP_5_Desc_9', 'As we are constantly updating MyEtherWallet.com, we recommend you periodically update your saved version of the repo. '), _defineProperty(_fi$data, 'HELP_5CX_Title', '5) How can I install this extension from the repo instead of the Chrome Store? '), _defineProperty(_fi$data, 'HELP_5CX_Desc_2', 'Click on `chrome-extension-vX.X.X.X.zip` and unzip it. '), _defineProperty(_fi$data, 'HELP_5CX_Desc_3', 'Go to Google Chrome and find you settings (in the menu in the upper right). '), _defineProperty(_fi$data, 'HELP_5CX_Desc_4', 'Click "Extensions" on the left. '), _defineProperty(_fi$data, 'HELP_5CX_Desc_5', 'Check the "Developer Mode" button at the top of that page. '), _defineProperty(_fi$data, 'HELP_5CX_Desc_6', 'Click the "Load unpacked extension..." button. '), _defineProperty(_fi$data, 'HELP_5CX_Desc_7', 'Navigate to the now-unzipped folder that you downloaded earlier. Click "select". '), _defineProperty(_fi$data, 'HELP_5CX_Desc_8', 'The extension should now show up in your extensions and in your Chrome Extension bar. '), _defineProperty(_fi$data, 'HELP_7_Title', '7) How do I send Tokens & add custom tokens? '), _defineProperty(_fi$data, 'HELP_7_Desc_0', '[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token. '), _defineProperty(_fi$data, 'HELP_7_Desc_1', 'Navigate to the "Lähetä Etheriä ja Tokeneita" page. '), _defineProperty(_fi$data, 'HELP_7_Desc_2', 'Unlock your wallet. '), _defineProperty(_fi$data, 'HELP_7_Desc_3', 'Enter the address you would like to send to in the "To Address:" field. '), _defineProperty(_fi$data, 'HELP_7_Desc_4', 'Enter the amount you would like to send. '), _defineProperty(_fi$data, 'HELP_7_Desc_5', 'Select which token you would like to send. '), _defineProperty(_fi$data, 'HELP_7_Desc_6', 'If you do not see the token listed: '), _defineProperty(_fi$data, 'HELP_7_Desc_7', 'Click "Custom". '), _defineProperty(_fi$data, 'HELP_7_Desc_8', 'Enter the address, name, and decimals of the token. These are provided by the developers of the token and are also needed when you "Add a Watch Token" to Mist. '), _defineProperty(_fi$data, 'HELP_7_Desc_9', 'Click "Save". '), _defineProperty(_fi$data, 'HELP_7_Desc_10', 'You can now send that token as well as see it\'s balance in the sidebar. '), _defineProperty(_fi$data, 'HELP_7_Desc_11', 'Click "Generate Transaction". '), _defineProperty(_fi$data, 'HELP_7_Desc_12', 'A couple more fields will appear. This is your browser generating the transaction. '), _defineProperty(_fi$data, 'HELP_7_Desc_13', 'Click the blue "Send Transaction" button below that. '), _defineProperty(_fi$data, 'HELP_7_Desc_14', 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. '), _defineProperty(_fi$data, 'HELP_7_Desc_15', 'The transaction will be submitted. The TX ID will display. You can click that TX ID to see it on the blockchain. '), _defineProperty(_fi$data, 'HELP_8_Title', '8) What happens if your site goes down? '), _defineProperty(_fi$data, 'HELP_8_Desc_1', 'MyEtherWallet is not a web wallet. You don\'t have a login and nothing ever gets saved to our servers. It is simply an interface that allows you interact with the blockchain. '), _defineProperty(_fi$data, 'HELP_8_Desc_2', 'If MyEtherWallet.com goes down, you would have to find another way (like geth or Ethereum Wallet / Mist) to do what we are doing. But you wouldn\'t have to "get" your Ether out of MyEtherWallet because it\'s not in MyEtherWallet. It\'s in whatever wallet your generated via our site. '), _defineProperty(_fi$data, 'HELP_8_Desc_3', 'You can import your unencrypted private key and your Geth/Mist Format (encrypted) files directly into geth / Ethereum Wallet / Mist very easily now. See question #12 below. '), _defineProperty(_fi$data, 'HELP_8_Desc_4', 'In addition, the likelihood of us taking MyEtherWallet down is slim to none. It costs us almost nothing to maintain as we aren\'t storing any information. If we do take the domain down, it still is, and always will be, publicly available at [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). You can download the ZIP there and run it locally. '), _defineProperty(_fi$data, 'HELP_8CX_Title', '8) What happens if MyEtherWallet CX disappears? '), _defineProperty(_fi$data, 'HELP_8CX_Desc_1', 'First, all data is saved on your computer, not our servers. I know it can be confusing, but when you look at the Chrome Extension, you are NOT looking at stuff saved on our servers somewhere - it\'s all saved on your own computer. '), _defineProperty(_fi$data, 'HELP_8CX_Desc_2', 'That said, it is **very important** that you back up all your information for any new wallets generated with MyEtherWallet CX. That way if anything happens to MyEtherWallet CX or your computer, you still have all the information necessary to access your Ether. See the #2a for how to back up your wallets. '), _defineProperty(_fi$data, 'HELP_8CX_Desc_3', 'If for some reason MyEtherWallet CX disappears from the Chrome Store, you can find the source on Github and load it manually. See #5 above. '), _defineProperty(_fi$data, 'HELP_9_Title', '9) Is the "Lähetä Etheriä ja Tokeneita" page offline? '), _defineProperty(_fi$data, 'HELP_9_Desc_1', 'No. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times. '), _defineProperty(_fi$data, 'HELP_10_Title', '10) How do I make an offline transaction? '), _defineProperty(_fi$data, 'HELP_10_Desc_1', 'Navigate to the "Offline Transaction" page via your online computer. '), _defineProperty(_fi$data, 'HELP_10_Desc_2', 'Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price. '), _defineProperty(_fi$data, 'HELP_10_Desc_3', 'Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send. '), _defineProperty(_fi$data, 'HELP_10_Desc_4', 'Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1. '), _defineProperty(_fi$data, 'HELP_10_Desc_5', 'Enter the "NONCE" as it was displayed to you on your online computer in step #1. '), _defineProperty(_fi$data, 'HELP_10_Desc_6', 'The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you. '), _defineProperty(_fi$data, 'HELP_10_Desc_7', 'If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format. '), _defineProperty(_fi$data, 'HELP_10_Desc_8', 'Select your wallet file -or- your private key and unlock your wallet. '), _defineProperty(_fi$data, 'HELP_10_Desc_9', 'Press the "GENERATE SIGNED TRANSACTION" button. '), _defineProperty(_fi$data, 'HELP_10_Desc_10', 'The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer. '), _defineProperty(_fi$data, 'HELP_10_Desc_11', 'On your online computer, paste the signed transaction into the text field in step #3 and click send. This will broadcast your transaction. '), _defineProperty(_fi$data, 'HELP_12_Title', '12) How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist? '), _defineProperty(_fi$data, 'HELP_12_Desc_1', 'Using an Geth/Mist JSON file from MyEtherWallet v2+.... '), _defineProperty(_fi$data, 'HELP_12_Desc_2', 'Go to the "View Wallet Info" page. '), _defineProperty(_fi$data, 'HELP_12_Desc_3', 'Unlock your wallet using your **encrypted** private key or JSON file. '), _defineProperty(_fi$data, 'HELP_12_Desc_4', 'Go to the "My Wallets" page. '), _defineProperty(_fi$data, 'HELP_12_Desc_5', 'Select the wallet you want to import into Mist, click the "View" icon, enter your password, and access your wallet. '), _defineProperty(_fi$data, 'HELP_12_Desc_6', 'Find the "Download JSON file - Geth/Mist Format (encrypted)" section. Press the "Download" button below that. You now have your keystore file. '), _defineProperty(_fi$data, 'HELP_12_Desc_7', 'Open the Ethereum Wallet application. '), _defineProperty(_fi$data, 'HELP_12_Desc_8', 'In the menu bar, go "Accounts" -> "Backup" -> "Accounts" '), _defineProperty(_fi$data, 'HELP_12_Desc_9', 'This will open your keystore folder. Copy the file you just downloaded (`UTC--2016-04-14......../`) into that keystore folder. '), _defineProperty(_fi$data, 'HELP_12_Desc_10', 'Your account should show up immediately under "Accounts." '), _defineProperty(_fi$data, 'HELP_12_Desc_11', 'Using your unencrypted private key... '), _defineProperty(_fi$data, 'HELP_12_Desc_12', 'If you do not already have your unencrypted private key, navigate to the "View Wallet Details" page. '), _defineProperty(_fi$data, 'HELP_12_Desc_13', 'Select your wallet file -or- enter/paste your private key to unlock your wallet. '), _defineProperty(_fi$data, 'HELP_12_Desc_14', 'Copy Your Private Key (unencrypted). '), _defineProperty(_fi$data, 'HELP_12_Desc_15', 'If you are on a Mac: '), _defineProperty(_fi$data, 'HELP_12_Desc_15b', 'If you are on a PC: '), _defineProperty(_fi$data, 'HELP_12_Desc_16', 'Open Text Edit and paste this private key. '), _defineProperty(_fi$data, 'HELP_12_Desc_17', 'Go to the menu bar and click "Format" -> "Make Plain Text". '), _defineProperty(_fi$data, 'HELP_12_Desc_18', 'Save this file to your `desktop/` as `nothing_special_delete_me.txt`. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog. '), _defineProperty(_fi$data, 'HELP_12_Desc_19', 'Open terminal and run the following command: `geth account import ~/Desktop/nothing_special_delete_me.txt` '), _defineProperty(_fi$data, 'HELP_12_Desc_20', 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. '), _defineProperty(_fi$data, 'HELP_12_Desc_21', 'After successful import, delete `nothing_special_delete_me.txt` '), _defineProperty(_fi$data, 'HELP_12_Desc_22', 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". '), _defineProperty(_fi$data, 'HELP_12_Desc_23', 'Open Notepad & paste the private key '), _defineProperty(_fi$data, 'HELP_12_Desc_24', 'Save the file as `nothing_special_delete_me.txt` at `C:` '), _defineProperty(_fi$data, 'HELP_12_Desc_25', 'Run the command, `geth account import C:\\nothing_special_delete_me.txt` '), _defineProperty(_fi$data, 'HELP_12_Desc_26', 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. '), _defineProperty(_fi$data, 'HELP_12_Desc_27', 'After successful import, delete `nothing_special_delete_me.txt` '), _defineProperty(_fi$data, 'HELP_12_Desc_28', 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". '), _defineProperty(_fi$data, 'HELP_13_Title', '13) What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean? '), _defineProperty(_fi$data, 'HELP_13_Desc_1', 'This means you do not have enough Ether in your account to cover the cost of gas. Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. The number displayed is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`, and subtract the amount of Ether you were trying to send (if you were attempting to send Ether). This will give you the amount of Ether you need to send to that account to make the transaction. '), _defineProperty(_fi$data, 'HELP_14_Title', '14) Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn\'t do this. Is the random number generation for MyEtherWallet safe? '), _defineProperty(_fi$data, 'HELP_14_Desc_1', 'While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren\'t unsafe, it\'s just that we (and tons of other crypto experiments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here\'s a [conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). '), _defineProperty(_fi$data, 'HELP_15_Title', '15) Why hasn\'t the account I just created show up in the blockchain explorer? (ie: etherchain, etherscan) '), _defineProperty(_fi$data, 'HELP_15_Desc_1', 'Accounts will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it. '), _defineProperty(_fi$data, 'HELP_16_Title', '16) How do I check the balance of my account? '), _defineProperty(_fi$data, 'HELP_16_Desc_1', 'You can use a blockchain explorer like [etherscan.io](http://etherscan.io/). Paste your address into the search bar and it will pull up your address and transaction history. For example, here\'s what our [donation account](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) looks like on etherscan.io '), _defineProperty(_fi$data, 'HELP_17_Title', '17) Why isn\'t my balance showing up when I unlock my wallet? '), _defineProperty(_fi$data, 'HELP_17_Desc_1', 'This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like etherscan.io '), _defineProperty(_fi$data, 'HELP_18_Title', '18) Where is my geth wallet file? '), _defineProperty(_fi$data, 'HELP_19_Title', '19) Where is my Mist wallet file? '), _defineProperty(_fi$data, 'HELP_19_Desc_1', 'Mist files are typically found in the file locations above, but it\'s much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored. '), _defineProperty(_fi$data, 'HELP_20_Title', '20) Where is my pre-sale wallet file? '), _defineProperty(_fi$data, 'HELP_20_Desc_1', 'Wherever you saved it. ;) It also was emailed to you, so check there. Look for the file called `"ethereum_wallet_backup.json"` and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale. '), _defineProperty(_fi$data, 'HELP_21_Title', '21) Couldn\'t everybody put in random private keys, look for a balance, and send to their own address? '), _defineProperty(_fi$data, 'HELP_21_Desc_1', 'Short version: yes, but finding an account with a balance would take longer than the universe...so...no. '), _defineProperty(_fi$data, 'HELP_21_Desc_2', 'Long ELI5 Version: So Ethereum is based on [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), specifically [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf) which is very widely used, not just in Ethereum. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and a lot of other stuff. The Ethereum keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts. '), _defineProperty(_fi$data, 'HELP_21_Desc_3', 'In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this cryptography means that if there is a way to go from public key to private key, your lost ether is the least of everyone’s problems. '), _defineProperty(_fi$data, 'HELP_21_Desc_4', 'Now, that said, YES if someone else has your private key then they can indeed send ether from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers. You could download the Keystore version of your private key which is the private key that is encrypted with a password. This is like having a password that is also protected by another password. '), _defineProperty(_fi$data, 'HELP_21_Desc_5', 'And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worthwhile - it is more likely you, and your great-grandchildren, will die before getting a match. '), _defineProperty(_fi$data, 'HELP_21_Desc_6', 'If you know anything about Bitcoin, [this will put it in perspective:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion. '), _defineProperty(_fi$data, 'HELP_21_Desc_7', '[If you want something a bit more technical:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space. '), _defineProperty(_fi$data, 'HELP_21_Desc_8', 'Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria, as do Jaxx and Mist/geth. The Ethereum wallets are all pretty good. Keys generated by brainwallets do not, as a person\'s brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that\'s a separate issue that can wait for another day. '), _defineProperty(_fi$data, 'HELP_SecCX_Title', 'Security - MyEtherWallet CX '), _defineProperty(_fi$data, 'HELP_SecCX_Desc_1', 'Where is this extension saving my information? '), _defineProperty(_fi$data, 'HELP_SecCX_Desc_2', 'The information you store in this Chrome Extension is saved via [chrome.storage](http://chrome.storage/). - this is the same place your passwords are saved when you save your password in Chrome. '), _defineProperty(_fi$data, 'HELP_SecCX_Desc_3', 'What information is saved? '), _defineProperty(_fi$data, 'HELP_SecCX_Desc_4', 'The address, nickname, private key is stored in chrome.storage. The private key is encrypted using the password you set when you added the wallet. The nickname and wallet address is not encrypted. '), _defineProperty(_fi$data, 'HELP_SecCX_Desc_5', 'Why aren\'t the nickname and wallet address encrypted? '), _defineProperty(_fi$data, 'HELP_SecCX_Desc_6', 'If we were to encrypt these items, you would need to enter a password each time you wanted to view your account balance or view the nicknames. If this concerns you, we recommend you use MyEtherWallet.com instead of this Chrome Extension. '), _defineProperty(_fi$data, 'HELP_Sec_Title', 'Security '), _defineProperty(_fi$data, 'HELP_Sec_Desc_1', 'If one of your first questions is "Why should I trust these people?", that is a good thing. Hopefully the following will help ease your fears. '), _defineProperty(_fi$data, 'HELP_Sec_Desc_2', 'We\'ve been up and running since August 2015. If you search for ["myetherwallet" on reddit](https://www.reddit.com/search?q=myetherwallet), you can see numerous people who use us with great success. '), _defineProperty(_fi$data, 'HELP_Sec_Desc_3', 'We aren\'t going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" pages are completely client-side. That means that all the code is executed on ** your computer** and it is never saved and transmitted anywhere. '), _defineProperty(_fi$data, 'HELP_Sec_Desc_4', 'Check the URL -- This site is being served through GitHub and you can see the source code here: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) to [https://www.myetherwallet.com](https://www.myetherwallet.com). '), _defineProperty(_fi$data, 'HELP_Sec_Desc_5', 'For generating wallets, you can download the [source code and run it locally](https://github.com/kvhnuke/etherwallet/releases/latest). See #5 above. '), _defineProperty(_fi$data, 'HELP_Sec_Desc_6', 'Generate a test wallet and check and see what network activity is happening. The easiest way for you to do this is to right click on the page and click "inspect element". Go to the "Network" tab. Generate a test wallet. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred. '), _defineProperty(_fi$data, 'HELP_Sec_Desc_8', 'If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line or run a full node. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks! '), _defineProperty(_fi$data, 'HELP_FAQ_Title', 'More Helpful Answers to Frequent Questions '), _defineProperty(_fi$data, 'HELP_Contact_Title', 'Ways to Get in Touch'), _fi$data);

module.exports = fi;

},{}],92:[function(require,module,exports){
// French
'use strict';

var fr = function fr() {};
fr.code = 'fr';
fr.data = {

  /* Navigation*/
  NAV_AddWallet: 'Ajouter un portefeuille ',
  NAV_BulkGenerate: 'Générer des portefeuilles par lots ',
  NAV_Contact: 'Contact ',
  NAV_Contracts: 'Contrats ',
  NAV_DeployContract: 'Déployer un contrat ',
  NAV_ENS: 'ENS',
  NAV_GenerateWallet: 'Générer un portefeuille ',
  NAV_Help: 'Aide ',
  NAV_InteractContract: 'Interact with Contract ',
  NAV_Multisig: 'Multisig ',
  NAV_MyWallets: 'Mes portefeuilles ',
  NAV_Offline: 'Envoyer hors-ligne ',
  NAV_SendEther: 'Envoyer des Ether et des Tokens ',
  NAV_SendTokens: 'Envoyer des tokens ',
  NAV_SignMsg: 'Signer un message ',
  NAV_Swap: 'Échange ',
  NAV_ViewWallet: 'Visualiser un portefeuille ',
  NAV_YourWallets: 'Vos portefeuilles ',

  /* General */
  x_Access: 'Accès ',
  x_AddessDesc: 'Aussi appelé "Numéro de compte" ou "Clé publique". C\'est ce que vous envoyez aux gens pour qu\'ils puissent vous envoyer des ether. Cette icone est une façon simple de reconnaitre votre adresse. ',
  x_Address: 'Votre adresse ',
  x_Cancel: 'Annuler ',
  x_CSV: 'Fichier CSV (non-chiffré) ',
  x_Download: 'Télécharger ',
  x_Json: 'Fichier JSON (non-chiffré) ',
  x_JsonDesc: 'C\'est la version non-chiffrée au format JSON de votre clé privée. Cela signifie que vous n\'avez pas besoin de votre mot de passe pour l\'utiliser mais que toute personne qui trouve ce JSON peut accéder à votre portefeuille et vos Ether sans mot de passe. ',
  x_Keystore: 'Fichier Keystore (UTC / JSON · Recommandé · Chiffré) ',
  x_Keystore2: 'Fichier Keystore (UTC / JSON) ',
  x_KeystoreDesc: 'Ce fichier Keystore utilise le même format que celui que Mist, vous pouvez donc facilement l\'importer plus tard dans ces logiciels. C\'est le fichier que nous vous recommandons de télécharger et sauvegarder. ',
  x_Ledger: 'Ledger Nano S ',
  x_Mnemonic: 'Phrase mnémonique ',
  x_ParityPhrase: 'Phrase Parity ',
  x_Password: 'Mot de passe ',
  x_Print: 'Imprimer un portefeuille papier ',
  x_PrintDesc: 'Astuce : Cliquez sur Imprimer et sauvegardez le portefeuille papier comme un PDF, même si vous n\'avez pas d\'imprimante ! ',
  x_PrintShort: 'Imprimer ',
  x_PrivKey: 'Clé privée (non-chiffrée) ',
  x_PrivKey2: 'Clé privée ',
  x_PrivKeyDesc: 'C\'est la version textuelle non-chiffrée de votre clé privée, ce qui signifie qu\'aucun mot de passe n\'est nécessaire pour l\'utiliser. Si quelqu\'un venait à découvrir cette clé privée, il pourrrait accéder à votre portefeuille sans mot de passe. Pour cette raison, la version chiffrée de votre clé privée est recommandée. ',
  x_Save: 'Sauvegarder ',
  x_TXT: 'Fichier TXT (non-chiffré) ',
  x_Wallet: 'Portefeuille ',

  /* Header */
  MEW_Warning_1: 'Vérifiez toujours l\'URL avant d\'accéder à votre portefeuille ou de générer un nouveau portefeuille. Attentions aux sites de phishing ! ',
  CX_Warning_1: 'Assurez vous d\'avoir une **sauvegarde externe** de tout portefeuille que vous gérez ici. De nombreux événements peuvent vous faire perdre les données de cette extension Chrome, y compris la dédinstallation et la réinstallation de l\'extension. Cette extension est une manière d\'accéder facilement à vos portefeuilles, **pas** une façon de les sauvegarder. ',
  MEW_Tagline: 'Portefeuille d\'Ether Open Source JavaScript côté client ',
  CX_Tagline: 'Extension Chrome de portefeuille d\'Ether Open Source JavaScript côté client ',

  /* Footer */
  FOOTER_1: 'Un outil open source en Javascript s\'exécutant côté client pour générer des portefeuilles Ethereum et envoyer des transactions. ',
  FOOTER_1b: 'Créé par ',
  FOOTER_2: 'Donations extrêmement appréciées : ',
  FOOTER_3: 'Génération de portefeuille côté client par ',
  FOOTER_4: 'Avertissement ',

  /* Sidebar */
  sidebar_AccountInfo: 'Informations du compte ',
  sidebar_AccountAddr: 'Addresse du compte ',
  sidebar_AccountBal: 'Solde du compte ',
  sidebar_TokenBal: 'Solde en tokens ',
  sidebar_Equiv: 'Valeur correspondante ',
  sidebar_TransHistory: 'Historique des transactions ',
  sidebar_donation: 'MyEtherWallet est un service gratuit et open source respectueux de votre vie privée et de votre sécurité. Plus nous recevons de donations, plus nous dédions du temps à développer de nouvelles fonctions, à écouter vos retours et à vous fournir ce dont vous avez besoin. Nous ne sommes que deux personnes qui essayent de changer le monde. Aidez nous ! ',
  sidebar_donate: 'Faire une donation ',
  sidebar_thanks: 'MERCI !!! ',

  /* Decrypt Panel */
  decrypt_Access: 'Comment voulez-vous accéder à votre portefeuille ? ',
  decrypt_Title: 'Choisissez le format de votre clé privée ',
  decrypt_Select: 'Choisissez un portefeuille : ',

  /* Add Wallet */
  ADD_Label_1: 'Que voulez-vous faire ? ',
  ADD_Radio_1: 'Générer un nouveau portefeuille ',
  ADD_Radio_2: 'Choisissez le fichier de votre portefeuille (Keystore / JSON) ',
  ADD_Radio_2_alt: 'Choisissez le fichier de portefeuille ',
  ADD_Radio_2_short: 'CHOISISSEZ LE FICHIER DU PORTEFEUILLE... ',
  ADD_Radio_3: 'Collez/saisissez votre clé privée ',
  ADD_Radio_4: 'Ajoutez un compte ',
  ADD_Radio_5: 'Collez/entrez votre mnémonique ',
  ADD_Radio_5_Path: 'Select HD derivation path ',
  ADD_Radio_5_PathCustom: 'Custom',
  ADD_Label_2: 'Nommez votre compte : ',
  ADD_Label_3: 'Votre fichier est chiffré, merci de saisir le mot de passe ',
  ADD_Label_4: 'Ajouter un compte à afficher ',
  ADD_Warning_1: 'Vous pouvez ajouter n\'importe quel compte pour l\'afficher dans l\'onglet "portefeuilles" sans uploader une clé privée. Cela ne veut **pas** dire que vous aurez accès à ce portefeuille, ni que vous pouvez transférer des Ethers depuis ce portefeuille. ',
  ADD_Label_5: 'Entrez l\'adresse ',
  ADD_Label_6: 'Déverrouiller votre portefeuille ',
  ADD_Label_6_short: 'Déverrouiller ',
  ADD_Label_7: 'Ajouter un compte ',

  /* Generate Wallets */
  GEN_desc: 'Si vous voulez générer plusieurs portefeuilles, vous pouvez le faire ici ',
  GEN_Label_1: 'Entrez un mot de passe fort (au moins 9 caractères) ',
  GEN_Placeholder_1: 'N\'oubliez PAS de sauvegarder ceci ! ',
  GEN_SuccessMsg: 'Succès ! Votre portefeuille a été généré. ',
  GEN_Label_2: 'Sauvegardez votre fichier Keystore ou votre clé privée. N\'oubliez pas votre mot de passe ci-dessus. ',
  GEN_Label_3: 'Sauvegarder votre portefeuille. ',
  GEN_Label_4: 'Optionnel: Imprimer votre portefeuille papier, ou conserver une version QR code. ',

  /* Bulk Generate Wallets */
  BULK_Label_1: 'Nombre de portefeuilles à générer ',
  BULK_Label_2: 'Générer les portefeuilles ',
  BULK_SuccessMsg: 'Succès ! Vos portefeuilles ont été générés. ',

  /* Sending Ether and Tokens */
  SEND_addr: 'Adresse de destination ',
  SEND_amount: 'Montant à envoyer ',
  SEND_amount_short: 'Montant ',
  SEND_custom: 'Token spécifique ',
  SEND_gas: 'Gaz ',
  SEND_TransferTotal: 'Envoi du solde total ', // updated to be shorter
  SEND_generate: 'Générer la transaction ',
  SEND_raw: 'Transaction brute ',
  SEND_signed: 'Transaction signée ',
  SEND_trans: 'Envoyer la transaction ',
  SENDModal_Title: 'Attention ! ',
  /* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
  SENDModal_Content_1: 'Vous êtes sur le point d\'envoyer ',
  SENDModal_Content_2: 'à l\'adresse ',
  SENDModal_Content_3: 'En êtes-vous sûr ? ',
  SENDModal_Content_4: 'NOTE : Si vous renontrez une erreur, il est très probable que vous deviez ajouter des ether à votre compte pour couvrir les coûts en gaz d\'envoi des tokens. Le gaz est payé en ether. ',
  SENDModal_No: 'Non, je veux sortir d\'ici ! ',
  SENDModal_Yes: 'Oui, j\'en suis sûr ! Effectuer la transaction. ',

  /* Tokens */
  TOKEN_Addr: 'Adresse ',
  TOKEN_Symbol: 'Symbole du token ',
  TOKEN_Dec: 'Décimales ',
  TOKEN_show: 'Montrer tous les tokens ',
  TOKEN_hide: 'Cacher les tokens ',

  /* Send Transaction */
  TRANS_desc: 'Si vous voulez envoyer des tokens, allez plutôt à la page "Envoi de tokens". ',
  TRANS_warning: 'L\'emploi des fonctions "ETH seulement" et "ETC seulement" vous fait passer par un contrat. Certains services ont des problèmes avec ces transactions. En savoir plus. ',
  TRANS_advanced: '+Avancé : Ajouter du gaz ',
  TRANS_data: 'Données ',
  TRANS_sendInfo: 'Une transaction standard utilisant 21000 gaz coûtera 0.000441 ETH. Le prix du gaz de 0.000000021 ETH que nous avons choisi est légèrement supérieur au minimum ain d\'assurer une confirmation rapide. Nous ne prenons pas de frais de transaction. ',
  TRANS_gas: 'Limite en gaz ', // changed in ENG to Gas Limit:

  /* Send Transaction Modals */
  TRANSModal_Title: 'Transactions "ETH seulement" et "ETC seulement" ',
  TRANSModal_Content_0: 'Note sur les transactions et services divers : ',
  TRANSModal_Content_1: '**ETH (Transaction standard) : ** Génère une transaction par défaut directement depuis une adresse vers une autre. Son gaz par défaut est de 21000. Il est probable que toute transaction d\'ETH envoyé de cette manière sera réexécutée sur la chaîne ETC. ',
  TRANSModal_Content_2: '**ETH seulement : ** Envoie à travers le [contrat anti-réexécution de Timon Rapp (recommandé par VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) afin de n\'envoyer que sur la chaîne **ETH**. ',
  TRANSModal_Content_3: '**ETC seulement : ** Envoie à travers le [contrat anti-réexécution de Timon Rapp (recommandé par VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) afin de n\'envoyer que sur la chaîne **ETC**. ',
  TRANSModal_Content_4: '**Coinbase & ShapeShift : ** N\'envoyer que par transaction standard. Si vous utilisez les contrats d\'envoi sur une seule chaîne, vous devrez joindre leur équipe de support pour ajouter manuellement la somme à votre solde ou pour vous rembourser. [Vous pouvez aussi essayer l\'outil "split" de Shapeshift.](https://split.shapeshift.io/) ',
  TRANSModal_Content_5: '**Kraken & Poloniex :** Pas de problème connu. Utilisez ce que vous voulez. ',
  TRANSModal_Yes: 'Génial, j\'ai compris. ',
  TRANSModal_No: 'Aïe, je comprends de moins en moins. Aidez-moi. ',

  /* Offline Transaction */
  OFFLINE_Title: 'Génération et envoi d\'une transaction hors ligne ',
  OFFLINE_Desc: 'La génération d\'une transaction hors ligne s\'effectue en trois étapes. Les étapes 1 et 3 sont réalisées sur un ordinateur en ligne et l\'étape 2 sur un ordinateur déconnecté du réseau. Cela permet d\'isoler totalement vos clefs privées de toute machine connectée à l\'internet. ',
  OFFLLINE_Step1_Title: 'Étape 1 : Gérération de l\'information (ordinateur en ligne) ',
  OFFLINE_Step1_Button: 'Générer l\'information ',
  OFFLINE_Step1_Label_1: 'Addresse d\'émission ',
  OFFLINE_Step1_Label_2: 'Note : Il s\'agit de l\'adresse de départ, pas de l\'adresse d\'arrivée. Le nonce est généré à partir du compte de l\'expéditeur. Si on utilise une machine déconnectée du réseau, cette adresse est celle du compte en _cold storage_. ',
  OFFLINE_Step2_Title: 'Étape 2 : Génération de la transaction (ordinateur hors ligne) ',
  OFFLINE_Step2_Label_1: 'Adresse de destination ',
  OFFLINE_Step2_Label_2: 'Valeur / montant à envoyer ',
  OFFLINE_Step2_Label_3: 'Prix du gaz ',
  OFFLINE_Step2_Label_3b: 'Ce montant était affiché à l\'étape 1 sur votre ordinateur en ligne. ',
  OFFLINE_Step2_Label_4: 'Limite de gaz ',
  OFFLINE_Step2_Label_4b: '21000 est la limite par défaut. En cas d\'envoi vers des contrats ou avec des données supplémentaires, cette valeur peut être différente. Tout gaz non consommé vous sera renvoyé. ',
  OFFLINE_Step2_Label_5: 'Nonce ',
  OFFLINE_Step2_Label_5b: 'Cette valeur a été affichée à l\'étape 1 sur votre ordinateur en ligne. ',
  OFFLINE_Step2_Label_6: 'Données ',
  OFFLINE_Step2_Label_6b: 'Cette zone est optionnelle. Les données sont souvent utilisées lors de transactions vers des contrats. ',
  OFFLINE_Step2_Label_7: 'Entrez / sélectionnez votre clef privée / JSON. ',
  OFFLINE_Step3_Title: 'Étape 3 : Envoyer / publier la transaction (ordinateur en ligne) ',
  OFFLINE_Step3_Label_1: 'Copier ici la transaction signée à l\'étape 2 et cliquez sur le bouton "ENVOYER LA TRANSACTION". ',

  /* Sign Message */
  MSG_message: 'Message ',
  MSG_date: 'Date ',
  MSG_signature: 'Signature ',
  MSG_verify: 'Verifier un message ',
  MSG_info1: 'Inclure la date courante afin que la signature ne puisse pas être réutilisée à un autre moment. ',
  MSG_info2: 'Inclure votre surnom et là où vous l\'utilisez afin que quelqu\'un d\'autre ne puisse l\'utiliser. ',
  MSG_info3: 'Inclure une raison spécifique pour le message afin qu\'il ne puisse être réutilisé pour une raison différente. ',

  /* My Wallet */
  MYWAL_Nick: 'Nom du portefeuille ',
  MYWAL_Address: 'Adresse du portefeuille ',
  MYWAL_Bal: 'Solde ',
  MYWAL_Edit: 'Modifier ',
  MYWAL_View: 'Voir ',
  MYWAL_Remove: 'Supprimer ',
  MYWAL_RemoveWal: 'Supprimer le portefeuille : ',
  MYWAL_WatchOnly: 'Vos comptes en affichage uniquement ',
  MYWAL_Viewing: 'Affichage des portefeuilles ',
  MYWAL_Hide: 'Cacher les informations sur le portefeuille ',
  MYWAL_Edit_2: 'Modifier le portefeuille ',
  MYWAL_Name: 'Nom du portefeuille ',
  MYWAL_Content_1: 'Attention ! Vous êtes sur le point de supprimer votre portef