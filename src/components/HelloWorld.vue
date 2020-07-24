<template>
  <div class="hello">
    <div class="problem">
      <h2>
        <span>1. 動詞の現在変化(第1 or 第2)</span>
        <b-badge pill variant="light">{{ verbs_1_2.length }}</b-badge>
      </h2>
      <b-form-group>
        <b-form-checkbox v-model="show_verb_type">
          動詞の変化を表示
        </b-form-checkbox>
      </b-form-group>
      <p>
        <b-badge>{{ verb_1_2['課'] }}課</b-badge>
        <span v-b-popover.hover.top="verb_1_2['意味']">
          {{ verb_1_2['単語'] }}<sup v-if="show_verb_type">{{ verb_1_2['動詞変化'] }}{{ verb_1_2['動詞アクセント移動'] ? '*' : '' }}</sup>
        </span>
        <span v-if="show_verb_type"> {{ verb_1_2['第2歯音変化'] ? '[歯]' : '' }}{{ verb_1_2['第2唇音変化'] ? '[唇]' : '' }}</span>
        <span> の</span>
      </p>
      <p>
        単数1,2,3人称および複数1,2,3人称を答えなさい。
      </p>
      <button class="btn btn-primary" @click="update_verbs_1_2">Shuffle</button>
    </div>

    <div class="problem">
      <h2>
        <span>2. 動詞の現在変化(不規則)</span>
        <b-badge pill variant="light">{{ verbs_0.length }}</b-badge>
      </h2>
      <p>
        <b-badge>{{ verb_0['課'] }}課</b-badge>
        <span v-b-popover.hover.top="verb_0['意味']">{{ verb_0['単語'] }} の</span>
      </p>
      <p>
        単数1,2,3人称および複数1,2,3人称を答えなさい。
      </p>
      <button class="btn btn-primary" @click="update_verbs_0">Shuffle</button>
    </div>

    <div class="problem">
      <h2>
        <span>3. 男性名詞の単数格変化</span>
        <b-badge pill variant="light">{{ nouns_M.length }}</b-badge>
      </h2>
      <b-form-group>
        <b-form-checkbox v-model="show_accent">
          アクセント移動・出没母音を表示
        </b-form-checkbox>
      </b-form-group>
      <p>
        <b-badge>{{ noun_M['課'] }}課</b-badge>
        <span v-b-popover.hover.top="noun_M['意味']">{{ noun_M['単語'] }}</span>
        <span v-if="show_accent"> {{ noun_M['男性名詞出没母音'] ? '[出]' : '' }}{{ noun_M['男性名詞アクセント移動'] ? '[ア]' : '' }}</span>
        <span> の</span>
      </p>
      <ul>
        <li><span class="conj-sei">生格</span></li>
        <li><span class="conj-yo">与格</span></li>
        <li><span class="conj-tai">対格</span></li>
        <li><span class="conj-zou">造格</span></li>
        <li><span class="conj-zen">前置格</span></li>
      </ul>
      <p>を答えなさい。</p>
      <button class="btn btn-primary" @click="update_nouns_M">Shuffle</button>
    </div>

    <div class="problem">
      <h2>
        <span>4. 女性・中性名詞の単数格変化</span>
        <b-badge pill variant="light">{{ nouns_F_N.length }}</b-badge>
      </h2>
      <p>
        <b-badge>{{ noun_F_N['課'] }}課</b-badge>
        <span v-b-popover.hover.top="noun_F_N['意味']">{{ noun_F_N['単語'] }} の</span>
      </p>
      <ul>
        <li><span class="conj-sei">生格</span></li>
        <li><span class="conj-yo">与格</span></li>
        <li><span class="conj-tai">対格</span></li>
        <li><span class="conj-zou">造格</span></li>
        <li><span class="conj-zen">前置格</span></li>
      </ul>
      <p>を答えなさい。</p>
      <button class="btn btn-primary" @click="update_nouns_F_N">Shuffle</button>
    </div>

    <div class="problem">
      <h2>
        <span>5. 第4〜6課の演習問題（和訳・作文除く）</span>
        <b-badge pill variant="light">{{ problems_4_6.length }}</b-badge>
      </h2>
      <p>
        <b-badge>{{ problem_4_6['課'] }}課</b-badge>
        <span>{{ problem_4_6['問題文1'] }}</span>
      </p>
      <p v-if="problem_4_6['例']">（例 {{ problem_4_6['例'] }}）</p>
      <p>{{ problem_4_6['問題文2'] }}</p>
      <button class="btn btn-primary" @click="update_problems_4_6">Shuffle</button>
    </div>

    <div class="problem">
      <h2>
        <span>6. 第7〜9課の演習問題（和訳・作文除く）</span>
        <b-badge pill variant="light">{{ problems_7_9.length }}</b-badge>
      </h2>
      <p>
        <b-badge>{{ problem_7_9['課'] }}課</b-badge>
        <span>{{ problem_7_9['問題文1'] }}</span>
      </p>
      <p v-if="problem_7_9['例']">（例 {{ problem_7_9['例'] }}）</p>
      <p>{{ problem_7_9['問題文2'] }}</p>
      <button class="btn btn-primary" @click="update_problems_7_9">Shuffle</button>
    </div>

    <div class="problem">
      <h2>
        <span>7. 第10〜11課の演習問題（和訳・作文除く）</span>
        <b-badge pill variant="light">{{ problems_10_11.length }}</b-badge>
      </h2>
      <p>
        <b-badge>{{ problem_10_11['課'] }}課</b-badge>
        <span>{{ problem_10_11['問題文1'] }}</span>
      </p>
      <p v-if="problem_10_11['例']">（例 {{ problem_10_11['例'] }}）</p>
      <p>{{ problem_10_11['問題文2'] }}</p>
      <button class="btn btn-primary" @click="update_problems_10_11">Shuffle</button>
    </div>

    <div class="problem">
      <h2>
        <span>8. 1〜6 課の例文・課末テキストから和訳</span>
        <b-badge pill variant="light">{{ sentences_1_6.length }}</b-badge>
      </h2>
      <b-form-group>
        <label>{{ min_chapter_1_6 }} 課から 6 課まで</label>
        <b-form-input
          v-model="min_chapter_1_6"
          type="range"
          min="1"
          max="6"
          step="1"
          ></b-form-input>
      </b-form-group>
      <p>
        <b-badge>{{ sentence_1_6['課'] }}課</b-badge>
        <b-badge>{{ sentence_1_6['種別'] }}</b-badge>
        <span>次の文を和訳しなさい。</span>
      </p>
      <p>
        <span>{{ sentence_1_6['文'] }}</span>
      </p>
      <button class="btn btn-primary" @click="update_sentences_1_6">Shuffle</button>
    </div>

    <div class="problem">
      <h2>
        <span>9. 7〜11 課の例文・課末テキストから和訳</span>
        <b-badge pill variant="light">{{ sentences_7_11.length }}</b-badge>
      </h2>
      <p>
        <b-badge>{{ sentence_7_11['課'] }}課</b-badge>
        <b-badge>{{ sentence_7_11['種別'] }}</b-badge>
        <span>次の文を和訳しなさい。</span>
      </p>
      <p>
        <span>{{ sentence_7_11['文'] }}</span>
      </p>
      <button class="btn btn-primary" @click="update_sentences_7_11">Shuffle</button>
    </div>

    <div class="problem">
      <h2>
        <span>10. 4〜7 課の練習問題の露作文</span>
        <b-badge pill variant="light">{{ comps_4_7.length }}</b-badge>
      </h2>
      <p>
        <b-badge>{{ comp_4_7['課'] }}課</b-badge>
        <span>次の文をロシア語にしなさい。</span>
      </p>
      <p>
        <span>{{ comp_4_7['問題文'] }}</span>
      </p>
      <button class="btn btn-primary" @click="update_comps_4_7">Shuffle</button>
    </div>

    <div class="problem">
      <h2>
        <span>11. 8〜11 課の練習問題の露作文</span>
        <b-badge pill variant="light">{{ comps_8_11.length }}</b-badge>
      </h2>
      <p>
        <b-badge>{{ comp_8_11['課'] }}課</b-badge>
        <span>次の文をロシア語にしなさい。</span>
      </p>
      <p>
        <span>{{ comp_8_11['問題文'] }}</span>
      </p>
      <button class="btn btn-primary" @click="update_comps_8_11">Shuffle</button>
    </div>

    <div class="problem">
      <h2>
        <span>12. 任意箇所の露作文</span>
        <b-badge pill variant="light">0</b-badge>
      </h2>
      <p>
        未対応
      </p>
    </div>
  </div>
</template>

<script>
import words from '../assets/ロシア語期末試験用データセット - 単語.tsv'
import problems_4_6 from '../assets/ロシア語期末試験用データセット - 演習問題4〜6（和訳・作文以外）.tsv'
import problems_7_9 from '../assets/ロシア語期末試験用データセット - 演習問題7〜9（和訳・作文以外）.tsv'
import problems_10_11 from '../assets/ロシア語期末試験用データセット - 演習問題10〜11（和訳・作文以外）.tsv'
import sentences_1_6 from '../assets/ロシア語期末試験用データセット - 例文・課末テキスト1〜6.tsv'
import sentences_7_11 from '../assets/ロシア語期末試験用データセット - 例文・課末テキスト7〜11.tsv'
import comps_4_7 from '../assets/ロシア語期末試験用データセット - 演習問題4〜7（作文）.tsv'
import comps_8_11 from '../assets/ロシア語期末試験用データセット - 演習問題8〜11（作文）.tsv'
import _ from 'lodash'

export default {
  name: 'HelloWorld',

  props: {
  },

  data () {
    return {
      show_verb_type: false,
      show_accent: false,
      min_chapter_1_6: 1,

      verbs_1_2: [],
      verb_1_2: {},
      verbs_0: [],
      verb_0: {},
      nouns_M: [],
      noun_M: {},
      nouns_F_N: [],
      noun_F_N: {},
      problems_4_6: [],
      problem_4_6: {},
      problems_7_9: [],
      problem_7_9: {},
      problems_10_11: [],
      problem_10_11: {},
      sentences_1_6: [],
      sentence_1_6: {},
      sentences_7_11: [],
      sentence_7_11: {},
      comps_4_7: [],
      comp_4_7: {},
      comps_8_11: [],
      comp_8_11: {},
    }
  },

  async mounted () {
    const verbs_1_2 = _.filter(words, line => {
      return (
           line['品詞'] == '動詞'
        && (line['動詞変化'] == 1 || line['動詞変化'] == 2)
      )
    })

    this.verbs_1_2 = verbs_1_2
    this.update_verbs_1_2()

    const verbs_0 = _.filter(words, line => {
      return (
           line['品詞'] == '動詞'
        && line['動詞変化'] == 0
      )
    })

    this.verbs_0 = verbs_0
    this.update_verbs_0()

    const nouns_M = _.filter(words, line => {
      return (
           line['品詞'] == '名詞'
        && line['文法上の性'] == '男性'
      )
    })

    this.nouns_M = nouns_M
    this.update_nouns_M()

    const nouns_F_N = _.filter(words, line => {
      return (
           line['品詞'] == '名詞'
        && (line['文法上の性'] == '女性' || line['文法上の性'] == '中性')
      )
    })

    this.nouns_F_N = nouns_F_N
    this.update_nouns_F_N()

    this.problems_4_6 = problems_4_6
    this.update_problems_4_6()

    this.problems_7_9 = problems_7_9
    this.update_problems_7_9()

    this.problems_10_11 = problems_10_11
    this.update_problems_10_11()

    this.sentences_1_6 = sentences_1_6
    this.update_sentences_1_6()

    this.sentences_7_11 = sentences_7_11
    this.update_sentences_7_11()

    this.comps_4_7 = comps_4_7
    this.update_comps_4_7()

    this.comps_8_11 = comps_8_11
    this.update_comps_8_11()
  },

  methods: {
    update_verbs_1_2 () {
      this.verb_1_2 = _.sample(this.verbs_1_2)
    },

    update_verbs_0 () {
      this.verb_0 = _.sample(this.verbs_0)
    },

    update_nouns_M () {
      this.noun_M = _.sample(this.nouns_M)
    },

    update_nouns_F_N () {
      this.noun_F_N = _.sample(this.nouns_F_N)
    },

    update_problems_4_6 () {
      this.problem_4_6 = _.sample(this.problems_4_6)
    },

    update_problems_7_9 () {
      this.problem_7_9 = _.sample(this.problems_7_9)
    },

    update_problems_10_11 () {
      this.problem_10_11 = _.sample(this.problems_10_11)
    },

    update_sentences_1_6 () {
      const sentences = _.filter(this.sentences_1_6, s => {
        return Number(s['課']) >= Number(this.min_chapter_1_6)
      })
      this.sentence_1_6 = _.sample(sentences)
    },

    update_sentences_7_11 () {
      this.sentence_7_11 = _.sample(this.sentences_7_11)
    },

    update_comps_4_7 () {
      this.comp_4_7 = _.sample(this.comps_4_7)
    },

    update_comps_8_11 () {
      this.comp_8_11 = _.sample(this.comps_8_11)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}

.problem {
  padding: 30px 10px;
  border-bottom: 1px dotted #ccc;

  h2 {
    margin: 10px 0 20px;
    font-size: 1rem;

    span:not(.badge) {
      vertical-align: middle;
      font-size: 1rem;
      font-weight: bold;
    }
  }

  p {
    span {
      vertical-align: middle;
    }
  }

  .badge {
    margin-right: 5px;
  }
}

.conj {
  &-sei {
    color: #229954;
  }

  &-yo {
    color: #D4AC0D;
  }

  &-tai {
    color: #2E86C1;
  }

  &-zen {
    color: #CB4335;
  }

  &-zou {
    color: #884EA0;
  }
}
</style>
