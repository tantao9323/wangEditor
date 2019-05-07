/*
    horizontalRule-menu
*/
import $ from '../../util/dom-core.js'

// 构造函数
function HorizontalRule(editor) {
    this.editor = editor
    this.$elem = $(
        `<div class="w-e-menu">
            <i class="w-e-icon-page-break"></i>
        </div>`
    )
    this.type = 'click'

    // 当前是否 active 状态
    this._active = false
}

// 原型
HorizontalRule.prototype = {
    constructor: HorizontalRule,

    // 点击事件
    onClick: function (e) {
        // 点击菜单将触发这里
        
        const editor = this.editor
        
        // 执行 insertHorizontalRule 命令
        editor.cmd.do('insertHorizontalRule')

    },

    // 试图改变 active 状态
    tryChangeActive: function (e) {
        const editor = this.editor
        const $elem = this.$elem
        if (editor.cmd.queryCommandState('insertHorizontalRule')) {
            this._active = true
            $elem.addClass('w-e-active')
        } else {
            this._active = false
            $elem.removeClass('w-e-active')
        }
    }
}

export default HorizontalRule