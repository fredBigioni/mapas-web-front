// import Can from "../config/can"

import { Divider, Grid, SideSheet } from "@element/react-components";
import { useEffect, useState } from "react";

import {
  List,
  ListItem,
  Padding,
  ExpansionTrigger,
  ExpansionContent,
  ExpansionIcon,
  ExpansionPanel,
} from "@element/react-components";


export const NothingSelectedView = (props) => {

  const { accordion, disabled, lessIcon, moreIcon } = { ...props };

  return (
    <>
    <div>NothingSelectedWiew</div>
    {/* <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio quis adipisci tenetur autem asperiores id ex totam aspernatur quas officia molestias numquam praesentium, aut veniam. Repellat consequuntur obcaecati atque.</div> */}

    <ExpansionPanel accordion={accordion}>
      <List nonInteractive>
        <ExpansionTrigger expansionId={1} disabled={disabled}>
          <ListItem
            disabled={disabled}
            trailingBlock={
              <ExpansionIcon
                expansionId={1}
              />
            }
            trailingBlockType="icon"
          >
            Expansion Panel 1
          </ListItem>
        </ExpansionTrigger>
        <ExpansionContent expansionId={1}>          
            <ExpansionTrigger expansionId={2} disabled={disabled}>
              <ListItem disabled={disabled} 
                  trailingBlock={
                  <ExpansionIcon  expansionId={2} />
                }
                trailingBlockType="icon"
              >
                Expansion Panel 2
              </ListItem>
            </ExpansionTrigger>
            <ExpansionContent expansionId={2}>
              <Padding>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat
              </Padding>
              <ExpansionTrigger expansionId={3} disabled={disabled}>
                <ListItem disabled={disabled} 
                    trailingBlock={
                    <ExpansionIcon  expansionId={3} />
                  }
                  trailingBlockType="icon"
                >
                  Expansion Panel 3
                </ListItem>                
              </ExpansionTrigger>
              <ExpansionContent expansionId={3}>
                asdasdasdasdasd
              </ExpansionContent>

            </ExpansionContent>
        </ExpansionContent>
      </List>
    </ExpansionPanel>
    </>
  )
}
