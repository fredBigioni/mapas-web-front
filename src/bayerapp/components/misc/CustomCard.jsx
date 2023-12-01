import { Card, CardActions, CardBody, CardContent, CardDivider, CardTitle} from "@element/react-components";

export const CustomCard = ({children,zoom = 1, title ="" }) => {
  return (
    <Card  
        style={{zoom:`${zoom}` }}
            // variant={variant} 
            //  height={"180px"}
        > 
    
            <CardContent>
                <CardTitle
                    // themeColor={themeColor}
                    // overlineText={"overlineText"}
                    primaryText={title}
                    // secondaryText={"secondaryText"}
                    // leadingBlockType={leadingBlockType}
                    // trailingBlockType={trailingBlockType}
                    // leadingBlock={leadingBlock}
                    // trailingBlock={trailingBlock}
                />
                <CardDivider
                    dividerThemeColor={"primary"}
                    // dividerVariant={dividerVariant}
                />
                <CardBody 
                    // typographyType={typographyType}
                >
                    {children}
                </CardBody>
                {/* <CardActions
                    alignment={alignment}
                    actionButtons={actionButtonsToRender}
                    actionIcons={actionIcons}
                /> */}
            </CardContent>
        </Card>
  )
}
