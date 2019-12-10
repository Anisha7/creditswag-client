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
  ScrollView,
  TouchableHighlight,
  View,
  Image
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ToggleSwitch from "toggle-switch-react-native";

describe("<ProfileTab />", () => {
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
  it("renders", () => {
    const Wrapper = shallow(<AccountSettingsTab title={"Add re-occuring bill"} link={"bill"} />);
    expect(Wrapper.find(TouchableHighlight)).toHaveLength(1);
    expect(Wrapper.find(Text)).toHaveLength(1);
    expect(Wrapper.find(View)).toHaveLength(1);
    expect(Wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });
});

describe("<NotificationSettingsTab />", () => {

  it("renders", () => {
    const Wrapper = shallow(<NotificationSettingsTab title={"thing"} />);
    expect(Wrapper.find(ToggleSwitch)).toHaveLength(1);
    expect(Wrapper.find(Text)).toHaveLength(1);
    expect(Wrapper.find(View)).toHaveLength(1);
  });
});

describe("<SettingsScreen />", () => {
  it("has style and children props", () => {
    const Wrapper = shallow(<SettingsScreen />);
    const props = Wrapper.props();
    expect(Object.keys(props)).toStrictEqual(["style", "children"]);
    expect(props.style).toBeDefined();
    expect(props.children).toBeDefined();
  });

  it("renders", () => {
    const Wrapper = shallow(<SettingsScreen />);
    expect(Wrapper.find(Image)).toHaveLength(2);
    expect(Wrapper.find(ScrollView)).toHaveLength(1);
    expect(Wrapper.find(TouchableHighlight)).toHaveLength(1);
    expect(Wrapper.find(Text)).toHaveLength(4);
    expect(Wrapper.find(View)).toHaveLength(5);
    expect(Wrapper.find(ProfileTab)).toHaveLength(1);
    expect(Wrapper.find(AccountSettingsTab)).toHaveLength(4);
    expect(Wrapper.find(NotificationSettingsTab)).toHaveLength(6);
  });
});
