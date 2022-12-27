// import 'package:Management/components/basecomponents/DropDownWidget.dart';

import 'package:Management/components/basecomponents/SearchBar.dart';
import 'package:flutter/material.dart';
import 'package:Management/components/basecomponents/DialogInformationControl.dart';

class TableList extends StatefulWidget {
  final dynamic stateUpdate;

  final dynamic tab;
  dynamic currentSideBarOption = 'Patient';
  final dynamic pageIndex;

  TableList(
      {super.key,
      this.tab,
      this.stateUpdate,
      this.pageIndex,
      this.currentSideBarOption});

  @override
  State<TableList> createState() {
    return TableListState();
  }
}

class TableListState extends State<TableList> {
  dynamic currentPagelistObjects = [];
//dynamic data

  //page logic code
  int pageStart = 0;
  int pageEnd = 10;
  int physicalPage = 1;
  int limit = 0;
  int limitVar = 10;
  int totalPage = 0;
  var pageArray = [];
  dynamic pagelistObjects;
  var isSearchable = false;
  var searchToken = '';
  var margin1 = 2;
  var margin2 = 33;

// search token
  void setToken(token) {
    searchToken = token;
    setState(() {});
  }

  @override
  void initState() {
    pageStart = 0;
    pageEnd = limitVar * physicalPage;
    limit = limitVar;
    if (widget.tab == 'Doctor' || widget.tab == 'Patient') {
      isSearchable = true;
      margin1 = 56;
      margin2 = 88;
    }
    listData = [];

    for (var i = 0; i < 30; i++) {
      if (widget.tab == 'Incoming') {
        listData.add(<dynamic, dynamic>{
          'Test': 'ECG',
          'Name': 'Patient $i',
          'Transaction': 500 * i
        });
      } else if (widget.tab == 'Outgoing') {
        listData.add(<dynamic, dynamic>{
          'Test': 'ECG',
          'Name': 'Patient $i',
          'Transaction': -500 * i
        });
      } else if (widget.tab == 'Doctor') {
        listData.add(<dynamic, dynamic>{
          'Name': 'Doctor $i',
          'Gender': i % 2 == 0 ? 'Male' : 'Female',
          'Mobile': '01680${i}93142',
          'Degree': 'MBBS',
          'Speciality': i % 2 == 0 ? 'spec1' : 'spec2',
          'Signature':
              'C:\\Users\\lsamp\\Pictures\\309464686_10167103437245226_481711389529763809_n.jpg',
        });
      } else if (widget.tab == 'Staff' || widget.tab == 'Users') {
        listData.add(<dynamic, dynamic>{
          'Name': 'Staff $i',
          'Mobile': '01680${i}93142',
          'Password': '01680${i}93142',
          'Joined': '$i/${i * 2}/2022',
          'Title': i % 2 == 0 ? 'Receptionist' : 'Accountant',
        });
      } else if (widget.tab == 'Patient') {
        listData.add(<dynamic, dynamic>{
          'Name': 'Patient $i',
          'Gender': i % 2 == 0 ? 'Male' : 'Female',
          'Mobile': '01680${i}93142',
          'Age': 2 * i,
          'Weight': '${i + i * 10}kg',
        });
      } else if (widget.tab == 'History') {
        listData.add(<dynamic, dynamic>{
          'Lab': 'ECG',
          'Date': '3/03/1234',
          'Cost': '424\$'
        });
      }
    }
    super.initState();
  }

  void updatePageState(String command) {
    if (command == 'next') {
      if (pageEnd < pagelistObjects.length) {
        physicalPage++;
      }
    } else if (command == 'previous') {
      if (physicalPage > 1) {
        physicalPage--;
      }
    }
    setState(() {});
  }

  void updatePageCallback(String value, int page) {
    physicalPage = page;
    setState(() {});
  }
  //page logic code --!>

  var listData = []; //dynamic data store

  @override
  Widget build(BuildContext context) {
    // print(widget.tab);
    pagelistObjects = listData;
    totalPage = ((pagelistObjects.length) / limit).ceil();
    // print(totalPage);
    pageEnd = (physicalPage * limit);
    pageStart = pageEnd - limit;

    currentPagelistObjects = [];
    pageArray = [];

    for (var i = pageStart; i < pageEnd; i++) {
      if (pagelistObjects.length > i) {
        currentPagelistObjects.add(listData.elementAt(i));
        // print('index $i');
      } else {
        break;
      }
    }

    for (var i = 1; i <= totalPage; i++) {
      pageArray.add(i.toString());
    }

    return Stack(
      children: [
        if (widget.tab == 'Doctor' || widget.tab == 'Patient') ...[
          Container(
            margin: const EdgeInsets.only(top: 5),
            child: SearchBar(
              setToken: setToken,
            ),
          )
        ],
        Container(
          margin: EdgeInsets.only(top: margin1.toDouble()),
          child: Align(
              alignment: Alignment.topLeft,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton(
                    style: ElevatedButton.styleFrom(
                        padding: const EdgeInsets.only(right: 2, bottom: 2),
                        backgroundColor: Colors.green),
                    onPressed: () => {updatePageState('previous')},
                    child: const Icon(
                      Icons.arrow_left,
                      size: 18,
                    ),
                  ),
                  Container(
                      decoration: const BoxDecoration(
                        color: Colors.white,
                      ),
                      padding: const EdgeInsets.only(
                          left: 6, right: 6, top: 2, bottom: 2),
                      margin: const EdgeInsets.only(left: 6, right: 6),
                      child: (physicalPage - 1 >= 1)
                          ? Text('${physicalPage - 1}')
                          : const Text('')),
                  Container(
                      decoration: BoxDecoration(
                          color: Colors.white,
                          border: Border.all(
                            color: const Color.fromARGB(103, 0, 0, 0),
                            style: BorderStyle.solid,
                            width: 1.0,
                          )),
                      padding: const EdgeInsets.only(
                          left: 6, right: 6, top: 2, bottom: 2),
                      margin: const EdgeInsets.only(left: 6, right: 6),
                      child: Text('$physicalPage')),
                  Container(
                      decoration: const BoxDecoration(
                        color: Colors.white,
                      ),
                      padding: const EdgeInsets.only(
                          left: 6, right: 6, top: 2, bottom: 2),
                      margin: const EdgeInsets.only(left: 6, right: 6),
                      child: (physicalPage + 1 <= totalPage)
                          ? Text('${physicalPage + 1}')
                          : const Text('')),
                  ElevatedButton(
                      style: ElevatedButton.styleFrom(
                          padding: const EdgeInsets.only(left: 0, bottom: 2),
                          backgroundColor: Colors.green),
                      onPressed: () => {updatePageState('next')},
                      child: const Icon(Icons.arrow_right, size: 18)),
                ],
              )),
        ),
        Container(
          margin: EdgeInsets.only(top: margin2.toDouble()),
          child: CustomScrollView(
            slivers: [
              SliverAppBar(
                pinned: true,
                automaticallyImplyLeading: false,
                backgroundColor: Colors.green,
                toolbarHeight: 40,
                flexibleSpace: Row(children: [
                  if (currentPagelistObjects.length > 0) ...[
                    for (String key
                        in currentPagelistObjects.elementAt(0).keys) ...[
                      if (key != 'Signature') ...[
                        Expanded(
                            child: InkWell(
                                onTap: () => {},
                                child: Container(
                                  padding: const EdgeInsets.all(4),
                                  height: double.infinity,
                                  alignment: Alignment.center,
                                  child: SelectableText(
                                    key,
                                    textAlign: TextAlign.center,
                                  ),
                                )))
                      ],
                    ],
                  ],
                  if (widget.tab == 'Patient') ...[
                    Expanded(
                        child: InkWell(
                            onTap: () => {},
                            child: Container(
                              padding: const EdgeInsets.all(4),
                              height: double.infinity,
                              alignment: Alignment.center,
                              child: const Text(
                                '',
                                textAlign: TextAlign.center,
                              ),
                            )))
                  ]
                ]),
                expandedHeight: 50,
              ),
              SliverList(
                delegate: SliverChildBuilderDelegate(
                  (context, index) => SizedBox(
                    height: 60,
                    child: InkWell(
                        onTap: () => widget.tab != "History"
                            ? showDialog(
                                context: context,
                                builder: (BuildContext context) => DialogBox(
                                  contextMode: 'Edit',
                                  contextName: widget.tab,
                                  stateUpdate: widget.stateUpdate,
                                ),
                              )
                            : null,
                        child: Row(children: [
                          for (String key in currentPagelistObjects
                              .elementAt(index)
                              .keys) ...[
                            if (key != 'Signature') ...[
                              Expanded(
                                  child: Container(
                                color: index % 2 == 0
                                    ? const Color.fromARGB(48, 128, 126, 126)
                                    : null,
                                padding: const EdgeInsets.all(13),
                                alignment: Alignment.center,
                                child: SelectableText(
                                  currentPagelistObjects
                                      .elementAt(index)[key]
                                      .toString(),
                                  enableInteractiveSelection: true,

                                  textAlign: TextAlign.center,
                                  // overflow: TextOverflow.fade,
                                ),
                              ))
                            ],
                          ],
                          if (widget.tab == 'Patient') ...[
                            Expanded(
                                child: Container(
                              color: index % 2 == 0
                                  ? const Color.fromARGB(48, 128, 126, 126)
                                  : null,
                              padding: const EdgeInsets.all(9),
                              alignment: Alignment.center,
                              child: SingleChildScrollView(
                                scrollDirection: Axis.horizontal,
                                child: Row(children: [
                                  ElevatedButton(
                                      onPressed: () => {widget.pageIndex(3)},
                                      style: ElevatedButton.styleFrom(
                                          backgroundColor: Colors.green),
                                      child: const Text('Register')),
                                  Padding(
                                    padding: const EdgeInsets.only(left: 4),
                                    child: ElevatedButton(
                                        onPressed: () => {},
                                        style: ElevatedButton.styleFrom(
                                            backgroundColor: Colors.green),
                                        child: const Text('History')),
                                  )
                                ]),
                              ),
                            ))
                          ]
                        ])),
                  ),
                  childCount: currentPagelistObjects.length,
                ),
              ),
            ],
          ),
        )
      ],
    );
  }
}
