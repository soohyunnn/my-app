import _ from "lodash";
import React, { Component, createRef } from "react";
import {
  Divider,
  Grid,
  Image,
  Segment,
  Sticky,
  Table,
  Ref,
  Visibility,
  Progress,
} from "semantic-ui-react";

export default class VisibilityProgressExample extends Component {
  state = {
    calculations: {
      direction: "none",
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false,
    },
  };
  contextRef = createRef();

  handleUpdate = (e, { calculations }) => this.setState({ calculations });

  render() {
    const { calculations } = this.state;

    return (
      <>
        <Sticky context={this.contextRef}>
          <Progress
            percent={
              (calculations.pixelsPassed / calculations.height -
                window.innerHeight) *
              100
            }
            progress
          />
        </Sticky>
        <Ref innerRef={this.contextRef}>
          <Grid columns={2}>
            <Grid.Column>
              <Visibility onUpdate={this.handleUpdate}>
                <Segment>
                  {[
                    "https://react.semantic-ui.com/images/wireframe/centered-paragraph.png",
                    "https://react.semantic-ui.com/images/wireframe/short-paragraph.png",
                    "https://react.semantic-ui.com/images/wireframe/media-paragraph.png",
                    "https://react.semantic-ui.com/images/wireframe/paragraph.png",
                    "https://react.semantic-ui.com/images/wireframe/centered-paragraph.png",
                    "https://react.semantic-ui.com/images/wireframe/short-paragraph.png",
                    "https://react.semantic-ui.com/images/wireframe/media-paragraph.png",
                    "https://react.semantic-ui.com/images/wireframe/paragraph.png",
                    "https://react.semantic-ui.com/images/wireframe/centered-paragraph.png",
                    "https://react.semantic-ui.com/images/wireframe/short-paragraph.png",
                    "https://react.semantic-ui.com/images/wireframe/media-paragraph.png",
                    "https://react.semantic-ui.com/images/wireframe/paragraph.png",
                  ].map((src, index, images) => (
                    <React.Fragment key={index}>
                      <Image src={src} />
                      {index !== images.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </Segment>
              </Visibility>
            </Grid.Column>

            <Grid.Column>
              <Sticky context={this.contextRef}>
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Calculation</Table.HeaderCell>
                      <Table.HeaderCell>Value</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>direction</Table.Cell>
                      <Table.Cell>{calculations.direction}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>pixelsPassed</Table.Cell>
                      <Table.Cell>
                        {calculations.pixelsPassed.toFixed()}px
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>percentagePassed</Table.Cell>
                      <Table.Cell>
                        {(calculations.percentagePassed * 100).toFixed()}%
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>fits</Table.Cell>
                      <Table.Cell>{calculations.fits.toString()}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>width</Table.Cell>
                      <Table.Cell>{calculations.width.toFixed()}px</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>height</Table.Cell>
                      <Table.Cell>{calculations.height.toFixed()}px</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>onScreen</Table.Cell>
                      <Table.Cell>
                        {calculations.onScreen.toString()}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>offScreen</Table.Cell>
                      <Table.Cell>
                        {calculations.offScreen.toString()}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>passing</Table.Cell>
                      <Table.Cell>{calculations.passing.toString()}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>topVisible</Table.Cell>
                      <Table.Cell>
                        {calculations.topVisible.toString()}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>bottomVisible</Table.Cell>
                      <Table.Cell>
                        {calculations.bottomVisible.toString()}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>topPassed</Table.Cell>
                      <Table.Cell>
                        {calculations.topPassed.toString()}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>bottomPassed</Table.Cell>
                      <Table.Cell>
                        {calculations.bottomPassed.toString()}
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Sticky>
            </Grid.Column>
          </Grid>
        </Ref>
        <div style={{ height: 1000, width: "100%" }}></div>
      </>
    );
  }
}
