import React from "react";
import { Flex, Text, TextField, Dialog } from "@radix-ui/themes";
import PotCount from "../card/pot-count";

type DialogComponentProps = {
  trigger?: React.ReactNode;
};

export default function DialogWithdraw({
  trigger = <button>Edit profile</button>,
}: DialogComponentProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{trigger}</Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>{`Withdraw from 'Savings'`}</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
        </Dialog.Description>
        <Flex direction="column" gap="3">
          <PotCount />
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Amount to Add
            </Text>
            <TextField.Root placeholder="100" />
          </label>
        </Flex>
        <Flex mt="4" className=" w-full">
          <Dialog.Close className="w-full">
            <button className="w-full bg-black p-2 text-white rounded-md">
              Confirm Addition
            </button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
