import 'package:flutter/material.dart';

/// Custom input field component
class InputField extends StatelessWidget {
  /// InputField constructor
  const InputField({this.text, this.secure, this.iconData});

  /// Placeholder text
  final String text;

  /// InputField type (password)
  final bool secure;

  /// Input field icon
  final IconData iconData;

  @override
  Padding build(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 10),
        child: Padding(
          padding: const EdgeInsets.all(3.0),
          child: TextField(
            obscureText: secure,
            cursorColor: Theme.of(context).textSelectionTheme.cursorColor,
            decoration:
                InputDecoration(prefixIcon: Icon(iconData), hintText: text),
          ),
        ),
      );
}
