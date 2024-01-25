use highlightio::Highlight;
use log::{debug, error, info, trace, warn};

#[tokio::main]
async fn main() {
    let _ = dotenvy::dotenv();

    let project_id = std::env::var("PROJECT_ID").expect("PROJECT_ID env var not specified.");

    let h = Highlight::init(project_id).expect("Failed to initialize Highlight.io");

    trace!("This is a trace! log. {:?}", "hi!");
    debug!("This is a debug! log. {}", 3 * 3);
    info!("This is an info! log. {}", 2 + 2);
    warn!("This is a warn! log.");
    error!("This is an error! log.");

    h.capture_error(&std::io::Error::new(
        std::io::ErrorKind::Other,
        "This is a dummy error.",
    ));
}
