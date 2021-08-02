import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import '../connection/env.dart';
import 'dart:convert';

class ExpenseItem {
  String id;
  String title;
  String category;
  double value;

  ExpenseItem(
      {required this.id,
      required this.title,
      required this.category,
      required this.value});
}

class Expenses with ChangeNotifier {
  List<ExpenseItem> _items = [];

  List<ExpenseItem> get items => [..._items];

  Future<void> fetchAndSetExpenses() async {
    final url = Uri.parse(Connection().db);
    try {
      final res = await http.get(url);
      final extractedData = jsonDecode(res.body) as List<dynamic>;
      List<ExpenseItem> _loadedExpenses = [];

      for (var element in extractedData) {
        _loadedExpenses.add(ExpenseItem(
          id: element["_id"],
          title: element["title"],
          category: element["category"],
          value: element["value"].toDouble(),
        ));
      }
      _items = _loadedExpenses;
      notifyListeners();
    } catch (err) {
      print(err);
    }
  }
}
