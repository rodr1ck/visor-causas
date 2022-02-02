const dbVisor=
{
  "meta": {
    "view": {
      "id": "bxq8-mugm",
      "name": "Monthly Counts of Deaths by Select Causes, 2014-2019",
      "assetType": "dataset",
      "attribution": "National Center for Health Statistics",
      "attributionLink": "https://www.cdc.gov/nchs/",
      "averageRating": 0,
      "category": "NCHS",
      "createdAt": 1612382206,
      "description": "Final counts of deaths by the month the deaths occurred and by select causes of death for 2014-2019.",
      "displayType": "table",
      "downloadCount": 2653,
      "hideFromCatalog": false,
      "hideFromDataJson": false,
      "licenseId": "USGOV_WORKS",
      "newBackend": true,
      "numberOfComments": 0,
      "oid": 36360573,
      "provenance": "official",
      "publicationAppendEnabled": false,
      "publicationDate": 1612382663,
      "publicationGroup": 17996726,
      "publicationStage": "published",
      "rowsUpdatedAt": 1612385712,
      "rowsUpdatedBy": "xfvr-ns68",
      "tableId": 17996726,
      "totalTimesRated": 0,
      "viewCount": 13624,
      "viewLastModified": 1626962866,
      "viewType": "tabular",
      "approvals": [
        {
          "reviewedAt": 1612386795,
          "reviewedAutomatically": true,
          "state": "approved",
          "submissionId": 3194390,
          "submissionObject": "public_audience_request",
          "submissionOutcome": "change_audience",
          "submittedAt": 1612386795,
          "workflowId": 2100,
          "submissionDetails": {
            "permissionType": "READ"
          },
          "submissionOutcomeApplication": {
            "endedAt": 1612386795,
            "failureCount": 0,
            "startedAt": 1612386795,
            "status": "success"
          },
          "submitter": {
            "id": "xfvr-ns68",
            "displayName": "NCHS"
          }
        }
      ],
      "columns": [
        {
          "id": -1,
          "name": "sid",
          "dataTypeName": "meta_data",
          "fieldName": ":sid",
          "position": 0,
          "renderTypeName": "meta_data",
          "format": {
            
          },
          "flags": [
            "hidden"
          ]
        },
        {
          "id": -1,
          "name": "id",
          "dataTypeName": "meta_data",
          "fieldName": ":id",
          "position": 0,
          "renderTypeName": "meta_data",
          "format": {
            
          },
          "flags": [
            "hidden"
          ]
        },
        {
          "id": -1,
          "name": "position",
          "dataTypeName": "meta_data",
          "fieldName": ":position",
          "position": 0,
          "renderTypeName": "meta_data",
          "format": {
            
          },
          "flags": [
            "hidden"
          ]
        },
        {
          "id": -1,
          "name": "created_at",
          "dataTypeName": "meta_data",
          "fieldName": ":created_at",
          "position": 0,
          "renderTypeName": "meta_data",
          "format": {
            
          },
          "flags": [
            "hidden"
          ]
        },
        {
          "id": -1,
          "name": "created_meta",
          "dataTypeName": "meta_data",
          "fieldName": ":created_meta",
          "position": 0,
          "renderTypeName": "meta_data",
          "format": {
            
          },
          "flags": [
            "hidden"
          ]
        },
        {
          "id": -1,
          "name": "updated_at",
          "dataTypeName": "meta_data",
          "fieldName": ":updated_at",
          "position": 0,
          "renderTypeName": "meta_data",
          "format": {
            
          },
          "flags": [
            "hidden"
          ]
        },
        {
          "id": -1,
          "name": "updated_meta",
          "dataTypeName": "meta_data",
          "fieldName": ":updated_meta",
          "position": 0,
          "renderTypeName": "meta_data",
          "format": {
            
          },
          "flags": [
            "hidden"
          ]
        },
        {
          "id": -1,
          "name": "meta",
          "dataTypeName": "meta_data",
          "fieldName": ":meta",
          "position": 0,
          "renderTypeName": "meta_data",
          "format": {
            
          },
          "flags": [
            "hidden"
          ]
        },
        {
          "id": 522681735,
          "name": "Jurisdiction of Occurrence",
          "dataTypeName": "text",
          "description": "Jurisdiction of Occurrence",
          "fieldName": "jurisdiction_of_occurrence",
          "position": 1,
          "renderTypeName": "text",
          "tableColumnId": 129489244,
          "cachedContents": {
            "non_null": "72",
            "largest": "United States",
            "null": "0",
            "top": [
              {
                "item": "United States",
                "count": "72"
              }
            ],
            "smallest": "United States",
            "cardinality": "1"
          },
          "format": {
            
          }
        },
        {
          "id": 522681760,
          "name": "Year",
          "dataTypeName": "number",
          "description": "Year",
          "fieldName": "year",
          "position": 2,
          "renderTypeName": "number",
          "tableColumnId": 129489253,
          "width": 129,
          "cachedContents": {
            "non_null": "72",
            "largest": "2019",
            "null": "0",
            "top": [
              {
                "item": "2014",
                "count": "12"
              },
              {
                "item": "2015",
                "count": "12"
              },
              {
                "item": "2019",
                "count": "12"
              },
              {
                "item": "2017",
                "count": "12"
              },
              {
                "item": "2018",
                "count": "12"
              },
              {
                "item": "2016",
                "count": "12"
              }
            ],
            "smallest": "2014",
            "cardinality": "6"
          },
          "format": {
            "noCommas": "true"
          }
        },
        {
          "id": 522681741,
          "name": "Month",
          "dataTypeName": "number",
          "description": "Month",
          "fieldName": "month",
          "position": 3,
          "renderTypeName": "number",
          "tableColumnId": 129489250,
          "width": 140,
          "cachedContents": {
            "non_null": "72",
            "largest": "12",
            "null": "0",
            "top": [
              {
                "item": "8",
                "count": "6"
              },
              {
                "item": "6",
                "count": "6"
              },
              {
                "item": "5",
                "count": "6"
              },
              {
                "item": "9",
                "count": "6"
              },
              {
                "item": "2",
                "count": "6"
              },
              {
                "item": "11",
                "count": "6"
              },
              {
                "item": "3",
                "count": "6"
              },
              {
                "item": "12",
                "count": "6"
              },
              {
                "item": "10",
                "count": "6"
              },
              {
                "item": "7",
                "count": "6"
              },
              {
                "item": "1",
                "count": "6"
              },
              {
                "item": "4",
                "count": "6"
              }
            ],
            "smallest": "1",
            "cardinality": "12"
          },
          "format": {
            
          }
        },
        {
          "id": 522681713,
          "name": "All Cause",
          "dataTypeName": "number",
          "description": "AllCause",
          "fieldName": "all_cause",
          "position": 4,
          "renderTypeName": "number",
          "tableColumnId": 129489238,
          "width": 152,
          "cachedContents": {
            "non_null": "72",
            "largest": "286744",
            "null": "0",
            "top": [
              {
                "item": "215600",
                "count": "1"
              },
              {
                "item": "209905",
                "count": "1"
              },
              {
                "item": "221887",
                "count": "1"
              },
              {
                "item": "221317",
                "count": "1"
              },
              {
                "item": "223535",
                "count": "1"
              },
              {
                "item": "227047",
                "count": "1"
              },
              {
                "item": "227313",
                "count": "1"
              },
              {
                "item": "219788",
                "count": "1"
              },
              {
                "item": "239028",
                "count": "1"
              },
              {
                "item": "216862",
                "count": "1"
              },
              {
                "item": "248805",
                "count": "1"
              },
              {
                "item": "257649",
                "count": "1"
              },
              {
                "item": "251732",
                "count": "1"
              },
              {
                "item": "236998",
                "count": "1"
              },
              {
                "item": "218147",
                "count": "1"
              },
              {
                "item": "205274",
                "count": "1"
              },
              {
                "item": "211980",
                "count": "1"
              },
              {
                "item": "213051",
                "count": "1"
              },
              {
                "item": "227191",
                "count": "1"
              },
              {
                "item": "243390",
                "count": "1"
              }
            ],
            "smallest": "204687",
            "cardinality": "72"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681759,
          "name": "Natural Cause",
          "dataTypeName": "number",
          "description": "NaturalCause (A00-R99)",
          "fieldName": "natural_cause",
          "position": 5,
          "renderTypeName": "number",
          "tableColumnId": 129489252,
          "width": 160,
          "cachedContents": {
            "non_null": "72",
            "largest": "265418",
            "null": "0",
            "top": [
              {
                "item": "227341",
                "count": "1"
              },
              {
                "item": "213240",
                "count": "1"
              },
              {
                "item": "198767",
                "count": "1"
              },
              {
                "item": "204218",
                "count": "1"
              },
              {
                "item": "193541",
                "count": "1"
              },
              {
                "item": "205011",
                "count": "1"
              },
              {
                "item": "211028",
                "count": "1"
              },
              {
                "item": "224708",
                "count": "1"
              },
              {
                "item": "208108",
                "count": "1"
              },
              {
                "item": "228464",
                "count": "1"
              },
              {
                "item": "225948",
                "count": "1"
              },
              {
                "item": "265418",
                "count": "1"
              },
              {
                "item": "198209",
                "count": "1"
              },
              {
                "item": "200838",
                "count": "1"
              },
              {
                "item": "207062",
                "count": "1"
              },
              {
                "item": "199454",
                "count": "1"
              },
              {
                "item": "224696",
                "count": "1"
              },
              {
                "item": "218156",
                "count": "1"
              },
              {
                "item": "192035",
                "count": "1"
              },
              {
                "item": "216275",
                "count": "1"
              }
            ],
            "smallest": "187644",
            "cardinality": "72"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681738,
          "name": "Septicemia",
          "dataTypeName": "number",
          "description": "Septicemia (A40-A41)",
          "fieldName": "septicemia",
          "position": 6,
          "renderTypeName": "number",
          "tableColumnId": 129489247,
          "width": 165,
          "cachedContents": {
            "non_null": "72",
            "largest": "4502",
            "null": "0",
            "top": [
              {
                "item": "3257",
                "count": "2"
              },
              {
                "item": "3134",
                "count": "2"
              },
              {
                "item": "3092",
                "count": "2"
              },
              {
                "item": "3559",
                "count": "2"
              },
              {
                "item": "3236",
                "count": "1"
              },
              {
                "item": "3480",
                "count": "1"
              },
              {
                "item": "3071",
                "count": "1"
              },
              {
                "item": "3138",
                "count": "1"
              },
              {
                "item": "3673",
                "count": "1"
              },
              {
                "item": "3315",
                "count": "1"
              },
              {
                "item": "3451",
                "count": "1"
              },
              {
                "item": "3197",
                "count": "1"
              },
              {
                "item": "3714",
                "count": "1"
              },
              {
                "item": "3125",
                "count": "1"
              },
              {
                "item": "3511",
                "count": "1"
              },
              {
                "item": "3859",
                "count": "1"
              },
              {
                "item": "3015",
                "count": "1"
              },
              {
                "item": "3123",
                "count": "1"
              },
              {
                "item": "2918",
                "count": "1"
              },
              {
                "item": "2993",
                "count": "1"
              }
            ],
            "smallest": "2886",
            "cardinality": "68"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681711,
          "name": "Malignant Neoplasms",
          "dataTypeName": "number",
          "description": "Malignant neoplasms (C00-C97)",
          "fieldName": "malignant_neoplasms",
          "position": 7,
          "renderTypeName": "number",
          "tableColumnId": 129489236,
          "width": 189,
          "cachedContents": {
            "non_null": "72",
            "largest": "52876",
            "null": "0",
            "top": [
              {
                "item": "50055",
                "count": "1"
              },
              {
                "item": "50889",
                "count": "1"
              },
              {
                "item": "48331",
                "count": "1"
              },
              {
                "item": "48055",
                "count": "1"
              },
              {
                "item": "50646",
                "count": "1"
              },
              {
                "item": "49456",
                "count": "1"
              },
              {
                "item": "48304",
                "count": "1"
              },
              {
                "item": "51863",
                "count": "1"
              },
              {
                "item": "49259",
                "count": "1"
              },
              {
                "item": "51450",
                "count": "1"
              },
              {
                "item": "50351",
                "count": "1"
              },
              {
                "item": "50112",
                "count": "1"
              },
              {
                "item": "50593",
                "count": "1"
              },
              {
                "item": "49792",
                "count": "1"
              },
              {
                "item": "48574",
                "count": "1"
              },
              {
                "item": "51501",
                "count": "1"
              },
              {
                "item": "50878",
                "count": "1"
              },
              {
                "item": "51566",
                "count": "1"
              },
              {
                "item": "49814",
                "count": "1"
              },
              {
                "item": "49870",
                "count": "1"
              }
            ],
            "smallest": "45558",
            "cardinality": "72"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681734,
          "name": "Diabetes Mellitus",
          "dataTypeName": "number",
          "description": "Diabetes mellitus (E10-E14)",
          "fieldName": "diabetes_mellitus",
          "position": 8,
          "renderTypeName": "number",
          "tableColumnId": 129489243,
          "width": 177,
          "cachedContents": {
            "non_null": "72",
            "largest": "8674",
            "null": "0",
            "top": [
              {
                "item": "7028",
                "count": "2"
              },
              {
                "item": "6669",
                "count": "1"
              },
              {
                "item": "6479",
                "count": "1"
              },
              {
                "item": "6701",
                "count": "1"
              },
              {
                "item": "7886",
                "count": "1"
              },
              {
                "item": "6012",
                "count": "1"
              },
              {
                "item": "7106",
                "count": "1"
              },
              {
                "item": "7152",
                "count": "1"
              },
              {
                "item": "8674",
                "count": "1"
              },
              {
                "item": "7588",
                "count": "1"
              },
              {
                "item": "7032",
                "count": "1"
              },
              {
                "item": "7344",
                "count": "1"
              },
              {
                "item": "6851",
                "count": "1"
              },
              {
                "item": "5930",
                "count": "1"
              },
              {
                "item": "6713",
                "count": "1"
              },
              {
                "item": "7907",
                "count": "1"
              },
              {
                "item": "7360",
                "count": "1"
              },
              {
                "item": "6568",
                "count": "1"
              },
              {
                "item": "5810",
                "count": "1"
              },
              {
                "item": "6051",
                "count": "1"
              }
            ],
            "smallest": "5802",
            "cardinality": "71"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681714,
          "name": "Alzheimer Disease",
          "dataTypeName": "number",
          "description": "Alzheimer disease (G30)",
          "fieldName": "alzheimer_disease",
          "position": 9,
          "renderTypeName": "number",
          "tableColumnId": 129489239,
          "width": 179,
          "cachedContents": {
            "non_null": "72",
            "largest": "13410",
            "null": "0",
            "top": [
              {
                "item": "10080",
                "count": "2"
              },
              {
                "item": "9498",
                "count": "1"
              },
              {
                "item": "9729",
                "count": "1"
              },
              {
                "item": "10006",
                "count": "1"
              },
              {
                "item": "8674",
                "count": "1"
              },
              {
                "item": "8305",
                "count": "1"
              },
              {
                "item": "10950",
                "count": "1"
              },
              {
                "item": "7999",
                "count": "1"
              },
              {
                "item": "8109",
                "count": "1"
              },
              {
                "item": "8687",
                "count": "1"
              },
              {
                "item": "11179",
                "count": "1"
              },
              {
                "item": "11751",
                "count": "1"
              },
              {
                "item": "9333",
                "count": "1"
              },
              {
                "item": "10391",
                "count": "1"
              },
              {
                "item": "9082",
                "count": "1"
              },
              {
                "item": "9038",
                "count": "1"
              },
              {
                "item": "9722",
                "count": "1"
              },
              {
                "item": "9477",
                "count": "1"
              },
              {
                "item": "9988",
                "count": "1"
              },
              {
                "item": "9875",
                "count": "1"
              }
            ],
            "smallest": "6755",
            "cardinality": "71"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681739,
          "name": "Influenza and Pneumonia",
          "dataTypeName": "number",
          "description": "Influenza and pneumonia (J10-J18)",
          "fieldName": "influenza_and_pneumonia",
          "position": 10,
          "renderTypeName": "number",
          "tableColumnId": 129489248,
          "width": 222,
          "cachedContents": {
            "non_null": "72",
            "largest": "12164",
            "null": "0",
            "top": [
              {
                "item": "3614",
                "count": "2"
              },
              {
                "item": "5601",
                "count": "1"
              },
              {
                "item": "7929",
                "count": "1"
              },
              {
                "item": "3883",
                "count": "1"
              },
              {
                "item": "3439",
                "count": "1"
              },
              {
                "item": "3252",
                "count": "1"
              },
              {
                "item": "5295",
                "count": "1"
              },
              {
                "item": "6133",
                "count": "1"
              },
              {
                "item": "10005",
                "count": "1"
              },
              {
                "item": "3482",
                "count": "1"
              },
              {
                "item": "4878",
                "count": "1"
              },
              {
                "item": "3588",
                "count": "1"
              },
              {
                "item": "4099",
                "count": "1"
              },
              {
                "item": "3520",
                "count": "1"
              },
              {
                "item": "5148",
                "count": "1"
              },
              {
                "item": "2882",
                "count": "1"
              },
              {
                "item": "4489",
                "count": "1"
              },
              {
                "item": "3082",
                "count": "1"
              },
              {
                "item": "6402",
                "count": "1"
              },
              {
                "item": "6058",
                "count": "1"
              }
            ],
            "smallest": "2882",
            "cardinality": "71"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681693,
          "name": "Chronic Lower Respiratory Diseases",
          "dataTypeName": "number",
          "description": "Chronic lower respiratory diseases (J40-J47)",
          "fieldName": "chronic_lower_respiratory",
          "position": 11,
          "renderTypeName": "number",
          "tableColumnId": 129489234,
          "cachedContents": {
            "non_null": "72",
            "largest": "18271",
            "null": "0",
            "top": [
              {
                "item": "13493",
                "count": "1"
              },
              {
                "item": "13982",
                "count": "1"
              },
              {
                "item": "12573",
                "count": "1"
              },
              {
                "item": "13890",
                "count": "1"
              },
              {
                "item": "11946",
                "count": "1"
              },
              {
                "item": "11061",
                "count": "1"
              },
              {
                "item": "12809",
                "count": "1"
              },
              {
                "item": "12171",
                "count": "1"
              },
              {
                "item": "11107",
                "count": "1"
              },
              {
                "item": "12258",
                "count": "1"
              },
              {
                "item": "12073",
                "count": "1"
              },
              {
                "item": "11473",
                "count": "1"
              },
              {
                "item": "11313",
                "count": "1"
              },
              {
                "item": "13428",
                "count": "1"
              },
              {
                "item": "18271",
                "count": "1"
              },
              {
                "item": "12196",
                "count": "1"
              },
              {
                "item": "11161",
                "count": "1"
              },
              {
                "item": "11759",
                "count": "1"
              },
              {
                "item": "11970",
                "count": "1"
              },
              {
                "item": "16574",
                "count": "1"
              }
            ],
            "smallest": "10426",
            "cardinality": "72"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681740,
          "name": "Other Diseases of Respiratory System",
          "dataTypeName": "number",
          "description": "Other diseases of respiratory system (J00-J06,J30-J39,J67,J70-J98)",
          "fieldName": "other_diseases_of_respiratory",
          "position": 12,
          "renderTypeName": "number",
          "tableColumnId": 129489249,
          "cachedContents": {
            "non_null": "72",
            "largest": "4603",
            "null": "0",
            "top": [
              {
                "item": "3668",
                "count": "2"
              },
              {
                "item": "3277",
                "count": "2"
              },
              {
                "item": "3990",
                "count": "1"
              },
              {
                "item": "3260",
                "count": "1"
              },
              {
                "item": "3766",
                "count": "1"
              },
              {
                "item": "3606",
                "count": "1"
              },
              {
                "item": "2778",
                "count": "1"
              },
              {
                "item": "4083",
                "count": "1"
              },
              {
                "item": "3885",
                "count": "1"
              },
              {
                "item": "3232",
                "count": "1"
              },
              {
                "item": "3698",
                "count": "1"
              },
              {
                "item": "3640",
                "count": "1"
              },
              {
                "item": "3427",
                "count": "1"
              },
              {
                "item": "3879",
                "count": "1"
              },
              {
                "item": "3482",
                "count": "1"
              },
              {
                "item": "3688",
                "count": "1"
              },
              {
                "item": "3334",
                "count": "1"
              },
              {
                "item": "3705",
                "count": "1"
              },
              {
                "item": "3141",
                "count": "1"
              },
              {
                "item": "3058",
                "count": "1"
              }
            ],
            "smallest": "2690",
            "cardinality": "70"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681715,
          "name": "Nephritis, Nephrotic Syndrome, and Nephrosis",
          "dataTypeName": "number",
          "description": "Nephritis, nephrotic syndrome and nephrosis (N00-N07,N17-N19,N25-N27)",
          "fieldName": "nephritis_nephrotic_syndrom",
          "position": 13,
          "renderTypeName": "number",
          "tableColumnId": 129489240,
          "cachedContents": {
            "non_null": "72",
            "largest": "5346",
            "null": "0",
            "top": [
              {
                "item": "3881",
                "count": "2"
              },
              {
                "item": "3927",
                "count": "2"
              },
              {
                "item": "3929",
                "count": "2"
              },
              {
                "item": "3777",
                "count": "1"
              },
              {
                "item": "4083",
                "count": "1"
              },
              {
                "item": "4427",
                "count": "1"
              },
              {
                "item": "3885",
                "count": "1"
              },
              {
                "item": "4365",
                "count": "1"
              },
              {
                "item": "4628",
                "count": "1"
              },
              {
                "item": "3904",
                "count": "1"
              },
              {
                "item": "4317",
                "count": "1"
              },
              {
                "item": "4263",
                "count": "1"
              },
              {
                "item": "4344",
                "count": "1"
              },
              {
                "item": "4212",
                "count": "1"
              },
              {
                "item": "3631",
                "count": "1"
              },
              {
                "item": "3954",
                "count": "1"
              },
              {
                "item": "4054",
                "count": "1"
              },
              {
                "item": "3690",
                "count": "1"
              },
              {
                "item": "4046",
                "count": "1"
              },
              {
                "item": "4597",
                "count": "1"
              }
            ],
            "smallest": "3631",
            "cardinality": "69"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681717,
          "name": "Symptoms, Signs, and Abnormal Clinical and Laboratory Findings, Not Elsewhere Classified",
          "dataTypeName": "number",
          "description": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)",
          "fieldName": "symptoms_signs_and_abnormal",
          "position": 14,
          "renderTypeName": "number",
          "tableColumnId": 129489242,
          "cachedContents": {
            "non_null": "72",
            "largest": "3465",
            "null": "0",
            "top": [
              {
                "item": "2489",
                "count": "2"
              },
              {
                "item": "2518",
                "count": "2"
              },
              {
                "item": "2885",
                "count": "2"
              },
              {
                "item": "2551",
                "count": "2"
              },
              {
                "item": "2668",
                "count": "2"
              },
              {
                "item": "2674",
                "count": "2"
              },
              {
                "item": "2817",
                "count": "2"
              },
              {
                "item": "2532",
                "count": "1"
              },
              {
                "item": "2726",
                "count": "1"
              },
              {
                "item": "2586",
                "count": "1"
              },
              {
                "item": "2655",
                "count": "1"
              },
              {
                "item": "3000",
                "count": "1"
              },
              {
                "item": "2734",
                "count": "1"
              },
              {
                "item": "2769",
                "count": "1"
              },
              {
                "item": "3465",
                "count": "1"
              },
              {
                "item": "2957",
                "count": "1"
              },
              {
                "item": "2859",
                "count": "1"
              },
              {
                "item": "2521",
                "count": "1"
              },
              {
                "item": "2775",
                "count": "1"
              },
              {
                "item": "2508",
                "count": "1"
              }
            ],
            "smallest": "2449",
            "cardinality": "65"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681710,
          "name": "Diseases of Heart",
          "dataTypeName": "number",
          "description": "Diseases of heart (I00-I09,I11,I13,I20-I51)",
          "fieldName": "diseases_of_heart",
          "position": 15,
          "renderTypeName": "number",
          "tableColumnId": 129489235,
          "cachedContents": {
            "non_null": "72",
            "largest": "67024",
            "null": "0",
            "top": [
              {
                "item": "50217",
                "count": "1"
              },
              {
                "item": "50435",
                "count": "1"
              },
              {
                "item": "52335",
                "count": "1"
              },
              {
                "item": "58572",
                "count": "1"
              },
              {
                "item": "63190",
                "count": "1"
              },
              {
                "item": "53298",
                "count": "1"
              },
              {
                "item": "53081",
                "count": "1"
              },
              {
                "item": "60902",
                "count": "1"
              },
              {
                "item": "57206",
                "count": "1"
              },
              {
                "item": "53015",
                "count": "1"
              },
              {
                "item": "54979",
                "count": "1"
              },
              {
                "item": "59728",
                "count": "1"
              },
              {
                "item": "48672",
                "count": "1"
              },
              {
                "item": "52243",
                "count": "1"
              },
              {
                "item": "54347",
                "count": "1"
              },
              {
                "item": "57992",
                "count": "1"
              },
              {
                "item": "58476",
                "count": "1"
              },
              {
                "item": "58613",
                "count": "1"
              },
              {
                "item": "49709",
                "count": "1"
              },
              {
                "item": "50810",
                "count": "1"
              }
            ],
            "smallest": "46909",
            "cardinality": "72"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681742,
          "name": "Cerebrovascular Diseases",
          "dataTypeName": "number",
          "description": "Cerebrovascular diseases (I60-I69)",
          "fieldName": "cerebrovascular_diseases",
          "position": 16,
          "renderTypeName": "number",
          "tableColumnId": 129489251,
          "cachedContents": {
            "non_null": "72",
            "largest": "14653",
            "null": "0",
            "top": [
              {
                "item": "11445",
                "count": "2"
              },
              {
                "item": "11823",
                "count": "1"
              },
              {
                "item": "10449",
                "count": "1"
              },
              {
                "item": "11395",
                "count": "1"
              },
              {
                "item": "12177",
                "count": "1"
              },
              {
                "item": "11816",
                "count": "1"
              },
              {
                "item": "14653",
                "count": "1"
              },
              {
                "item": "12301",
                "count": "1"
              },
              {
                "item": "9973",
                "count": "1"
              },
              {
                "item": "12047",
                "count": "1"
              },
              {
                "item": "13740",
                "count": "1"
              },
              {
                "item": "12355",
                "count": "1"
              },
              {
                "item": "11863",
                "count": "1"
              },
              {
                "item": "12232",
                "count": "1"
              },
              {
                "item": "11296",
                "count": "1"
              },
              {
                "item": "13595",
                "count": "1"
              },
              {
                "item": "12693",
                "count": "1"
              },
              {
                "item": "11343",
                "count": "1"
              },
              {
                "item": "11671",
                "count": "1"
              },
              {
                "item": "11290",
                "count": "1"
              }
            ],
            "smallest": "9973",
            "cardinality": "71"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681737,
          "name": "Accidents (Unintentional Injuries)",
          "dataTypeName": "number",
          "description": "Accidents (Unintentional Injuries) (V01-X59,Y85-Y86)",
          "fieldName": "accidents_unintentional",
          "position": 17,
          "renderTypeName": "number",
          "tableColumnId": 129489246,
          "cachedContents": {
            "non_null": "72",
            "largest": "15292",
            "null": "0",
            "top": [
              {
                "item": "15292",
                "count": "1"
              },
              {
                "item": "11419",
                "count": "1"
              },
              {
                "item": "14025",
                "count": "1"
              },
              {
                "item": "12389",
                "count": "1"
              },
              {
                "item": "14518",
                "count": "1"
              },
              {
                "item": "11971",
                "count": "1"
              },
              {
                "item": "14200",
                "count": "1"
              },
              {
                "item": "13495",
                "count": "1"
              },
              {
                "item": "11461",
                "count": "1"
              },
              {
                "item": "13382",
                "count": "1"
              },
              {
                "item": "14245",
                "count": "1"
              },
              {
                "item": "14363",
                "count": "1"
              },
              {
                "item": "11579",
                "count": "1"
              },
              {
                "item": "12559",
                "count": "1"
              },
              {
                "item": "11644",
                "count": "1"
              },
              {
                "item": "14012",
                "count": "1"
              },
              {
                "item": "13926",
                "count": "1"
              },
              {
                "item": "14728",
                "count": "1"
              },
              {
                "item": "14863",
                "count": "1"
              },
              {
                "item": "14748",
                "count": "1"
              }
            ],
            "smallest": "10286",
            "cardinality": "72"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681712,
          "name": "Motor Vehicle Accidents",
          "dataTypeName": "number",
          "description": "Motor Vehicle Accidents (V01-V99,Y85)",
          "fieldName": "motor_vehicle_accidents",
          "position": 18,
          "renderTypeName": "number",
          "tableColumnId": 129489237,
          "cachedContents": {
            "non_null": "72",
            "largest": "3834",
            "null": "0",
            "top": [
              {
                "item": "2734",
                "count": "2"
              },
              {
                "item": "3095",
                "count": "1"
              },
              {
                "item": "2830",
                "count": "1"
              },
              {
                "item": "3274",
                "count": "1"
              },
              {
                "item": "3490",
                "count": "1"
              },
              {
                "item": "3222",
                "count": "1"
              },
              {
                "item": "2720",
                "count": "1"
              },
              {
                "item": "3481",
                "count": "1"
              },
              {
                "item": "2748",
                "count": "1"
              },
              {
                "item": "2350",
                "count": "1"
              },
              {
                "item": "3506",
                "count": "1"
              },
              {
                "item": "3443",
                "count": "1"
              },
              {
                "item": "3730",
                "count": "1"
              },
              {
                "item": "3084",
                "count": "1"
              },
              {
                "item": "3834",
                "count": "1"
              },
              {
                "item": "3514",
                "count": "1"
              },
              {
                "item": "3408",
                "count": "1"
              },
              {
                "item": "3645",
                "count": "1"
              },
              {
                "item": "3164",
                "count": "1"
              },
              {
                "item": "2248",
                "count": "1"
              }
            ],
            "smallest": "2248",
            "cardinality": "71"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681716,
          "name": "Intentional Self-Harm (Suicide)",
          "dataTypeName": "number",
          "description": "Intentional Self-Harm (Suicide) (U03,X60-X84,Y87.0)",
          "fieldName": "intentional_self_harm_suicide",
          "position": 19,
          "renderTypeName": "number",
          "tableColumnId": 129489241,
          "cachedContents": {
            "non_null": "72",
            "largest": "4378",
            "null": "0",
            "top": [
              {
                "item": "3726",
                "count": "2"
              },
              {
                "item": "3720",
                "count": "2"
              },
              {
                "item": "3966",
                "count": "2"
              },
              {
                "item": "3596",
                "count": "1"
              },
              {
                "item": "3578",
                "count": "1"
              },
              {
                "item": "3606",
                "count": "1"
              },
              {
                "item": "4024",
                "count": "1"
              },
              {
                "item": "4042",
                "count": "1"
              },
              {
                "item": "3920",
                "count": "1"
              },
              {
                "item": "4011",
                "count": "1"
              },
              {
                "item": "3480",
                "count": "1"
              },
              {
                "item": "4257",
                "count": "1"
              },
              {
                "item": "3381",
                "count": "1"
              },
              {
                "item": "3320",
                "count": "1"
              },
              {
                "item": "3785",
                "count": "1"
              },
              {
                "item": "3618",
                "count": "1"
              },
              {
                "item": "3688",
                "count": "1"
              },
              {
                "item": "4052",
                "count": "1"
              },
              {
                "item": "3357",
                "count": "1"
              },
              {
                "item": "3791",
                "count": "1"
              }
            ],
            "smallest": "3091",
            "cardinality": "69"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681736,
          "name": "Assault (Homicide)",
          "dataTypeName": "number",
          "description": "Assault (Homicide) (U01-U02,X85-Y09,Y87.1)",
          "fieldName": "assault_homicide",
          "position": 20,
          "renderTypeName": "number",
          "tableColumnId": 129489245,
          "width": 178,
          "cachedContents": {
            "non_null": "72",
            "largest": "1804",
            "null": "0",
            "top": [
              {
                "item": "1467",
                "count": "3"
              },
              {
                "item": "1610",
                "count": "2"
              },
              {
                "item": "1674",
                "count": "2"
              },
              {
                "item": "1804",
                "count": "2"
              },
              {
                "item": "1376",
                "count": "2"
              },
              {
                "item": "1647",
                "count": "2"
              },
              {
                "item": "1307",
                "count": "2"
              },
              {
                "item": "1512",
                "count": "1"
              },
              {
                "item": "1437",
                "count": "1"
              },
              {
                "item": "1720",
                "count": "1"
              },
              {
                "item": "1486",
                "count": "1"
              },
              {
                "item": "1670",
                "count": "1"
              },
              {
                "item": "1650",
                "count": "1"
              },
              {
                "item": "1657",
                "count": "1"
              },
              {
                "item": "1726",
                "count": "1"
              },
              {
                "item": "1483",
                "count": "1"
              },
              {
                "item": "1675",
                "count": "1"
              },
              {
                "item": "1678",
                "count": "1"
              },
              {
                "item": "1613",
                "count": "1"
              },
              {
                "item": "1382",
                "count": "1"
              }
            ],
            "smallest": "1050",
            "cardinality": "64"
          },
          "format": {
            "align": "right"
          }
        },
        {
          "id": 522681761,
          "name": "Drug Overdose",
          "dataTypeName": "number",
          "description": "Drug Overdose",
          "fieldName": "drug_overdose",
          "position": 21,
          "renderTypeName": "number",
          "tableColumnId": 129489254,
          "width": 155,
          "cachedContents": {
            "non_null": "72",
            "largest": "6299",
            "null": "0",
            "top": [
              {
                "item": "5829",
                "count": "2"
              },
              {
                "item": "5836",
                "count": "1"
              },
              {
                "item": "3902",
                "count": "1"
              },
              {
                "item": "5446",
                "count": "1"
              },
              {
                "item": "5464",
                "count": "1"
              },
              {
                "item": "5773",
                "count": "1"
              },
              {
                "item": "6233",
                "count": "1"
              },
              {
                "item": "4199",
                "count": "1"
              },
              {
                "item": "4497",
                "count": "1"
              },
              {
                "item": "4631",
                "count": "1"
              },
              {
                "item": "4246",
                "count": "1"
              },
              {
                "item": "3927",
                "count": "1"
              },
              {
                "item": "6133",
                "count": "1"
              },
              {
                "item": "5886",
                "count": "1"
              },
              {
                "item": "5177",
                "count": "1"
              },
              {
                "item": "5793",
                "count": "1"
              },
              {
                "item": "5887",
                "count": "1"
              },
              {
                "item": "5500",
                "count": "1"
              },
              {
                "item": "3748",
                "count": "1"
              },
              {
                "item": "5158",
                "count": "1"
              }
            ],
            "smallest": "3733",
            "cardinality": "71"
          },
          "format": {
            "align": "right"
          }
        }
      ],
      "grants": [
        {
          "inherited": false,
          "type": "viewer",
          "flags": [
            "public"
          ]
        }
      ],
      "license": {
        "name": "Public Domain U.S. Government",
        "termsLink": "https://www.usa.gov/government-works"
      },
      "metadata": {
        "custom_fields": {
          "Data Quality": {
            "Update Frequency": "Ad hoc",
            "Geographic Coverage": "United States"
          },
          "Common Core": {
            "Contact Email": "cdcinfo@cdc.gov",
            "Footnotes": "Causes of death included in this dataset are tabulated by underlying cause of death ICD-10 codes and jurisdiction of occurrence. Counts of death may differ from NCHS publications which are tabulated by state of residence.",
            "Contact Name": "National Center for Health Statistics",
            "Program Code": "009:020",
            "Publisher": "National Center for Health Statistics",
            "Bureau Code": "009:00"
          }
        },
        "availableDisplayTypes": [
          "table",
          "fatrow",
          "page"
        ]
      },
      "owner": {
        "id": "xfvr-ns68",
        "displayName": "NCHS",
        "screenName": "NCHS",
        "type": "interactive",
        "flags": [
          "acceptedEula",
          "mayBeStoriesCoOwner"
        ]
      },
      "query": {
        
      },
      "rights": [
        "read"
      ],
      "tableAuthor": {
        "id": "xfvr-ns68",
        "displayName": "NCHS",
        "screenName": "NCHS",
        "type": "interactive",
        "flags": [
          "acceptedEula",
          "mayBeStoriesCoOwner"
        ]
      },
      "tags": [
        "monthly",
        "deaths",
        "mortality",
        "united states",
        "all causes",
        "nchs",
        "nvss",
        "causes of death",
        "natural cause",
        "cancer",
        "diabetes",
        "alzheimer disease",
        "influenza",
        "pneumonia",
        "chronic lower respiratory disease",
        "respiratory disease",
        "kidney disease",
        "diseases of heart",
        "cerebrovascular disease",
        "motor vehicle accidents",
        "unintentional injuries",
        "suicide",
        "homicide",
        "drug overdose",
        "septicemia"
      ],
      "flags": [
        "default",
        "ownerMayBeContacted",
        "restorable",
        "restorePossibleForType"
      ]
    }
  },
  "data": [
    [
      "row-arpw-spb8_nhxg",
      "00000000-0000-0000-5505-F856DAF89E59",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2014",
      "1",
      "243298",
      "226621",
      "3944",
      "51101",
      "7344",
      "8305",
      "7929",
      "15078",
      "3466",
      "4600",
      "2815",
      "58229",
      "12074",
      "11461",
      "2572",
      "3320",
      "1213",
      "4026"
    ],
    [
      "row-gjy8~2usu~s29y",
      "00000000-0000-0000-0B6F-402639CA2D06",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2015",
      "1",
      "265355",
      "247269",
      "4194",
      "52346",
      "8053",
      "11638",
      "10005",
      "16769",
      "3797",
      "4979",
      "3005",
      "63190",
      "13576",
      "12311",
      "2754",
      "3618",
      "1437",
      "4354"
    ],
    [
      "row-mx9t.xgzd-wtbx",
      "00000000-0000-0000-32B0-B3D04F5C5FD6",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2016",
      "1",
      "245823",
      "227341",
      "3846",
      "51863",
      "7392",
      "10612",
      "5295",
      "14331",
      "3705",
      "4645",
      "2755",
      "58049",
      "12968",
      "12559",
      "2734",
      "3720",
      "1499",
      "4631"
    ],
    [
      "row-e8zf~z6bw_gi58",
      "00000000-0000-0000-94C1-82E189801D5C",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2017",
      "1",
      "262832",
      "241918",
      "4089",
      "52120",
      "7907",
      "12018",
      "6925",
      "16574",
      "4083",
      "4818",
      "2769",
      "61650",
      "13595",
      "14520",
      "3034",
      "3709",
      "1726",
      "6233"
    ],
    [
      "row-69fb-me4b-rwax",
      "00000000-0000-0000-A1D4-CBAC58B4BC54",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2018",
      "1",
      "286744",
      "265418",
      "4502",
      "52876",
      "8674",
      "13410",
      "12164",
      "18271",
      "4603",
      "5346",
      "3138",
      "67024",
      "14653",
      "14748",
      "3010",
      "3966",
      "1674",
      "5659"
    ],
    [
      "row-stme~j3pw.44pu",
      "00000000-0000-0000-6FA3-5B6549C46495",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2019",
      "1",
      "257649",
      "237219",
      "3580",
      "52087",
      "8218",
      "10961",
      "5720",
      "15330",
      "4116",
      "4740",
      "2738",
      "60675",
      "13447",
      "13988",
      "2948",
      "3833",
      "1574",
      "5519"
    ],
    [
      "row-pk2g-buqw.jnaz",
      "00000000-0000-0000-51A7-44529C1AE2CA",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2014",
      "2",
      "211980",
      "197001",
      "3214",
      "45558",
      "6443",
      "7315",
      "5561",
      "12747",
      "2873",
      "4064",
      "2532",
      "50435",
      "10780",
      "10286",
      "2248",
      "3091",
      "1050",
      "3895"
    ],
    [
      "row-95af~4er9~acm7",
      "00000000-0000-0000-3BA7-AE25A160EF1F",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2015",
      "2",
      "227047",
      "211028",
      "3559",
      "46226",
      "6809",
      "9477",
      "6402",
      "14196",
      "3245",
      "4344",
      "2578",
      "54374",
      "11679",
      "11040",
      "2350",
      "3215",
      "1124",
      "4087"
    ],
    [
      "row-xkq2_frzk-8e2a",
      "00000000-0000-0000-1E76-8DA7CE746994",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2016",
      "2",
      "230021",
      "212140",
      "3459",
      "48258",
      "6851",
      "9729",
      "5162",
      "13986",
      "3266",
      "4307",
      "2553",
      "54652",
      "11823",
      "12442",
      "2820",
      "3445",
      "1266",
      "5022"
    ],
    [
      "row-hg42~iac9~4vzj",
      "00000000-0000-0000-B5F0-108F9B7866F0",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2017",
      "2",
      "233819",
      "215160",
      "3511",
      "46531",
      "7013",
      "10309",
      "6657",
      "14934",
      "3581",
      "4317",
      "2595",
      "54944",
      "11975",
      "12994",
      "2748",
      "3381",
      "1428",
      "5619"
    ],
    [
      "row-rwud.qxqe.nk8h",
      "00000000-0000-0000-FF91-083580B45218",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2018",
      "2",
      "236998",
      "218466",
      "3660",
      "46447",
      "7028",
      "10623",
      "8554",
      "14579",
      "3879",
      "4398",
      "2560",
      "54673",
      "12176",
      "12686",
      "2734",
      "3596",
      "1376",
      "5244"
    ],
    [
      "row-gahu-uuvx~9uet",
      "00000000-0000-0000-0465-82A76AFD160A",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2019",
      "2",
      "232821",
      "214074",
      "3257",
      "46739",
      "7485",
      "10098",
      "5551",
      "13890",
      "3641",
      "4270",
      "2451",
      "54835",
      "12125",
      "12892",
      "2535",
      "3561",
      "1356",
      "5180"
    ],
    [
      "row-g7kq_3tvh_94td",
      "00000000-0000-0000-C6CE-7E8CA57A395C",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2014",
      "3",
      "228477",
      "212045",
      "3451",
      "50646",
      "6738",
      "7999",
      "5148",
      "13493",
      "3260",
      "4300",
      "2632",
      "54347",
      "11395",
      "11120",
      "2589",
      "3408",
      "1261",
      "4106"
    ],
    [
      "row-nfbr.x532~dj59",
      "00000000-0000-0000-9E1B-5C1F5B71045F",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2015",
      "3",
      "242712",
      "224708",
      "3723",
      "51192",
      "7106",
      "9790",
      "5601",
      "15185",
      "3668",
      "4597",
      "2674",
      "57615",
      "12546",
      "12028",
      "2764",
      "3935",
      "1365",
      "4583"
    ],
    [
      "row-s5m3~4x5t~hvs6",
      "00000000-0000-0000-AEA8-577A7D3142E4",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2016",
      "3",
      "244283",
      "224696",
      "3773",
      "51566",
      "7108",
      "10076",
      "6208",
      "15417",
      "3668",
      "4652",
      "2655",
      "57206",
      "12431",
      "13382",
      "3105",
      "3921",
      "1476",
      "5511"
    ],
    [
      "row-vign~pnwn-i5z7",
      "00000000-0000-0000-B028-185B467FA3F5",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2017",
      "3",
      "251732",
      "231028",
      "3796",
      "50785",
      "7588",
      "11179",
      "6490",
      "15832",
      "3885",
      "4628",
      "2859",
      "58476",
      "12969",
      "14392",
      "3164",
      "3870",
      "1467",
      "6164"
    ],
    [
      "row-pkwq~cgnk~r532",
      "00000000-0000-0000-33A6-ECD8B846F728",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2018",
      "3",
      "248805",
      "228464",
      "3673",
      "50689",
      "7415",
      "10815",
      "6133",
      "14995",
      "3990",
      "4534",
      "2665",
      "58301",
      "12927",
      "13926",
      "3015",
      "4011",
      "1449",
      "5793"
    ],
    [
      "row-42uz_3jgb-v2dd",
      "00000000-0000-0000-2110-0D4148046445",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2019",
      "3",
      "254929",
      "234074",
      "3559",
      "51450",
      "7886",
      "10809",
      "6292",
      "15149",
      "4126",
      "4649",
      "2718",
      "59728",
      "13433",
      "14220",
      "2956",
      "4161",
      "1467",
      "5887"
    ],
    [
      "row-qqb5-wk33-i3ns",
      "00000000-0000-0000-ECB7-3D45911D42F2",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2014",
      "4",
      "215600",
      "199454",
      "3125",
      "48304",
      "6343",
      "7117",
      "4512",
      "12573",
      "3179",
      "3902",
      "2549",
      "50954",
      "10773",
      "10608",
      "2720",
      "3606",
      "1277",
      "3733"
    ],
    [
      "row-gjqt~3wmj_y939",
      "00000000-0000-0000-0EBF-BE7AF38B3F12",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2015",
      "4",
      "224423",
      "207336",
      "3342",
      "48745",
      "6568",
      "8859",
      "4878",
      "13982",
      "3306",
      "4247",
      "2551",
      "52961",
      "11343",
      "11419",
      "2830",
      "3726",
      "1297",
      "4281"
    ],
    [
      "row-7sdn~jugn~echy",
      "00000000-0000-0000-C799-57E90BFE24AD",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2016",
      "4",
      "227191",
      "208249",
      "3480",
      "48574",
      "6522",
      "9479",
      "5068",
      "13634",
      "3277",
      "4124",
      "2634",
      "52973",
      "11671",
      "12832",
      "3152",
      "3812",
      "1525",
      "5259"
    ],
    [
      "row-yysg~icnz~zjvy",
      "00000000-0000-0000-38E9-C68D37CF03C6",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2017",
      "4",
      "231830",
      "211542",
      "3484",
      "49056",
      "6701",
      "9932",
      "4799",
      "13916",
      "3680",
      "4281",
      "2633",
      "53081",
      "12047",
      "13839",
      "3238",
      "3972",
      "1530",
      "5886"
    ],
    [
      "row-25nq_8muf.7zb8",
      "00000000-0000-0000-6354-4DAAB2D020E9",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2018",
      "4",
      "233164",
      "213483",
      "3278",
      "48786",
      "7032",
      "9902",
      "4633",
      "13857",
      "3688",
      "4219",
      "2552",
      "54235",
      "12312",
      "13275",
      "2979",
      "3920",
      "1572",
      "5555"
    ],
    [
      "row-mpu4~jnk3~h8bi",
      "00000000-0000-0000-4CE6-CAA1374636FC",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2019",
      "4",
      "235254",
      "215336",
      "3254",
      "48493",
      "7360",
      "9824",
      "4603",
      "13785",
      "3698",
      "4286",
      "2557",
      "54920",
      "12443",
      "13481",
      "3079",
      "4029",
      "1444",
      "5562"
    ],
    [
      "row-basi~wbmb.8wyr",
      "00000000-0000-0000-4EFD-7F7F85AEA95E",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2014",
      "5",
      "216862",
      "199843",
      "3105",
      "49497",
      "6272",
      "7266",
      "4099",
      "12281",
      "3101",
      "3980",
      "2584",
      "50810",
      "10963",
      "11360",
      "3038",
      "3589",
      "1398",
      "3925"
    ],
    [
      "row-ph6n~ptrg.mgv3",
      "00000000-0000-0000-84A3-07C9CCBF129A",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2015",
      "5",
      "223600",
      "205087",
      "3204",
      "50072",
      "6479",
      "8674",
      "4109",
      "13376",
      "3109",
      "4046",
      "2489",
      "52243",
      "11445",
      "12324",
      "3339",
      "3966",
      "1531",
      "4462"
    ],
    [
      "row-5ta5-s3yp.3iwn",
      "00000000-0000-0000-F83D-DE5F6EEC118A",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2016",
      "5",
      "224528",
      "205011",
      "3257",
      "49589",
      "6626",
      "9274",
      "4053",
      "12809",
      "3232",
      "4082",
      "2631",
      "51910",
      "11637",
      "13225",
      "3481",
      "3853",
      "1649",
      "5158"
    ],
    [
      "row-wwtx-4h6b_jsue",
      "00000000-0000-0000-A511-55F6149C7D80",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2017",
      "5",
      "229670",
      "208638",
      "3242",
      "49814",
      "6713",
      "9498",
      "3877",
      "13410",
      "3344",
      "4235",
      "2566",
      "52924",
      "11978",
      "14137",
      "3416",
      "4257",
      "1688",
      "6036"
    ],
    [
      "row-s99j~vavv~fzhv",
      "00000000-0000-0000-2571-8B983F4853B3",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2018",
      "5",
      "228772",
      "208108",
      "3092",
      "49582",
      "6805",
      "9333",
      "3588",
      "13218",
      "3606",
      "4081",
      "2508",
      "53298",
      "11812",
      "14025",
      "3443",
      "4190",
      "1559",
      "5773"
    ],
    [
      "row-2guc~a95w.qb3e",
      "00000000-0000-0000-3A86-2D34C05F0262",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2019",
      "5",
      "236893",
      "215726",
      "3089",
      "50627",
      "7202",
      "9722",
      "3742",
      "13428",
      "3629",
      "4237",
      "2575",
      "54985",
      "12232",
      "14475",
      "3417",
      "4052",
      "1662",
      "5829"
    ],
    [
      "row-mku7_bkce-9bqe",
      "00000000-0000-0000-FD45-A3BF1EDBCD8C",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2014",
      "6",
      "204687",
      "187644",
      "2947",
      "48103",
      "5802",
      "6755",
      "3658",
      "11207",
      "2782",
      "3631",
      "2518",
      "47144",
      "9973",
      "11446",
      "3084",
      "3552",
      "1376",
      "3783"
    ],
    [
      "row-fbpd_7mpd_rc2y",
      "00000000-0000-0000-8F69-59DB3942E6BF",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2015",
      "6",
      "211175",
      "193014",
      "3019",
      "48055",
      "6076",
      "8109",
      "3679",
      "11946",
      "2983",
      "3881",
      "2489",
      "48672",
      "10897",
      "12176",
      "3222",
      "3785",
      "1546",
      "4176"
    ],
    [
      "row-qvjp~xp2g~ikiy",
      "00000000-0000-0000-0CC9-46CC991350B0",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2016",
      "6",
      "213051",
      "193541",
      "2993",
      "47587",
      "6051",
      "8687",
      "3391",
      "11703",
      "3058",
      "3927",
      "2545",
      "49210",
      "10980",
      "13289",
      "3542",
      "3726",
      "1657",
      "5128"
    ],
    [
      "row-txtm-gz3d.kpex",
      "00000000-0000-0000-8C77-717F527A2060",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2017",
      "6",
      "218929",
      "198032",
      "3060",
      "48436",
      "6349",
      "8943",
      "3482",
      "12161",
      "3146",
      "3777",
      "2559",
      "50117",
      "11126",
      "14267",
      "3492",
      "4081",
      "1670",
      "5884"
    ],
    [
      "row-ascn~pfb3-3fca",
      "00000000-0000-0000-A62E-C6A7D0F791CA",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2018",
      "6",
      "220103",
      "198902",
      "2933",
      "48344",
      "6481",
      "8906",
      "3252",
      "12206",
      "3327",
      "3904",
      "2521",
      "50456",
      "11445",
      "14200",
      "3514",
      "4378",
      "1674",
      "5817"
    ],
    [
      "row-ptrc~ysr5~jyqg",
      "00000000-0000-0000-7866-874DAB9FA2F4",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2019",
      "6",
      "225422",
      "204218",
      "2886",
      "48621",
      "6867",
      "9351",
      "3300",
      "12335",
      "3427",
      "4054",
      "2513",
      "51680",
      "11556",
      "14518",
      "3449",
      "4050",
      "1673",
      "5807"
    ],
    [
      "row-556v_k8vd~2xm7",
      "00000000-0000-0000-7980-0AEAA5DC48AB",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2014",
      "7",
      "209373",
      "192035",
      "3112",
      "49259",
      "5983",
      "6990",
      "3535",
      "11161",
      "2690",
      "3690",
      "2449",
      "47991",
      "10449",
      "11743",
      "3227",
      "3534",
      "1382",
      "3902"
    ],
    [
      "row-6b7x.u9uw.c55k",
      "00000000-0000-0000-B31C-05F65ECEED4B",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2015",
      "7",
      "216951",
      "197673",
      "3151",
      "50112",
      "6251",
      "8361",
      "3476",
      "11473",
      "2906",
      "3935",
      "2529",
      "50265",
      "11218",
      "12941",
      "3530",
      "3944",
      "1676",
      "4497"
    ],
    [
      "row-nhp7_ef46_69yq",
      "00000000-0000-0000-F900-004FE39E33A0",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2016",
      "7",
      "219691",
      "198767",
      "3222",
      "49792",
      "6221",
      "9038",
      "3412",
      "11681",
      "3051",
      "3845",
      "2726",
      "49709",
      "11036",
      "14245",
      "3582",
      "4033",
      "1804",
      "5592"
    ],
    [
      "row-dtu5-h6ca.ncxt",
      "00000000-0000-0000-117B-1AA6A14DCA3B",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2017",
      "7",
      "221869",
      "200090",
      "3014",
      "50439",
      "6472",
      "9027",
      "3363",
      "11535",
      "3136",
      "3735",
      "2496",
      "50217",
      "11362",
      "14863",
      "3730",
      "4179",
      "1803",
      "5938"
    ],
    [
      "row-3uax-r4bp_63jv",
      "00000000-0000-0000-B622-FAD921FD97B8",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2018",
      "7",
      "225111",
      "203310",
      "3178",
      "49870",
      "6612",
      "9082",
      "3153",
      "11720",
      "3438",
      "3947",
      "2626",
      "51396",
      "11656",
      "14813",
      "3552",
      "4356",
      "1755",
      "5940"
    ],
    [
      "row-4jyc-i3kj_khqm",
      "00000000-0000-0000-AA55-A31DF739CDBF",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2019",
      "7",
      "229211",
      "207062",
      "3015",
      "50055",
      "6880",
      "9418",
      "3068",
      "11941",
      "3369",
      "4097",
      "2622",
      "52335",
      "11870",
      "15292",
      "3527",
      "4193",
      "1729",
      "6162"
    ],
    [
      "row-3j7j.2p2s_ckfd",
      "00000000-0000-0000-FEA4-5556030A39F2",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2014",
      "8",
      "208013",
      "190204",
      "2931",
      "49519",
      "5930",
      "6986",
      "3312",
      "10722",
      "2778",
      "3778",
      "2465",
      "47109",
      "10369",
      "11688",
      "3277",
      "4027",
      "1467",
      "3987"
    ],
    [
      "row-wsgj_ma4w~xgam",
      "00000000-0000-0000-71E9-F01184F13338",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2015",
      "8",
      "214404",
      "195312",
      "3236",
      "50196",
      "6173",
      "8346",
      "3439",
      "10768",
      "2877",
      "3797",
      "2464",
      "48945",
      "10964",
      "12803",
      "3642",
      "3912",
      "1650",
      "4492"
    ],
    [
      "row-5bhh-f6gu_3gz3",
      "00000000-0000-0000-9320-CA55197F45C6",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2016",
      "8",
      "219911",
      "199453",
      "3134",
      "50593",
      "6282",
      "8991",
      "3298",
      "11464",
      "2907",
      "3929",
      "2811",
      "49701",
      "11290",
      "13827",
      "3600",
      "4042",
      "1804",
      "5397"
    ],
    [
      "row-aeyu-jkci_5nc5",
      "00000000-0000-0000-2300-A6F467EA29D8",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2017",
      "8",
      "221887",
      "200838",
      "3071",
      "50351",
      "6390",
      "9298",
      "3189",
      "11260",
      "3166",
      "3874",
      "2551",
      "49894",
      "11687",
      "14242",
      "3409",
      "4275",
      "1651",
      "5863"
    ],
    [
      "row-ae29.27dn~4942",
      "00000000-0000-0000-EBBA-8CE341B775CC",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2018",
      "8",
      "224254",
      "203330",
      "3134",
      "50582",
      "6598",
      "9277",
      "3011",
      "11339",
      "3210",
      "4083",
      "2668",
      "50652",
      "11640",
      "14116",
      "3490",
      "4300",
      "1607",
      "5836"
    ],
    [
      "row-8rmb.ex2i.yq76",
      "00000000-0000-0000-0DC8-10996029B088",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2019",
      "8",
      "227280",
      "205220",
      "2893",
      "50508",
      "6658",
      "9420",
      "3035",
      "11399",
      "3334",
      "3929",
      "2668",
      "51346",
      "11816",
      "15171",
      "3645",
      "4181",
      "1639",
      "6194"
    ],
    [
      "row-6jww_sr34~558z",
      "00000000-0000-0000-3C95-5D5CB1884BFC",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2014",
      "9",
      "205274",
      "188322",
      "2918",
      "48331",
      "5810",
      "7238",
      "3352",
      "10426",
      "2696",
      "3823",
      "2586",
      "46909",
      "10513",
      "11022",
      "3069",
      "4034",
      "1307",
      "3748"
    ],
    [
      "row-rydg-kib9_uzse",
      "00000000-0000-0000-2898-312ECB402A94",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2015",
      "9",
      "209905",
      "191754",
      "3123",
      "48835",
      "6012",
      "8419",
      "3378",
      "10729",
      "2844",
      "3781",
      "2518",
      "47849",
      "10826",
      "12293",
      "3372",
      "3578",
      "1610",
      "4481"
    ],
    [
      "row-rw4y-c3dj~karb",
      "00000000-0000-0000-D16B-27C9BBD87B47",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2016",
      "9",
      "214310",
      "194685",
      "3138",
      "48688",
      "6175",
      "9077",
      "3307",
      "11107",
      "2936",
      "3723",
      "2674",
      "48258",
      "11057",
      "13495",
      "3612",
      "3720",
      "1675",
      "5195"
    ],
    [
      "row-dkpu_bke5_848h",
      "00000000-0000-0000-593E-636C5F23C319",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2017",
      "9",
      "220262",
      "199625",
      "3173",
      "48987",
      "6558",
      "9363",
      "3313",
      "11313",
      "3167",
      "3922",
      "2734",
      "49742",
      "11426",
      "14169",
      "3572",
      "4024",
      "1595",
      "5786"
    ],
    [
      "row-i3ne-k4xn~w8gq",
      "00000000-0000-0000-8539-8A8B9746A109",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2018",
      "9",
      "218696",
      "198209",
      "3092",
      "49018",
      "6458",
      "9250",
      "3082",
      "11061",
      "3238",
      "3885",
      "2535",
      "49112",
      "11296",
      "13900",
      "3579",
      "4136",
      "1613",
      "5500"
    ],
    [
      "row-9bsh.4cdz_tkwy",
      "00000000-0000-0000-07DF-1C9531DBF28F",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2019",
      "9",
      "222715",
      "201663",
      "2952",
      "48945",
      "6585",
      "9330",
      "2882",
      "11247",
      "3346",
      "3882",
      "2591",
      "50100",
      "11752",
      "14341",
      "3543",
      "4109",
      "1647",
      "5882"
    ],
    [
      "row-zcdw.7jw2-frwk",
      "00000000-0000-0000-01F0-C1313A7D8D7E",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2014",
      "10",
      "218147",
      "200741",
      "3203",
      "50900",
      "6183",
      "8319",
      "3804",
      "11412",
      "2903",
      "3881",
      "2703",
      "50401",
      "11321",
      "11579",
      "3304",
      "3791",
      "1423",
      "4021"
    ],
    [
      "row-jidh~7eiz~jpzk",
      "00000000-0000-0000-484E-57FAB885080F",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2015",
      "10",
      "223535",
      "204815",
      "3390",
      "50889",
      "6566",
      "9368",
      "3883",
      "11675",
      "3057",
      "3927",
      "2733",
      "51290",
      "11792",
      "12845",
      "3550",
      "3688",
      "1486",
      "4546"
    ],
    [
      "row-jxcb.n4g4~ncwu",
      "00000000-0000-0000-A933-7EF9D9E5D8A8",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2016",
      "10",
      "228919",
      "208592",
      "3287",
      "50815",
      "6669",
      "9875",
      "3622",
      "12009",
      "3277",
      "4212",
      "2967",
      "52414",
      "11766",
      "14051",
      "3834",
      "3838",
      "1678",
      "5446"
    ],
    [
      "row-ds8a.geh5~yrb5",
      "00000000-0000-0000-E5E0-8B88432FF614",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2017",
      "10",
      "231125",
      "210453",
      "3275",
      "51132",
      "6829",
      "10080",
      "3614",
      "12095",
      "3311",
      "4053",
      "2817",
      "52495",
      "12177",
      "14012",
      "3629",
      "4072",
      "1725",
      "5538"
    ],
    [
      "row-pzdr~i5r3.qq86",
      "00000000-0000-0000-2319-C399B7926E79",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2018",
      "10",
      "233903",
      "213240",
      "3359",
      "51631",
      "7028",
      "10080",
      "3447",
      "12073",
      "3510",
      "4047",
      "2775",
      "53232",
      "12355",
      "14114",
      "3657",
      "4127",
      "1512",
      "5522"
    ],
    [
      "row-xn2w-2ftj-eenf",
      "00000000-0000-0000-0C4D-78FB3C1256BA",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2019",
      "10",
      "237661",
      "216275",
      "3186",
      "51501",
      "7082",
      "10423",
      "3294",
      "11970",
      "3640",
      "4316",
      "2817",
      "53795",
      "12693",
      "14822",
      "3506",
      "4043",
      "1610",
      "6133"
    ],
    [
      "row-trt5_5nfb.i8v6",
      "00000000-0000-0000-561F-9A253731DF48",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2014",
      "11",
      "221317",
      "204268",
      "3192",
      "49377",
      "6477",
      "9069",
      "3875",
      "11759",
      "2977",
      "3954",
      "3000",
      "52027",
      "11863",
      "11644",
      "3175",
      "3480",
      "1307",
      "3927"
    ],
    [
      "row-fgfn~emy5~qxai",
      "00000000-0000-0000-87BB-D8A50FD4D7CA",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2015",
      "11",
      "219788",
      "202283",
      "3315",
      "48800",
      "6582",
      "9408",
      "3763",
      "11749",
      "3141",
      "4060",
      "2801",
      "51218",
      "11777",
      "12002",
      "3159",
      "3357",
      "1503",
      "4199"
    ],
    [
      "row-fc5n.6rri-pbhb",
      "00000000-0000-0000-C9FD-7311E1E98205",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2016",
      "11",
      "227313",
      "207691",
      "3310",
      "49285",
      "6715",
      "9988",
      "3740",
      "12279",
      "3227",
      "4128",
      "2957",
      "52606",
      "12163",
      "13664",
      "3535",
      "3458",
      "1720",
      "5464"
    ],
    [
      "row-c7jc.dekc-wfi5",
      "00000000-0000-0000-968F-E7347E70C8F1",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2017",
      "11",
      "230891",
      "210862",
      "3348",
      "49456",
      "7061",
      "10006",
      "3905",
      "12171",
      "3378",
      "4263",
      "2854",
      "53015",
      "12301",
      "13773",
      "3408",
      "3724",
      "1647",
      "5491"
    ],
    [
      "row-c3vk~cbnr.eqwg",
      "00000000-0000-0000-1849-F88C7F90CE8D",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2018",
      "11",
      "233375",
      "213904",
      "3197",
      "49827",
      "7152",
      "10391",
      "3614",
      "12258",
      "3426",
      "4295",
      "2885",
      "54389",
      "12427",
      "13473",
      "3250",
      "3651",
      "1483",
      "5177"
    ],
    [
      "row-n5ng~9piw_px85",
      "00000000-0000-0000-A764-7BAC7CD39602",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2019",
      "11",
      "239028",
      "218156",
      "3176",
      "49697",
      "7332",
      "10632",
      "3520",
      "12196",
      "3766",
      "4427",
      "2885",
      "54979",
      "12955",
      "14701",
      "3274",
      "3597",
      "1625",
      "6176"
    ],
    [
      "row-26dw~gj86.up7y",
      "00000000-0000-0000-687E-046D56D66231",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2014",
      "12",
      "243390",
      "225948",
      "3798",
      "51105",
      "7163",
      "10182",
      "6442",
      "14242",
      "3482",
      "4543",
      "3409",
      "57992",
      "12630",
      "11971",
      "3095",
      "3394",
      "1411",
      "4002"
    ],
    [
      "row-7sv7-ejzf_h4ky",
      "00000000-0000-0000-808E-A6A93BD0D7E1",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2015",
      "12",
      "233735",
      "215657",
      "3517",
      "50462",
      "6860",
      "10112",
      "4449",
      "13193",
      "3353",
      "4365",
      "3211",
      "55220",
      "12260",
      "12389",
      "3245",
      "3469",
      "1568",
      "4246"
    ],
    [
      "row-ae2i~j3ud-ib4m",
      "00000000-0000-0000-827B-4CE897770120",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2016",
      "12",
      "249207",
      "228888",
      "3714",
      "51428",
      "7446",
      "11277",
      "4981",
      "14176",
      "3620",
      "4472",
      "3465",
      "58572",
      "13320",
      "14363",
      "3330",
      "3397",
      "1609",
      "5829"
    ],
    [
      "row-fk32~hck2~xigt",
      "00000000-0000-0000-EE98-A157CB34B385",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2017",
      "12",
      "258657",
      "237819",
      "3859",
      "52001",
      "7983",
      "11751",
      "6058",
      "15000",
      "3816",
      "4730",
      "3317",
      "60902",
      "13740",
      "14728",
      "3391",
      "3629",
      "1580",
      "5799"
    ],
    [
      "row-rt39_hdky~tacu",
      "00000000-0000-0000-66D2-574610056685",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2018",
      "12",
      "249280",
      "229184",
      "3620",
      "51622",
      "7663",
      "10950",
      "4489",
      "13909",
      "3899",
      "4647",
      "3104",
      "58613",
      "13111",
      "13851",
      "3181",
      "3713",
      "1556",
      "5551"
    ],
    [
      "row-72mp~sqzs.wjj2",
      "00000000-0000-0000-5266-5E01D7114BE1",
      0,
      1612385712,
      null,
      1612385712,
      null,
      "{ }",
      "United States",
      "2019",
      "12",
      "255975",
      "234438",
      "3584",
      "50878",
      "8092",
      "11511",
      "4776",
      "14309",
      "4020",
      "4678",
      "3273",
      "59663",
      "13683",
      "15139",
      "3228",
      "3702",
      "1715",
      "6299"
    ]
  ]
}; 

//console.log("dbVisor", dbVisor);

//console.log("meta: ", dbVisor.meta);

//console.log("columns: ", dbVisor.meta.view.columns);

//console.log("columns: ", dbVisor.meta.view.columns[9]);

//console.log("columns: ", dbVisor.meta.view.columns.slice(11));

//console.log("years: ", dbVisor.meta.view.columns[9].cachedContents.top);

const arrYears = dbVisor.meta.view.columns[9].cachedContents.top.map(x => x.item);

console.log("arrYears: ", arrYears);
//const arrYearsSorted = arrYears.sort((a,b) => a>b ? 1 : b>a? -1: 0 );
//console.log("arrYearsSorted: ", arrYearsSorted);

const arrMonths = dbVisor.meta.view.columns[10].cachedContents.top.map(x => x.item);

//console.log("arrMonths: ", arrMonths);

const illnessNameArr = dbVisor.meta.view.columns.slice(11).map(x => x.name);

//console.log("illnessNameArr: ", illnessNameArr);

const illnessDataArr = dbVisor.meta.view.columns.slice(11).map(element => console.log(element.cachedContents.top));

//console.log("illnessDataArr: ", illnessDataArr);