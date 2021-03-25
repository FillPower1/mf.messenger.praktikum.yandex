export default `
{{#each chats}}
    <li
        class="dialog dialogs__item{{#if active}} dialogs__item--active{{/if}}"
         data-created="{{created_by}}"
         id="{{id}}"
    >
        {{#if avatar}}
            <img class="dialog__avatar" src="{{avatar}}" alt="">
        {{else}}
            <span class="dialog__avatar"></span>
        {{/if}}
        <div class="dialog__wrapper">
            <div class="dialog__message">
                <span class="dialog__peer">{{title}}</span>
                <span class="dialog__short-message">
                    {{shortMessage}}
                </span>
            </div>
            <div class="dialog__info">
                <div class="dialog__date">{{time}}</div>
                {{#if amountMessages}}<div class="dialog__badge">{{amountMessages}}</div>{{/if}}
            </div>
        </div>
    </li>
{{/each}}
`
