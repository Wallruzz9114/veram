import 'dart:ui';

import 'package:flutter/widgets.dart';

/// AppColor enum
enum AppColor {
  /// Primary
  primary,

  /// Secondary
  secondary,

  /// Text
  text,

  /// Header
  header
}

/// Extention of AppColor
extension ExtendedAppColor on AppColor {
  /// Extended Colors
  static const Map<AppColor, Color> colors = <AppColor, Color>{
    AppColor.primary: Color(0xffFFAFBD),
    AppColor.secondary: Color(0xffD3D3D3),
    AppColor.text: Color(0xFF16161d),
    AppColor.header: Color(0xff661624),
  };

  /// Gradients
  static const Map<AppColor, LinearGradient> gradients =
      <AppColor, LinearGradient>{
    AppColor.primary: LinearGradient(
      begin: Alignment.topCenter,
      end: Alignment.bottomCenter,
      stops: <double>[0.1, 1.0],
      colors: <Color>[Color(0xffFFAFBD), Color(0xffffc3a0)],
    ),
  };

  /// Colors Getter
  Color get color => colors[this];

  /// Gradient Getter
  Gradient get gradient => gradients[this];
}
