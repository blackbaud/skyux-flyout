export interface SkyFlyoutIterator {
    previousIteratorIsDisabled: boolean;
    nextIteratorIsDisabled: boolean;
    previousIteratorButtonClick: () => void;
    nextIteratorButtonClick: () => void;
}
