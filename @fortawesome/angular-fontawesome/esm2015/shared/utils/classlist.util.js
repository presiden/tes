/**
 * Fontawesome class list.
 * Returns classes array by props.
 */
export const faClassList = (props) => {
    const classes = {
        'fa-spin': props.spin,
        'fa-pulse': props.pulse,
        'fa-fw': props.fixedWidth,
        'fa-border': props.border,
        'fa-inverse': props.inverse,
        'fa-layers-counter': props.counter,
        'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
        'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both',
        [`fa-${props.size}`]: props.size !== null,
        [`fa-rotate-${props.rotate}`]: props.rotate !== null,
        [`fa-pull-${props.pull}`]: props.pull !== null,
        [`fa-stack-${props.stackItemSize}`]: props.stackItemSize != null,
    };
    return Object.keys(classes)
        .map((key) => (classes[key] ? key : null))
        .filter((key) => key);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NsaXN0LnV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS8iLCJzb3VyY2VzIjpbInNoYXJlZC91dGlscy9jbGFzc2xpc3QudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7O0dBR0c7QUFDSCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFjLEVBQVksRUFBRTtJQUN0RCxNQUFNLE9BQU8sR0FBRztRQUNkLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSTtRQUNyQixVQUFVLEVBQUUsS0FBSyxDQUFDLEtBQUs7UUFDdkIsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVO1FBQ3pCLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTTtRQUN6QixZQUFZLEVBQUUsS0FBSyxDQUFDLE9BQU87UUFDM0IsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLE9BQU87UUFDbEMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLElBQUksS0FBSyxZQUFZLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNO1FBQzFFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssTUFBTTtRQUN0RSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJO1FBQ3pDLENBQUMsYUFBYSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUk7UUFDcEQsQ0FBQyxXQUFXLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSTtRQUM5QyxDQUFDLFlBQVksS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLGFBQWEsSUFBSSxJQUFJO0tBQ2pFLENBQUM7SUFFRixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3hCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYVByb3BzIH0gZnJvbSAnLi4vbW9kZWxzL3Byb3BzLm1vZGVsJztcblxuLyoqXG4gKiBGb250YXdlc29tZSBjbGFzcyBsaXN0LlxuICogUmV0dXJucyBjbGFzc2VzIGFycmF5IGJ5IHByb3BzLlxuICovXG5leHBvcnQgY29uc3QgZmFDbGFzc0xpc3QgPSAocHJvcHM6IEZhUHJvcHMpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgJ2ZhLXNwaW4nOiBwcm9wcy5zcGluLFxuICAgICdmYS1wdWxzZSc6IHByb3BzLnB1bHNlLFxuICAgICdmYS1mdyc6IHByb3BzLmZpeGVkV2lkdGgsXG4gICAgJ2ZhLWJvcmRlcic6IHByb3BzLmJvcmRlcixcbiAgICAnZmEtaW52ZXJzZSc6IHByb3BzLmludmVyc2UsXG4gICAgJ2ZhLWxheWVycy1jb3VudGVyJzogcHJvcHMuY291bnRlcixcbiAgICAnZmEtZmxpcC1ob3Jpem9udGFsJzogcHJvcHMuZmxpcCA9PT0gJ2hvcml6b250YWwnIHx8IHByb3BzLmZsaXAgPT09ICdib3RoJyxcbiAgICAnZmEtZmxpcC12ZXJ0aWNhbCc6IHByb3BzLmZsaXAgPT09ICd2ZXJ0aWNhbCcgfHwgcHJvcHMuZmxpcCA9PT0gJ2JvdGgnLFxuICAgIFtgZmEtJHtwcm9wcy5zaXplfWBdOiBwcm9wcy5zaXplICE9PSBudWxsLFxuICAgIFtgZmEtcm90YXRlLSR7cHJvcHMucm90YXRlfWBdOiBwcm9wcy5yb3RhdGUgIT09IG51bGwsXG4gICAgW2BmYS1wdWxsLSR7cHJvcHMucHVsbH1gXTogcHJvcHMucHVsbCAhPT0gbnVsbCxcbiAgICBbYGZhLXN0YWNrLSR7cHJvcHMuc3RhY2tJdGVtU2l6ZX1gXTogcHJvcHMuc3RhY2tJdGVtU2l6ZSAhPSBudWxsLFxuICB9O1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhjbGFzc2VzKVxuICAgIC5tYXAoKGtleSkgPT4gKGNsYXNzZXNba2V5XSA/IGtleSA6IG51bGwpKVxuICAgIC5maWx0ZXIoKGtleSkgPT4ga2V5KTtcbn07XG4iXX0=