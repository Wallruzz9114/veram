import 'package:flutter/material.dart';

import 'utils/helpers/app_color.dart';
import 'utils/router/router.gr.dart';

/// Main app instance
class Veram extends StatelessWidget {
  @override
  MaterialApp build(BuildContext context) => MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Veram',
        theme: ThemeData(
          primaryColor: AppColor.primary.color,
          accentColor: AppColor.secondary.color,
          brightness: Brightness.light,
          textSelectionTheme: TextSelectionThemeData(
            cursorColor: AppColor.primary.color,
          ),
          fontFamily: 'Avenir Next',
          textTheme: TextTheme(
            headline1: TextStyle(
              fontSize: 36,
              color: AppColor.header.color,
              fontWeight: FontWeight.bold,
            ),
            bodyText1: TextStyle(color: AppColor.text.color),
          ),
        ),
        onGenerateRoute: AppRouter.onGenerateRoute,
        initialRoute: '/login',
      );
}
