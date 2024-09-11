import { Dialog, DropdownMenu, Flex } from "@radix-ui/themes";
import { useRef } from "react";

export default function MenuDialog() {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <Dialog.Root>
      <DropdownMenu.Item
        shortcut="⌘ E"
        onClick={(e) => {
          // ===========
          // Trick 1: this will trigger opening the dialog without closing the dropdown menu.
          e.preventDefault();
          ref?.current?.click();
        }}
      >
        <div>
          <Dialog.Trigger ref={ref}>
            <div></div>
          </Dialog.Trigger>
          Dialog Item
        </div>
      </DropdownMenu.Item>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your profile.
        </Dialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <DropdownMenu.Item>
              <button>Cancel</button>
            </DropdownMenu.Item>
          </Dialog.Close>
          <Dialog.Close>
            {/* ===========
                 Trick 2: This will trigger the close of Dropdown Menu. */}
            <DropdownMenu.Item>Save</DropdownMenu.Item>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
