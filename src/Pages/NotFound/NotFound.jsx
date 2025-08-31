import { Divider, Typography } from "@mui/material";
function NotFound() {
  return (
    <div className="not-found">
      <Divider>
        <img
          src="https://img.freepik.com/premium-vector/window-operating-system-error-warning-dialog-window-popup-message-with-system-failure-flat-design_812892-54.jpg"
          className="not-found-img"
          alt="Not Found Page"
        />
        <Typography variant="h4" mt={3} component="h5">
          Error 404
        </Typography>
      </Divider>
    </div>
  );
}
export default NotFound;
