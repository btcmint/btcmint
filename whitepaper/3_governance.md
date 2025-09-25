# 🏛️ Governance & DAO

BTCMINT is designed to evolve into a modular, permissionless DAO that balances transparency, community ownership, and strategic control. While the token contract is already deployed and verified on Polygon, governance modules, treasury logic, and automated execution mechanisms are planned for future on-chain implementation. Until then, decisions will be made via Discord voting and manually executed by the Governance Council — a temporary body that exists only until DAO contracts are deployed and community automation becomes feasible.

---

### 🧩 DAO Structure

- **Roles**
  - `Core Contributors`: Technical architecture, branding, protocol upgrades
  - `Governance Council`: Moderation, treasury oversight, proposal arbitration (temporary until full DAO automation)
  - `Community Members`: Proposal creation, voting, discussion, module activation

- **Permissions**
  - Submit proposals
  - Vote on governance decisions
  - Approve treasury disbursements
  - Activate/deactivate DAO modules

- **Voting Logic (Current via Discord)**
  - 1 BTCMINT = 1 vote
  - Quorum: 10% of circulating supply (excluding treasury-held tokens)
  - Majority: >50% of votes cast
  - Voting window: 72h discussion, 48h voting

---

### 📜 Proposal Lifecycle

BTCMINT’s governance system is designed to evolve into a modular, transparent DAO. While voting and execution modules are still under development, the following lifecycle outlines the current and intended flow for community proposals:

1. **Submission**  
   - Any wallet holding ≥2% of circulating supply (currently ≥100 BTCMINT) is eligible to submit proposals  
   - Treasury-held tokens (20,995,000 BTCMINT) are excluded from eligibility  
   - Submissions occur via Discord and will later migrate to a dedicated governance interface on btcmint.io

2. **Discussion**  
   - Proposals enter a public discussion phase  
   - Feedback is gathered through open forums, Discord threads, and optional review by the Governance Council

3. **Voting**  
   - Voting is based on wallet balances at Discord time  
   - A web-based voting portal is live via Discord  
   - Parameters:  
     - **Quorum**: 10% of circulating supply (i.e. 500 BTCMINT)  
     - **Majority**: >50% of votes cast  
     - **Note**: Treasury-held tokens are excluded from voting and quorum calculations

4. **Execution**  
   - Approved proposals are manually executed by the Governance Council via multi-sig  
   - Proposal status and outcomes are publicly trackable through the governance dashboard

---

### 💰 Treasury Management

- **Transparency**
  - All treasury wallets will be public and auditable
  - Monthly reports published via IPFS and btcmint.io

- **Multi-Sig Setup**
  - 3-of-5 multisig required for treasury actions
  - Signers: 2 Core Contributors, 2 Governance Council, 1 Community Delegate

- **Disbursement Rules**
  - Only executable via approved proposals
  - Max 5% of treasury per quarter without special approval
  - Treasury disbursements will begin once treasury wallets and governance contracts are activated

---

### 🤝 Community Participation

- **Ways to Contribute**
  - Submit and vote on proposals
  - Join discussions and working groups
  - Build and test DAO modules
  - Spread the word (memes, threads, videos)

- **Incentives (Planned)**
  - Community grants via DAO proposals
  - Reputation badges for active contributors
  - Early access to beta modules and governance roles

---

### 🪙 Tokenomics

**Total Supply:** `21,000,000 BTCMINT`  
**Circulating Supply:** `5,000 BTCMINT` (Uniswap Launch)  
**Kernel Treasury:** `20,995,000 BTCMINT` (DAO-triggered, modular reserve — excluded from voting and proposal eligibility)

---

## 📦 Uniswap Launch

| Item               | Amount    | Link       | Purpose         | DAO Ready |
|--------------------|-----------|-----------------------|------------------|-----------|
| Initial Liquidity  | 5,000     | [0xLiquidityDeployer](https://polygonscan.com/address/0x2305b595532C835a38BCDE086b2ffC59C137Cf6E)          | Uniswap Pool                 | ❌        |

---

## 🧩 Community Treasury (6,300,000 BTCMINT)

| Sub-Vault                  | Amount    | Link           | Purpose               | DAO Ready |
|----------------------------|-----------|-------------------------|------------------------|-----------|
| Grants Vault               | 1,500,000 | [0xCommunityVault1](https://polygonscan.com/address/0x56Fe90E0718ED654F743fe1eCad49EF6Ec40BCf6)    | Developer grants             | ✅        |
| Meme Incentives Vault      | 1,000,000 | [0xCommunityVault2](https://polygonscan.com/address/0xc2EBB2e69B591598441a9d6BBc959c33cf635faA)    | Viral campaigns              | ✅        |
| Module Rewards Vault       | 1,000,000 | [0xCommunityVault3](https://polygonscan.com/address/0x58730911a2C166B6d95aD3589cbE2918b40357DC)    | Verified modules             | ✅        |
| Event Sponsorship Vault    | 1,000,000 | [0xCommunityVault4](https://polygonscan.com/address/0xe4862E7204E089ee157Eb83328C7B19cD6891253)    | IRL/online events            | ✅        |
| Community Ops Vault        | 1,000,000 | [0xCommunityVault5](https://polygonscan.com/address/0x7ed0e56c6652059Be68048d36E7c714FDFAe640d)    | DAO tooling                  | ✅        |
| Emergency Community Vault  | 800,000   | [0xCommunityVault6](https://polygonscan.com/address/0x6A7FA9E17d96cd1f603F0D7A7358f4253Aa8EE4e)    | Fallback reserves            | ✅        |

---

## 🧩 Core Contributors (2,100,000 BTCMINT)

| Sub-Vault              | Amount    | Link           | Purpose               | DAO Ready |
|------------------------|-----------|-------------------------|------------------------|-----------|
| Founders Vault         | 1,000,000 | [0xContributorVault1](https://polygonscan.com/address/0x54fea50356b845034FD7BA66B8b3d828C4653444)      | Vesting                      | ❌        |
| Dev Incentives Vault   | 600,000   | [0xContributorVault2](https://polygonscan.com/address/0x8895537fFFe47744436F26C7D575f58B86C73481)      | Active contributors          | ❌        |
| Audit & Security Vault | 500,000   | [0xContributorVault3](https://polygonscan.com/address/0x56E4187689BE0fd96a7B3B7210C50031AbebB710)      | Bounties, audits             | ❌        |

---

## 🧩 Governance Incentives (2,100,000 BTCMINT)

| Sub-Vault              | Amount    | Link          | Purpose                   | DAO Ready |
|------------------------|-----------|-------------------------|----------------------------|-----------|
| Voting Rewards Vault   | 1,000,000 | [0xGovernanceVault1](https://polygonscan.com/address/0x6D6dC748439E5E6F7acB1eE2B31512a685d4949C)       | Discord participation       | ✅        |
| Proposal Bounties Vault| 600,000   | [0xGovernanceVault2](https://polygonscan.com/address/0x222FA7Cfa8a0810261F1d7B900F84a12889F223d)       | High-impact proposals        | ✅        |
| DAO Onboarding Vault   | 500,000   | [0xGovernanceVault3](https://polygonscan.com/address/0xd03ed6166988f7533863703105dDDd69428fd216)       | New member incentives        | ✅        |

---

## 🧩 Liquidity & Exchanges (4,195,000 BTCMINT)

| Sub-Vault                  | Amount    | Link          | Purpose                   | DAO Ready |
|----------------------------|-----------|-------------------------|----------------------------|-----------|
| CEX Listing Vault          | 1,495,000 | [0xLiquidityVault1](https://polygonscan.com/address/0x8D6E1f6dB8B4bd8087d072baa33008445f6F5576)    | Centralized exchanges        | ❌        |
| DEX Expansion Vault        | 1,000,000 | [0xLiquidityVault2](https://polygonscan.com/address/0x74ef1fb507Cb0E037c3133A89441bE03184453ea)    | Uniswap, Sushi, etc.         | ❌        |
| Bridge Liquidity Vault     | 1,000,000 | [0xLiquidityVault3](https://polygonscan.com/address/0xE0cA752C65d35a45197F511FD71eBE3A38c31843)    | Cross-chain bridges          | ❌        |
| Emergency Liquidity Vault  | 700,000   | [0xLiquidityVault4](https://polygonscan.com/address/0x7b4313b4f7B2Bce983704AC924cBb804b71818f0)    | DAO-triggered boosts         | ✅        |

---

## 🧩 Strategic Partners (2,100,000 BTCMINT)

| Sub-Vault                   | Amount    | Link           | Purpose                     | DAO Ready |
|-----------------------------|-----------|-------------------------|------------------------------|-----------|
| Ecosystem Integrations Vault| 1,000,000 | [0xPartnerVault1](https://polygonscan.com/address/0xE7AD5DbE5eA79F102b614cC4921F12bd2465d4Eb)     | Protocol partnerships        | ❌        |
| Institutional Access Vault  | 600,000   | [0xPartnerVault2](https://polygonscan.com/address/0xFfD5Be880adbbF8dFb5B81cFE98BBdcBa148Dd40)     | VC, OTC                      | ❌        |
| Alliance Grants Vault       | 500,000   | [0xPartnerVault3](https://polygonscan.com/address/0x30b39b02251972F8B9691121497500C417A7622a)     | DAO-to-DAO collaborations    | ✅        |

---

## 🧩 Public Sale Reserve (3,150,000 BTCMINT)

| Sub-Vault              | Amount    | Link           | Purpose               | DAO Ready |
|------------------------|-----------|-------------------------|------------------------|-----------|
| Launchpad Vault        | 1,500,000 | [0xPublicSaleVault1](https://polygonscan.com/address/0xa0bea5cCe748b0b6fE4146be3368CA5a52c2df7D)       | Future IDOs                  | ❌        |
| OTC Sale Vault         | 1,000,000 | [0xPublicSaleVault2](https://polygonscan.com/address/0x50c19d8c1f4e1CA1141A22a9734E925E459CB91d)       | Private rounds               | ❌        |
| Community Sale Vault   | 650,000   | [0xPublicSaleVault3](https://polygonscan.com/address/0xF4C6A990e574b4aEFe0dC67FcD61a87cd96f716F)       | DAO-approved sale            | ✅        |

---

## 🧩 Technical Ops Reserve (1,050,000 BTCMINT)

| Sub-Vault              | Amount    | Link           | Purpose                   | DAO Ready |
|------------------------|-----------|-------------------------|----------------------------|-----------|
| DevOps Vault           | 500,000   | [0xOpsVault1](https://polygonscan.com/address/0xfA9587b975D6F3f8D31Cf88d7a3B4cc673585596)              | Deployments, registry        | ❌        |
| Infra Vault            | 300,000   | [0xOpsVault2](https://polygonscan.com/address/0x7d37A546C9De23cc7Bc8A3B768a71F345A471372)              | Hosting, bots                | ❌        |
| Emergency Fix Vault    | 250,000   | [0xOpsVault3](https://polygonscan.com/address/0x86517254f13eC9Ab8afF52d58c2Fa945fb715179)              | DAO-triggered fixes          | ✅        |

---

> Vesting schedules and burn mechanics will be documented separately.

## 📈 Price Strategy & Liquidity Philosophy

BTCMINT aims for sustainable price discovery through deep liquidity, transparent allocation, and deflationary mechanics.

- Initial liquidity pools will be seeded with DAO-approved reserves
- Vesting schedules and staking incentives reduce early sell pressure
- Burn mechanics tied to module usage create long-term scarcity
- Community-driven proposals can adjust liquidity mining and treasury flows

BTCMINT isn’t chasing hype — it’s engineering trust.


