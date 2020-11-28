import 'package:get_it/get_it.dart';
import '../config/dev_config.dart';

/// Locator instance
GetIt locator = GetIt.instance;

/// Set up locator settings
void setUpLocator() => locator.registerLazySingleton(() => DevConfig());
