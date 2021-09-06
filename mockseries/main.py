"""CLI interface."""
import argparse


def main() -> None:
    """CLI not implemented."""
    parser = argparse.ArgumentParser()

    parser.add_argument(
        "--example",
        type=str,
        help="Example argument.",
        default="CLI not implemented.",
    )

    args = parser.parse_args()

    print(args.example)
