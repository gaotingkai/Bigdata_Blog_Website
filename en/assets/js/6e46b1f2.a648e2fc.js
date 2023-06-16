"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[9748],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),b=s(t),u=r,d=b["".concat(c,".").concat(u)]||b[u]||p[u]||i;return t?a.createElement(d,o(o({ref:n},m),{},{components:t})):a.createElement(d,o({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},2164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={authors:[{name:"skylines",url:"https://github.com/rookiegao"}],title:"Mysql \u6574\u5e93\u540c\u6b65",tags:["\u6570\u636e\u96c6\u6210"]},o="\u6280\u672f\u601d\u60f3",l={permalink:"/Bigdata_Blog_Website/en/blog/mysql cdc \u6574\u5e93\u540c\u6b65",source:"@site/blog/mysql cdc \u6574\u5e93\u540c\u6b65.md",title:"Mysql \u6574\u5e93\u540c\u6b65",description:"\u5229\u7528 mysql catalog\uff0cmysql cdc\uff0cflink jdbc \u7b49\u6280\u672f\u5b9e\u73b0 mysql \u6574\u5e93\u8fc1\u79fb\u81f3\u4e0b\u6e38\u6570\u636e\u5e93\uff0c\u8fd9\u91cc\u662f\u793a\u8303 mysql to mysql \uff0c\u5176\u4ed6 sink \u7ec4\u4ef6\u53ef\u81ea\u884c\u6269\u5c55\u5b9e\u73b0\u3002",date:"2023-06-16T18:52:27.000Z",formattedDate:"June 16, 2023",tags:[{label:"\u6570\u636e\u96c6\u6210",permalink:"/Bigdata_Blog_Website/en/blog/tags/\u6570\u636e\u96c6\u6210"}],readingTime:11.595,hasTruncateMarker:!0,authors:[{name:"skylines",url:"https://github.com/rookiegao"}],frontMatter:{authors:[{name:"skylines",url:"https://github.com/rookiegao"}],title:"Mysql \u6574\u5e93\u540c\u6b65",tags:["\u6570\u636e\u96c6\u6210"]},prevItem:{title:"jupyter notebook \u5728 linux \u4e0b\u5b89\u88c5\uff0c\u5e76\u5b9e\u73b0\u8fdc\u7a0b\u767b\u9646",permalink:"/Bigdata_Blog_Website/en/blog/jupyter notebook \u5728 linux \u4e0b\u5b89\u88c5\uff0c\u5e76\u5b9e\u73b0\u8fdc\u7a0b\u767b\u9646"},nextItem:{title:"Realtime DataWarehouse Development",permalink:"/Bigdata_Blog_Website/en/blog/\u5b9e\u65f6\u6570\u4ed3\u5f00\u53d1"}},c={authorsImageUrls:[void 0]},s=[],m={toc:s};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5229\u7528 mysql catalog\uff0cmysql cdc\uff0cflink jdbc \u7b49\u6280\u672f\u5b9e\u73b0 mysql \u6574\u5e93\u8fc1\u79fb\u81f3\u4e0b\u6e38\u6570\u636e\u5e93\uff0c\u8fd9\u91cc\u662f\u793a\u8303 mysql to mysql \uff0c\u5176\u4ed6 sink \u7ec4\u4ef6\u53ef\u81ea\u884c\u6269\u5c55\u5b9e\u73b0\u3002")),(0,r.kt)("p",null,"\u901a\u8fc7 flink ParameterTool\uff0c\u53ef\u4ee5\u9009\u62e9\u662f\u6574\u5e93\u540c\u6b65\u8fd8\u662f\u591a\u8868\u4ea6\u6216\u5355\u8868\u540c\u6b65\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40\u5e76\u53d1\uff0c\u6e90\u8868 mysql \u53c2\u6570\uff0c\u76ee\u6807\u8868 mysql \u53c2\u6570"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7 sql Connection \u5b9e\u73b0\u81ea\u52a8\u5efa\u8868\u903b\u8f91 (mysql \u6570\u636e\u7c7b\u578b\u4f17\u591a\uff0c\u8fd9\u91cc\u5e76\u6ca1\u6709\u6d4b\u8bd5\u6240\u6709\u7684\u7c7b\u578b\u53c2\u6570\uff0c\u5982\u62c5\u5fc3\u5efa\u8868\u4e0d\u6210\u529f\uff0c\u53ef\u624b\u52a8\u5efa\u8868\uff0c\u4e0d\u5f71\u54cd\u7a0b\u5e8f\u8fd0\u884c)")),(0,r.kt)("p",null,"\u4e0b\u6e38\u4f7f\u7528 flink jdbc \u6765\u5b9e\u73b0\uff0c\u8bed\u6cd5\u4e3a upsert \u5373\u5e42\u7b49\u5199\u5165(\u91cd\u590d\u6570\u636e\u53ea\u4f1a\u5199\u5165\u4e00\u6b21)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528 mysql catalog \u6765\u5b9e\u73b0\u6e90\u8868\u5143\u6570\u636e\u7684\u83b7\u53d6")),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49 CustomDebeziumDeserializer \u5b9e\u73b0 DebeziumDeserializationSchema \u63a5\u53e3\u5bf9\u6570\u636e\u8fdb\u884c\u8f6c\u6362"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8be5\u4efb\u52a1\u672c\u8d28\u4e0a\u662f \u5355 source \u591a sink \u4efb\u52a1\uff0c\u4e0d\u540c\u7684\u8868\u6570\u636e\u4e0d\u4e00\u6837\u53ef\u80fd\u4f1a\u6709\u4e00\u5b9a\u7684\u53cd\u538b")),(0,r.kt)("p",null,"\u7a0b\u5e8f\u6d4b\u8bd5 \u751f\u6210\u4e94\u767e\u4e07\u6761\u6570\u636e \u4e94\u5f20\u8868 \u4e00\u5206\u949f\u5de6\u53f3\u5b8c\u6210\uff0c\u589e\u91cf\u6570\u636e\u4e00\u4e07\u6761\uff0c\u53ef\u4ee5\u540c\u6b65\u5b8c\u6210"),(0,r.kt)("p",null,"\u73af\u5883 flink 1.16  cdc 2.3.0"),(0,r.kt)("p",null,"refer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.16/"},"https://nightlies.apache.org/flink/flink-docs-release-1.16/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_36062467/article/details/128117647"},"https://blog.csdn.net/qq_36062467/article/details/128117647")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ververica.github.io/flink-cdc-connectors/master/content/connectors/mysql-cdc%28ZH%29.html"},"https://ververica.github.io/flink-cdc-connectors/master/content/connectors/mysql-cdc%28ZH%29.html"))),(0,r.kt)("h1",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)("p",null,"github \u5730\u5740 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SophiaData/Bigdata_Code_Tutorial/"},"https://github.com/SophiaData/Bigdata_Code_Tutorial/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'/** (@SophiaData) (@date 2022/12/1 16:02). */\npublic class CustomDebeziumDeserializer\n        implements DebeziumDeserializationSchema<Tuple2<String, Row>> {\n    private static final Logger LOG = LoggerFactory.getLogger(CustomDebeziumDeserializer.class);\n\n    private final Map<String, DeserializationRuntimeConverter> physicalConverterMap =\n            Maps.newConcurrentMap();\n\n    CustomDebeziumDeserializer(Map<String, RowType> tableRowTypeMap) {\n        for (String tableName : tableRowTypeMap.keySet()) {\n            RowType rowType = tableRowTypeMap.get(tableName);\n            DeserializationRuntimeConverter physicalConverter = createNotNullConverter(rowType);\n            this.physicalConverterMap.put(tableName, physicalConverter);\n        }\n    }\n\n    @Override\n    public void deserialize(SourceRecord record, Collector<Tuple2<String, Row>> out)\n            throws Exception {\n        Envelope.Operation op = Envelope.operationFor(record);\n        Struct value = (Struct) record.value();\n        Schema valueSchema = record.valueSchema();\n        Struct source = value.getStruct("source");\n        String tableName = source.get("table").toString();\n        DeserializationRuntimeConverter physicalConverter = physicalConverterMap.get(tableName);\n        if (op == Envelope.Operation.CREATE || op == Envelope.Operation.READ) {\n            Row insert = extractAfterRow(value, valueSchema, physicalConverter);\n            insert.setKind(RowKind.INSERT);\n            out.collect(Tuple2.of(tableName, insert));\n        } else if (op == Envelope.Operation.DELETE) {\n            Row delete = extractBeforeRow(value, valueSchema, physicalConverter);\n            delete.setKind(RowKind.DELETE);\n            out.collect(Tuple2.of(tableName, delete));\n        } else if (op == Envelope.Operation.UPDATE) {\n            Row before = extractBeforeRow(value, valueSchema, physicalConverter);\n            before.setKind(RowKind.UPDATE_BEFORE);\n            out.collect(Tuple2.of(tableName, before));\n            Row after = extractAfterRow(value, valueSchema, physicalConverter);\n            after.setKind(RowKind.UPDATE_AFTER);\n            out.collect(Tuple2.of(tableName, after));\n        } else {\n            LOG.warn(" Unexpected statement: {}", value);\n        }\n    }\n\n    private Row extractAfterRow(\n            Struct value, Schema valueSchema, DeserializationRuntimeConverter physicalConverter)\n            throws Exception {\n        Schema afterSchema = valueSchema.field(Envelope.FieldName.AFTER).schema();\n        Struct after = value.getStruct(Envelope.FieldName.AFTER);\n        return (Row) physicalConverter.convert(after, afterSchema);\n    }\n\n    private Row extractBeforeRow(\n            Struct value, Schema valueSchema, DeserializationRuntimeConverter physicalConverter)\n            throws Exception {\n        Schema beforeSchema = valueSchema.field(Envelope.FieldName.BEFORE).schema();\n        Struct before = value.getStruct(Envelope.FieldName.BEFORE);\n        return (Row) physicalConverter.convert(before, beforeSchema);\n    }\n\n    @Override\n    public TypeInformation<Tuple2<String, Row>> getProducedType() {\n        return TypeInformation.of(new TypeHint<Tuple2<String, Row>>() {});\n    }\n\n    public static DeserializationRuntimeConverter createNotNullConverter(LogicalType type) {\n\n        switch (type.getTypeRoot()) {\n            case NULL:\n                return new DeserializationRuntimeConverter() {\n\n                    private static final long serialVersionUID = 1L;\n\n                    @Override\n                    public Object convert(Object dbzObj, Schema schema) {\n                        return null;\n                    }\n                };\n            case BOOLEAN:\n                return convertToBoolean();\n            case TINYINT:\n                return new DeserializationRuntimeConverter() {\n\n                    private static final long serialVersionUID = 1L;\n\n                    @Override\n                    public Object convert(Object dbzObj, Schema schema) {\n                        return Byte.parseByte(dbzObj.toString());\n                    }\n                };\n            case SMALLINT:\n                return new DeserializationRuntimeConverter() {\n\n                    private static final long serialVersionUID = 1L;\n\n                    @Override\n                    public Object convert(Object dbzObj, Schema schema) {\n                        return Short.parseShort(dbzObj.toString());\n                    }\n                };\n            case INTEGER:\n            case INTERVAL_YEAR_MONTH:\n                return convertToInt();\n            case BIGINT:\n            case INTERVAL_DAY_TIME:\n                return convertToLong();\n            case DATE:\n                return convertToDate();\n            case TIME_WITHOUT_TIME_ZONE:\n                return convertToTime();\n            case TIMESTAMP_WITHOUT_TIME_ZONE:\n                return convertToTimestamp(ZoneId.of("UTC"));\n            case TIMESTAMP_WITH_LOCAL_TIME_ZONE:\n                return convertToLocalTimeZoneTimestamp(ZoneId.of("UTC"));\n            case FLOAT:\n                return convertToFloat();\n            case DOUBLE:\n                return convertToDouble();\n            case CHAR:\n            case VARCHAR:\n                return convertToString();\n            case BINARY:\n            case VARBINARY:\n                return convertToBinary();\n            case DECIMAL:\n                return createDecimalConverter((DecimalType) type);\n            case ROW:\n                return createRowConverter((RowType) type);\n            case ARRAY:\n            case MAP:\n            case MULTISET:\n            case RAW:\n            default:\n                throw new UnsupportedOperationException("Unsupported type: " + type);\n        }\n    }\n\n    private static DeserializationRuntimeConverter convertToBoolean() {\n        return new DeserializationRuntimeConverter() {\n\n            private static final long serialVersionUID = 1L;\n\n            @Override\n            public Object convert(Object dbzObj, Schema schema) {\n                if (dbzObj instanceof Boolean) {\n                    return dbzObj;\n                } else if (dbzObj instanceof Byte) {\n                    return (byte) dbzObj == 1;\n                } else if (dbzObj instanceof Short) {\n                    return (short) dbzObj == 1;\n                } else {\n                    return Boolean.parseBoolean(dbzObj.toString());\n                }\n            }\n        };\n    }\n\n    private static DeserializationRuntimeConverter convertToInt() {\n        return new DeserializationRuntimeConverter() {\n\n            private static final long serialVersionUID = 1L;\n\n            @Override\n            public Object convert(Object dbzObj, Schema schema) {\n                if (dbzObj instanceof Integer) {\n                    return dbzObj;\n                } else if (dbzObj instanceof Long) {\n                    return ((Long) dbzObj).intValue();\n                } else {\n                    return Integer.parseInt(dbzObj.toString());\n                }\n            }\n        };\n    }\n\n    private static DeserializationRuntimeConverter convertToLong() {\n        return new DeserializationRuntimeConverter() {\n\n            private static final long serialVersionUID = 1L;\n\n            @Override\n            public Object convert(Object dbzObj, Schema schema) {\n                if (dbzObj instanceof Integer) {\n                    return ((Integer) dbzObj).longValue();\n                } else if (dbzObj instanceof Long) {\n                    return dbzObj;\n                } else {\n                    return Long.parseLong(dbzObj.toString());\n                }\n            }\n        };\n    }\n\n    private static DeserializationRuntimeConverter createDecimalConverter(DecimalType decimalType) {\n        final int precision = decimalType.getPrecision();\n        final int scale = decimalType.getScale();\n        return new DeserializationRuntimeConverter() {\n\n            private static final long serialVersionUID = 1L;\n\n            @Override\n            public Object convert(Object dbzObj, Schema schema) {\n                BigDecimal bigDecimal;\n                if (dbzObj instanceof byte[]) {\n                    // decimal.handling.mode=precise\n                    bigDecimal = Decimal.toLogical(schema, (byte[]) dbzObj);\n                } else if (dbzObj instanceof String) {\n                    // decimal.handling.mode=string\n                    bigDecimal = new BigDecimal((String) dbzObj);\n                } else if (dbzObj instanceof Double) {\n                    // decimal.handling.mode=double\n                    bigDecimal = BigDecimal.valueOf((Double) dbzObj);\n                } else {\n                    if (VariableScaleDecimal.LOGICAL_NAME.equals(schema.name())) {\n                        SpecialValueDecimal decimal =\n                                VariableScaleDecimal.toLogical((Struct) dbzObj);\n                        bigDecimal = decimal.getDecimalValue().orElse(BigDecimal.ZERO);\n                    } else {\n                        // fallback to string\n                        bigDecimal = new BigDecimal(dbzObj.toString());\n                    }\n                }\n                return DecimalData.fromBigDecimal(bigDecimal, precision, scale);\n            }\n        };\n    }\n\n    private static DeserializationRuntimeConverter convertToDouble() {\n        return new DeserializationRuntimeConverter() {\n\n            private static final long serialVersionUID = 1L;\n\n            @Override\n            public Object convert(Object dbzObj, Schema schema) {\n                if (dbzObj instanceof Float) {\n                    return ((Float) dbzObj).doubleValue();\n                } else if (dbzObj instanceof Double) {\n                    return dbzObj;\n                } else {\n                    return Double.parseDouble(dbzObj.toString());\n                }\n            }\n        };\n    }\n\n    private static DeserializationRuntimeConverter convertToFloat() {\n        return new DeserializationRuntimeConverter() {\n\n            private static final long serialVersionUID = 1L;\n\n            @Override\n            public Object convert(Object dbzObj, Schema schema) {\n                if (dbzObj instanceof Float) {\n                    return dbzObj;\n                } else if (dbzObj instanceof Double) {\n                    return ((Double) dbzObj).floatValue();\n                } else {\n                    return Float.parseFloat(dbzObj.toString());\n                }\n            }\n        };\n    }\n\n    private static DeserializationRuntimeConverter convertToDate() {\n        return new DeserializationRuntimeConverter() {\n\n            private static final long serialVersionUID = 1L;\n\n            @Override\n            public Object convert(Object dbzObj, Schema schema) {\n                return (int) TemporalConversions.toLocalDate(dbzObj).toEpochDay();\n            }\n        };\n    }\n\n    private static DeserializationRuntimeConverter convertToTime() {\n        return new DeserializationRuntimeConverter() {\n\n            private static final long serialVersionUID = 1L;\n\n            @Override\n            public Object convert(Object dbzObj, Schema schema) {\n                if (dbzObj instanceof Long) {\n                    switch (schema.name()) {\n                        case MicroTime.SCHEMA_NAME:\n                            return (int) ((long) dbzObj / 1000);\n                        case NanoTime.SCHEMA_NAME:\n                            return (int) ((long) dbzObj / 1000_000);\n                    }\n                } else if (dbzObj instanceof Integer) {\n                    return dbzObj;\n                }\n                // get number of milliseconds of the day\n                return TemporalConversions.toLocalTime(dbzObj).toSecondOfDay() * 1000;\n            }\n        };\n    }\n\n    private static DeserializationRuntimeConverter convertToTimestamp(ZoneId serverTimeZone) {\n        return new DeserializationRuntimeConverter() {\n\n            private static final long serialVersionUID = 1L;\n\n            @Override\n            public Object convert(Object dbzObj, Schema schema) {\n                if (dbzObj instanceof Long) {\n                    switch (schema.name()) {\n                        case Timestamp.SCHEMA_NAME:\n                            return TimestampData.fromEpochMillis((Long) dbzObj);\n                        case MicroTimestamp.SCHEMA_NAME:\n                            long micro = (long) dbzObj;\n                            return TimestampData.fromEpochMillis(\n                                    micro / 1000, (int) (micro % 1000 * 1000));\n                        case NanoTimestamp.SCHEMA_NAME:\n                            long nano = (long) dbzObj;\n                            return TimestampData.fromEpochMillis(\n                                    nano / 1000_000, (int) (nano % 1000_000));\n                    }\n                }\n                LocalDateTime localDateTime =\n                        TemporalConversions.toLocalDateTime(dbzObj, serverTimeZone);\n                return TimestampData.fromLocalDateTime(localDateTime);\n            }\n        };\n    }\n\n    private static DeserializationRuntimeConverter convertToLocalTimeZoneTimestamp(\n            ZoneId serverTimeZone) {\n        return new DeserializationRuntimeConverter() {\n\n            private static final long serialVersionUID = 1L;\n\n            @Override\n            public Object convert(Object dbzObj, Schema schema) {\n                if (dbzObj instanceof String) {\n                    String str = (String) dbzObj;\n                    // TIMESTAMP_LTZ type is encoded in string type\n                    Instant instant = Instant.parse(str);\n                    return TimestampData.fromLocalDateTime(\n                            LocalDateTime.ofInstant(instant, serverTimeZone));\n                }\n                throw new IllegalArgumentException(\n                        "Unable to convert to TimestampData from unexpected value \'"\n                                + dbzObj\n                                + "\' of type "\n                                + dbzObj.getClass().getName());\n            }\n        };\n    }\n\n    private static DeserializationRuntimeConverter convertToString() {\n        return new DeserializationRuntimeConverter() {\n\n            private static final long serialVersionUID = 1L;\n\n            @Override\n            public Object convert(Object dbzObj, Schema schema) {\n                return StringData.fromString(dbzObj.toString());\n            }\n        };\n    }\n\n    private static DeserializationRuntimeConverter convertToBinary() {\n        return new DeserializationRuntimeConverter() {\n\n            private static final long serialVersionUID = 1L;\n\n            @Override\n            public Object convert(Object dbzObj, Schema schema) {\n                if (dbzObj instanceof byte[]) {\n                    return dbzObj;\n                } else if (dbzObj instanceof ByteBuffer) {\n                    ByteBuffer byteBuffer = (ByteBuffer) dbzObj;\n                    byte[] bytes = new byte[byteBuffer.remaining()];\n                    byteBuffer.get(bytes);\n                    return bytes;\n                } else {\n                    throw new UnsupportedOperationException(\n                            "Unsupported BYTES value type: " + dbzObj.getClass().getSimpleName());\n                }\n            }\n        };\n    }\n\n    private static DeserializationRuntimeConverter createRowConverter(RowType rowType) {\n        final DeserializationRuntimeConverter[] fieldConverters =\n                rowType.getFields().stream()\n                        .map(RowType.RowField::getType)\n                        .map(CustomDebeziumDeserializer::createNotNullConverter)\n                        .toArray(DeserializationRuntimeConverter[]::new);\n        final String[] fieldNames = rowType.getFieldNames().toArray(new String[0]);\n\n        return new DeserializationRuntimeConverter() {\n\n            private static final long serialVersionUID = 1L;\n\n            @Override\n            public Object convert(Object dbzObj, Schema schema) throws Exception {\n                Struct struct = (Struct) dbzObj;\n                int arity = fieldNames.length;\n                Row row = new Row(arity);\n                for (int i = 0; i < arity; i++) {\n                    String fieldName = fieldNames[i];\n                    Field field = schema.field(fieldName);\n                    if (field == null) {\n                        row.setField(i, null);\n                    } else {\n                        Object fieldValue = struct.getWithoutDefault(fieldName);\n                        Schema fieldSchema = schema.field(fieldName).schema();\n                        Object convertedField =\n                                convertField(fieldConverters[i], fieldValue, fieldSchema);\n                        row.setField(i, convertedField);\n                    }\n                }\n                return row;\n            }\n        };\n    }\n\n    private static Object convertField(\n            DeserializationRuntimeConverter fieldConverter, Object fieldValue, Schema fieldSchema)\n            throws Exception {\n        if (fieldValue == null) {\n            return null;\n        } else {\n            return fieldConverter.convert(fieldValue, fieldSchema);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u4e3b\u7a0b\u5e8f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'/** (@SophiaData) (@date 2022/10/25 10:56). */\npublic class FlinkSqlWDS extends BaseSql {\n    private static final Logger LOG = LoggerFactory.getLogger(FlinkSqlWDS.class);\n\n    public static void main(String[] args) throws Exception {\n        new FlinkSqlWDS().init(args, "flink_sql_job_FlinkSqlWDS", true, true);\n        LOG.info(" init \u65b9\u6cd5\u6b63\u5e38 ");\n    }\n\n    // \u672c\u7a0b\u5e8f\u6d4b\u8bd5 Whole database synchronization \u4e4b MySQL to MySQL \u6355\u6349\u8868\u9700\u5305\u542b\u4e3b\u952e\u5e76\u5b9e\u73b0\u81ea\u52a8\u5efa\u8868\uff0cDDL \u540c\u6b65\u6682\u4e0d\u652f\u6301 \uff01\uff01\uff01\n    // \u53ef\u6839\u636e\u6b64\u6848\u4f8b\u62d3\u5c55\u5176\u4ed6 sink \u7ec4\u4ef6\n    // \u9700\u8981\u6ce8\u610f\u7684\u70b9\uff1a\u4e0d\u540c\u8868\u6570\u636e\u91cf\u4e0d\u4e00\u6837\uff0c\u540c\u6b65\u65f6\u53ef\u4ee5\u9002\u5f53\u653e\u5927\u540c\u6b65\u8d44\u6e90\uff0c\u4f46\u4f1a\u9020\u6210\u8d44\u6e90\u6d6a\u8d39\uff0c\u4e0d\u52a0\u5927\u53ef\u80fd\u53cd\u538b\n    // \u6d4b\u8bd5\u540c\u6b65\u4e94\u5f20\u8868\u767e\u4e07\u6570\u636e\uff0c\u4e00\u5206\u949f\u5de6\u53f3\n    // refer: https://blog.csdn.net/qq_36062467/article/details/128117647\n    // refer \u73af\u5883: Flink 1.15 Flink CDC 2.3.0\n    // \u672c\u7a0b\u5e8f\u73af\u5883\uff1aFlink 1.16 Flink CDC 2.3.0  MySQL 8.0\n    // \u6280\u672f\u70b9\uff1aFlink MySQL CDC Connector\uff0cMySQL Catalog\uff0cFlink Operator\uff0cFlink JDBC\n\n    @Override\n    public void handle(\n            StreamExecutionEnvironment env, StreamTableEnvironment tEnv, ParameterTool params)\n            throws Exception {\n        String databaseName = ParameterUtil.databaseName(params);\n        String tableList = ParameterUtil.tableList(params);\n\n        String connectorWithBody = CreateMySQLSinkTable.connectorWithBody(params);\n\n        // \u6ce8\u518c\u540c\u6b65\u7684\u5e93\u5bf9\u5e94\u7684 Catalog \u8fd9\u91cc\u662f mysql catalog\n\n        MySqlCatalog mySqlCatalog = MySQLUtil.useMysqlCatalog(params);\n\n        List<String> tables;\n\n        // \u5982\u679c\u6574\u5e93\u540c\u6b65\uff0c\u5219\u4ece Catalog \u91cc\u53d6\u6240\u6709\u8868\uff0c\u5426\u5219\u4ece\u6307\u5b9a\u8868\u4e2d\u53d6\u8868\u540d\n        try {\n            if (".*".equals(tableList)) {\n                tables = mySqlCatalog.listTables(databaseName);\n            } else {\n                String[] tableArray = tableList.split(",");\n                tables =\n                        Arrays.stream(tableArray)\n                                .map(table -> table.split("\\\\.")[1])\n                                .collect(Collectors.toList());\n            }\n        } catch (DatabaseNotExistException e) {\n            LOG.error("{} \u5e93\u4e0d\u5b58\u5728", databaseName, e);\n            throw e;\n        }\n        // \u521b\u5efa\u8868\u540d\u548c\u5bf9\u5e94 RowTypeInfo \u6620\u5c04\u7684 Map\n        Map<String, RowTypeInfo> tableTypeInformationMap = Maps.newConcurrentMap();\n        Map<String, DataType[]> tableDataTypesMap = Maps.newConcurrentMap();\n        Map<String, RowType> tableRowTypeMap = Maps.newConcurrentMap();\n        for (String table : tables) {\n            // \u83b7\u53d6  Catalog \u4e2d\u6ce8\u518c\u7684\u8868\n            ObjectPath objectPath = new ObjectPath(databaseName, table);\n            DefaultCatalogTable catalogBaseTable;\n            try {\n                catalogBaseTable = (DefaultCatalogTable) mySqlCatalog.getTable(objectPath);\n            } catch (TableNotExistException e) {\n                LOG.error("{} \u8868\u4e0d\u5b58\u5728", table, e);\n                throw e;\n            }\n            // \u83b7\u53d6\u8868\u7684 Schema\n            assert catalogBaseTable != null;\n            Schema schema = catalogBaseTable.getUnresolvedSchema();\n            // \u83b7\u53d6\u8868\u4e2d\u5b57\u6bb5\u540d\u5217\u8868\n            String[] fieldNames = new String[schema.getColumns().size()];\n            // \u83b7\u53d6DataType\n            DataType[] fieldDataTypes = new DataType[schema.getColumns().size()];\n            LogicalType[] logicalTypes = new LogicalType[schema.getColumns().size()];\n\n            // \u83b7\u53d6\u8868\u5b57\u6bb5\u7c7b\u578b\n            TypeInformation<?>[] fieldTypes = new TypeInformation[schema.getColumns().size()];\n            // \u83b7\u53d6\u8868\u7684\u4e3b\u952e\n            List<String> primaryKeys;\n            try {\n                primaryKeys = schema.getPrimaryKey().get().getColumnNames(); // \u6b64\u5904\u4e0d\u7528 orElse\n            } catch (NullPointerException e) {\n                LOG.error("\u6355\u6349\u8868\u5f02\u5e38: {} \u8868\u6ca1\u6709\u4e3b\u952e\uff01\uff01\uff01 \u5f53\u524d mysql cdc \u5c1a\u4e0d\u652f\u6301\u6355\u6349\u6ca1\u6709\u4e3b\u952e\u7684\u8868\uff01\uff01\uff01", table, e);\n                throw e;\n            }\n\n            for (int i = 0; i < schema.getColumns().size(); i++) {\n                Schema.UnresolvedPhysicalColumn column =\n                        (Schema.UnresolvedPhysicalColumn) schema.getColumns().get(i);\n                fieldNames[i] = column.getName();\n                fieldDataTypes[i] = (DataType) column.getDataType();\n                fieldTypes[i] =\n                        InternalTypeInfo.of(((DataType) column.getDataType()).getLogicalType());\n                logicalTypes[i] = ((DataType) column.getDataType()).getLogicalType();\n            }\n            RowType rowType = RowType.of(logicalTypes, fieldNames);\n            tableRowTypeMap.put(table, rowType);\n\n            // \u7ec4\u88c5 Flink Sink \u8868 DDL sql\n            StringBuilder stmt = new StringBuilder();\n            String sinkTableName =\n                    String.format(params.get("sinkPrefix", "sink_%s"), table); // Sink \u8868\u524d\u7f00\n            stmt.append("create table if not exists ").append(sinkTableName).append("(\\n");\n\n            for (int i = 0; i < fieldNames.length; i++) {\n                String column = fieldNames[i];\n                String fieldDataType = fieldDataTypes[i].toString();\n                stmt.append("\\t`").append(column).append("` ").append(fieldDataType).append(",\\n");\n            }\n\n            stmt.append(\n                    String.format(\n                            "PRIMARY KEY (%s) NOT ENFORCED\\n)",\n                            StringUtils.join(primaryKeys, ",")));\n            String formatJdbcSinkWithBody =\n                    connectorWithBody.replace("${sinkTableName}", sinkTableName);\n            String createSinkTableDdl = stmt + formatJdbcSinkWithBody;\n            // \u521b\u5efa Flink Sink \u8868\n            LOG.info("createSinkTableDdl: \\r {}", createSinkTableDdl);\n            tEnv.executeSql(createSinkTableDdl);\n            tableDataTypesMap.put(table, fieldDataTypes);\n            tableTypeInformationMap.put(table, new RowTypeInfo(fieldTypes, fieldNames));\n\n            // \u4e0b\u6e38 MySQL \u5efa\u8868\u903b\u8f91\n            new CreateMySQLSinkTable()\n                    .createMySQLSinkTable(\n                            params, sinkTableName, fieldNames, fieldDataTypes, primaryKeys);\n        }\n\n        //  MySQL CDC\n        SingleOutputStreamOperator<Tuple2<String, Row>> dataStreamSource =\n                new MySQLCDCSource()\n                        .singleOutputStreamOperator(params, env, tableRowTypeMap); // \u5207\u65ad\u4efb\u52a1\u94fe\n        StatementSet statementSet = tEnv.createStatementSet();\n        // DataStream \u8f6c Table\uff0c\u521b\u5efa\u4e34\u65f6\u89c6\u56fe\uff0c\u63d2\u5165 sink \u8868\n        for (Map.Entry<String, RowTypeInfo> entry : tableTypeInformationMap.entrySet()) {\n            String tableName = entry.getKey();\n            RowTypeInfo rowTypeInfo = entry.getValue();\n            SingleOutputStreamOperator<Row> mapStream =\n                    dataStreamSource\n                            .filter(data -> data.f0.equals(tableName))\n                            .setParallelism(ParameterUtil.setParallelism(params))\n                            .map(data -> data.f1, rowTypeInfo)\n                            .setParallelism(ParameterUtil.setParallelism(params));\n            Table table = tEnv.fromChangelogStream(mapStream);\n            String temporaryViewName = String.format("t_%s", tableName);\n            tEnv.createTemporaryView(temporaryViewName, table);\n            String sinkTableName = String.format("sink_%s", tableName);\n            String insertSql =\n                    String.format(\n                            "insert into %s select * from %s", sinkTableName, temporaryViewName);\n            LOG.info("add insertSql for {}, sql: {}", tableName, insertSql);\n            statementSet.addInsertSql(insertSql);\n        }\n        statementSet.execute();\n    }\n}\n')),(0,r.kt)("h1",{id:"\u6548\u679c"},"\u6548\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/92a0a25d2ef94e4a96c791866f723c5c.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/c9a35c9cd950480bbf05e39461660e1b.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,r.kt)("h1",{id:"\u6700\u540e"},"\u6700\u540e"),(0,r.kt)("p",null,"\u4ee3\u7801\u548c\u6d4b\u8bd5\u53ef\u80fd\u4e0d\u5145\u5206\uff0c\u4ec5\u4f9b\u53c2\u8003\uff0c\u6b22\u8fce\u63d0\u51fa\u610f\u89c1\u3002"),(0,r.kt)("p",null,"\u6b22\u8fce\u8bbf\u95ee\u535a\u5ba2 ",(0,r.kt)("a",{parentName:"p",href:"https://sophiadata.github.io/Bigdata_Blog_Website/learning/overview"},"https://sophiadata.github.io/Bigdata_Blog_Website/learning/overview")))}p.isMDXComponent=!0}}]);