import {  Grid, GridCol, GridRow, TypoDisplay } from "@element/react-components"
// import homeImg from "../../assets/img/farmers-are-walking-at-sunset.jpg"
import homeImg from "../../../assets/img/corporate-4.jpg"
import "./homePage.css"



export const HomePage = () => {

  return (
    <Grid 
        fullWidth={true}
        className="banner-home"
        //style={{backgroundImage:`url(${homeImg})`,height:"400px", backgroundSize: "cover"}}
     //    <img src="/sites/default/files/styles/1600_620/public/2022-11/human-activity-hero.jpg?h=7373532e&amp;itok=TZ9FDWQE" width="1600" height="620" alt="Human Activity" loading="lazy" typeof="foaf:Image" class="image-style-_600-620">
    >       
    <GridRow>
        <GridCol desktopCol={12} style={{ overflow: "hidden"}}>
            <div className="banner-line" ></div>
            {/* <div className="angle"></div> */}
            <img src={homeImg}  height="620" alt="" typeof="Image" className="img-responsive"/>
                
                <TypoDisplay className="banner-title"
                themeColor="secondary"
                level={3}
                >                     
                     Bienvenido a Landing Page
                 </TypoDisplay>

                <TypoDisplay className="banner-text"
                    themeColor="secondary"
                    level={6}
                    >                    
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, laborum, officia id cum nobis tenetur eligendi eaque nam inventore, dolorem tempore culpa deleniti reiciendis quas maiores quibusdam unde rerum dolore!
                </TypoDisplay>

        </GridCol>
    </GridRow>
    {/* <GridRow>
        <GridCol desktopCol={12}>
                <TypoDisplay 
                themeColor="secondary"
                level={3}
                >                     
                     Bienvenido a Landing Page
                 </TypoDisplay>
        </GridCol>
    </GridRow>
    <GridRow>        
        <GridCol desktopCol={9}>
            
        </GridCol>
        <GridCol desktopCol={3}>                
                <TypoDisplay 
                        themeColor="secondary"
                        level={6}
                        >
                            
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, laborum, officia id cum nobis tenetur eligendi eaque nam inventore, dolorem tempore culpa deleniti reiciendis quas maiores quibusdam unde rerum dolore!
                 </TypoDisplay>
        </GridCol>
    </GridRow> */}
</Grid>

  )
}
