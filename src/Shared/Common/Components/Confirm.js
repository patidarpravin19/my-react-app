export default function ConfirmDialog(props) {
    return (
        <>
            <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" id="mi-modal">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">Confirm</h4>
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={() => props.confirm(true)} class="btn btn-default" id="modal-btn-si">Yes</button>
                            <button type="button" onClick={() => props.confirm(false)} class="btn btn-primary" id="modal-btn-no">No</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}