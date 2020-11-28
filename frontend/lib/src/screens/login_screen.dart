import 'package:flutter/material.dart';

import '../components/input_field.dart';
import '../utils/helpers/app_color.dart';

/// Login Screen
class LoginScreen extends StatelessWidget {
  @override
  Scaffold build(BuildContext context) => Scaffold(
        body: Container(
          decoration: BoxDecoration(gradient: AppColor.primary.gradient),
          child: Center(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 19.0),
              child: Container(
                decoration: const BoxDecoration(
                  color: Colors.white,
                  boxShadow: <BoxShadow>[
                    BoxShadow(
                      color: Colors.black38,
                      offset: Offset(3, 4),
                      spreadRadius: 3,
                      blurRadius: 3,
                    ),
                  ],
                  borderRadius: BorderRadius.all(Radius.circular(15)),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Text('Log In',
                          style: Theme.of(context).textTheme.headline1),
                      const InputField(
                          text: 'Email', secure: false, iconData: Icons.email),
                      const InputField(
                          text: 'Password', secure: true, iconData: Icons.lock),
                      MaterialButton(
                        onPressed: () {},
                        color: Theme.of(context).primaryColor,
                        child: Text(
                          'Log In'.toUpperCase(),
                          style: const TextStyle(color: Colors.white),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
      );
}
