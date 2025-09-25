# ⚙️ Core Layer — The Heart of BTCMINT

## 🪙 Token Overview

**Name:** Bitcoin Mint  
**Symbol:** BTCMINT  
**Contract Address:** [0xCFD82A67Ce92Ab148597b0894472fE20C2125fd1](https://polygonscan.com/address/0xCFD82A67Ce92Ab148597b0894472fE20C2125fd1)  
**Chain:** Polygon (POS)

BTCMINT is not just another token—it’s the genesis layer of a permissionless financial OS. Built for builders, dreamers, and disruptors, BTCMINT combines the credibility of Bitcoin with the modularity of open-source ecosystems. It’s clean, immutable, and ready to scale.

## 🔥 Supply & Mint/Burn Mechanics

- **Total Supply:** 21,000,000 BTCMINT  
- **Minting:** Permanently disabled after deployment  
- **Burning:** Enabled via ERC20Burnable—holders can reduce supply voluntarily  
- **Decimals:** 18  
- **Initial Allocation:** Fully minted to deployer for transparent distribution

This architecture ensures:
- No hidden minting  
- No upgradeable proxies  
- No centralized control

BTCMINT is engineered for scarcity, transparency, and trust. Every token is accounted for. Every burn is verifiable. Every holder is part of the story.

## ✅ Audit Status & Verification

- **Polygonscan Verification:** ✅ Verified  
- **Bytecode Match:** 100% identical to source  
- **Dependencies:** Minimal—only OpenZeppelin ERC20 + Burnable  
- **License:** MIT (open-source, forkable, remixable)

🔗 [View Contract on Polygonscan](https://polygonscan.com/address/0xCFD82A67Ce92Ab148597b0894472fE20C2125fd1)

BTCMINT is built for reproducibility. Anyone can audit it. Anyone can fork it. But only one token carries the original genesis hash.

## 🧠 Philosophy & Design Principles

### 🧩 Minimalism = Auditability

BTCMINT’s contract is radically simple:
```solidity
contract BTCMINT is ERC20, ERC20Burnable {
    constructor() ERC20("Bitcoin Mint", "BTCMINT") {
        _mint(msg.sender, 21_000_000 * 10 ** decimals());
    }
}
```

No modifiers. No owner functions. No upgrade paths. Just pure ERC-20 logic. This makes BTCMINT:

• Easy to audit
• Impossible to tamper
• Ideal for institutional trust


🛠️ Modularity Inspired by GNU/Linux

BTCMINT is the kernel of a new financial OS:

• Modules (staking, governance, bridges) can be added permissionlessly
• Each module is opt-in, verified, and community-driven
• Builders can fork, remix, or extend without asking for permission


Think of BTCMINT as the “Linux of tokens”—clean, sovereign, and infinitely extensible.

🚀 Permissionless Innovation

BTCMINT is built for the next wave of crypto-native builders:

• No gatekeepers
• No centralized governance
• DAO-ready architecture for activating modules


Whether you’re launching a DEX, building a DAO, or creating a cross-chain bridge—BTCMINT is your base layer.

⚡ Why BTCMINT?

• ✅ Verified, immutable, and audit-friendly
• 🧠 Designed for modular ecosystems
• 🔥 Scarce by design, burnable by choice
• 🌍 Open-source and community-first
• 🧬 Built for viral adoption and institutional credibility


BTCMINT isn’t just a token. It’s a movement. A protocol. A foundation for the next generation of permissionless finance.