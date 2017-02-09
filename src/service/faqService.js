export function getAll(successCallback, errorCallback) {
    successCallback([{
        title: "支持回收的卡有哪些？",
        context: `<p class="text-danger">
                            <strong>暂时只针对网站公布回收的二手卡进行回收处理；</strong>
                        </p>
                        <p>您可在二手卡回收提交页面查看，如果没有您想要提交的卡，您可以联系客服。</p>
                        <p>后期我们会会逐步的发布更多的卡类回收，详情请参考网站公示。</p>`
    }, {
        title: "游戏卡与话费卡必看问题！",
        context: `<p>游戏卡为自动结算形式回收，用户提交订单后最快几分钟内即可收到回收款。</p>
                        <p class="text-danger">请提交前<strong>认真核对</strong>选择的面额，如实际卡面额大于您选择的面额，<strong>高于部分不予退还！</strong></p>
                        <p><small class="text-muted">如：您选择10元面额但实际为30元卡，则系统认为提交面额为10元，高于10元部分不予退还。</small></p>`
    }])
}