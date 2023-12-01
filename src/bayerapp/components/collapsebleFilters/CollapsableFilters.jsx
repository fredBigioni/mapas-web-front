import { ExpansionContent, ExpansionPanel,List ,ListItem, ExpansionTrigger,ExpansionIcon } from "@element/react-components";

export const CollapsableFilters = ({children}) => {

return(
    <ExpansionPanel accordion>
        <List nonInteractive>
            <ExpansionTrigger expansionId={1} disabled={false}>
                <ListItem
                    disabled={false}
                    trailingBlock={
                    <ExpansionIcon
                        expansionId={1}
                    />
                    }
                    trailingBlockType="icon"
                >
                    Filtros
                </ListItem>
            </ExpansionTrigger>
            <ExpansionContent expansionId={1}>
                {children}
            </ExpansionContent>
        </List>
    </ExpansionPanel>
)
}