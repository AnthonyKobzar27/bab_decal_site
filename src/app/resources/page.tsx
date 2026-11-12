import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "@/components/ui/ExternalLink";

export const metadata: Metadata = { title: "Resources" };

const devResources = [
  {
    category: "Ethereum & Solidity",
    links: [
      { label: "Solidity Docs", href: "https://docs.soliditylang.org" },
      { label: "Ethers.js Docs", href: "https://docs.ethers.org" },
      { label: "Hardhat", href: "https://hardhat.org/docs" },
      { label: "Foundry Book", href: "https://book.getfoundry.sh" },
      { label: "OpenZeppelin Contracts", href: "https://docs.openzeppelin.com/contracts" },
      { label: "Smart Contract Security Best Practices", href: "https://consensys.github.io/smart-contract-best-practices" },
    ],
  },
  {
    category: "Rust & CosmWasm",
    links: [
      { label: "The Rust Book", href: "https://doc.rust-lang.org/book" },
      { label: "Rustlings Exercises", href: "https://github.com/rust-lang/rustlings" },
      { label: "CosmWasm Docs", href: "https://docs.cosmwasm.com" },
      { label: "Cosmos SDK Docs", href: "https://docs.cosmos.network" },
    ],
  },
  {
    category: "DeFi & Trading",
    links: [
      { label: "Uniswap v3 Whitepaper", href: "https://uniswap.org/whitepaper-v3.pdf" },
      { label: "Wagmi (React Hooks for Ethereum)", href: "https://wagmi.sh" },
      { label: "Ethereum Yellow Paper", href: "https://ethereum.github.io/yellowpaper/paper.pdf" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl space-y-10">
      <SectionHeading as="h1">Resources</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {devResources.map((group) => (
          <section key={group.category} className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {group.category}
            </h2>
            <ul className="space-y-1">
              {group.links.map((link) => (
                <li key={link.label}>
                  <ExternalLink href={link.href} className="text-sm">
                    {link.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
