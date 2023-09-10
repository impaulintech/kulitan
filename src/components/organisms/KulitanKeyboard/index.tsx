import KulitanKeyAction from "@/components/atoms/KulitanKeyAction";
import { Switch } from "@headlessui/react";
import React, { useState } from "react";

const KulitanKeyboard = ({ children }: any) => {
	const [enabled, setEnabled] = useState(false);

	const deleteAction = (action: string) => {
		console.log(action);
	};
	const addAction = (action: string) => {
		console.log(action);
	};
	const backSpaceAction = (action: string) => {
		console.log(action);
	};
	const newLineAction = (action: string) => {
		console.log(action);
	};

	return (
		<div className="sticky w-full h-full">
			<div className="h-[30px] bg-dark min-w-[414px] w-full bottom-[275px] z-30 flex gap-2 justify-start items-center pl-6">
				<Switch
					checked={enabled}
					onChange={setEnabled}
					className={`${
						enabled
							? "bg-[rgba(255,255,255,90%)]"
							: "bg-[rgba(217,217,217,30%)]"
					} relative inline-flex h-4 w-10 items-center rounded-full`}
				>
					<span className="sr-only">Auto correct</span>
					<span
						className={`${
							enabled ? "translate-x-6" : "translate-x-1"
						} inline-block h-3 w-3 transform rounded-full bg-[#57BB47] transition`}
					/>
				</Switch>
				<span className="text-[12px]">Auto correct</span>
			</div>
			<div
				className="
					left-0 bottom-0 min-h-[275px] min-w-[414px] w-full bg-[rgba(12,51,68,60%)] z-50
                    flex justify-center items-center
                "
			>
				<div className="flex justify-start items-start max-w-[414px]">
					<div className="flex flex-wrap justify-start items-start gap-2 pl-2 h-[275px] w-[414px]">
						{children}
					</div>
					<div className="w-[74px] h-[275px] pr-2 z-50 flex flex-col gap-2">
						<KulitanKeyAction action="delete" keyFunction={deleteAction} />
						<KulitanKeyAction action="add" keyFunction={addAction} />
						<KulitanKeyAction
							action="backSpace"
							keyFunction={backSpaceAction}
						/>
						<KulitanKeyAction action="newLine" keyFunction={newLineAction} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default KulitanKeyboard;
