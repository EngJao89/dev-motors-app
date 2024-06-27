'use client'

import { useEffect, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Button, Flex, Popover, Section, SegmentedControl, TabNav, Tabs } from "@radix-ui/themes";

export function SubMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 768){
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)

  }, [])

  function toggleMenu(){
    setIsOpen(!isOpen);
  }
  return (
    <Section className="m-0">
      <Popover.Root>
        <Popover.Trigger>
          <Button 
            onClick={toggleMenu} 
            className="inline-flex gap-3.5 bg-transparent text-lg text-zinc-900 font-bold" 
          >
            <TiThMenu size={34} color="#121212"/>
            Serviços
          </Button>
        </Popover.Trigger>
        <Popover.Content size="1" maxWidth="300px">
          <SegmentedControl.Root>
            <SegmentedControl.Item value="Post 1">Pagina 1</SegmentedControl.Item>
            <SegmentedControl.Item value="Post 2">Pagina 2</SegmentedControl.Item>
          </SegmentedControl.Root>
          <h1>
            The quick brown fox jumps over the lazy dog.
          </h1>
        </Popover.Content>
      </Popover.Root>
    </Section>
  )
}
