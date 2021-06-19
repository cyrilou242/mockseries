"""CLI interface."""
import argparse


def main() -> None:
    """Runs BLABLA."""
    parser = argparse.ArgumentParser()

    parser.add_argument(
        "--example",
        type=str,
        help="Example argument.",
        default="Lol",
    )

    args = parser.parse_args()

    print(args.example)
