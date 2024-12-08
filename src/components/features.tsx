import FeatureCard from "./feature-card";
import MoneyImage from "../../public/images/money-bag-6384.svg";
import liquidity from "../../public/images/liquidity-burn.jpg";
import community from "../../public/images/community.jpg";

export default function Features() {
  return (
    <div className="flex flex-col py-10 gap-10 px-4">
      <p className="text-2xl font-semibold text-center">
        Why Choose JusticeAI?
      </p>

      <div className="grid  lg:grid-cols-3 gap-4">
        <FeatureCard
          image={MoneyImage}
          imageAlt="money image"
          title="Total Supply"
          description={"One billion JusticeAI Dollars"}
        />
        <FeatureCard
          image={liquidity}
          imageAlt="liquidity burn"
          title="Liquidity Burn"
          description={
            "The entire token supply has been burned into liquidity, ensuring a fair distribution for all holders."
          }
        />
        <FeatureCard
          image={community}
          imageAlt="community"
          title="Community Driven Governance"
          description={
            "With no centralized ownership, $JusticeAI holders become the stewards of Justice AI’s future, allowing the community to shape the platform’s direction"
          }
        />
      </div>

      <p className="text-center">
        This tokenomics structure guarantees fairness and aims to eliminate
        centralized control, allowing the Justice AI platform to function as a
        purely community-driven initiative.
      </p>
    </div>
  );
}
