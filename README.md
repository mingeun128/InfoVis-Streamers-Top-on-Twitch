# InfoVis for Top Streamers on Twitch
Information Visualization on Twitch Top Streamers Dataset

<https://youtu.be/h4gRQVg-iLE>

## What: Data Abstraction

### Dataset name : Top Streamers on Twitch

### Brief description about the dataset

한 해 동안 Twitch 플랫폼에서 개인 방송을 진행한 상위 1000명의 스트리머에 대한 데이터셋

### Abstraction result

Number of rows : 1000 rows

Number of attributes : 11 attributes

File size : 78KB

Dataset Type : Table

Data Types : Item, Attribute

Data Semantics : 상위 1000위 랭킹의 스트리머의 채널 정보

|Attributes|Type|Ordering direction|Semantics|
|---|---|---|---|
|Channel|Categorical| |Key|
|Watch time(Minutes)|Ratio|Sequential|Value|
|Stream time(minutes)|Ratio|Sequential|Value|
|Peak viewers|Ratio|Sequential|Value|
|Average viewers|Ratio|Sequential|Value|
|Followers|Ratio|Sequential|Value|
|Followers gained|Ratio|Sequential|Value|
|Views gained|Ratio|Sequential|Value|
|Partnered|Categorical| |Value|
|Mature|Categorical| |Value|
|Language|Categorical| |Value|

## Why: Task Abstraction

### Task1. 상위 1000명의 스트리머 데이터를 모든 지표별로 양상 확인

X축과 Y축으로 각각 Watch time, Stream time, Peak viewers, Average viewers, Followers, Followers gained, Views gained에서 지표를 선택하여 데이터의 전체적인 형태와 trends에 맞지 않는 데이터를 볼 수 있다.

Actions :  Analyze – Consume - Discover

Targets :  All Data – Trends/Outliers

### Task2. 국가(Language)별 스트리머 수 확인

상위 스트리머의 나라별 수를 알 수 있다.

Actions :  Analyze – Consume – Enjoy

Targets :  Attribute – Distribution

### Task3. 선택한 지표의 상위권 스트리머 Channel 확인

Watch time, Stream time, Peak viewers, Average viewers, Followers, Followers gained, Views gained 중 선택한 지표가 X축이 되어 해당 지표의 상위 5명 Channel을 확인할 수 있게 한다.

Actions :  Analyze – Consume – Discover

Targets :  Attribute – Distribution

### Task4. 선택한 지표의 상위권 스트리머의 모든 정보 확인

Watch time, Stream time, Peak viewers, Average viewers, Followers, Followers gained, Views gained 중 선택한 지표의 수치가 높은 상위 5개의 Channel의 모든 지표 정보를 볼 수 있다.

Actions :  Analyze – Produce - Derive

Targets :  Attribute – Distribution

## How: Vis Idiom Design

### Task1 – Scatter Chart

여러 지표를 X축, Y축으로 선택하여 데이터의 양상을 볼 수 있는 산점도를 구현한다. X축과 Y축으로 선택할 수 있는 지표는 Watch time, Stream time, Peak viewers, Average viewers, Followers, Followers gained, Views gained 가 있고 Circle이 Position으로 나타난다.

Language별로 Circle의 Hue를 다르게 하여 범주형 데이터인 Language를 효과적으로 구별할 수 있게 데이터를 시각화 한다.

또한 특정 Circle을 선택했을 때 Channel 이름과 선택된 X, Y 데이터를 표시하여 개별 데이터의 정보를 볼 수 있게 하여 총 4차원의 데이터를 산점도에 나타낸다.

산점도에서 드래그를 이용하여 범위를 지정할 수 있으며 Task2와 링크되어 있다.


Interface Example)

![image](https://github.com/mingeun128/InfoVis-Top-Streamers-on-Twitch/assets/52354632/fee892e8-4375-4668-81eb-d45272fb4251)


### Task2 – Bar Chart

X축을 Language, Y축을 Count(각 나라의 스트리머 수)로 하는 세로형 Bar Chart를 그려서 Task1에서 드래그로 선택된 데이터의 Language별 스트리머 수를 볼 수 있다.

선택된 데이터에 따라 X, Y축의 범위가 동적으로 변한다.

사각형 mark를 사용하며 Y축의 Count는 양적인 데이터로 사각형의 길이로 표시한다. 


Interface Example)

![image](https://github.com/mingeun128/InfoVis-Top-Streamers-on-Twitch/assets/52354632/be82f961-d623-4576-9808-bdc3ef387164)


### Task3 – Bar Chart

여러가지 지표를 X축으로 선택할 수 있는 Bar Chart를 그린다. Y축은 범주형 데이터인 Channel이다.

Mark는 사각형이며 사각형의 길이와 Hue로 순위를 알 수 있게 하였고 text정보로 X축의 구체적인 수치를 나타낸다.

Task4와 링크되어 있다.


Interface Example)

![image](https://github.com/mingeun128/InfoVis-Top-Streamers-on-Twitch/assets/52354632/6b395fe6-f515-4d2c-9751-05e8d73335f7)


### Task4 – Table

Task3에서 선택된 지표의 구체적인 정보가 table형태로 출력된다. Task3에서 표시된 Channel의 다른 지표 정보들을 볼 수 있게 해준다.


Interface Example)

![image](https://github.com/mingeun128/InfoVis-Top-Streamers-on-Twitch/assets/52354632/2454393c-0c19-4b97-ab20-f20dc0aba0b3)
