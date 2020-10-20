// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "신조어 영역 <p style='text-align:center; font-size:16px; line-height: 5em;'>신조어 모의고사를 통해 신조어에 대해 얼마나 알고 있는지 확인해보세요!</p>",
        "main":    "",
        "results": "<h5>신조어 모의고사 완료!</h5><p>친구와 대결을 통해 누가 신조어계 석유인지 대결해봐요!</p>",
        "level1":  "당신은 신조어계 <mark>LV5. 석유</mark>군요!",
        "level2":  "당신은 신조어계 <mark>LV4. 썩은물</mark>입니다. 석유가 되기 위해 노력하세요!",
        "level3":  "신조어계에 <mark>LV3. 고인물</mark>정도 되십니다.",
        "level4":  "신조어계 <mark>LV2. 청정수와 고인물 사이</mark> 레벨에 있네요.",
        "level5":  "이런! 당신은 신조어계 <mark>LV1. 청정수</mark>에요!" 
    },
    "questions": [
        { // Question 1
            "q": "다음 밑줄 안에 들어갈 대화가 이어지는 낱말을 고르시오.</h3> <br><p><strong>진구:</strong> 영민아, 너 어제 9시에 왜 전화를 안받았어? <br><strong>영민:</strong> 아, 나 그 때 화장실에서 변을 누고 있느라 전화를 못 받았어! 아, 변 이야기가 나와서 하는 <br>얘긴데 우리 집 이번에 휴지를 크리넥스로 바꿨거든? 참나무 향기에 5겹으로 되어 있고, 엠보싱이 약 1000개가량 들어가서 쿠션감이 장난아닌데다가 재활용 재료를 사용해서 친환경적이기까지 해! 너도 한 번 사용해봐! <br> <strong>진구:</strong> 아, 그건 좀 ____같아.</p><br>",
            "a": [
                {"option": "tmt",     "correct": false},
                {"option": "에바",     "correct": false},
                {"option": "tmi",     "correct": true},
                {"option": "더러운 것",     "correct": false} 
            ],
            "correct": "<p><span>정답이에요!</span> 물어본 것 이상으로 굳이 몰라도 될 정보를 말해주었기 때문입니다. </p>",
            "incorrect": "<p><span>틀렸어요! 정답은 ③번 tmi! 물어본 것 이상으로 몰라도 될 정보를 말해주었기 때문입니다.</span> ① <strong>tmt:</strong> 말이 많은 것 이상으로, 굳이 알지 않다고 될 정보들을 말했기 때문에 tmt에는 해당하지 않는다. <br>② <strong>에바:</strong> 왜 에바인지 상세히 설명할 수 있는 함축적 단어로 tmi가 있기 때문이다.<br>④ <strong>더러운 것:</strong> 여기는 신조어 세상이라는 것을 명심해주길 바랍니다.</p>" 
        },
        { // Question 2
            "q": "다음 상황에 맞는 표현이 아닌 것을 고르시오.</h3> <br><p><strong>미희:</strong> 나는 왜 물만 마셔도 살이 찌지? <br><strong>경아:</strong> 그건 탄수화'물'만 먹기 때문이죠.</p><br>",
            "a": [
                {"option": "순살되었다.",    "correct": false},
                {"option": "2천원 비싸졌다",     "correct": false},
                {"option": "팩트폭력",     "correct": false},
                {"option": "찐친이다",     "correct": true}
            ],
            "correct": "<p><span>정답입니다!</span> 본문 어디에도 둘이 친구라는 사실은 나와있지 않습니다.</p>",
            "incorrect": "<p><span>틀렸어요! 정답은 ④번 찐친이다! 본문 어디에도 둘이 친구라는 사실은 없어요.</span> ① - ②: 팩트로 뼈를 맞아서 순살이 되었다는 의미. 순살치킨은 2천원 비싸기 때문에 한 번 더 꼬아서 이야기 하는 말. <br>③: 미희의 고민에 경아는 팩트로 대답했기 때문에 미희의 입장에선 팩트로 폭력을 당했다고 느낍니다.</p>" 
        },
        { // Question 3
            "q": "<u>이 사람</u>은 어떤 사람일까요?</h3> <br><p><strong>이 사람</strong>은 자신의 손이 매우 귀중한 사람으로 손가락을 절대, 함부로 사용하지 않습니다.</p><br>",
            "a": [
                {"option": "엄지공주",             "correct": false},
                {"option": "핑프",           "correct": true},
                {"option": "코가손",          "correct": false},
                {"option": "손가락붕대",          "correct": false} 
            ],
            "correct": "<p><span>정답입니다!</span>'핑거 프린세스'의 줄임말로, 검색하면 알만한 정보를 꼭 다른 이들에게 물어보는 사람을 뜻합니다.</p>",
            "incorrect": "<p><span>틀렸어요! 정답은 ②번 '핑거프린세스'!</span> ① <strong>엄지공주:</strong> 엄지공주는 동화 속 주인공입니다. <br>③ <strong>코가손:</strong> 코끼리 아저씨는 코가 손이지만 사람은 코가 손일 수 없어요.<br>④ <strong>손가락붕대:</strong> 손가락에 붕대를 감을 정도면, 손이 매우 귀중한 사람은 아니었겠죠?</p>" 
        },
        { // Question 4
            "q": "다음 단어와 뜻이 바르게 연결된 것을 고르시오.",
            "a": [
                {"option": "<strong>오놀아놈:</strong> 오늘 놀아도 아프지 않은 놈",    "correct": false},
                {"option": "<strong>발컨:</strong> 발전된 컨셉",     "correct": false},
                {"option": "<strong>미먼:</strong> 미친 먼데이",     "correct": false},
                {"option": "<strong>고스팅:</strong> 갑자기 유령처럼 잠수타는 사람",     "correct": true} 
            ],
            "correct": "<p><span>정답입니다!</span> ① <strong>오놀아놈:</strong> 오 놀 줄 아는 놈이네<br>③ <strong>발컨:</strong> 발로 컨트롤하다<br>④ <strong>미먼:</strong> 미세먼지의 줄임말</p>",
            "incorrect": "<p><span>틀렸어요! 정답은 '④ <strong>고스팅:</strong> 갑자기 유령처럼 잠수타는 사람' 입니다!</span> ① <strong>오놀아놈:</strong> 오 놀 줄 아는 놈이네<br>③ <strong>발컨:</strong> 발로 컨트롤하다<br>④ <strong>미먼:</strong> 미세먼지의 줄임말</p>"
        },
        { // Question 5
            "q": "'오저치고'의 올바른 뜻을 고르시오.",
            "a": [
                {"option": "오져서 치이고 갑니다.",   "correct": false},
                {"option": "오늘 저녁 치킨 고?",          "correct": true},
                {"option": "오늘 저는 치팅데이! 무조건 고칼로리!",  "correct": false},
                {"option": "오, 저건 치즈 고구마?",     "correct": false} 
            ],
            "correct": "<p><span>정답입니다!</span> 오저치고의 뜻을 정확하게 알고 계시는군요?! 맞은 걸 기념해서 오저치고! 콜?</p>",
            "incorrect": "<p><span>틀렸어요. 정답은 ②번 '오늘 저녁 치킨 고?'입니다.</span> 오저치고는 물 건너 갔네요.</p>" 
        },
        { // Question 6
            "q": "아래 상황에서 지희는 무슨 비용을 지출한 것일까요?</h3> <br><p>지희는 지난 한 달간 과제로 스트레스를 많이 받았습니다. 그래서 이번 달은 자신만을 위한 여행<br> 계획을 세워 좋은 숙소, 음식점 등을 전전하며 그동안 쌓였던 스트레스를 해소했습니다. 여행을<br> 마치고 돌아오고 나서야, 숙소와 음식점에서 할인을 받을 수 있다는 사실을 깨달았습니다. 그래서<br> 지희는 기분이 몹시 상했습니다.</p><br>" ,
            "a": [
                {"option": "홧김비용",   "correct": false},
                {"option": "XX비용",          "correct": false},
                {"option": "멍청비용",  "correct": true},
                {"option": "쓸쓸비용",     "correct": false} 
            ],
            "correct": "<p><span>정답입니다! 부주의로 인해 비용이 발생했기 때문에 '③ 멍청비용'!</span>① <strong>홧김비용:</strong> 스트레스 해소를 위해 계획 없던 소비를 지출한 것<br>② <strong>XX비용:</strong> 스트레스를 받지 않았으면 발생하지 않았을 비용<br>④ <strong>쓸쓸비용:</strong> 외로움을 달래기 위해 발생한 비용</p>",
            "incorrect": "<p><span>틀렸어요. 정답은 ③번 부주의로 인한 비용 발생, '멍청비용'입니다.</span> ① <strong>홧김비용:</strong> 스트레스 해소를 위해 계획 없던 소비를 지출한 것<br>② <strong>XX비용:</strong> 스트레스를 받지 않았으면 발생하지 않았을 비용<br>④ <strong>쓸쓸비용:</strong> 외로움을 달래기 위해 발생한 비용</p>" 
        },
        { // Question 7
            "q": "다음은 사랑의 단계를 표현한 말입니다. 옳지 <u>않은</u> 것을 고르시오.</h3>" ,
            "a": [
                {"option": "이귀다: 짝사랑하다",   "correct": false},
                {"option": "삼귀다: 썸타다",          "correct": false},
                {"option": "사귀다: 교제하다",  "correct": false},
                {"option": "오귀다: 결혼하다",     "correct": true} 
            ],
            "correct": "<p><span>정답입니다! </span>④ 오귀다: 헤어지다라는 뜻을 가지고 있습니다.</p>",
            "incorrect": "<p><span>틀렸어요.</span>④ 오귀다: 헤어지다라는 뜻을 가지고 있습니다.</p>" 
        },
        { // Question 8
            "q": "아래 상황에 사용하기 적절한 말로 <u>옳은 것</u>을 고르시오.</h3> <br><p>영수와 철수가 영수 어머니의 차를 타고 함께 학원으로 향하고 있었습니다. <br>그 때, 갑자기 철수가 말합니다. <br><strong>'나, 오늘 시험 백점 맞았다!'</strong><br>영수는 시험을 잘 보지 못했습니다. 영수는 이 상황이 뜬금없기만 합니다. <br>이런 영수의 마음에 적절한 대답으로는 어떤 것이 있을까요?</p><br>" ,
            "a": [
                {"option": "누물보",   "correct": true},
                {"option": "말넘심",          "correct": false},
                {"option": "와우내",  "correct": false},
                {"option": "싫존주의",     "correct": false} 
            ],
            "correct": "<p><span>정답입니다! 누구 물어보신 분이라는 뜻을 가진 '① 누물보'! 뜬금 없는 상황에 적절한 대답입니다.</span>② 말넘심: '말이 너무 심하다'는 뜻을 가지고 있는 줄임말. 지금 상황에 적합하지는 않다.<br>③ 와우내: 감탄사. 지금 상황에는 적합하지 않다.<br>④ 싫존주의: 싫어하는 것도 존중해주자는 의미를 가지고 있지만 지금 상황에는 적절하지 않다.</p>",
            "incorrect": "<p><span>틀렸어요. 정답은 ③번 부주의로 인한 비용 발생, '멍청비용'입니다.</span> ① <strong>홧김비용:</strong> 스트레스 해소를 위해 계획 없던 소비를 지출한 것<br>② <strong>XX비용:</strong> 스트레스를 받지 않았으면 발생하지 않았을 비용<br>④ <strong>쓸쓸비용:</strong> 외로움을 달래기 위해 발생한 비용</p>" 
        },
        { // Question 9
            "q": "혼자와 관련된 단어가 <u>아닌 것</u>을 고르시오.</h3>" ,
            "a": [
                {"option": "일코노미",   "correct": false},
                {"option": "혼바비언",          "correct": false},
                {"option": "셀프바",  "correct": true},
                {"option": "혼코노",     "correct": false} 
            ],
            "correct": "<p><span>정답입니다! 셀프바는 음식점에서 손님이 반찬을 덜어가는 곳으로, 혼자와는 상관이 없죠.</span>① <strong>일코노미:</strong> ‘1인 가구’에 ‘경제’를 뜻하는 영어 단어 ‘이코노미(Economy)’가 합성된 말로, 1인 가구 급증으로 나타난 경제 현상을 가리킨다.<br>② <strong>혼바비언:</strong> 혼밥을 먹는 사람을 뜻한다.<br>④ <strong>혼코노:</strong> 혼자 코인 노래방에 간다는 뜻을 가지고 있다.</p>",
            "incorrect": "<p><span>틀렸어요. 정답은 ③번 '셀프바'입니다. 셀프바는 손님이 반찬을 덜어가는 곳으로, 혼자와는 상관이 없습니다.</span>① <strong>일코노미:</strong> ‘1인 가구’에 ‘경제’를 뜻하는 영어 단어 ‘이코노미(Economy)’가 합성된 말로, 1인 가구 급증으로 나타난 경제 현상을 가리킨다.<br>② <strong>혼바비언:<strong> 혼밥을 먹는 사람을 뜻한다.<br>④ <strong>혼코노:</strong> 혼자 코인 노래방에 간다는 뜻을 가지고 있다.</p>" 
        },
        { // Question 10
            "q": "알맞게 짝지어진 것을 고르시오 다음 ox퀴즈를 풀어보시오.</h3> <br><p>(1)<strong>알부자</strong>는 원래 실속 있는 부자라는 뜻으로 쓰였지만, 최근에는 여러 알바를 병행하며 부족한 <br>학자금을 충당하는 학생들에 대한 반어적 표현으로 쓰인다.<br>(2) <strong>애빼시</strong>는 '애를 빼면 시체'를 줄여 이르는 말로 육아 커뮤니티에서 사용되는 말이다.<br>(3) <strong>힘숨찐</strong>은 '힘을 숨긴 진짜'라는 뜻으로 정체를 숨긴 먼치킨 주인공을 이르는 말이다.</p><br>" ,
            "a": [
                {"option": "0-0-0",   "correct": false},
                {"option": "X-X-X",          "correct": false},
                {"option": "0-X-0",  "correct": false},
                {"option": "0-X-X",     "correct": true} 
            ],
            "correct": "<p><span>정답입니다!</span>(1) <strong>알부자:</strong> 원래 실속 있는 부자라는 뜻으로 쓰였지만, 최근에는 여러 알바를 병행하며 부족한 학자금을 충당하는 학생들에 대한 반어적 표현으로 쓰인다.<br>(2) <strong>애빼시:</strong> ‘애교 빼면 시체’라는 뜻을 가지고 있고, 육아 커뮤니티에서 사용되는 말이 아니다.<br>(3) <strong>힘숨찐:</strong> ‘힘을 숨긴 찐따’라는 뜻을 가지고 있다.</p>",
            "incorrect": "<p><span>틀렸어요. 정답은 ④번 '0-X-X'입니다.</span>(1) <strong>알부자:</strong> 원래 실속 있는 부자라는 뜻으로 쓰였지만, 최근에는 여러 알바를 병행하며 부족한 학자금을 충당하는 학생들에 대한 반어적 표현으로 쓰인다.<br>(2) <strong>애빼시:</strong> ‘애교 빼면 시체’라는 뜻을 가지고 있고, 육아 커뮤니티에서 사용되는 말이 아니다.<br>(3) <strong>힘숨찐:</strong> ‘힘을 숨긴 찐따’라는 뜻을 가지고 있다.</p>" 
        } // no comma here

    ]
};