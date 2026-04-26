import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Divider } from "@/components/ui/Divider";
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

const pastSites = {
  spring: [
    { label: "Spring 2025", href: "#" },
    { label: "Spring 2024", href: "#" },
    { label: "Spring 2023", href: "#" },
  ],
  fall: [
    { label: "Fall 2025", href: "#" },
    { label: "Fall 2024", href: "#" },
    { label: "Fall 2023", href: "#" },
  ],
};

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl space-y-10">
      <SectionHeading as="h1">Resources</SectionHeading>

      {/* Developer Resources */}
      <section className="space-y-6">
        <SectionHeading as="h2">Developer Resources</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {devResources.map((group) => (
            <div key={group.category} className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {group.category}
              </h3>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <ExternalLink href={link.href} className="text-sm">
                      {link.label}
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Past Course Websites */}
      <section className="space-y-4">
        <SectionHeading as="h2">Past Course Websites</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {(["spring", "fall"] as const).map((season) => (
            <div key={season} className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 capitalize">
                {season}
              </h3>
              <ul className="space-y-1">
                {pastSites[season].map((site) => (
                  <li key={site.label}>
                    <ExternalLink href={site.href} className="text-sm">
                      {site.label}
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
