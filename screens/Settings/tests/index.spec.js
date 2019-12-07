import expect from "expect";
import React from "react";
import { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

import SettingsScreen, {
  ProfileTab,
  AccountSettingsTab,
  NotificationSettingsTab
} from "../";
import {
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  Image
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

describe("<ProfileTab />", () => {
  it("has props", () => {
      const img = "https://via.placeholder.com/80"
    const Wrapper = shallow(
      <ProfileTab
        img={img}
        name={"Timofey Makhlay"}
      />
    );
    const props = Wrapper.props();
    expect(Object.keys(props)).toStrictEqual([
      "style",
      "children"
    ]);
    expect(props.style).toBeDefined();
    expect(props.children).toBeDefined();
    // TODO: can we do this with function components?
    // expect(props.img).toBeDefined();
    // expect(props.img).toBe("https://via.placeholder.com/80");
    // expect(props.name).toBeDefined();
    // expect(props.img).toBe("Timofey Makhlay");
  });

  it("renders", () => {
    const Wrapper = shallow(
      <ProfileTab
        img={"https://via.placeholder.com/80"}
        name={"Timofey Makhlay"}
      />
    );
      expect(Wrapper.find(FontAwesomeIcon)).toHaveLength(1);
      expect(Wrapper.find(TouchableHighlight)).toHaveLength(2);
      expect(Wrapper.find(Text)).toHaveLength(2);
      expect(Wrapper.find(View)).toHaveLength(2);
  });
});

describe("<AccountSettingsTab />", () => {
  it("has style and children props", () => {
    const Wrapper = shallow(<AccountSettingsTab itle={"Add re-occuring bill"} link={"bill"} />);
    const props = Wrapper.props();
    expect(Object.keys(props)).toStrictEqual([
      "style",
      "children",
    ]);
    expect(props.style).toBeDefined();
    expect(props.children).toBeDefined();
    // expect(props.title).toBeDefined();
    // expect(props.link).toBeDefined();
  });

  it("renders", () => {
    const Wrapper = shallow(<AccountSettingsTab title={"Add re-occuring bill"} link={"bill"} />);
    expect(Wrapper.find(TouchableHighlight)).toHaveLength(1);
    expect(Wrapper.find(Text)).toHaveLength(1);
    expect(Wrapper.find(View)).toHaveLength(1);
    expect(Wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });
});

// describe("<NotificationSettingsTab />", () => {
//   it("has style and children props", () => {
//     const Wrapper = shallow(<NotificationSettingsTab title={} />);
//     const props = Wrapper.props();
//     expect(Object.keys(props)).toStrictEqual(["style", "children"]);
//     expect(props.style).toBeDefined();
//     expect(props.children).toBeDefined();
//   });

//   it("renders", () => {
//     const Wrapper = shallow(<NotificationSettingsTab title={} />);
//     // expect(Wrapper.find(TextInput)).toHaveLength(2);
//     // expect(Wrapper.find(TouchableWithoutFeedback)).toHaveLength(2);
//     // expect(Wrapper.find(TouchableHighlight)).toHaveLength(4);
//     // expect(Wrapper.find(Text)).toHaveLength(4);
//     // expect(Wrapper.find(View)).toHaveLength(5);
//   });
// });

// describe("<SettingsScreen />", () => {
//   it("has style and children props", () => {
//     const Wrapper = shallow(<SettingsScreen />);
//     const props = Wrapper.props();
//     expect(Object.keys(props)).toStrictEqual(["style", "children"]);
//     expect(props.style).toBeDefined();
//     expect(props.children).toBeDefined();
//   });

//   it("renders", () => {
//     const Wrapper = shallow(<SettingsScreen />);
//     // expect(Wrapper.find(TextInput)).toHaveLength(2);
//     // expect(Wrapper.find(TouchableWithoutFeedback)).toHaveLength(2);
//     // expect(Wrapper.find(TouchableHighlight)).toHaveLength(4);
//     // expect(Wrapper.find(Text)).toHaveLength(4);
//     // expect(Wrapper.find(View)).toHaveLength(5);
//   });
// });
