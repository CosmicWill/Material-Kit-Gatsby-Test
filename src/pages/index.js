import React from 'react'
import { Link } from 'gatsby'
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import SectionBasics from "../Sections/SectionBasics.jsx";
import SectionNavbars from "../Sections/SectionNavbars.jsx";
import SectionTabs from "../Sections/SectionTabs.jsx";
import SectionPills from "../Sections/SectionPills.jsx";
import SectionNotifications from "../Sections/SectionNotifications.jsx";
import SectionTypography from "../Sections/SectionTypography.jsx";
import SectionCarousel from "../Sections/SectionCarousel.jsx";
import SectionCompletedExamples from "../Sections/SectionCompletedExamples.jsx";
import SectionLogin from "../Sections/SectionLogin.jsx";
import SectionJavascript from "../Sections/SectionJavascript.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Layout from '../components/layout';

import componentsStyle from "../assets/jss/material-kit-react/views/components.jsx";


const Components = () => (
      <Layout>
        <Parallax image={require("assets/img/bg4.jpg")}>
          <div style={componentsStyle.container}>
            <GridContainer>
              <GridItem>
                <div style={componentsStyle.brand}>
                  <h1 style={componentsStyle.title}>Material Kit React.</h1>
                  <h3 style={componentsStyle.subtitle}>
                    A Badass Material-UI Kit based on Material Design.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div style={Object.assign(componentsStyle.main, componentsStyle.mainRaised)}>
          <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )

export default Components;
