import { Flex, TabNav } from "@radix-ui/themes";

export function Header(){
  return (
    <Flex className="w-full z-[99] fixed p-3.5 bg-zinc-900 bg-opacity-30 backdrop-blur-lg">
      <TabNav.Root size="2">
        <TabNav.Link className="hideen font-bold text-3xl">Dev Motors</TabNav.Link>
        <TabNav.Link href="/">Home</TabNav.Link>
        <TabNav.Link href="/#servicos">Serviços</TabNav.Link>
        <TabNav.Link href="/#contatos">Contatos</TabNav.Link>
      </TabNav.Root>
    </Flex>
  )
}
