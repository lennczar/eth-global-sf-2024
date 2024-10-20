import { IconButton, Select, TextField } from "@radix-ui/themes";
import { useState } from "react";
import "./App.css";
import { Feed } from "./components/Feed";
import { ArrowRight } from "lucide-react";

type Chain = "near" | "ethereum";

function App() {
	const [addr, setAddr] = useState<string | null>(null);
	const [accountId, setAccountId] = useState<string | null>(null);
	const [chain, setChain] = useState<Chain | null>(null);

	return (
		<div className="hero">
			<div className="left">
				<div className="fixed">
					<h2>Recommendation Feed</h2>
					<Select.Root
						size="3"
						defaultValue={chain ?? undefined}
						onValueChange={(v) => setChain(v as Chain)}
					>
						<Select.Trigger placeholder="Select Chain" />
						<Select.Content>
							<Select.Item value="near">NEAR Protocol</Select.Item>
							<Select.Item value="ethereum">Ethereum Mainnet</Select.Item>
						</Select.Content>
					</Select.Root>
					<TextField.Root
						placeholder="Insert your Wallet Address"
						size="3"
						color="gray"
						radius="large"
						defaultValue={addr ?? undefined}
						onChange={(e) => setAddr(e.target.value)}
					>
						<TextField.Slot></TextField.Slot>
						<TextField.Slot>
							<IconButton
								size="1"
								color="grass"
								onClick={() => setAccountId(addr)}
							>
								<ArrowRight size="16" />
							</IconButton>
						</TextField.Slot>
					</TextField.Root>
				</div>
			</div>
			<div className="right">
				<Feed
					unitId="uUBGrCYld3/hDwvs3W5IzA=="
					accountId={accountId ?? undefined}
				/>
			</div>
		</div>
	);
}

export default App;
