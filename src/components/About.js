import React from 'react'
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
import { Container} from 'react-materialize'
export default function About() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div className="fullscreen" >
       <Container>
      <div className="about" style={{ backgroundColor: theme.backgroundColor, color: theme.color }} >
        <Collapsible
          accordion
          popout
        >
          <CollapsibleItem style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
            expanded={false}
            header="Who we are"
            icon={<Icon>filter_drama</Icon>}
            node="div"
          >
            <div className="content" >
              <img height="300wh" src="https://buffer.com/static/about/webp/About-Hero2.webp"></img>
              <p > We’re a fully distributed team of 82 people living and working in 22 countries around the world. And we’re working to build the best products to help our customers build their brands and grow their businesses on social media.</p>
            </div>
          </CollapsibleItem>
          <CollapsibleItem
            expanded={false}
            header="Our Mission"
            icon={<Icon>place</Icon>}
            node="div"
          >
            <div className="content" >
              <img height="300wh" src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/assets/hubspot.com/about_2019/BrianAndDharmesh-photo.png"></img>
              <p >  There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.</p>
            </div>


          </CollapsibleItem>
          <CollapsibleItem
            expanded={false}
            header="Our Approach"
            icon={<Icon>whatshot</Icon>}
            node="div"
          >
            <div className="content" >
              <p >  There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.</p>
            </div>
          </CollapsibleItem>
        </Collapsible>
      </div>
    </Container>

    </div>
   
  )
}
