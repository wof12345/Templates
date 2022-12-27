import 'dart:io';
import 'package:Management/components/basecomponents/DialogBoxMessage.dart';
import 'package:Management/components/basecomponents/DropDownWidget.dart';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';

class DialogBox extends StatefulWidget {
  DialogBox({
    super.key,
    this.contextName,
    this.stateUpdate,
    this.contextMode,
    this.currentSideBarOption,
  });
  final dynamic contextName;

  final dynamic stateUpdate;
  final dynamic contextMode;

  final dynamic currentSideBarOption;

  final _dynamicControllers = {};
  final Map<dynamic, dynamic> _inputs =
      {}; //update and add input values stored here

  @override
  State<DialogBox> createState() => DialogBoxState();
}

class DialogBoxState extends State<DialogBox> {
//input logic
  var isNotEmpty = true;

  //page logic
  var hasAffirmed = false;
  var buttons = [];
  var isNotEdit = true;
  var isUpdate = false;
  var selectValue = {};
  dynamic path;
  dynamic finalReference;
  var contextSelectOption = {
    //expects data objects to have property names starting with uppercase
    'Speciality': ['spec1', 'spec2', 'spec3'],
    'Title': ['Receptionist', 'Accountant', 'Lab Technician'],
    'Gender': ['Male', 'Female', 'Other']
  }; //select field data

  void updateStates() {
    if (widget.contextMode == 'Edit') {
      buttons = [];
      if (isUpdate) {
        isNotEdit = true;

        buttons.add('Cancel');
        buttons.add('Update');
      } else {
        isNotEdit = false;
        buttons.add('Cancel');
        buttons.add('Delete');
        buttons.add('Edit');
      }
    } else {
      buttons.add('Cancel');
      buttons.add('Add');
    }
  }

  void getSelectValue(key, value) {
    selectValue[key] = value;
  }

  void getAffirmation(affirm) {
    if (affirm == 'Yes' || affirm != 'Ok') {
      //delete code
      hasAffirmed = true;
    }
    setState(() {
      if (hasAffirmed) {
        Navigator.pop(context, affirm);
      }
    });
  }

  @override
  void initState() {
    updateStates();
    finalReference = {}; //fetched information object
    path = (widget.contextMode == 'Add')
        ? null
        : (path ?? finalReference['Signature']);

//init edit context input values
    for (String key in finalReference.keys) {
      ('edit mode $isNotEdit');
      if (isNotEdit) {
        widget._dynamicControllers[key] = TextEditingController(text: '');
      } else {
        widget._dynamicControllers[key] =
            TextEditingController(text: finalReference[key].toString());
        selectValue[key] = finalReference[key];
      }
      if (contextSelectOption[key] != null) {
        getSelectValue(key, contextSelectOption[key]!.first);
      }
    }
    super.initState();
  }
  //page logic code --!>

  @override
  Widget build(BuildContext context) {
    return StatefulBuilder(builder: ((context, setState) {
      // ('path ${path}');
      return AlertDialog(
        insetPadding: const EdgeInsets.all(10),
        title: Text('${widget.contextMode} ${widget.contextName} Information:'),
        content: SingleChildScrollView(
            child: Column(
          children: [
            for (String key in finalReference.keys)
              Container(
                  margin: const EdgeInsets.all(5),
                  width: 300,
                  child: ((key != 'Speciality' &&
                          key != 'Title' &&
                          key != 'Signature'))
                      ? contextWidgetInputField(key)
                      : (key == 'Speciality' ||
                              (key == 'Title' &&
                                  widget.contextMode == 'Add' &&
                                  widget.currentSideBarOption == 'Admin') ||
                              key == 'Gender')
                          ? contextWidgetDropDown(key)
                          : (key == 'Signature')
                              ? contextWidgetSignatureField(key)
                              : null)
          ],
        )),
        actions: [
          ...(buttons).map((item) {
            return TextButton(
              onPressed: () => {inputModification(item)},
              child: Text(item),
            );
          })
        ],
        actionsAlignment: MainAxisAlignment.spaceEvenly,
      );
    }));
  }

//modification function
  void inputModification(item) {
    if (item == 'Add' || item == 'Update') {
      // add code & update code
      getInputValuesInObject(item);
    } else if (item == 'Edit') {
      //edit code
      setState(() {
        isUpdate = true;
        updateStates();
      });
    } else if (item == 'Delete') {
      //delete code

      showDialog(
        context: context,
        builder: (BuildContext context) => DialogBoxMessage(
          contextMessage: 'Confirmation',
          message: 'Are you sure?',
          buttons: const ['Yes', 'No'],
          affirmationCallback: getAffirmation,
        ),
      );
    } else {
      Navigator.pop(context, item);
    }
  }

  Widget contextWidgetFilePicker() {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(backgroundColor: Colors.green),
      onPressed: () async {
        final result =
            await FilePicker.platform.pickFiles(allowMultiple: false);

        if (result == null) {
          return;
        } else {
          var pathFile = result.files.first.path.toString();

          path = pathFile;
          (path);

          setState(() {});
        }
      },
      child: const Text("Pick a signature(jpg,png)"),
    );
  }

  Widget contextWidgetDropDown(key) {
    return DropDownWidget(
      passedList: contextSelectOption[key],
      passedCallBack: getSelectValue,
      preValue: finalReference[key],
      keyValue: key,
      editable: isNotEdit,
    );
  }

  Widget contextWidgetInputField(key) {
    return TextFormField(
      obscureText: (key == 'Password') ? true : false,
      decoration: InputDecoration(
          border: const OutlineInputBorder(),
          enabled: isNotEdit
              ? (key != 'Password' &&
                      widget.contextName == 'Users' &&
                      widget.contextMode == 'Edit')
                  ? false
                  : true
              : isNotEdit,
          labelText: key,
          contentPadding:
              const EdgeInsets.only(top: 2, bottom: 2, left: 4, right: 3),
          hintText: 'Input'),
      controller: widget._dynamicControllers[key],
    );
  }

  Widget contextWidgetImageField() {
    return Container(
      margin: const EdgeInsets.only(top: 3),
      child: Image(image: FileImage(File(path))),
    );
  }

  Widget contextWidgetSignatureField(key) {
    return Column(children: [
      if (isNotEdit) ...[contextWidgetFilePicker()],
      Text(key),
      if (path != null) ...[contextWidgetImageField()],
    ]);
  }

  void getInputValuesInObject(item) {
    for (final key in widget._dynamicControllers.keys) {
      (' key $key $path');
      if (key != 'Speciality' && key != 'Title' && key != 'Signature') {
        widget._inputs[key] = widget._dynamicControllers[key].text;
      } else {
        // ('cond $selectValue'),
        ('innerkey $key');
        if (key != 'Signature') {
          widget._inputs[key] = selectValue[key];
        } else {
          widget._inputs[key] = path;
        }
      }
      ;
      if (widget._inputs[key] == "") {
        isNotEmpty = false;
      }
    }

    if (isNotEmpty) {
      showDialog(
        context: context,
        builder: (BuildContext context) => DialogBoxMessage(
          contextMessage: 'Information',
          message: 'Fields cannot be empty!',
          buttons: const ['Ok'],
          affirmationCallback: getAffirmation,
        ),
      );
    } else {
      widget.stateUpdate();
      isNotEmpty = true;
      Navigator.pop(context, item);
    }
  }
}
